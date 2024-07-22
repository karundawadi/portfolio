// components/CommentBox.js
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
import { useAuth } from "../reducers/firebaseSDK/AuthContext";

const CommentBox = ({ articleId }) => {
  const { currentUser } = useAuth();
  const [comment, setComment] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [openLoading, setOpenLoading] = useState(false);
  const [openError, setOpenError] = useState(false);
  const dispatch = useDispatch();

  const [signInWithGoogle, , loading, error] = useSignInWithGoogle(auth);

  const handleChange = (e) => {
    const text = e.target.value;
    setComment(text);
    setCharCount(text.length);
  };

  const handleSend = async () => {
    if (currentUser) {
      try {
        await postComment(firestore, articleId, comment, currentUser.displayName);
        const comments = await getComments(firestore);
        dispatch(setComments(comments));
        setComment("");
        setCharCount(0);
      } catch (error) {
        console.error("Error posting comment:", error);
      }
    }
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
            backgroundColor: currentUser ? "" : "#615f5f",
            opacity: currentUser ? 1 : 0.7,
            paddingTop: "12px",
            paddingBottom: "12px",
            paddingLeft: "4px",
            paddingRight: "4px",
          }}
        >
          <TextField
            multiline
            rows={2}
            fullWidth
            label="Add a comment"
            value={comment}
            onChange={handleChange}
            disabled={!currentUser}
            helperText={`${charCount}/500`}
          />
        </div>
      </div>
      {!currentUser && !loading && !error && (
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
      {currentUser && (
        <IconButton
          onClick={handleSend}
          style={{
            position: "absolute",
            top: "35px",
            right: "12px",
            visibility: currentUser ? "visible" : "hidden",
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
