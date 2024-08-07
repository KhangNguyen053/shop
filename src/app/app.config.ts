import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'fir-web24a-84704',
        appId: '1:860952435771:web:0d051c2698c0dc0ae3501e',
        storageBucket: 'fir-web24a-84704.appspot.com',
        apiKey: 'AIzaSyAa-oKHO5T3bMcJBEbnnOd-matPJalBtYU',
        authDomain: 'fir-web24a-84704.firebaseapp.com',
        messagingSenderId: '860952435771',
      }),
    ),
    provideAuth(() => getAuth()),
  ],
};
