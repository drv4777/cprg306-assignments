import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

export const getItems = async (userId) => {
  try {
    const ref = collection(db, "users", userId, "items");
    const docs = await getDocs(ref);
    
    const items = [];
    docs.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    
    return items;
  } catch (error) {
    console.error("Error fetching items:", error);
  }
};

export const addItem = async (userId, item) => {
  try {
    const ref = collection(db, "users", userId, "items");
    const docRef = await addDoc(ref, item);
    return docRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
  }
};