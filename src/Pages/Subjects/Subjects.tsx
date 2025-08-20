import { useContext, useEffect, useState } from "react"
import s from "./Subjects.module.css"
import type { ContextType, SubjectsType } from "../../Interfaces/interface"
import Subject from "./Subject/Subject"
import subjectData from "../../../public/Subjects/subjects.json"
import { context } from "../../App"
import SubjectContent from "./SubjectContent/SubjectContent"
import { useParams } from "react-router-dom"


function Subjects() {

  const { pageDetector } = useContext(context) as ContextType
  const { subjectName } = useParams<{ subjectName: string }>()
  const [subjects] = useState<SubjectsType[]>(subjectData)

  useEffect(() => {
    pageDetector(null, 1, false)
  }, []);



  return (
    <>
      {
        subjectName ?
          <SubjectContent params={subjectName} subjects={subjects}/> :
          <div className={s.subjectsWrapper}>
            {
              subjects.map((sub) => {
                return <Subject
                  subData={sub} />
              })
            }
          </div>
      }
    </>
  )
}

export default Subjects