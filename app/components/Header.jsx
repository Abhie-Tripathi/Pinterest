"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import {HiSearch,HiBell,HiChat} from "react-icons/hi"
import { useSession, signIn, signOut } from "next-auth/react"
import app from "../Shared/firebaseConfig"
import {doc, getFirestore, setDoc} from "firebase/firestore"
import { useRouter } from 'next/navigation'


const Header = () => {
    const router = useRouter()
    const { data: session } = useSession()
    
    const db = getFirestore(app)

    useEffect(()=>{
      saveUserInfo()
    },[session])

    const saveUserInfo = async()=>{
      if(session?.user){
        await setDoc(doc(db, "user", session.user.email), {
          userName: session.user.name,
          email: session.user.email,
          userImage: session.user.image
        })
      }
    }

  return (
    <div className='flex justify-between gap-3 md:gap-2 items-center p-6'>
        <Image src='/logo.png' alt='logo' width={60} height={60} className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'/>
        <button className='bg-black text-white rounded-full p-2 px-4 hidden md:block'>Home</button>
        <button className='font-semibold p-2 px-4' onClick={()=>router.push('/pin-builder')}>Create</button>
        <div className='bg-[#e9e9e9] p-3 hidden md:flex gap-3 items-center rounded-full w-full'>
            <HiSearch className='text-[32px] text-gray-500'/> 
            <input type='text' placeholder='Search' className='bg-transparent outline-none'/>
        </div>
        <HiSearch className='text-[25px] text-gray-500 md:hidden'/>
        <HiBell className='text-[25px] md:text-[50px] text-gray-500 cursor-pointer'/>
        <HiChat className='text-[25px] md:text-[50px] text-gray-500 cursor-pointer'/>
        {session?.user?.image? <Image src={session.user.image} onClick={()=>router.push("/" + session.user.email)} alt='user-image' width={55} height={55} className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'/>
        : <button className='font-semibold p-2 px-4' onClick={() => signIn()}>Login</button>}
            
    </div>
  )
}

export default Header