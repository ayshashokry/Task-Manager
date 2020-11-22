import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography
} from "@material-ui/core";
import ActionButtons from "../layout/ActionButtons";
import { Draggable } from "react-beautiful-dnd";
const TasksCard = ({ card, id, index }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <div
          className="taskscard"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card style={styles.cardContainer}>
            <CardContent>
              <Typography gutterBottom>{card}</Typography>
            </CardContent>
          </Card>{" "}
        </div>
      )}
    </Draggable>
  );
};
const styles = {
  cardContainer: {
    marginBottom: 0
  }
};
export default TasksCard;
