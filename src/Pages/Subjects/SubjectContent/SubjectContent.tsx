import { Link } from "react-router-dom"
import s from "./SubjectContent.module.css"
import { useRef, useState, type MouseEvent } from "react";
import type { SubjectsType } from "../../../Interfaces/interface";
import ActivityDescription from "./ActivityDescription/ActivityDescription";
import Activity from "./Activity/Activity";

export interface Assignments {
  desc: string;
  state: boolean;
}

interface Quarter {
  quarter: number;
  sem: number;
}

interface MenuPosition {
  x: number;
  y: number;
}

interface Props {
  params: string;
  subjects: SubjectsType[];
}

function SubjectContent({ params, subjects }: Props) {
  const menu = useRef<HTMLDivElement | null>(null)

  const [assignments, setAssignments] = useState<Assignments[]>([
    {
      desc: "21ST CENTURY LITERATURE: Venn Diagram",
      state: false
    },
    {
      desc: "CSS: Pseudocode - 1: Circle's Area",
      state: true
    },
    {
      desc: "CSS: Flowchart - 1: Create flowchart of Circle's Area(Canva)",
      state: true
    },
    {
      desc: "CSS: Simple Activity: C++ Coding",
      state: true
    },
    {
      desc: "CSS: DLA 3: C++ Lessons",
      state: true
    }
  ])

  const [showChoices, setShowChoices] = useState<boolean>(false)
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [showActDesc, setShowActDesc] = useState<boolean>(false)


  const [actDesc, setActDesc] = useState<Assignments | null>(null)
  const [menuPos, setMenuPos] = useState<MenuPosition>({ x: 0, y: 0 })
  const [quarterChoices, setQuarterChoices] = useState<Quarter[]>([
    { quarter: 1, sem: 1 },
    { quarter: 2, sem: 1 },
    { quarter: 3, sem: 2 },
    { quarter: 4, sem: 2 },
  ])
  const [selectedChoice, setSelectedChoice] = useState<number>(0)

  function handleRightClick(e: MouseEvent<HTMLDivElement>, task: Assignments | null) {
    e.preventDefault()
    setShowMenu(true)
    task ? setActDesc(task) : null
    setMenuPos({ x: e.clientX, y: e.clientY })
  }

  // COMPONENTS

  function MenuBox() {
    function handleClick(num: number) {
      switch (num) {
        case 1:
          setShowActDesc(true)
          break;
        case 2:

          break;
        case 3:
          setAssignments((prev) => prev.map((act) => {
            if (actDesc?.desc == act.desc) return { ...act, state: false }
            return { ...act }
          }))
          break;
        case 4:
          setAssignments((prev) => prev.map((act) => {
            if (actDesc?.desc == act.desc) return { ...act, state: true }
            return { ...act }
          }))
          break;
      }
    }

    return <div
      ref={menu}
      onClick={(e) => handleRightClick(e, null)}
      className={showMenu ? s.showMenu : s.hideMenu}
      style={{
        left: menuPos.x,
        top: menuPos.y
      }}
    >
      <button
        onClick={() => handleClick(1)}>
        <i className="fa fa-envelope-open"></i>
        Open
      </button>
      <button
        onClick={() => handleClick(2)}>
        <i className="fa fa-hand-o-up"></i>
        Select
      </button>
      <button
        onClick={() => handleClick(3)}>
        <i className="	fa fa-edit"></i>
        Mark As Pending
      </button>
      <button
        onClick={() => handleClick(4)}>
        <i className="	fa fa-edit"></i>
        Mark As Finish
      </button>
    </div>
  }

  return (
    <div className={s.subConWrapper} onClick={() => { setShowMenu(false) }}>
      <MenuBox />
      <ActivityDescription
        actDesc={actDesc}
        showActDesc={showActDesc}
        setShowActDesc={setShowActDesc}
        setActDesc={setActDesc}
        setAssignments={setAssignments} />
      <div className={s.topComponent}>
        <Link to={"/subjects"} id={s.backButt}>Back</Link>
        <h1>{subjects.map((sub) => { return sub.subjectNameAbbreviation.toLowerCase() == params.toLowerCase() ? sub.subjectNameAbbreviation : "" })}</h1>
        <p
          className={s.selectedChoice}
          onPointerLeave={() => {
            setShowChoices(false)
          }}>
          <button
            onClick={() => {
              showChoices ? setShowChoices(false) : setShowChoices(true)
            }}>
            {quarterChoices[selectedChoice].sem}st Sem: {selectedChoice + 1}st Quarter
            <i className={showChoices ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
          </button>

          <div
            className={showChoices ?
              `${s.choicesBox} ${s.showChoices}` :
              `${s.choicesBox} ${s.hideChoices}`}>
            {
              quarterChoices.map((choice, index) => {
                return <button
                  onClick={() => {
                    setQuarterChoices((prev: Quarter[]) => prev.map((cho, i) => {
                      if (index == i) setSelectedChoice(cho.quarter - 1)
                      return cho
                    }))
                    setShowChoices(false)
                  }}>
                  {choice.sem}st Sem: {choice.quarter}st Quarter
                </button>
              })
            }
          </div>
        </p>
      </div>
      <div className={s.contentWrapper}>
        <div className={`${s.subjectActs} ${s.subjectActivities}`}>
          <h1> <i className="	fa fa-leanpub"></i> Activities</h1>
          <div className={s.content}>
            {
              assignments.map((task, i) => {
                return <Activity
                  task={task}
                  i={i}
                  handleRightClick={handleRightClick}
                  setActDesc={setActDesc} />
              })
            }
          </div>
        </div>
        <div className={`${s.subjectActs} ${s.subjectAssignments}`}>
          <h1><i className="	fa fa-leanpub"></i> Assignment</h1>
          <div className={s.content}>
            {
              assignments.map((task, i) => {
                return <Activity
                  task={task}
                  i={i}
                  handleRightClick={handleRightClick}
                  setActDesc={setActDesc} />
              })
            }
          </div>
        </div>
        <div className={`${s.subjectActs} ${s.subjectProjects}`}>
          <h1><i className="	fa fa-leanpub"></i> Performance Tasks</h1>
          <div className={s.content}>
            {
              assignments.map((task, i) => {
                return <Activity
                  task={task}
                  i={i}
                  handleRightClick={handleRightClick}
                  setActDesc={setActDesc} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubjectContent