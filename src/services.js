import { doc, getDoc, collection, getDocs, getFirestore, query, where, addDoc } from 'firebase/firestore';
import Swal from "sweetalert2";


export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        const db = getFirestore();

        const itemDoc = doc(db, "items", id);

        getDoc(itemDoc)
            .then((doc) => {
                if (doc.exists()) {
                    resolve({ id: doc.id, ...doc.data() });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Producto inexistente.',
                        text: 'Regresa al inicio',
                        confirmButtonText: 'Aceptar',
                    })
                    resolve(null);
                }
            })
            .catch((error) => {
                reject(error);
            })
    });
}

export const getProducts = (category) => {
    return new Promise((resolve, reject) => {
        const db = getFirestore();

        const itemCollection = collection(db, "items");

        let q
        if (category) {
            q = query(itemCollection, where("category", "==", category));
        } else {
            q = query(itemCollection);
        }

        getDocs(q)
            .then((querySnapshot) => {
                const products = querySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });
                resolve(products);
            })
            .catch((error) => {
                reject(error);
            })
    })
}

export const createOrder = (orden) => {
    const db = getFirestore();

    const ordersCollection = collection(db, "orders");

    return addDoc(ordersCollection, orden);
}