import { Link } from "react-router-dom"
import s from "./SubjectContent.module.css"
import { useState } from "react";
import type { SubjectsType } from "../../../Interfaces/interface";

type Assignments = {
  desc: string;
}

interface Props {
  params: string;
  subjects: SubjectsType[];
}

function SubjectContent({ params, subjects }: Props) {
  const [assignments] = useState<Assignments[]>([
    {
      desc: "21ST CENTURY LITERATURE: Venn Diagram"
    },
    {
      desc: "CSS: Pseudocode - 1: Circle's Area"
    },
    {
      desc: "CSS: Flowchart - 1: Create flowchart of Circle's Area(Canva)"
    },
    {
      desc: "CSS: Simple Activity: C++ Coding"
    },
    {
      desc: "CSS: DLA 3: C++ Lessons"
    }
  ])

  return (
    <div className={s.subConWrapper}>
      <div className={s.topComponent}>
        <Link to={"/subjects"} id={s.backButt}>Back</Link>
        <h1>{subjects.map((sub)=>{ return sub.subjectNameAbbreviation.toLowerCase() == params.toLowerCase() ? sub.subjectNameAbbreviation : "" })}</h1>
        <p>1st Quarter: 1st Sem</p>
      </div>
      <div className={s.contentWrapper}>
        <div className={`${s.subjectActs} ${s.subjectActivities}`}>
          <h1>Activities</h1>
          <div className={s.content}>
            {
              assignments.map((task, i) => {
                return <div className={s.activity}>
                  <h2>Task {i + 1}</h2>
                  <p>{task.desc}</p>
                </div>
              })
            }
          </div>
        </div>
        <div className={`${s.subjectActs} ${s.subjectAssignments}`}>
          <h1>Assignment</h1>
          <div className={s.content}>
            {
              assignments.map((task, i) => {
                return <div className={s.activity}>
                  <h2>Task {i + 1}</h2>
                  <p>{task.desc}</p>
                </div>
              })
            }
          </div>
        </div>
        <div className={`${s.subjectActs} ${s.subjectProjects}`}>
          <h1>Performance Tasks</h1>
          <div className={s.content}>
            {
              assignments.map((task, i) => {
                return <div className={s.activity}>
                  <h2>Task {i + 1}</h2>
                  <p>{task.desc}</p>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubjectContent