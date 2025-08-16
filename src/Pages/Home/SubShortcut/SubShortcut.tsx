import { useEffect, useRef, useState } from 'react'
import s from "./SubShortcut.module.css"
import type { SubjectsType } from '../../../Interfaces/interface'
import subjectData from "../../../../public/Subjects/subjects.json"

function SubShortcut() {
    const [subjects, setSubjects] = useState<null | SubjectsType[]>(subjectData)
    const subjectsRef = useRef<null | any>(null)

    function slideElement(bool: boolean) {
        const e = subjectsRef.current
        const scrollAmount = 270


        bool == false ? e.scrollBy({ left: scrollAmount, behavior: 'smooth' }) : e.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const req = await fetch("/Subjects/subjects.json")
                const data: SubjectsType[] = await req.json();
                setSubjects(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return (
        <div className={s.subjectsWrapper}  >
            <h2>
                <span><i className="fa fa-book"></i>Subject Shortcuts</span>
                <div className={s.buttonWrapper}>
                    <button onClick={() => { slideElement(true) }}>
                        <i className="	fa fa-angle-left"></i>
                    </button>
                    <button onClick={() => { slideElement(false) }}>
                        <i className="	fa fa-angle-right"></i>
                    </button>
                </div>
            </h2>
            <div className={s.subjects} ref={subjectsRef}>
                {
                    subjects?.map((sub) => {
                        return (
                            <div className={s.subjectBox} id={sub.subjectNameAbbreviation} key={sub.subjectName} style={{ borderLeft: `${sub.color} .5rem solid` }}>
                                <div className={s.subPicBox}>
                                    <img src={sub.imgPath} title={sub.subjectName} />
                                </div>

                                <div className={s.contentBox}>
                                    <span>{sub.subjectTeacher} </span>
                                    <span>Semester {sub.subjectSemester}</span>
                                </div>
                                <button>
                                    Go To {sub.subjectNameAbbreviation}
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SubShortcut