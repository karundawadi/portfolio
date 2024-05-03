import React, { useState } from "react";
import {
  TextField,
  IconButton,
  Typography,
  Button,
  Snackbar,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { postComment } from "../helperFunctions/postComments";
import { auth, firestore } from "../reducers/firebaseSDK/app";
import { useDispatch } from "react-redux";
import { getComments } from "../helperFunctions/getComments.js";
import { setComments } from "../reducers/commentReducer.js";

const CommentBox = (props) => {
  const [comment, setComment] = useState("");
  const [charCount, setCharCount] = useState(0);

  const authState = auth;
  const fireStoreState = firestore;
  const [signInWithGoogle, user, loading, error] =
    useSignInWithGoogle(authState);
  const [openLoading, setOpenLoading] = useState(false);
  const [openError, setOpenError] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const text = e.target.value;
    setComment(text);
    setCharCount(text.length);
  };

  const handleSend = () => {
    postComment(
      fireStoreState,
      props.articleId,
      comment,
      user?.user?.displayName
    );
    getComments(firestore).then((comments) => {
      dispatch(setComments(comments));
    }).catch((error) => {
      console.error(error);
    });
    setComment("");
    setCharCount(0);
  };

  const handleSignInWithGoogle = async () => {
    try {
      setOpenLoading(true);
      await signInWithGoogle();
      setOpenLoading(false);
    } catch (error) {
      setOpenLoading(false);
      setOpenError(true);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <Snackbar
        open={openLoading}
        autoHideDuration={3000}
        onClose={() => setOpenLoading(false)}
        message="Waiting for sign in with Google ..."
        anchorOrigin={{ vertical: "center", horizontal: "center" }}
      />
      <Snackbar
        open={openError}
        autoHideDuration={3000}
        onClose={() => setOpenError(false)}
        message={`Error: ${error?.message}`}
        anchorOrigin={{ vertical: "center", horizontal: "center" }}
      />
      <div style={{ maxHeight: "3%", paddingTop: "12px", paddingBottom: "12px" }}>
        <div
          style={{
            backgroundColor: user ? "" : "#615f5f",
            opacity: user ? 1 : 0.7,
            paddingTop: "12px", paddingBottom: "12px",
            paddingLeft: "4px", paddingRight: "4px"
          }}
        >
          <TextField
            multiline
            rows={2}
            fullWidth
            label="Add a comment"
            value={comment}
            onChange={(e) => handleChange(e)}
            disabled={!user}
            helperText={`${charCount}/500`}
          />
        </div>
      </div>
      {!user && !loading && !error && (
        <Button
          variant="contained"
          disabled={loading || error}
          onClick={handleSignInWithGoogle}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            padding: "8px",
            backgroundColor: "info",
          }}
        >
          <Typography align="center" style={{ textTransform: "none" }}>
            Sign in with Google to comment
          </Typography>
        </Button>
      )}
      {user && (
        <IconButton
          onClick={handleSend}
          style={{
            position: "absolute",
            top: "35px",
            right: "12px",
            visibility: user ? "visible" : "hidden",
            zIndex: 1,
          }}
        >
          <SendIcon color="secondary" />
        </IconButton>
      )}
    </div>
  );
};

export default CommentBox;
