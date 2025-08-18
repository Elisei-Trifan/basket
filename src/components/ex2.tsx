import React, { JSX, useState } from "react";
import style from "./ex2.module.css";
import { IoClose } from "react-icons/io5";

interface ITodo {
  id: number;
  text: string;
  done: boolean;
}

const preload = [
  { id: 1, text: "Выучить TS", done: false },
  { id: 2, text: "Выучить JS", done: false },
  { id: 3, text: "Выучить React", done: false },
];

export const Ex2 = () => {
  const [todo, setTodo] = useState<ITodo[]>(preload);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState<"all" | "done" | "active">("all");

  const filteredTodo = todo.filter((todo) => {
    if (filter === "done") return todo.done;
    if (filter === "active") return !todo.done;
    return true;
  });

  const handleDeleteTodo = (id: number) => {
    setTodo((prev) => prev.filter((item) => id !== item.id));
  };

  const handleToggleCheck = (id: number) => {
    setTodo((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item,
      ),
    );
  };

  return (
    <div>
      <button onClick={() => setFilter("all")}>Все</button>
      <button onClick={() => setFilter("done")}>Выполненные</button>
      <button onClick={() => setFilter("active")}>Активные</button>
      <form
        style={{
          display: "flex",
          alignItems: "center",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          if (!newTodo.trim()) return;
          setTodo((prev) => {
            const newTodoUp = newTodo[0].toUpperCase() + newTodo.slice(1);
            const newId = Date.now();
            return [...prev, { id: newId, text: newTodoUp, done: false }];
          });
          setNewTodo("");
        }}
      >
        <input
          type="text"
          placeholder="Введите задачу"
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
          value={newTodo}
        />
        <button>Добавить</button>
      </form>
      <button
        onClick={() => {
          setTodo([]);
        }}
        style={{ display: "inline-block", marginLeft: 200, marginBottom: 20 }}
      >
        Удалить все задачи
      </button>
      <button
        onClick={() =>
          setTodo((prev) => prev.map((item) => ({ ...item, done: !item.done })))
        }
      >
        Выделить все задачи
      </button>
      {filteredTodo.map((item) => (
        <div
          key={item.id}
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => handleToggleCheck(item.id)}
          />
          <p
            className={`${style.container} ${item.done ? style.crossed : ""} `}
          >
            {item.id}. {item.text}
          </p>

          <span>
            {
              //@ts-ignore
              <IoClose
                color={"red"}
                className={style.button}
                onClick={() => handleDeleteTodo(item.id)}
              />
            }
          </span>
        </div>
      ))}
    </div>
  );
};
