import React from "react";
import { TasksCard } from "./TasksCard";

export const TasksList = ({ title }) => {
  return (
    <div className='taskslist'>
      <h3>{title}</h3>
      <TasksCard />
    </div>
  );
};
