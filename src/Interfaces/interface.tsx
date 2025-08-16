export interface Tab {
  pageName: string;
  path: string;
  element: any;
  keyId: number;
  icon: string;
  focus: boolean;
}

export interface AuthTab {
  path: string;
  element: any;
  keyId: number;
  icon: string;
  focus: boolean;
}

export interface SubjectsType {
    subjectName: string;
    subjectNameAbbreviation: string;
    subjectTeacher: string;
    subjectSemester: string;
    quarter: number;
    imgPath: string;
    color: string;
}


// Reusable Types

export interface PageDetector {
  pageDetector: (authInd: number | null, tabInd: number | null, bool: boolean) => void;
}


export interface ContextType {
  user: any, setUser: React.Dispatch<React.SetStateAction<any>>,
  userData: any , setUserData: React.Dispatch<React.SetStateAction<any>>,

  // Boolean
  showSideBar: boolean, setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>,
  showLogForm: boolean, setShowLogForm: React.Dispatch<React.SetStateAction<boolean>>,

  // String and Numbers
  pathTo: string, setPathTo: React.Dispatch<React.SetStateAction<string>>,

  // Objects and Arrays
  tabs: Tab[], setTabs: React.Dispatch<React.SetStateAction<Tab[]>>,

  // Functions
  pageDetector: (authInd: number | null, tabInd: number | null, bool: boolean) => void;
}