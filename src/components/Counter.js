import React from "react";
import Button from "@mui/material/Button";

export const Counter = () => {
    const [value, setValue] = React.useState(0);

    const handleIncrease = () => {
        setValue((prevValue) => prevValue + 1);
    };
    const handleDecrease = () => {
        setValue((prevValue) => prevValue - 1);
    };

    return ( 
    <div>
        <h1>{value}</h1>
        <Button variant="outlined" onClick={handleDecrease}>
            - Decrease
            </Button>
        <Button variant="contained" color="error" onClick={handleIncrease}>
            Increase +
            </Button>
    </div> 
    );
};