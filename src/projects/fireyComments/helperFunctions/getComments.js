import { collection, getDocs } from "firebase/firestore";

export async function getComments(firestore) {
  try {
    const commentsRef = collection(firestore, "comments");

    const querySnapshot = await getDocs(commentsRef);

    const comments = [];
    querySnapshot.forEach((doc) => {
      comments.push({ id: doc.id, ...doc.data() });
    });

    return comments;
  } catch (error) {
    console.error("Error getting comments:", error);
    return [];
  }
}