import {SET_STARS} from '../actions/actions';
import {combineReducers} from 'redux';

const initialStarList = {
  name:null,url:null,date:null
}

const setStars = (state = initialStarList, action) => {
  switch (action.type) {
    case SET_STARS:
      return Object.assign({},state,{
        name:action.name,
        url:action.url,
        date:action.date,
      });
    default :
      return state;
  }
};

const extra = (state = { list: 'this_is_extra_reducer' }, action) => {
  switch (action.type) {
    default: return state;
  }
}

// const listApp = combineReducers({
//     setStars,
//     extra
// });
// export default listApp;
export default combineReducers({
    setStars,
    extra
});