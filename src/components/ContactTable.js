import React, { useState, useContext } from "react";

import { Segment, Table, Button, Icon } from "semantic-ui-react";

import { ContactContext } from "../context/ContactContext";

function ContactTable() {
    // subscribe to the `contacts` state and access dispatch functions
    const [state, dispatch] = useContext(ContactContext);
    const [selectedId, setSelectedId] = useState();

    const deleteContact = (id) => {
        dispatch({
            type: "DELETE_CONTACT",
            payload: id,
        });
    };

    const onDeleteContact = () => {
        deleteContact(selectedId);
        setSelectedId(null);
    };

    const rows = state.contacts.map((contact) => {
        return (
            <Table.Row
                key={contact.id}
                onClick={() => setSelectedId(contact.id)}
                active={contact.id === selectedId}
            >
                <Table.Cell>{contact.id}</Table.Cell>
                <Table.Cell>{contact.name}</Table.Cell>
                <Table.Cell>{contact.email}</Table.Cell>
            </Table.Row>
        );
    });

    return (
        <Segment>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>{rows}</Table.Body>
                <Table.Footer fullWidth>
                    <Table.Row>
                        {/* <Table.HeaderCell /> */}
                        <Table.Cell colSpan="3">
                            <Button
                                floated="right"
                                icon
                                labelPosition="left"
                                color="red"
                                size="small"
                                disabled={!selectedId}
                                onClick={onDeleteContact}
                            >
                                <Icon name="trash" />
                                Remove User
                            </Button>
                        </Table.Cell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </Segment>
    );
}

export default ContactTable;
