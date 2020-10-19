import React from "react";
import { connect } from "react-redux";
import { remove } from "../store";
import { useHistory } from "react-router-dom";
function Detail({ toDo, deleteToDo }) {
  const history = useHistory();
  console.log(deleteToDo);
  function onBtnClick() {
    deleteToDo();
    history.push("/");
  }

  return (
    <>
      <h1>{toDo?.text}</h1>
      <button onClick={onBtnClick}>DEL</button>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.find(toDo => toDo.id === parseInt(id)) };
}

function mapDispatchToProps(dispatch, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return {
    deleteToDo: () => dispatch(remove(parseInt(id))),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
