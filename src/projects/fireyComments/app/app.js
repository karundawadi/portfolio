import React, { useEffect } from "react";
import CommentBox from "../components/commentBox.js";
import Comment from "../components/comment.js";
import { useSelector, useDispatch } from "react-redux";
import { setComments } from "../reducers/commentReducer.js";
import { firestore } from "../reducers/firebaseSDK/app.js";
import { getComments } from "../helperFunctions/getComments.js";
import { timestampToDateString } from "../helperFunctions/getDate.js";

function FireyComments(props) {
  const articleId = props.articleId;
  const allComments = useSelector((state) => state.commentReducer.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        if (!allComments || allComments.length === 0) {
          const newComments = await getComments(firestore);
          dispatch(setComments(newComments));
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchComments();
  }, [allComments, dispatch]);

  return (
    <div>
      <CommentBox articleId={articleId} />
      {allComments && allComments.length > 0 && (
        <>
        {allComments
          .filter((comment) => comment.articleId === articleId)
          .sort((a, b) => b.createdAt - a.createdAt)
          .map((comment, index) => (
            <Comment
              key={index}
              comment={comment.comment}
              name={comment.userId}
              date={timestampToDateString(comment.createdAt)}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default FireyComments;
