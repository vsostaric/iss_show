import {
    FETCH_ISS_POSITION,
    FIND_YEAR_WITH_METEOR_DROP_CLOSEST_TO_ISS,
    findYearWithMeteorDropClosestToIssAction,
    refreshClosestMeteorNameAction,
    refreshClosestMeteorPositionAction,
    refreshClosestMeteorYearAction,
    refreshIssPositionAction, refreshMeteorDataAction
} from "../actions";
import {call, put, select, takeLatest} from 'redux-saga/effects'
import {fetchIssPosition, findClosestMeteor} from "../../services/iss.service"
import {fetchMeteorData} from "../../services/meteor.service";

export function* fetchIssPositionSaga() {

    const position = yield call(fetchIssPosition);
    yield put(refreshIssPositionAction(position));
    yield put(findYearWithMeteorDropClosestToIssAction(position));

}

export function* findYearWithMeteorDropClosestToIssSaga(data) {

    const state = yield select();
    let meteor_data = state.meteorReducer.meteor_data;
    if (!meteor_data) {
        meteor_data = yield call(fetchMeteorData);
        yield put(refreshMeteorDataAction(meteor_data));
    }

    const position = data.position.iss_position;

    const closestMeteor = yield call(findClosestMeteor, position, meteor_data);

    yield put(refreshClosestMeteorYearAction(new Date(closestMeteor.year).getFullYear().toString()));
    yield put(refreshClosestMeteorPositionAction(closestMeteor.geolocation.coordinates));
    yield put(refreshClosestMeteorNameAction(closestMeteor.name));

}

export function* watchAIssSaga() {
    yield takeLatest(FETCH_ISS_POSITION, fetchIssPositionSaga);
    yield takeLatest(FIND_YEAR_WITH_METEOR_DROP_CLOSEST_TO_ISS, findYearWithMeteorDropClosestToIssSaga);
}
