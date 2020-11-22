import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";
import { Card } from "@material-ui/core";
import TextArea from "react-textarea-autosize";
import { Button } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { addList } from "../redux//actions/ListsActions";
import { addCard } from "../redux//actions/CardsActions";

class ActionButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formOpen: false,
      text: ""
    };
  }
  openForm = () => {
    this.setState({ formOpen: !this.state.formOpen });
  };
  renderButton = () => {
    const { list } = this.props;
    const buttonText = list ? "Add another List" : "Add another Card";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackgroundColor = list ? "rgba(0,0,0,.15)" : "inherit";

    return (
      <div
        onClick={this.openForm}
        style={{
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackgroundColor
        }}
      >
        <p>
          <AddIcon />
          {buttonText}
        </p>
      </div>
    );
  };
  handleTextChange = e => {
    this.setState({ text: e.target.value });
  };
  handleAddList = () => {
    if (this.state.text) {
      this.setState({ text: "" });

      this.props.addList(this.state.text);
    }
    return;
  };
  handleAddCard = () => {
    if (this.state.text) {
      this.setState({ text: "" });
      this.props.addCard(this.props.listID, this.state.text);
    }
    return;
  };
  renderForm = () => {
    const { list } = this.props;
    const placeholder = list
      ? "Enter list title ... "
      : "Enter a title for this card ...";
    const buttonTitle = list ? "Add List" : "Add Card";
    return (
      <div>
        <Card
          style={{
            minHeight: "70px",
            padding: "6px 8px ",
            overflow: "visible"
          }}
        >
          <TextArea
            style={{
              resize: "none",
              outline: "none",
              border: "none",
              width: "100%",
              overflow: "hidden"
            }}
            placeholder={placeholder}
            autoFocus
            onBlur={this.openForm}
            value={this.state.text}
            onChange={this.handleTextChange}
          />
        </Card>
        <div>
          <Button
            onMouseDown={list ? this.handleAddList : this.handleAddCard}
            variant="contained"
            style={{ backgroundColor: "#5aac44", color: "#fff" }}
          >
            {buttonTitle}
          </Button>
          <CloseIcon />
        </div>
      </div>
    );
  };
  render() {
    return this.state.formOpen ? this.renderForm() : this.renderButton();
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addList, addCard }, dispatch);
};
export default connect(null, mapDispatchToProps)(ActionButtons);
