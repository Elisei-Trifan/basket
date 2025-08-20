import React, { JSX, useEffect, useState } from "react";
import style from "./ex2.module.css";
import { IoClose } from "react-icons/io5";

interface ITodo {
  id: number;
  text: string;
  done: boolean;
}

const preload: ITodo[] = [
  { id: 1, text: "Выучить TS", done: false },
  { id: 2, text: "Выучить JS", done: false },
  { id: 3, text: "Выучить React", done: false },
];

export const Ex2 = () => {
  const [todo, setTodo] = useState<ITodo[]>(() => {
    const saved = localStorage.getItem("todos");

    if (saved) {
      const parsed = JSON.parse(saved);
      return parsed.length > 0 ? parsed : preload;
    }
    return preload;
  });
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState<"all" | "done" | "active">("all");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");

  const filteredTodo = todo.filter((todo) => {
    if (filter === "done") return todo.done;
    if (filter === "active") return !todo.done;
    return true;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

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

  const handleStartEditing = (id: number, currentText: string) => {
    setEditingId(id);
    setEditingText(currentText);
  };

  const handleSaveEditing = (id: number) => {
    setTodo((prev) => {
      return prev.map((item) =>
        item.id === id
          ? { ...item, text: editingText, done: !item.done }
          : item,
      );
    });
    setEditingId(null);
    setEditingText("");
  };

  interface User {
    id: number;
    name: string;
  }

  function sayHello(this: User, age: number) {
    console.log(`${this.name} is ${age}`);
  }

  const user = {
    name: "Елисей",
    id: 1,
  };

  sayHello.apply(user, [31]);

  function A() {
    {
    }
  }

  function B() {
    return a;
  }

  // @ts-ignore
  let a = new A();
  // @ts-ignore
  let b = new B();

  console.log(a === b);

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
            const newId =
              prev.length > 0 ? Math.max(...prev.map((item) => item.id)) : 0;
            return [...prev, { id: newId + 1, text: newTodoUp, done: false }];
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

          {editingId === item.id ? (
            <input
              type="text"
              value={editingText}
              onChange={(e) => setEditingText(e.target.value)}
              onBlur={() => handleSaveEditing(item.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter") return handleSaveEditing(item.id);
                if (e.key === "Escape") return setEditingId(null);
              }}
              autoFocus
            />
          ) : (
            <p
              onDoubleClick={() => handleStartEditing(item.id, item.text)}
              className={`${style.container} ${item.done ? style.crossed : ""} `}
            >
              {item.id}. {item.text}
            </p>
          )}

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
