import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../Api/FireaseConfig";

const useGetData = (collectionName) => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);
  //set data from db
  const collectionRef = collection(db, collectionName);

  //fetch products from db

  useEffect(() => {
    const getData = async () => {
      await onSnapshot(collectionRef, (snapshot) => {
        setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

        setloading(false);
      });
    };

    getData();
  }, []);

  return { data, loading };
};

export default useGetData;