import React from "react";

export const Ex = () => {
  const [data, setData] = React.useState({ name: "", age: "", city: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Данные отправлены", data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
    console.log(e.target.checked);
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={"Введите имя"}
          name={"name"}
          value={data.name}
          // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          //   setData((prev) => ({ ...prev, name: e.target.value }));
          // }}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder={"Введите возраст"}
          name={"age"}
          value={data.age}
          checked
          // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          //   setData((prev) => ({ ...prev, age: e.target.value }));
          // }}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder={"Введите город"}
          name={"city"}
          value={data.city}
          // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          //   setData((prev) => ({ ...prev, city: e.target.value }));
          // }}
          onChange={handleChange}
        />
        <button> Отправить</button>
      </form>
    </div>
  );
};
