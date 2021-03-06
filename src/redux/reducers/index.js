import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import hillList from './hillsReducer';
import specificHill from './specificHillReducer';
import comment from './commentReducer';
import rating from './ratingReducer';
import hillsVisited from './hillsVisitedReducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  hillList, //will have the list of hills with the all of its values in the table
  specificHill, //will send the specific hill back with all information for it from hills table
  comment, //handles the comments from a user
  rating, //handles the ratings avg
  hillsVisited, //handles the hills that a user has rated and commented then sends the list
});

export default rootReducer;
