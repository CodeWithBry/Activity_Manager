import { useContext, useEffect, useState } from "react"
import s from "./Subjects.module.css"
import type { ContextType, Subjects } from "../../Interfaces/interface"
import Subject from "./Subject/Subject"
import { context } from "../../App"

function Subjects() {

  const { pageDetector } = useContext(context) as ContextType
  const [subjects, setSubjects] = useState<Subjects[]>([])

  useEffect(() => {
    async function fetchData() {
      const req = await fetch("/Subjects/subjects.json")
      const res = await req.json()
      setSubjects(res)
    }

    if (subjects.length == 0) fetchData()
  }, [])

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