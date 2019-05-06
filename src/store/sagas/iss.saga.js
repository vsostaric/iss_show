import {
    FETCH_ISS_POSITION,
    FIND_YEAR_WITH_METEOR_DROP_CLOSEST_TO_ISS,
    findYearWithMeteorDropClosestToIssAction, refreshClosestYearAction,
    refreshIssPositionAction
} from "../actions";
import {call, put, takeLatest, select} from 'redux-saga/effects'
import {fetchIssPosition, findYearWithClosestMeteor} from "../../services/iss.service"

export function* fetchIssPositionSaga() {

    const position = yield call(fetchIssPosition);
    yield put(refreshIssPositionAction(position));
    yield put(findYearWithMeteorDropClosestToIssAction(position));

}

export function* findYearWithMeteorDropClosestToIssSaga(data) {

    const state = yield select();
    const meteor_data = state.meteorReducer.meteor_data;
    const position = data.position.iss_position;

    const closestYear = yield call(findYearWithClosestMeteor, position, meteor_data);

    yield put(refreshClosestYearAction(closestYear));

}

export function* watchAIssSaga() {
    yield takeLatest(FETCH_ISS_POSITION, fetchIssPositionSaga);
    yield takeLatest(FIND_YEAR_WITH_METEOR_DROP_CLOSEST_TO_ISS, findYearWithMeteorDropClosestToIssSaga);
}
