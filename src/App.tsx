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
import { Header } from "./components/Header/Header";
import { CustomSelect } from "./components/CustomSelect/CustomSelect";
import { customStyleSelect } from "./components/CustomSelect/customStyleSelect";
import { countStyleSelect } from "./components/CustomSelect/countStyleSelect";
import { multiStyleSelect } from "./components/CustomSelect/multiStyleSelect";
import { CardDetailsTeam } from "./components/CardDetailsTeam/CardDetailsTeam";
import { CardDetailsPlayer } from "./components/CardDetailsPlayer/CardDetailsPlayer";
import { CardTeamsOrPlayer } from "./components/CardTeamsOrPlayer/CardTeamsOrPlayer";
import { ImgUpload } from "./components/ImgUpload/ImgUpload";
import { Ex } from "./components/ex";
import { Ex2 } from "./components/ex2";
import { Table } from "./components/Table/Table";
import { MobileSidebar } from "./components/MobileSidebar/MobileSidebar";
import { Route, Router, Routes } from "react-router-dom";
import { SignIn } from "./Pages/SignIn";
import { SignUp } from "./Pages/SignUp";

export function App() {
  // const [value, setValue] = React.useState("");
  //
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(e.target.value);
  // };

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
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  );
}
