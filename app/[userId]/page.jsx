"use client";
import React, { useEffect, useState } from "react";
import app from "../Shared/firebaseConfig";
import { getDoc, doc, getFirestore, collection, query, where ,getDocs } from "firebase/firestore";
import UserInfo from "../components/UserInfo"
import PinList from "../components/Pins/PinList"


const Profile = ({ params }) => {
  const db = getFirestore(app);
  const [userInfo, setuserInfo] = useState()
  const [listOfPins, setListOfPins] = useState([])

  useEffect(() => {
    console.log(params.userId.replace("%40", "@"));
    if(params){
        getUserInfo(params.userId.replace("%40", "@"))
    }
  }, [params]);

  const getUserInfo = async (email) => {
    const docRef = doc(db, "user", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setuserInfo(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    if(userInfo) getUserPins();
  }, [userInfo]);

  const getUserPins = async () => {
    const q = query(
      collection(db, "pinterest-post"),
      where("email", "==", userInfo.email)
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setListOfPins((prevList)=>[...prevList,doc.data()])
    });
  };





  return <div>
    {userInfo && <>
    <UserInfo userInfo={userInfo}/>
    <PinList listOfPins={listOfPins}/>
    </>
    }
  </div>;
};

export default Profile;
