import { db } from "../../utils/firebase"
import { doc, getDoc, collection, getDocs, query, where } from "firebase/firestore"

const collectionName = "items";
export const commons = {
    getMockData: (data, fnCb, id) => new Promise((resolve, reject) => {
        setTimeout(() => {
            let currentData;
            data ? currentData = data : currentData = fnCb(id);
            resolve(currentData);
        }, 2000);
    }),

    getData: () => {
        return new Promise(async (resolve, reject) => {
            const query = collection(db, collectionName);
            const response = await getDocs(query);
            if (response.docs) {
                const items = response.docs.map(doc => {
                    const item = {
                        ...doc.data(),
                        id: doc.id
                    }
                    return item;
                })
                resolve(items);
            } else {
                reject(new Error("No se han podido obtener los datos correctamente"));
            }
        })
    },

    getDataByCategory: (categoryName) => {
        return new Promise(async (resolve, reject) => {
            const queryRef = query(collection(db, collectionName), where("category", "==", categoryName));
            const response = await getDocs(queryRef);
            if (response.docs) {
                const items = response.docs.map(doc => {
                    const item = {
                        ...doc.data(),
                        id: doc.id
                    }
                    return item;
                })
                resolve(items);
            } else {
                reject(new Error("No se han podido obtener los datos correctamente"));
            }
        })
    },

    getItem: (id) => {
        return new Promise(async (resolve, reject) => {
            const query = doc(db, collectionName, id),
                response = await getDoc(query);
            if (response.data()) {
                const product = {
                    ...response.data(),
                    id: response.id
                };
                resolve(product);
            } else {
                reject(new Error("No se han podido obtener los datos correctamente"));
            }
        })
    }
}