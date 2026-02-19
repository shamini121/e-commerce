import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  
  class Student {
    constructor(name, mark) {
      this.name = name;
      this.mark = mark;
    }
  }

  
  const students = [
    new Student("swetha", 85),
    new Student("shaji", 92),
    new Student("yuva", 74),
    new Student("yamuna", 88),
  ];

  const updatedStudents = students.map((item) => {
    return {
      ...item,
      grade:
        item.mark >= 90
          ? "A+"
          : item.mark >= 80
          ? "A"
          : item.mark >= 70
          ? "B"
          : "C",
    };
  });

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h1 style={{ color: "purple" }}>🎓 Student Result Dashboard</h1>

      {updatedStudents.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            margin: "15px auto",
            padding: "15px",
            width: "250px",
            borderRadius: "10px",
            boxShadow: "2px 2px 10px lightgray",
          }}
        >
          <h3>{item.name}</h3>
          <p>Mark: {item.mark}</p>
          <p>
            Grade:{" "}
            <span style={{ color: item.grade === "A+" ? "green" : "blue" }}>
              {item.grade}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;