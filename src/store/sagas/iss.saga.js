import {FETCH_ISS_POSITION, refreshIssPositionAction} from "../actions";
import {call, put, takeLatest} from 'redux-saga/effects'
import {fetchIssPosition} from "../../services/iss.service"

export function* fetchIssPositionSaga() {

    const position = yield call(fetchIssPosition);
    yield put(refreshIssPositionAction(position));

}

export function* watchAIssSaga() {
    yield takeLatest(FETCH_ISS_POSITION, fetchIssPositionSaga);
}
