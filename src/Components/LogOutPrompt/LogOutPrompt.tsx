import { useContext } from "react";
import s from "./LogOutPrompt.module.css"
import type { ContextType } from "../../Interfaces/interface";
import { context } from "../../App";

function LogOutPrompt() {
    const { showLogOutPrompt, setShowLogOutPrompt } = useContext(context) as ContextType

    function handleLogOut() {

        try {
            setShowLogOutPrompt(false)
        } catch (error) {
            setShowLogOutPrompt(false)
        }

    }

    if (showLogOutPrompt) return (
        <div 
            className={s.LogOutWrapper}>
            <div className={s.LogOutBox}>
                <h1>Sign Out?</h1>
                <p>Are you going to sign out?</p>
                <div className={s.buttons}>
                    <button
                        onClick={()=>{setShowLogOutPrompt(false)}}>No</button>
                    <button
                        onClick={()=>{ handleLogOut() }}>Yes</button>
                </div>
            </div>
        </div>
    )
}

export default LogOutPrompt