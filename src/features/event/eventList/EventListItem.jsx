import React from "react";
import {Segment, Item, Icon, Button} from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

const EventListItem = () => {
    return(
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image src="https://randomuser.me/api/portraits/men/79.jpg"
                        size="tiny" circular
                        />
                        <Item.Content  >
                            <Item.Header content="Event Name" />
                            <Item.Meta>
                                Hosted By <a>hostedby</a>
                            </Item.Meta>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <Item>
                  <span>
                        <Icon name="clock" />
                    Time  |
                    <Icon name="marker" /> Place
                    </span>
                </Item>
            </Segment>
            <Segment secondary >
                <EventListAttendee/>
            </Segment>
            <Segment clearing >
                    Description of the Event
                    <Button negative floated="right" >Delete</Button>
                    <Button primary floated="right" >View</Button>
            </Segment>
        </Segment.Group>
    );
}

export default EventListItem;