import React from "react";

const Header = (props) => {
  console.log(props);
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      {props.parts.map(part => <Part part={part.name} exercise={part.exercises}/>)}
    </div>
  );
};

const Total = (props) => {
  const accum = (sum, curr) => { return {'name': 'hi', 'exercises' : sum.exercises + curr.exercises} }
  return <p>Number of exercises {props.parts.reduce(accum).exercises}</p>;
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
