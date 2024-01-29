import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);

    console.log(currency);
    console.log(newCurrency);

    const handleCurrencyChange = (event) => {
        setNewCurrency(event.target.value);

        dispatch({
            type: "CHG_CURRENCY",
            payload: event.target.value,
        });
    };

    const currencyList = {
        $: "$ Dollar",
        "£": "£ Pound",
        "€": "€ Euro",
        "₹": "₹ Rupee",
    };

    return (
        <div
            className="alert alert-success"
            style={{ backgroundColor: "#33CC49" }}
        >
            <label
                style={{
                    marginLeft: "1rem",
                    backgroundColor: "#33CC49",
                    color: "white",
                }}
            >
                Currency
            </label>
            <select
                name="hover_color"
                id="currency"
                onChange={handleCurrencyChange}
                defaultValue={newCurrency}
                style={{
                    marginLeft: "1rem",
                    backgroundColor: "#33CC49",
                    color: "white",
                }}
            >
                {Object.keys(currencyList).map((curr) => (
                    <option value={curr} style={{ color: "black" }}>
                        {currencyList[curr]}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Currency;