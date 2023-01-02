import {
  addDoc,
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./config";
const col = collection(db, "activities");

let data = {};

//No se usa
export const obtenerTareas = async () => {
  const respuesta = await getDocs(col);
  const docs = [];
  respuesta.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id });
  });
  return docs;
};

//No se usa
export const guardaTareaFB = (Tarea) => {
  const respuesta = addDoc(col, Tarea);
  return respuesta;
};

const createActivity = async (date) => {
  const actRef = doc(db, "activities", date);
  setDoc(actRef, {
    activities1: [],
    activities2: [],
    activities3: [],
    activities4: [],
  });
};

export const searchActivity = async (date) => {
  const respuesta = await getDocs(col);
  let docSearch = {};
  respuesta.forEach((doc) => {
    //console.log(doc.data());

    if (doc.id === date) {
      docSearch = { ...doc.data(), id: doc.id };
      data = docSearch;
      return;
    }
  });

  if (Object.entries(data).length === 0) {
    //Creamos un documento en la FB porque no hay ninguno con fecha de hoy
    //Aunque no en el codigo el objeto esta vacio, en FB ya existe el documento.
    createActivity(date);
  }
  return docSearch;
};

export const addActivity = async (el, id) => {
  //console.log(data.activities1);
  //console.log(el);
  if (el.priority === "most-significant") {
    data.activities1 = [...data.activities1, el];
    await updateDoc(doc(col, id), {
      activities1: data.activities1,
    });
  } else if (el.priority === "important") {
    data.activities2 = [...data.activities2, el];
    await updateDoc(doc(col, id), {
      activities2: data.activities2,
    });
  } else if (el.priority === "routine") {
    data.activities3 = [...data.activities3, el];
    await updateDoc(doc(col, id), {
      activities3: data.activities3,
    });
  } else {
    data.activities4 = [...data.activities4, el];
    await updateDoc(doc(col, id), {
      activities4: data.activities4,
    });
  }
};

export const updateStateActivity = async (id, completed, priority) => {
  if (priority === "most-significant") {
    for (let i = 0; i < data.activities1.length; i++) {
      if (data.activities1[i].id === id) {
        data.activities1[i].completed = completed;
        //console.log(data.activities1[i]);
      }
    }

    await updateDoc(doc(col, data.id), {
      activities1: data.activities1,
    });
  } else if (priority === "important") {
    for (let i = 0; i < data.activities2.length; i++) {
      if (data.activities2[i].id === id) {
        data.activities2[i].completed = completed;
        //console.log(data.activities2[i]);
      }
    }

    await updateDoc(doc(col, data.id), {
      activities2: data.activities2,
    });
  } else if (priority === "routine") {
    for (let i = 0; i < data.activities3.length; i++) {
      if (data.activities3[i].id === id) {
        data.activities3[i].completed = completed;
        //console.log(data.activities3[i]);
      }
    }

    await updateDoc(doc(col, data.id), {
      activities3: data.activities3,
    });
  } else {
    for (let i = 0; i < data.activities4.length; i++) {
      if (data.activities4[i].id === id) {
        data.activities4[i].completed = completed;
        //console.log(data.activities4[i]);
      }
    }

    await updateDoc(doc(col, data.id), {
      activities4: data.activities4,
    });
  }
};
