import {FETCH_ISS_POSITION, refreshIssPositionAction} from "../actions";
import {takeLatest, call, put} from 'redux-saga/effects'
import {fetchIssPosition} from "../../services/iss.service"

export function* fetchIssPositionSaga() {

    const position = yield call(fetchIssPosition);
    yield put(refreshIssPositionAction(position));
    console.log(position);

}

export function* watchAIssSaga() {
    yield takeLatest(FETCH_ISS_POSITION, fetchIssPositionSaga);
}
