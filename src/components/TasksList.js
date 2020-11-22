import React from "react";
import TasksCard from "./TasksCard";
import ActionButtons from "../layout/ActionButtons";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin: 0 8px 0 0;
`;
const TasksList = ({ title, cards, listID, index }) => {
  return (
    <Draggable draggableId={String(listID)} index={index}>
      {provided => (
        <ListContainer
          ref={provided.innerRef}
          {...provided.droppableProps}
          {...provided.dragHandleProps}
        >
          <Droppable droppableId={String(listID)} type="card">
            {provided => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <h3>{title}</h3>
                {cards.map((card, index) => (
                  <TasksCard
                    card={card.text}
                    key={card.id}
                    index={index}
                    id={card.id}
                  />
                ))}
                {provided.placeholder}
                <ActionButtons listID={listID} />
              </div>
            )}
          </Droppable>{" "}
        </ListContainer>
      )}
    </Draggable>
  );
};
export default TasksList;
