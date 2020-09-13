import React from "react";

import { Container } from "semantic-ui-react";
import CounterView from "./views/CounterView";

import ContactView from "./views/ContactView";
function App() {
    return (
        <Container>
            <h1>React without Redux</h1>
            <CounterView />
            <ContactView />
        </Container>
    );
}

export default App;
