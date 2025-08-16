import s from "./LogIn.module.css"
import { context } from "../../App"
import { useContext, useEffect, useState } from "react"
import type { ContextType } from "../../Interfaces/interface";
import { Link } from "react-router-dom";


function LogIn() {
    const { pageDetector } = useContext(context) as ContextType

    // ********* STATE VARIABLES ***********


    const [username, setUsername] = useState<string | null>("")
    const [password, setPassword] = useState<string | null>("")
    const [hideUsername, setHideUsername] = useState<boolean>(false)
    const [hidePassword, setHidePassword] = useState<boolean>(false)

    useEffect(() => {
        pageDetector(0, null, true)
    }, []);

    return (
        <div className={s.logInWrapper}>
            <div className={s.logInBox}>
                <div className={s.top}>
                    <h1>LOG IN</h1>
                    <span>12-McCarthy</span>
                </div>
                <div className={s.middle}>
                    <label
                        className={username ? `${s.inputBoxes} ${s.inputBoxesFocused}` : `${s.inputBoxes} ${s.inputBoxesNot}`}
                        htmlFor="log-in-username">
                        <input
                            type="text"
                            id="log-in-username"
                            value={username ? username : ""}
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }}
                        />
                        <span className={username ? s.focused : s.unfocus}>Username</span>
                        <i
                            className={hideUsername == true ? `${s.eyeIcon} "fa fa-eye"` : `${s.slashEye} "fa fa-eye-slash"`}
                            onClick={() => {
                                setHideUsername(hideUsername ? false : true)
                            }}
                        ></i>
                    </label>
                    <label
                        className={password ? `${s.inputBoxes} ${s.inputBoxesFocused}` : `${s.inputBoxes} ${s.inputBoxesNot}`}
                        htmlFor="log-in-password">
                        <input
                            type={!hidePassword ? "password" : "type"}
                            id="log-in-password"
                            value={password ? password : ""}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }} />
                        <span className={password ? s.focused : s.unfocus}>Password</span>
                        <i
                            className={hidePassword == true ? `${s.eyeIcon} fa fa-eye` : `${s.slashEye} fa fa-eye-slash`}
                            onClick={() => {
                                setHidePassword(hidePassword ? false : true)
                            }}
                        ></i>
                    </label>
                    <div className={s.bottomLinks}>
                        <Link to={"/forgot_password"} className={s.links}>
                            Forgot Password
                        </Link>
                        <Link to={"/register"} className={s.links}>
                            Create Account
                        </Link>
                    </div>
                    <button
                        onClick={() => {

                        }}
                        id={s.logInButton}>
                        Log In
                    </button>
                </div>
                <div className={s.bottom}>
                    <h4>Sign In With Different Accounts</h4>
                    <div className={s.platforms}>
                        <button className={s.diffAccButt}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80%" height="90%" viewBox="0 0 48 48">
                                <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                            </svg>
                        </button>
                        <button className={s.diffAccButt}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 48 48">
                                <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                            </svg>
                        </button>
                        <button className={s.diffAccButt}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 30 30">
                                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LogIn