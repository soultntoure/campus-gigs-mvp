import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

// A simple hello world function to verify deployment
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true });
  response.send('Hello from Firebase, CampusGigs!');
});

// TODO: Add functions for user creation, gig management, and payments
