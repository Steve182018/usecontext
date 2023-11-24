import logo from './logo.svg';
import './App.css';
import Child from './components/child';
import { createContext } from 'react';
import { useState } from 'react';
import Other_Child from './components/Other_Child';
import Login from './components/login';

export const GlobalInfo = createContext()

export const LoginInfo = createContext()

function App() {

  const [color, setColor] = useState("red")
  const [day, setDay] = useState("Monday")
  const [bgcolor, setBGColor] = useState("orange")
  const [dark, setDark] = useState("white")

  const getDay = (item) => {
    console.log(item)
    setDay((item) => (item === "Sunday" ? "Monday" : "Sunday"))
  }

  const getbgcol = (item) => {
    console.log("Back", item)
    setBGColor((item) => (item === "green" ? "orange" : "green"))
  }

  const getdarkmode = (item) => {
    console.log("Dark", item)
    setDark((item) => (item === "black" ? "white" : "black"))
  }
  return (
    <>
        <GlobalInfo.Provider value={{ AppColor: color, Day: getDay, bgcol: getbgcol }}>
          <h1>App Component</h1>
          <Child />
          <h1 style={{ backgroundColor: bgcolor }}>Day: {day}</h1>
        </GlobalInfo.Provider>
      {/* <Other_Child/> */}

      <LoginInfo.Provider value={{ darkbg: getdarkmode, chg: dark }}>
        <center>
          {/* <h1 style={{ backgroundColor: dark }}>Login</h1> */}
          <Login />
        </center>
      </LoginInfo.Provider>
    </>
  );
}

export default App;
