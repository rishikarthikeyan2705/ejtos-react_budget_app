import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
  const { dispatch, budget, expenses } = useContext(AppContext);
  const [changedBudget, setChangedBudget] = useState(budget);

  useEffect(() => {
    console.log("CHANGED BUDGET --> ", changedBudget);
    const totalExpenses = expenses.reduce((total, item) => {
      return (total += item.cost);
    }, 0);
    if (changedBudget !== budget && changedBudget >= totalExpenses) {
      dispatch({
        type: "SET_BUDGET",
        payload: changedBudget,
      });
    } else if (changedBudget < totalExpenses) {
      alert("You cannot reduce the budget value lower than the spending");
      return;
    }
  }, [changedBudget]);

  return (
    <div className="alert alert-secondary">
      <span>
        Budget: £
        <input
          required="required"
          type="number"
          id="budget"
          value={changedBudget}
          style={{ size: 10 }}
          step={10}
          onChange={(event) => setChangedBudget(event.target.value)}
        ></input>
      </span>
    </div>
  );
};
export default Budget;
