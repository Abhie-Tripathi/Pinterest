"use client"
import React,{useEffect,useState} from "react"
import app from "./Shared/firebaseConfig";
import { getFirestore, collection, query, getDocs } from "firebase/firestore";
import PinList from "./components/pins/PinList";

export default function Home() {

  const [listOfPins, setListOfPins] = useState([])

  const db = getFirestore(app)

  useEffect(() => {
    getUserPins();
  }, []);

  const getUserPins = async () => {
    const q = query(
      collection(db, "pinterest-post")
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setListOfPins((prevList)=>[...prevList,doc.data()])
    });
  };
  return (
    <>
    <PinList listOfPins={listOfPins} />
    </>
  )
}
