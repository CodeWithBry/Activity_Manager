import { Link } from 'react-router-dom';
import type { Subjects } from '../../../Interfaces/interface';
import s from './Subject.module.css'

type Props = {
    subData: Subjects;
}

function Subject({ subData }: Props) {
    
    function hoverSubject(e: any){
        e.currentTarget.style.backgroundImage = `url(${subData.imgPath})`
    }
    function unhoverSubject(e: any) {
        e.currentTarget.style.background = "#DDD9D3"
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
                        <p>Activities:</p>
                        <p className={s.completed}>5 completed</p>
                    </div>
                    <div className={s.bar}></div>
                </div>
                <div className={`${s.projWrapper} ${s.progresses}`}>
                    <div className={s.top}>
                        <p>Activities:</p>
                        <p className={s.completed}>5 completed</p>
                    </div>
                    <div className={s.bar}></div>
                </div>
            </div>

            <Link
                to={'/subjects/' + subData.subjectNameAbbreviation}
                className={s.openSubject}>
                Open Subject
            </Link>
        </div>
    )
}

export default Subject