import CurrentTasks from "./CurrentTasks/CurrentTasks"
import SubShortcut from "./SubShortcut/SubShortcut"
import s from "./Home.module.css"
import { useContext, useEffect } from "react";
import { context } from "../../App";
import type { ContextType } from "../../Interfaces/interface";

function Home() {
  const { pageDetector } = useContext(context) as ContextType

  useEffect(() => {
    pageDetector(null, 0, false)
  }, []);

  return (
    <div className={s.homeWrapper}>
      <CurrentTasks />
      <SubShortcut />
    </div>
  )
}

export default Home