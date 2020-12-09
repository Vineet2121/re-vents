import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import { useSelector, useDispatch } from 'react-redux';
import EventListItemPlaceholder from './EventListItemPlaceholder';
import EventFilters from './EventFilters';
import {
  dataFromSnapshot,
  listenToEventsFromFireStore,
} from '../../../app/firestore/fireStoreService';
import { listenToEvents } from '../eventActions';
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../../../app/async/asyncReducer';
import useFirestoreCollection from '../../../app/hooks/useFirestoreCollection';

const EventDashboard = () => {
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.event);
  const { loading } = useSelector((state) => state.async);

  // useEffect(() => {
  //   dispatch(asyncActionStart());
  //   const unsubscribe = listenToEventsFromFireStore({
  //     next: (snapshot) => {
  //       dispatch(
  //         listenToEvents(
  //           snapshot.docs.map((docSnapshot) => dataFromSnapshot(docSnapshot))
  //         )
  //       );
  //       dispatch(asyncActionFinish());
  //     },
  //     error: (error) => dispatch(asyncActionError(error)),
  //     complete: () => console.log('you will never see this message'),
  //   });

  //   return unsubscribe;
  // }, [dispatch]);

  useFirestoreCollection({
    query: () => listenToEventsFromFireStore(),
    data: (events) => dispatch(listenToEvents(events)),
    deps: [dispatch],
  });
  return (
    <Grid>
      <Grid.Column width={10}>
        {loading && (
          <>
            <EventListItemPlaceholder />
            <EventListItemPlaceholder />
          </>
        )}
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventFilters />
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
