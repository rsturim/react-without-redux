import React from "react";
import { Segment } from "semantic-ui-react";

import { CounterContextProvider } from "../context/CounterContext";
import CounterDisplay from "../components/CounterDisplay";
import CounterButtons from "../components/CounterButtons";

const CounterView = () => {
    return (
        <CounterContextProvider>
            <h3>Counter</h3>
            <Segment textAlign="center">
                <CounterDisplay />
                <CounterButtons />
            </Segment>
        </CounterContextProvider>
    );
};

export default CounterView;
