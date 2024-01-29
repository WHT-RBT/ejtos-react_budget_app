import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => total+item.cost, 0);

    const handleBudgetChange = (event) => {
        console.log(totalExpenses)
        if (event.target.value < totalExpenses) {

            alert(
                `You cannot reduce the budget value lower than the spending.`
            );
        } else {
            setNewBudget(event.target.value);
            dispatch({
                type:'SET_BUDGET',
                payload: event.target.value
            });
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type='number' step='10' value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;