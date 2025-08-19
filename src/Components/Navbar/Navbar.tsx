import { useContext, useRef, useState } from "react"
import s from "./Navbar.module.css"
import { context } from "../../App"
import { Link } from "react-router-dom"
import type { ContextType } from "../../Interfaces/interface"


function Navbar() {

    const { showLogForm } = useContext(context) as ContextType

    const searchBarRef = useRef<any>(null)
    
    const [showDropDown, setShowDropDown] = useState(true)

    function handleSearching() {

    }

    function handleBellClick() {

    }

    return (
        <div className={!showLogForm ? s.nav : s.navWithLogForm}>
            <div className={s.left}>
                <img src="./icon.jpg" id={s.iconImage} />
                <h1 id={s.title}>12 - MCCARTHY</h1>
            </div>
            <div className={s.right}>
                <div className={s.searchWrapper}>
                    <i className="fa fa-search" id={s.searchLogo}></i>
                    <input type="text" id={s.searchInput} ref={searchBarRef} onKeyDown={(e) => {
                        e.key == "Enter" ? handleSearching() : null
                    }} placeholder="Search..." />
                    <button
                        onClick={() => {
                            handleSearching()
                        }}
                        id={s.searchButton}>
                        Search
                    </button>
                </div>

                <button 
                    id={s.hamburgerButton}
                    onClick={()=>{ showDropDown ? setShowDropDown(false) : setShowDropDown(true) }} >
                    <i className="fa fa-navicon"></i>
                </button>
                <RightButtons handleBellClick={handleBellClick} />
            </div>
            
            <div className={showDropDown ? `${s.dropDown} ${s.showDropDown}` : `${s.dropDown} ${s.hideDropDown}  `}>
                <RightButtons handleBellClick={handleBellClick} />
                <button 
                    onClick={()=>{
                        setShowDropDown(false)
                    }}>
                    Hide Menu
                </button>
            </div>
        </div>
    )
}

function Links() {
    return <>
        <Link to={"/"} className={s.Links}>
            <button className={s.authButts}>
                Home
            </button>
        </Link>
    </>
}

type RightButtonProps = {
    handleBellClick: () => void
}

function RightButtons({ handleBellClick }: RightButtonProps) {

    const { user, userData, showLogForm, setShowLogForm, setShowLogOutPrompt } = useContext(context) as ContextType

    return <>
        {
            !user?.uid ?
                <>
                    {
                        showLogForm ?
                            <Links /> :
                            <>
                                <button id={s.bell}
                                    onClick={() => handleBellClick()}>
                                    <i className="fa fa-bell-o"></i>
                                    <p>Notifications</p>
                                    {
                                        userData?.notifs?.length != 0 ?
                                            <span id={"notifIcon"}>{userData?.notifs <= 99 ? userData?.notifs : "99+"}</span> :
                                            null
                                    }
                                </button>
                                <button
                                    onClick={() => { setShowLogOutPrompt(true) }}>
                                    Sign Out
                                </button>
                            </>
                    }
                </> :
                <>
                    {
                        showLogForm ?
                            <Links /> :
                            <>
                                <Link to={"/register"} id={s.signUpLink} className={s.Links}>
                                    <button className={s.authButts} id={s.signUp} onClick={() => {
                                        setShowLogForm(true)
                                    }}>
                                        Sign Up
                                    </button>
                                </Link>
                                <Link to={"/login"} id={s.logInLink} className={s.Links}>
                                    <button className={s.authButts} id={s.logIn} onClick={() => {
                                        setShowLogForm(true)
                                    }}>
                                        Log In
                                    </button>
                                </Link>
                            </>
                    }
                </>
        }
    </>
}

export default Navbar