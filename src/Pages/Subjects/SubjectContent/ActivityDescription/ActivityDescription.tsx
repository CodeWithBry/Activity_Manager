import s from "./ActivityDescription.module.css"
import { useState, type Dispatch, type SetStateAction } from "react";

interface Assignments {
    desc: string;
    state: boolean;
}

interface Props {
    actDesc: Assignments | null;
    showActDesc: boolean;
    setShowActDesc: Dispatch<SetStateAction<boolean>>;
    setActDesc: Dispatch<SetStateAction<Assignments | null>>;
    setAssignments: Dispatch<SetStateAction<Assignments[]>>;
}


function ActivityDescription({ actDesc, showActDesc, setShowActDesc, setActDesc, setAssignments }: Props) {

    const [showMenu, setShowMenu] = useState<boolean>(false)

    return <>
        <div className={
            showActDesc ? s.showActDesc : s.hideActDesc
        }>
            <div className={showActDesc ? s.showActDescBox : s.hideActDescBox}>
                <h2>
                    Description
                    <div className={s.right}>
                        <div className={s.stateWrapper}>
                            <button className={s.showButton}
                                onClick={() => {
                                    showMenu ? setShowMenu(false) : setShowMenu(true)
                                }}>
                                <i className="fa fa-navicon"></i>
                            </button>
                            <div className={showMenu ? s.choices : s.hideChoices}>
                                <button
                                    className={actDesc?.state ? s.highlight : s.unhighlight}
                                    onClick={() => {
                                        setShowMenu(false)
                                        setAssignments((prev) => prev.map((act) => {
                                            setActDesc({ desc: act.desc, state: true })
                                            if (actDesc?.desc == act.desc) {
                                                return { ...act, state: true }
                                            }
                                            return { ...act }
                                        }))
                                    }}>
                                    Finish
                                </button>
                                <button
                                    className={!actDesc?.state ? s.highlight : s.unhighlight}
                                    onClick={() => {
                                        setShowMenu(false)
                                        setAssignments((prev) => prev.map((act) => {
                                            setActDesc({ desc: act.desc, state: false })
                                            if (actDesc?.desc == act.desc) return { ...act, state: false }
                                            return { ...act }
                                        }))
                                    }}>
                                    Pending
                                </button>
                            </div>
                        </div>
                        <button
                            onClick={() => { setShowActDesc(false), setActDesc(null) }}
                            className={s.hideButton}>X</button>
                    </div>
                </h2>
                <p>{actDesc?.desc}</p>

            </div>
        </div>
    </>
}

export default ActivityDescription