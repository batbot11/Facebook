import React from "react";
import {Segment, Item, Icon, Button, List} from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

const EventListItem = ({event}) => {
    return(
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image src= {event.hostPhotoURL}
                        size="tiny" circular
                        />
                        <Item.Content  >
                            <Item.Header content= {event.title} />
                            <Item.Meta>
                                Hosted By <a>{event.hostedBy}</a>
                            </Item.Meta>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <Item>
                  <span>
                        <Icon name="clock" />
                    {event.date}  |
                    <Icon name="marker" /> {event.venue}
                    </span>
                </Item>
            </Segment>
            <Segment secondary >
                <List horizontal >
                {event.attendees.map(attendee => (             
                <EventListAttendee key={attendee.id} attendee = {attendee} /> 
                ))}
                </List>
            </Segment>
            <Segment clearing >
                 {event.description}
                    <Button negative floated="right" >Delete</Button>
                    <Button primary floated="right" >View</Button>
            </Segment>
        </Segment.Group>
    );
}

export default EventListItem;