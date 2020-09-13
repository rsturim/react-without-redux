import React from "react";

import { Container } from "semantic-ui-react";
import CounterView from "./views/CounterView";

function App() {
    return (
        <Container>
            <h1>React without Redux</h1>
            <CounterView />
        </Container>
    );
}

export default App;
