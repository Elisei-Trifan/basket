import React from "react";
import "./styles/colors.css";
import "./App.css";
import { Input } from "./components/Input/Input";
// import { Search } from "./components/Search/Search";
// import { Button } from "./components/Button/Button";
// import { Logo } from "./components/Logo/Logo";
// import { Notification } from "./components/Notification/Notification";
// import { Checkbox } from "./components/Checkbox/Checkbox";
// import { CustomLink } from "./components/Link/CustomLink";
// import { Sidebar } from "./components/Sidebar/Sidebar";
// import { Header } from "./components/Header/Header";
// import { CustomSelect } from "./components/CustomSelect/CustomSelect";
// import { customStyleSelect } from "./components/CustomSelect/customStyleSelect";
// import { countStyleSelect } from "./components/CustomSelect/countStyleSelect";
// import { multiStyleSelect } from "./components/CustomSelect/multiStyleSelect";
import { CardDetailsTeam } from "./components/CardDetailsTeam/CardDetailsTeam";
import { CardDetailsPlayer } from "./components/CardDetailsPlayer/CardDetailsPlayer";
import { CardTeamsOrPlayer } from "./components/CardTeamsOrPlayer/CardTeamsOrPlayer";
import { ImgUpload } from "./components/ImgUpload/ImgUpload";

export function App() {
  const [value, setValue] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // const data = [
  //   { value: "John Smith", label: "John Smith" },
  //   { value: "Peter", label: "Peter" },
  //   { value: "Ivan", label: "Ivan" },
  // ];
  //
  // const numbers = [
  //   { value: 6, label: "6" },
  //   { value: 12, label: "12" },
  //   { value: 24, label: "24" },
  // ];
  //
  // const players = [
  //   { value: "Center Forward", label: "Center Forward" },
  //   { value: "Guard Forward", label: "Guard Forward" },
  //   { value: "Forward", label: "Forward" },
  //   { value: "Center", label: "Center" },
  //   { value: "Guard", label: "Guard" },
  // ];

  return (
    <div className="App">
      {/*<Input*/}
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
      {/*<CustomSelect*/}
      {/*  data={data}*/}
      {/*  styles={customStyleSelect}*/}
      {/*  classNamePrefix="custom-select"*/}
      {/*/>*/}
      {/*<CustomSelect*/}
      {/*  data={players}*/}
      {/*  styles={multiStyleSelect}*/}
      {/*  isMulti={true}*/}
      {/*  classNamePrefix="custom-select"*/}
      {/*/>*/}
      {/*<CustomSelect*/}
      {/*  data={numbers}*/}
      {/*  styles={countStyleSelect}*/}
      {/*  defaultValue={numbers[0]}*/}
      {/*  classNamePrefix="custom-select"*/}
      {/*  menuPlacement="top"*/}
      {/*/>*/}
      {/*<CardDetailsTeam*/}
      {/*  foundationYear={1970}*/}
      {/*  division={"Northwestern"}*/}
      {/*  conference={"Western"}*/}
      {/*  name="user"*/}
      {/*/>*/}
      {/*<CardDetailsPlayer*/}
      {/*  position={"Forward"}*/}
      {/*  number={22}*/}
      {/*  teamName={"Denver Nuggets"}*/}
      {/*  height={208}*/}
      {/*  weight={95}*/}
      {/*  birthday={new Date("1994-11-13")}*/}
      {/*  name={"Ricki"}*/}
      {/*/>*/}
      {/*<CardTeamsOrPlayer*/}
      {/*  name={"Portland trail blazers"}*/}
      {/*  foundationYear={1975}*/}
      {/*/>*/}
      {/*<CardTeamsOrPlayer*/}
      {/*  name={"Jaylen Adams"}*/}
      {/*  position={"10"}*/}
      {/*  teamName={"Portland trail blazers"}*/}
      {/*/>*/}
      <ImgUpload />
    </div>
  );
}
