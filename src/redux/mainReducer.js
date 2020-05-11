import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView42912Reducer from '../features/CalendarView42912/redux/reducers';
import EmailAuth42910Reducer from '../features/EmailAuth42910/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView42912: CalendarView42912Reducer,
EmailAuth42910: EmailAuth42910Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});