# To Do List App for Getir by Oğulcan Dülger

This to do app is requested by Getir team for the React Developer role.

## How To Access the App

Open [https://to-do-app-getir.herokuapp.com/](https://to-do-app-getir.herokuapp.com/) to view it in your browser.


## Implementation

Hooks with Redux is used. 
One store for the items of the to do list.

When the app is opened the app fetches data from "https://jsonplaceholder.typicode.com/todos". Populates the list with 5 items of the response.

When a new item is added or the statues of the items are changed, the store updates itself. The app component renders itself after every update.