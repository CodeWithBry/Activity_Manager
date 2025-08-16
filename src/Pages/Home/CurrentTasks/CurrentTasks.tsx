import { useState } from "react";
import s from "./CurrentTasks.module.css"
type Activities = {
  desc: string;
}
type Assignments = {
  desc: string;
}
type Exams = {
  desc: string;
}

function CurrentTasks() {
  const [activities] = useState<Activities[]>([
    {
      desc: "CSS: Pseudocode - 1: Circle's Perimeter"
    },
    {
      desc: "CSS: Flowchart - 1: Create flowchart of Circle's Perimeter(Canva)"
    },
    {
      desc: "CSS: Simple Activity: C++ Coding"
    }
  ])
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
  const [exams] = useState<Exams[]>([
    {
      desc: "UCSP: SOCIETAL ISSUES"
    }
  ])

  return (
    <div className={s.currentWrapper} >
      <h2> <i className="	fa fa-pencil"></i> Current Tasks</h2>
      <div className={s.currentBox}>
        {
          activities.length != 0 ?
            <div className={s.curActBox}>
              <h3>
                Current Activities
              </h3>
              <ul className={s.wrapper}>
                {activities.map((act) => {
                  return <li key={Math.random() * 1}> <i className="fa fa-thumb-tack"></i> {act.desc}</li>
                })}
              </ul>
            </div> :
            null
        }


        {
          assignments.length != 0 ?
            <div className={s.curAssBox}>
              <h3>
                Current Assignments
              </h3>
              <ul className={s.wrapper}>
                {assignments.map((act) => {
                  return <li key={Math.random() * 1}> <i className="fa fa-thumb-tack"></i> {act.desc}</li>
                })}
              </ul>
            </div> :
            null
        }

        {
          exams.length != 0 ?
            <div className={s.curExamsBox}>
              <h3>
                Current Projects
              </h3>
              <ul className={s.wrapper}>
                {exams.map((act) => {
                  return <li key={Math.random() * 1}> <i className="fa fa-thumb-tack"></i> {act.desc}</li>
                })}
              </ul>
            </div> :
            null
        }
      </div>
    </div>
  )
}

export default CurrentTasks