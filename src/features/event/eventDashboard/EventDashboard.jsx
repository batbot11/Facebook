import React from "react";
import {Grid, Container} from "semantic-ui-react";
import Navbar from "../../nav/navbar/Navbar";
import EventList from "../eventList/EventList";
import EventForm from "../eventForm/EventForm";

const EventDashboard = () => {
    return(
        <div>
            <Navbar/>
            <Container>
        <Grid>
            <Grid.Column width= {10} >
               <EventList/>
            </Grid.Column>
            <Grid.Column width= {6} >
               <EventForm/>
            </Grid.Column>
        </Grid>
            </Container>
        </div>
    );
}

export default EventDashboard;