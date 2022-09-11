# My submission for pipeline eligibility assessment

## Project Title: A simple paginated table

## Technology: html, css, typescript

## How it works

### My Implementation consist of two files

1. fetchListFromApi.ts
2. app.ts

#### fetchListFromApi is responsible for making the api call to endpoint provided. it shows an alert if there was an error.

### app.ts is where the logic of the app resides. It consists of 4 major functions

#### 1. startApp(): This is called when the DOM has loaded structure and styles. It prefills the table with result of calling the fetchListFromApi function. It also initializes the buttons used for the control and their event handlers

#### 2. PopulatesTable(): Takes in data from the results of the api call and fills the dom with the result. It is being called by the startApp function

#### 3. nextPage(): This is being called by the event handler of the next button. It checks if there is a page preloaded before deciding to fetch the next page. It also removes disabled from the previous button

#### 4. previousPage(): this is also called by the event handler of the previous button. It checks if there is a preloaded page before deciding to fetch the previous page. After fetching, if there is no previous url on the response, it sets the previous button disabled
