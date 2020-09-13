import React, { useContext } from "react";

import { Button } from "semantic-ui-react";

import { CounterContext } from "../context/CounterContext";

const CounterButtons = () => {
    const [count, setCount] = useContext(CounterContext);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };
    const reset = () => {
        setCount(0);
    };
    return (
        <div>
            <Button.Group>
                <Button color="green" onClick={increment}>
                    Add
                </Button>
                <Button color="red" onClick={decrement}>
                    Minus
                </Button>
                <Button disabled={count === 0} onClick={reset}>
                    Reset
                </Button>
            </Button.Group>
        </div>
    );
};

export default CounterButtons;
