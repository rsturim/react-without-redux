import React from "react";

import { Segment, Header } from "semantic-ui-react";

import { ContactContextProvider } from "../context/ContactContext";

import ContactForm from "../components/ContactForm";
import ContactTable from "../components/ContactTable";

const ContactView = () => {
    return (
        <ContactContextProvider>
            <Segment>
                <Header as="h3">Contact</Header>
                <ContactForm />
                <ContactTable />
            </Segment>
        </ContactContextProvider>
    );
};

export default ContactView;
