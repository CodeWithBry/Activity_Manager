import { useContext, useEffect, useState } from "react"
import s from "./Subjects.module.css"
import type { ContextType, SubjectsType } from "../../Interfaces/interface"
import Subject from "./Subject/Subject"
import subjectData from "../../../public/Subjects/subjects.json"
import { context } from "../../App"

function Subjects() {

  const { pageDetector } = useContext(context) as ContextType
  const [subjects] = useState<SubjectsType[]>(subjectData)


  useEffect(() => {
    pageDetector(null, 1, false)
  }, []);

  return (
    <div className={s.subjectsWrapper}>
      {
        subjects.map((sub) => {
          return <Subject subData={sub} />
        })
      }
    </div>
  )
}

export default Subjects