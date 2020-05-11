import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView42912Saga from '../features/CalendarView42912/redux/sagas';
import EmailAuth42910Saga from '../features/EmailAuth42910/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView42912Saga,
EmailAuth42910Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}