import cuid from 'cuid';
import firebase from '../config/firebase';

const db = firebase.firestore();

export function dataFromSnapshot(snapshot) {
  if (!snapshot.exists) return undefined;
  const data = snapshot.data();

  for (const prop in data) {
    if (data.hasOwnProperty(prop)) {
      if (data[prop] instanceof firebase.firestore.Timestamp) {
        data[prop] = data[prop].toDate();
      }
    }
  }

  return {
    ...data,
    id: snapshot.id,
  };
}

export function listenToEventsFromFireStore() {
  return db.collection('events').orderBy('date');
}

export function listenToEventFromFireStore(eventId) {
  return db.collection('events').doc(eventId);
}

export function addEvenToFirestore(event) {
  return db.collection('events').add({
    ...event,
    hostedBy: 'Pragati',
    hostPhotoURL: 'https://randomuser.me/api/portraits/women/50.jpg',
    attendees: firebase.firestore.FieldValue.arrayUnion({
      id: cuid(),
      displayName: 'Pragati',
      photoURL: 'https://randomuser.me/api/portraits/women/50.jpg',
    }),
  });
}

export function updateEvenInFirestore(event) {
  return db.collection('events').doc(event.id).update(event);
}

export function deleteEvenInFirestore(eventId) {
  return db.collection('events').doc(eventId).delete();
}

export function cancelEventToggle(event) {
  return db.collection('events').doc(event.id).update({
    isCancelled: !event.isCancelled,
  });
}
