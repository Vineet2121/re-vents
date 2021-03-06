import { fetchSampleDate } from '../../app/api/mockApi';
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../../app/async/asyncReducer';
import {
  CREATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENTS,
  UPDATE_EVENT,
} from './eventConstants';

export const loadEvents = () => {
  return async function (dispatch) {
    dispatch(asyncActionStart());

    try {
      const events = await fetchSampleDate();
      dispatch({ type: FETCH_EVENTS, payload: events });
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
    }
  };
};

export const listenToEvents = (events) => {
  return {
    type: FETCH_EVENTS,
    payload: events,
  };
};

export const createEvent = (event) => {
  return {
    type: CREATE_EVENT,
    payload: event,
  };
};

export const updateEvent = (event) => {
  return {
    type: UPDATE_EVENT,
    payload: event,
  };
};

export const deleteEvent = (eventId) => {
  return {
    type: DELETE_EVENT,
    payload: eventId,
  };
};
