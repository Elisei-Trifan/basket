import React from 'react'
import './App.css'
import Input from './components/Input/Input'
import Search from './components/Search/Search'

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
        type="text"
        value={value}
        placeholder=""
        errMessage=""
        onChange={handleChange}
      />
      <Search value={value} onChange={handleChange} />
    </div>
  )
}

export default App
