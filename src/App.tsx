import React from 'react'
import './App.css'
import Input from './components/Input/Input'
import Search from './components/Search/Search'
import Button from './components/Button/Button'
import Logo from './components/Logo/Logo'
import Notification from './components/Notification/Notification'

function App() {
  const [value, setValue] = React.useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div className="App">
      <Input
        name="login"
        label="Login"
        type="password"
        value={value}
        placeholder=""
        errMessage=""
        onChange={handleChange}
      />
      <Search value={value} onChange={handleChange} />
      <Button type="sign" text="Sign In" disabled />
      <Button type="add" text="Add" />
      <Button type="cancel" text="Cancel" disabled />
      <Logo />
      <Notification />
    </div>
  )
}

export default App
