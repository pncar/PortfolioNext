import { doc, collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const PROJECTS_COLLECTION = "projects";
const EXPERIENCE = "experience";

export const getProjects = async () => {
  const snapshot = await getDocs(collection(db, PROJECTS_COLLECTION));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getProjectById = async (id:string) => {
  const ref = doc(db, "projects", id);
  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...snapshot.data() };
};

export const getExperience = async () => {
  const snapshot = await getDocs(collection(db, EXPERIENCE));
  return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
}

