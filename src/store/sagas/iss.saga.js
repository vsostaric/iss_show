import {FETCH_ISS_POSITION} from "../actions";
import {takeLatest} from 'redux-saga/effects'

export function* fetchIssPosition() {

    console.log("jasda");

}

export function* watchAIssSaga() {
    yield takeLatest(FETCH_ISS_POSITION, fetchIssPosition);
}
