import React from "react";
import {Image} from "semantic-ui-react";

const EventListAttendee = () => {
    return(
        <Image.Group>
            <Image src="https://randomuser.me/api/portraits/men/51.jpg"
            size="mini" circular
            />
            <Image src="https://randomuser.me/api/portraits/men/51.jpg"
            size="mini" circular
            />
            <Image src="https://randomuser.me/api/portraits/men/51.jpg"
            size="mini" circular
            />
        </Image.Group>
    );
}

export default EventListAttendee;