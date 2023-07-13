"use client"
import React from 'react'
import {auth} from "../Shared/firebaseConfig"
import Image from 'next/image';

function UserTag() {
    const userData = auth.currentUser
  return (
    <div className=''>
       {userData?
       <div className='flex gap-3 
       items-center'>
       <Image src={userData.photoURL} 
       alt='userImage'
       width={45}
       height={45}
       className='rounded-full'/>
       <div>
        <h2 className='text-[14px] font-medium'>{userData.displayName}</h2>
        <h2 className='text-[12px]'>{userData.email}</h2>

        </div>
       </div>
       :null}
    </div>
  )
}

export default UserTag
