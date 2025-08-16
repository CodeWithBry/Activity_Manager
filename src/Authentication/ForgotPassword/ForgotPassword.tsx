import { useContext, useEffect } from "react"
import s from "./ForgotPassword.module.css"
import { context } from "../../App"
import type { ContextType } from "../../Interfaces/interface"


function ForgotPassword() {
  const { pageDetector } = useContext(context) as ContextType

  useEffect(()=>{
    pageDetector(2, null, true)
  },[])

  return (
    <div className={s.forgotPassBox}>
      Forgot Password
    </div>
  )
}

export default ForgotPassword