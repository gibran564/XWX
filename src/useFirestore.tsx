import { useState } from 'react';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc as firestoreDoc, 
  deleteDoc,
  DocumentData,
  QueryDocumentSnapshot,
} from 'firebase/firestore';
import db from './app/firebaseConfig'; 

type UseFirestoreReturn = {
  docs: QueryDocumentSnapshot<DocumentData>[];
  createDoc: (newDoc: DocumentData) => Promise<void>;
  readDocs: () => Promise<void>;
  updateDoc: (id: string, updatedDoc: DocumentData) => Promise<void>;
  deleteDocument: (id: string) => Promise<void>;
};

const useFirestore = (collectionName: string): UseFirestoreReturn => {
  const [docs, setDocs] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);

  const createDoc = async (newDoc: DocumentData): Promise<void> => {
    try {
      const docRef = await addDoc(collection(db, collectionName), newDoc);
      console.log("Documento creado con ID: ", docRef.id);
    } catch (error) {
      console.error("Error al agregar documento: ", error);
    }
  };

  const readDocs = async (): Promise<void> => {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const docsArray: QueryDocumentSnapshot<DocumentData>[] = [];
    querySnapshot.forEach((doc) => {
      docsArray.push(doc);
    });
    setDocs(docsArray);
  };

  const updateDoc = async (id: string, updatedDoc: DocumentData): Promise<void> => {
    try {
      const docRef = firestoreDoc(db, collectionName, id);
      await updateDoc(id, updatedDoc);
      console.log("Documento actualizado con ID: ", id);
    } catch (error) {
      console.error("Error al actualizar documento: ", error);
    }
};


const deleteDocument = async (id: string): Promise<void> => {
    try {
      const docRef = firestoreDoc(db, collectionName, id);
      await deleteDoc(docRef);
      console.log("Documento eliminado con ID: ", id);
    } catch (error) {
      console.error("Error al eliminar documento: ", error);
    }
};



  return { docs, createDoc, readDocs, updateDoc, deleteDocument};
};

export default useFirestore;
