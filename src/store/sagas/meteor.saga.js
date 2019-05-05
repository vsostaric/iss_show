import {FETCH_METEOR_DATA, refreshMeteorDataAction} from "../actions";
import {call, put, takeLatest} from 'redux-saga/effects'
import {fetchMeteorData} from "../../services/meteor.service";

export function* fetchMeteorDataSaga() {

    const data = yield call(fetchMeteorData);
    yield put(refreshMeteorDataAction(data));

}

export function* watchMeteorDataSaga() {
    yield takeLatest(FETCH_METEOR_DATA, fetchMeteorDataSaga);
}
