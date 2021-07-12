import { AdminContext } from "../context/adminContext"
import { useState } from "react"
export function AdminContainer({ children }) {
  const [isAdmin, setIsAdmin] = useState(false)
  return (
    <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AdminContext.Provider>
  )
}
