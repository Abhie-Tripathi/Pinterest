"use client"
import { SessionProvider } from "next-auth/react"

const Providers = () => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default Providers