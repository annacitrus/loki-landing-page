import { collection, addDoc, serverTimestamp, query, where, getDocs, limit, orderBy } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";
import { db } from "./firebase.js";

export async function addToWaitlist(email) {
  try {
    const docRef = await addDoc(collection(db, "waitlist"), {
      email: email,
      timestamp: serverTimestamp() // Records the exact server-side time of the write
    });
    console.log("Successfully added to waitlist! Document ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding email to waitlist:", error);
    throw error;
  }
}
