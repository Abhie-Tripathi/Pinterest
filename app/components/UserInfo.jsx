import React from "react";
import Image from "next/image";
import { auth } from "../Shared/firebaseConfig";
import { useRouter } from "next/navigation";

const UserInfo = ({ userInfo }) => {
  const router = useRouter();
  const userData = auth.currentUser

  const onLogoutClick = () => {
    router.push("/");
    auth.signOut();
  };

  return (
    <div className="flex flex-col items-center">
      <Image
        src={userInfo.userImage}
        alt="useImage"
        width={100}
        height={100}
        className="rounded-full"
      />
      <h2 className="text-[30px] font-semibold">{userInfo.userName}</h2>
      <h2 className="text-gray-400">{userInfo.email}</h2>
      <div className="flex gap-4">
        <button className="bg-gray-200 p-2 px-3 rounded-full font-semibold mt-5">
          Share
        </button>
        {userData.email == userInfo.email && (
          <button
            onClick={() => onLogoutClick()}
            className="bg-gray-200 p-2 px-3 rounded-full font-semibold mt-5"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
