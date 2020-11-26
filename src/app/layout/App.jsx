import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import Navbar from '../../features/nav/Navbar';

function App() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <Navbar setFormOpen={setFormOpen} />
      <Container className='main'>
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </>
  );
}

// eslint-disable-next-line

export default App;