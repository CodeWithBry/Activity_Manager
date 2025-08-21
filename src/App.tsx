import { createContext, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import s from "./App.module.css"
import Home from './Pages/Home/Home';
import Subjects from './Pages/Subjects/Subjects';
import Completions from './Pages/Completions/Completions';
import Account from './Pages/Account/Account';

import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';

import ForgotPassword from './Authentication/ForgotPassword/ForgotPassword.tsx';
import LogIn from './Authentication/LogIn/LogIn.tsx'
import SignUp from './Authentication/SignUp/SignUp.tsx'

export const context = createContext({})

import type { Tab, AuthTab, ContextType } from './Interfaces/interface';
import LogOutPrompt from './Components/LogOutPrompt/LogOutPrompt.tsx';

function App() {
  // Navigation
  // const navigation = useNavigate()
  // STATIC VARIABLES
  let variable = {} as ContextType



  // **************** STATE VARIABLES *****************

  // BOOLEANS
  const [showSideBar, setShowSideBar] = useState<boolean>(false)
  const [showLogForm, setShowLogForm] = useState<boolean>(false)
  const [showLogOutPrompt, setShowLogOutPrompt] = useState<boolean>(false)
  

  // STRING AND NUMERICAL VALUE
  const [pathTo, setPathTo] = useState<string>('/')

  // ARRAYS & OBJECTS
  const [user, setUser] = useState<object>({uid: "243342"})
  const [userData, setUserData] = useState<object>({uid: "243342"})
  const [tabs, setTabs] = useState<Tab[]>([
    { pageName: "Home", path: "/", element: <Home />, keyId: Math.random() * 1, icon: "fa fa-home", focus: true },
    { pageName: "Subjects", path: `/subjects/`, element: <Subjects />, keyId: Math.random() * 1, icon: "fa fa-book", focus: false },
    { pageName: "Completions", path: "/completions", element: <Completions />, keyId: Math.random() * 1, icon: "	fa fa-check-square-o", focus: false },
    { pageName: "Account", path: "/account", element: <Account />, keyId: Math.random() * 1, icon: "	fa fa-user", focus: false },
  ])

  const [authTabs, setAuthTabs] = useState<AuthTab[]>([
    { path: "/login", element: <LogIn />, keyId: Math.random() * 1, icon: "fa fa-book", focus: false },
    { path: "/register", element: <SignUp />, keyId: Math.random() * 1, icon: "fa fa-home", focus: false },
    { path: "/forgot_password", element: <ForgotPassword />, keyId: Math.random() * 1, icon: "	fa fa-check-square-o", focus: false }
  ])

  // ********** FUNCTIONS ************

  // Reusable Function or Component

  function pageDetector(authInd: number | null, tabInd: number | null, bool: boolean) {
    setAuthTabs((arr: AuthTab[]) => arr.map((tab, i) => ({ ...tab, focus: i === authInd && authInd != null ? true : false })))
    setTabs((arr: Tab[]) => arr.map((tab, i) => ({ ...tab, focus: i === tabInd && tabInd != null ? true : false })))
    setShowLogForm(bool)
    console.log(bool, tabInd, authInd)
  }


  // ************* EFFECTS ************

  // useEffect(() => {
  //   const url: string = (window.location.href)
  //   const memoizeIndex: number = url.search("/#/")
  //   const cutUrl = url.slice(50, memoizeIndex + 2)
  //   setPathTo(prev => cutUrl)
  //   console.log(showLogForm)
  // }, [showLogForm])

  // useEffect(() => {
  //   if (pathTo == "/" || pathTo == "/Subjects" || pathTo == "/Completions" || pathTo == "/Account") {
  //     setShowLogForm(false)
  //     console.log(pathTo);
  //   }
  // }, [pathTo])

  // ********* CONTEXT VARIRABLES ***********

  variable = {
    // Important Data such as userData, authData, sensitiveData
    user, setUser,
    userData, setUserData,
    // Boolean
    showSideBar, setShowSideBar,
    showLogForm, setShowLogForm,
    showLogOutPrompt, setShowLogOutPrompt,

    // String and Numbers
    pathTo, setPathTo,

    // Objects and Arrays
    tabs, setTabs,

    // Functions
    pageDetector
  }

  return (
    <context.Provider value={variable}>
      <Navbar />
      <LogOutPrompt />
      <div 
        className={s.sbartabWrapper} 
        style={showLogForm ? { display: "none" } : { display: "flex" }}
        onContextMenu={(e)=>{e.preventDefault()}}>
        <Sidebar />
        <Routes>
          {
            tabs?.map((tab) => {
              return <Route path={tab.path} element={tab.element} />
            })
          }
          <Route path='/subjects/:subjectName' element={<Subjects />}/>
        </Routes>
      </div>
      <Routes>
        {
          authTabs?.map((tab) => {
            return <Route path={tab.path} element={tab.element} />
          })
        }
      </Routes>
    </context.Provider>
  )
}

export default App
