import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import Navbar from '../../features/nav/Navbar';
import HomePage from '../../features/home/HomePage';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import Sandbox from '../../features/sandbox/Sandbox';
import ModalManager from '../common/modals/ModalManager';

function App() {
  const { key } = useLocation();

  return (
    <>
      <ModalManager />
      <Route path='/' exact component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <Navbar />

            <Container className='main'>
              <Route path='/events' exact component={EventDashboard} />
              <Route path='/sandbox' exact component={Sandbox} />
              <Route path='/events/:id' component={EventDetailedPage} />
              <Route
                path={['/createEvent', '/manage/:id']}
                component={EventForm}
                key={key}
              />
            </Container>
          </>
        )}
      />
    </>
  );
}

// eslint-disable-next-line

export default App;
