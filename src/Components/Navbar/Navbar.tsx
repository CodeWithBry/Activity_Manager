import { useContext, useRef, type Dispatch, type SetStateAction } from "react"
import s from "./Navbar.module.css"
import { context } from "../../App"
import { Link } from "react-router-dom"

type NavbarProps = {
    user: object | any;
    userData: object | any;
    showLogForm: boolean;
    setShowLogForm: Dispatch<SetStateAction<boolean>>;
    authPageDetector: (index: number) => void;
}

function Navbar() {
    const { user, userData, showLogForm, setShowLogForm } = useContext(context) as NavbarProps

    const searchBarRef = useRef<any>(null)

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
                {
                    user?.uid ?
                        <>
                            {
                                showLogForm ?
                                    <Links /> :
                                    <>
                                        <button id={s.bell}
                                            onClick={() => handleBellClick()}>
                                            <i className="fa fa-bell-o"></i>
                                            {
                                                userData?.notifs.length != 0 ?
                                                    <span id={"notifIcon"}>{userData.notifs <= 99 ? userData.notifs : "99+"}</span> :
                                                    null
                                            }
                                        </button>
                                        <button>
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
                                        <Link to={"/register"} id={s.signUpLink}>
                                            <button className={s.authButts} id={s.signUp} onClick={() => {
                                                setShowLogForm(true)
                                            }}>
                                                Sign Up
                                            </button>
                                        </Link>
                                        <Link to={"/login"} id={s.logInLink}>
                                            <button className={s.authButts} id={s.logIn} onClick={() => {
                                                setShowLogForm(true)
                                            }}>
                                                Log In
                                            </button>
                                        </Link>

                                        <button id={s.hamburgerButton} >
                                            <i className="fa fa-navicon"></i>
                                        </button>
                                    </>
                            }
                        </>
                }

            </div>
        </div>
    )
}

function Links() {
    return <>
        <Link to={"/"} className={s.Links}>
            Home
        </Link>
    </>
}

export default Navbar