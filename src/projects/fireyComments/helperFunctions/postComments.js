import { collection, addDoc } from "firebase/firestore";

export async function postComment(firestore, articleId, comment, userId) {
  if (!comment) {
    throw new Error("Comment text cannot be empty");
  }

  try {
    const commentsRef = collection(firestore, "comments");
    const newComment = {
      articleId,
      comment,
      likes: 0,
      userId,
      createdAt: new Date(),
    };
    await addDoc(commentsRef, newComment);
  } catch (error) {
    console.error("Error posting comment:", error);
  }
}