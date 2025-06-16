import React from 'react'
import './styles/colors.css'
import './App.css'
import Input from './components/Input/Input'
import Search from './components/Search/Search'
import Button from './components/Button/Button'
import Logo from './components/Logo/Logo'
import Notification from './components/Notification/Notification'
import Checkbox from './components/Checkbox/Checkbox'
import CustomLink from './components/Link/CustomLink'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import {CustomSelect} from "./components/CustomSelect/CustomSelect";
import {styleCustomSelect} from './components/CustomSelect/styleCustomSelect';
import {countStyleSelect} from "./components/CustomSelect/countStyleSelect";

function App() {
  const [value, setValue] = React.useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

    const data = [
        {value: 'John Smith', label: 'John Smith'},
        {value: 'Peter', label: 'Peter'},
        {value: 'Ivan', label: 'Ivan'},
    ]

    const numbers = [
        { value: 6, label: '6' },
        { value: 12, label: '12' },
        { value: 24, label: '24' },
    ]

  return (
    <div className="App">
      {/* <Input*/}
      {/*  name="login"*/}
      {/*  label="Login"*/}
      {/*  type="password"*/}
      {/*  value={value}*/}
      {/*  placeholder=""*/}
      {/*  errMessage=""*/}
      {/*  onChange={handleChange}*/}
      {/*/>*/}
      {/*<Search value={value} onChange={handleChange} />*/}
      {/*<Button type="sign" text="Sign In" disabled />*/}
      {/*<Button type="add" text="Add" />*/}
      {/*<Button type="cancel" text="Cancel" disabled />*/}
      {/*<Logo />*/}
      {/*<Notification />*/}
      {/*<Checkbox text="Text"  />*/}
      {/*<CustomLink disabled to="/" text="Text" />*/}
      {/*<Sidebar />*/}
      {/*<Header fullName="John Smith" />*/}
      {/*<Sidebar />*/}
        <CustomSelect data={data} styles={styleCustomSelect} />
        <CustomSelect data={numbers} styles={countStyleSelect} defaultValue={numbers[0]}  classNamePrefix="custom-select"/>
    </div>
  )
}

export default App
