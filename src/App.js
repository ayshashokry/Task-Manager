import React, { Component } from "react";
import "./App.css";
import TasksList from "./components/TasksList";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import ActionButtons from "./layout/ActionButtons";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { bindActionCreators } from "redux";
import { sort } from "./redux/actions/ListsActions";
import styled from "styled-components";

const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin: 0 8px 0 0;
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline-color: blue;
  border-radius: 3px;
  margin-bottom: 3px;
  padding: 5px;
`;
class App extends Component {
  constructor(props) {
    super(props);
  }

  onDragEnd = result => {
    const { destination, source, draggableId, type } = result;
    console.log(destination);
    this.props.sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
      type
    );
  };

  render() {
    const { lists } = this.props;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div>
          <Droppable droppableId="all-lists" direction="horizontal" type="list">
            {provided => (
              <ListContainer
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                {lists.map((list, index) => (
                  <TasksList
                    listID={list.id}
                    title={list.title}
                    cards={list.cards}
                    key={list.id}
                    index={index}
                  />
                ))}
                <ActionButtons list />
              </ListContainer>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    );
  }
}
const mapStateToProps = state => ({
  lists: state.lists
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ sort }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
