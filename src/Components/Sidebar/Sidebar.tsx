import { useContext, type Dispatch, type SetStateAction } from "react"
import { context } from "../../App";
import { useNavigate } from "react-router-dom";
import { type Tab } from "../../Interfaces/interface";
import s from "./Sidebar.module.css"

type Props = {
    tabs: Tab[];
    setTabs: Dispatch<SetStateAction<Tab[]>>;
    setPathTo: Dispatch<SetStateAction<string>>;
    showSideBar: boolean;
    setShowSideBar: Dispatch<SetStateAction<boolean>>;
    showLogForm: boolean;
    setShowLogForm: Dispatch<SetStateAction<boolean>>;
}

function Sidebar() {
    const { tabs, setTabs, setPathTo, showSideBar, setShowSideBar, showLogForm } = useContext(context) as Props
    const navigate = useNavigate()

    if (!showLogForm) return (
        <div className={showSideBar ? `${s.sideBarWrapper} ` : `${s.sideBarWrapper} ${s.hideSidebar}`}>
            <ul className={s.linkWrapper}>
                <button
                    className={s.simplifySidebar}
                    onClick={() => {
                        showSideBar ? setShowSideBar(false) : setShowSideBar(true)
                    }}>
                    <i className={showSideBar ? `fa fa-chevron-left` : `fa fa-chevron-right`}></i>
                    <p>Hide</p>
                </button>
                {tabs?.map((tab) => {
                    return (
                        <li key={tab.keyId} className={tab.focus ? `${s.active} ${s.link}` : `${s.link}`} title={tab.pageName}
                            onClick={() => {
                                setTabs(prev => prev.map((t) => {
                                    return tab.pageName == t.pageName ? { ...t, focus: true } : { ...t, focus: false }
                                }))
                                setPathTo(tab.path)
                                navigate(tab.path)
                            }}>
                            <i className={tab.icon}></i>
                            <p>{tab.pageName}</p>
                        </li>
                    )
                })}
            </ul>
        </div >
    )
}

export default Sidebar