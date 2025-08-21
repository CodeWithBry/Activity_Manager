import type { Dispatch, MouseEvent, SetStateAction } from "react";
import s from "./Activity.module.css"
import type { Assignments } from "../SubjectContent";


interface ActivityProps {
    task: Assignments | null;
    i: number;
    handleRightClick: (e: MouseEvent<HTMLDivElement>, task: Assignments | null) => void
    setActDesc: Dispatch<SetStateAction<Assignments | null>>
}

function Activity({ task, i, handleRightClick, setActDesc }: ActivityProps) {
    return <div
        className={task?.state ? s.activity : s.pendingActivity}
        onContextMenu={(e) => handleRightClick(e, task)}
        onClick={() => { setActDesc(task) }}>
        <h2>Task {i + 1}</h2>
        <p>{task?.desc}</p>
    </div>
}

export default Activity