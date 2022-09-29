import firebaseConfig from "./config/config";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  orderBy,
  getDocs,
  getDoc,
  updateDoc,
  query
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
// Initialize Firebase

class Firebase {
  constructor() {
    const app = initializeApp(firebaseConfig);

    this.getDb = getFirestore(app);
    this.getAuth = getAuth(app);
    this.getStorage = getStorage(app);
  }
  //crear usuario
  registrar = async (nombre, email, password) => {
    const auth = this.getAuth;

    const nuevoUsuario = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    return await updateProfile(nuevoUsuario.user, {
      displayName: nombre,
    });
  };
  //iniciar sesion
  iniciar = async (email, password) => {
    const auth = this.getAuth;

    return await signInWithEmailAndPassword(auth, email, password);
  };

  //iniciar sesion

  cerrar = async () => {
    const auth = this.getAuth;

    return await signOut(auth);
  };

  guardarImagen = async (reference) => {
    const storage = this.getStorage;

    const imageRef = await ref(storage, `productos/${v4()}`);

    if (reference == null) return;

    await uploadBytes(imageRef, reference).then(() => {
      alert("Image Uploaded");
    });
    const url = await getDownloadURL(imageRef);
    return url;
  };

  guardarProducto = async (producto) => {
    const db = this.getDb;
    const nuevoProducto = await doc(collection(db, "productos"));
    await setDoc(nuevoProducto, producto);
  };

  traerProductos = async (valor) => {
    const db = this.getDb;

    const collectionRef = collection(db, "productos");
    const q = query(collectionRef, orderBy(valor, "desc"));
    const Snapshot = await getDocs(q);
    const docs = [];
    Snapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });

    return docs;
  };
  traerProductoId = async (id) => {
    const db = this.getDb;

    const productRef = doc(db, "productos", id);
    const producto = await getDoc(productRef)
    .then((doc)=>{
      const res = (doc.data());
      return res
    })
    return producto
  };

  ActualizarProductoId = async (dato ,id ,dato2) => {
    const db = this.getDb;

    const productRef = doc(db, "productos", id);
    const data = {
      votos: dato,
      haVotado: dato2
    }

    await updateDoc(productRef, data)
  };
  ActualizarComentarios = async (dato ,id) => {
    const db = this.getDb;

    const productRef = doc(db, "productos", id);
    const data = {
      comentarios: dato,
    }

    await updateDoc(productRef, data)
  };

}

const firebase = new Firebase();

export default firebase;
