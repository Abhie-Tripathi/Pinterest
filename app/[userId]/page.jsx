"use client";
import React, { useEffect, useState } from "react";
import app from "../Shared/firebaseConfig";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import UserInfo from "../components/UserInfo"

const Profile = ({ params }) => {
  const db = getFirestore(app);
  const [userInfo, setuserInfo] = useState()

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
  return <div>
    {userInfo && <UserInfo userInfo={userInfo}/>}
    
  </div>;
};

export default Profile;
