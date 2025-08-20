import { Link, useNavigate } from 'react-router-dom';
import type { SubjectsType } from '../../../Interfaces/interface';
import s from './Subject.module.css'
type Props = {
    subData: SubjectsType;
}

function Subject({ subData }: Props ) {
    const navigate = useNavigate()

    function handleClick(path: string){
        navigate(path);
    }

    return (
        <div className={`${s.subjectBox}`} >
            <div className={s.background}> <img src={subData.imgPath} /> </div>
            <div className={s.topWrapper}>
                <h1 className={s.subjectName}>{subData.subjectNameAbbreviation}</h1>
                <span className={s.semQuart}>{subData.subjectSemester} Semester: Quarter {subData.quarter}</span>
            </div>

            <div className={s.progressWrapper}>
                <div className={`${s.actWrapper} ${s.progresses}`}>
                    <div className={s.top}>
                        <p>Activities:</p>
                        <p className={s.completed}>5 completed</p>
                    </div>
                    <div className={s.bar}></div>
                </div>
                <div className={`${s.assignWrapper} ${s.progresses}`}>
                    <div className={s.top}>
                        <p>Assignments:</p>
                        <p className={s.completed}>5 completed</p>
                    </div>
                    <div className={s.bar}></div>
                </div>
                <div className={`${s.projWrapper} ${s.progresses}`}>
                    <div className={s.top}>
                        <p>Performance Tasks:</p>
                        <p className={s.completed}>5 completed</p>
                    </div>
                    <div className={s.bar}></div>
                </div>
            </div>

            <Link
                to={'/subjects/' + subData.subjectNameAbbreviation}
                className={s.openSubject}
                onClick={()=>{handleClick(subData.subjectName)}}>
                Open Subject
            </Link>
        </div>
    )
}

export default Subject