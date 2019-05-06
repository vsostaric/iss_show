import {
    FETCH_METEOR_DATA,
    GROUP_METEOR_COUNTS_BY_YEAR_DATA,
    groupMeteorCountsByYearAction,
    refreshMeteorDataAction,
    refreshMeteorYearGroupDataAction
} from "../actions";
import {call, put, takeLatest} from 'redux-saga/effects'
import {fetchMeteorData, groupMeteorDataByYear} from "../../services/meteor.service";

export function* fetchMeteorDataSaga() {

    const data = yield call(fetchMeteorData);
    yield put(groupMeteorCountsByYearAction(data));
    yield put(refreshMeteorDataAction(data));

}

export function* groupMeteorCountsByYearSaga(data) {

    const groupedData = yield call(groupMeteorDataByYear, data);
    yield put(refreshMeteorYearGroupDataAction(groupedData));

}

export function* watchMeteorDataSaga() {
    yield takeLatest(FETCH_METEOR_DATA, fetchMeteorDataSaga);
    yield takeLatest(GROUP_METEOR_COUNTS_BY_YEAR_DATA, groupMeteorCountsByYearSaga);
}
