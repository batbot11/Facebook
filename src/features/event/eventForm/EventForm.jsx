import React from "react";
import {Form, Button, Label, Segment} from "semantic-ui-react";

class EventForm extends React.Component {
    render() {
        return(
            <Segment>          
            <Form>
                <Form.Field>
                    <Label>Event Title</Label>
                    <input type="text"
                    placeholder="Enter a Title for the Event"
                    />
                </Form.Field>
                <Form.Field>
                    <Label>Event Date</Label>
                    <input type="date"
                    placeholder="dd/mm/yyyy"
                    />
                </Form.Field>
                <Form.Field>
                    <Label>City</Label>
                    <input type="text"
                    placeholder="City the Event is Taking Place"
                    />
                </Form.Field>
                <Form.Field>
                    <Label>Venue</Label>
                    <input type="text"
                    placeholder="Enter the Venue of the Event"
                    />
                </Form.Field>
                <Form.Field>
                    <Label>Hosted By</Label>
                    <input type="text"
                    placeholder="Enter the Name of the Person Hosting"
                    />
                </Form.Field>
                <Button positive content="Submit" />
                <Button negative content="Cancel" />
            </Form>
            </Segment>
        );
    }
}

export default EventForm;