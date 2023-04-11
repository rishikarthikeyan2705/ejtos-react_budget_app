import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>£{props.cost}</td>
      <td>
        <button
          style={{
            color: "white",
            backgroundColor: "#4FAC5B",
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            border: "none",
            textAlign: "center",
            lineHeight: "15px",
            fontWeight: "bold",
            fontSize: "15px",
            padding: 0,
          }}
          onClick={(event) => increaseAllocation(props.name)}
        >
          +
        </button>
      </td>
      {/* <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td> */}
      <td>
        <button
          style={{
            color: "white",
            backgroundColor: "#AF2319",
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            border: "none",
            textAlign: "center",
            lineHeight: "20px",
            fontWeight: "bold",
            fontSize: "20px",
            padding: 0,
          }}
        >
          -
        </button>
      </td>
    </tr>
  );
};

export default ExpenseItem;
