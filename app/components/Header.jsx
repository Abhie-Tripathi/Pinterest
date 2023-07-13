"use client"
import Image from 'next/image'
import React,{useState,useEffect} from 'react'
import {HiSearch,HiBell,HiChat} from "react-icons/hi"
import { signInWithPopup } from 'firebase/auth'
import app, { auth, provider } from "../Shared/firebaseConfig"
import {doc, getFirestore, setDoc} from "firebase/firestore"
import { useRouter } from 'next/navigation'


const Header = () => {
    const router = useRouter()
    const [user, setUser] = useState(null)

    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        setUser(user)
      });
    }, []);  

    const db = getFirestore(app)


    const saveUserInfo = async(response)=>{
      
        // await setDoc(doc(db, "user", response.email), {
        //   userName: response.displayName,
        //   email: response.email,
        //   userImage: response.photoURL
        // })
        console.log("user saved")
        
      }
    

    const signIn = () =>{
      signInWithPopup(auth,provider).then((response)=>saveUserInfo(response))
    }


    const onCreateClick = () =>{
      if(user){
        router.push('/pin-builder')
      }
      else{
        signIn()
      }
    }

  return (
    <div className='flex justify-between gap-3 md:gap-2 items-center p-6'>
        <Image src='/logo.png' onClick={()=>router.push("/")} alt='logo' width={60} height={60} className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'/>
        <button className='bg-black text-white rounded-full p-2 px-4 hidden md:block'>Home</button>
        <button className='font-semibold p-2 px-4' onClick={()=>onCreateClick()}>Create</button>
        <div className='bg-[#e9e9e9] p-3 hidden md:flex gap-3 items-center rounded-full w-full'>
            <HiSearch className='text-[32px] text-gray-500'/> 
            <input type='text' placeholder='Search' className='bg-transparent outline-none'/>
        </div>
        <HiSearch className='text-[25px] text-gray-500 md:hidden'/>
        <HiBell className='text-[25px] md:text-[50px] text-gray-500 cursor-pointer'/>
        <HiChat className='text-[25px] md:text-[50px] text-gray-500 cursor-pointer'/>
        {user? <Image src={user.photoURL} onClick={()=>router.push("/"+ user.email)} alt='user-image' width={55} height={55} className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'/>
        :
        <button className='font-semibold p-2 px-4' onClick={() => signIn()}>Login</button>}
            
    </div>
  )
}

export default Header