import s from "./NameInputBox.module.css"
import { type Dispatch, type SetStateAction } from "react"

interface Props {
  proceed: boolean;
  setProceed: Dispatch<SetStateAction<boolean>>;
  firstName: string;
  setFirstName: Dispatch<SetStateAction<string>>;
  middleInitial: string;
  setMiddleInitial: Dispatch<SetStateAction<string>>;
  lastName: string;
  setLastName: Dispatch<SetStateAction<string>>;
}

function NameInputBox({ proceed, setProceed, firstName, setFirstName, middleInitial, setMiddleInitial, lastName, setLastName }: Props) {

  if (proceed) return (
    <>
      <div className={s.signUpWrapper}>
        <div className={s.signUpBox}>
          <button className={s.backButton} onClick={() => setProceed(false)}>
            ←
          </button>
          <div className={s.top}>
            <h1>SIGN UP</h1>
            <span>12-McCarthy</span>
          </div>
          <div className={s.middle}>
            <label
              className={firstName ? `${s.inputBoxes} ${s.inputBoxesFocused}` : `${s.inputBoxes} ${s.inputBoxesNot}`}
              htmlFor="log-in-username">
              <input
                type="text"
                id="log-in-username"
                value={firstName ? firstName : ""}
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
              />
              <span className={firstName ? s.focused : s.unfocus}>Username</span>
            </label>
            <label
              className={middleInitial ? `${s.inputBoxes} ${s.inputBoxesFocused}` : `${s.inputBoxes} ${s.inputBoxesNot}`}
              htmlFor="log-in-middleInitial">
              <input
                type="text"
                id="log-in-password"
                value={middleInitial ? middleInitial : ""}
                onChange={(e) => {
                  setMiddleInitial(e.target.value)
                }} />
              <span className={middleInitial ? s.focused : s.unfocus}>Middle Initial</span>
            </label>
            <label
              className={lastName ? `${s.inputBoxes} ${s.inputBoxesFocused}` : `${s.inputBoxes} ${s.inputBoxesNot}`}
              htmlFor="log-in-confirm-password">
              <input
                type="text"
                id="log-in-confirm-password"
                value={lastName ? lastName : ""}
                onChange={(e) => {
                  setLastName(e.target.value)
                }} />
              <span className={lastName ? s.focused : s.unfocus}>Confirm Password</span>
            </label>
            <button
              onClick={() => {

              }}
              id={s.logInButton}>
              Create Account
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NameInputBox