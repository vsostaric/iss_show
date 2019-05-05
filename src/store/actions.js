export const FETCH_ISS_POSITION = 'FETCH_ISS_POSITION';
export const REFRESH_ISS_POSITION = 'REFRESH_ISS_POSITION';
export const FETCH_METEOR_DATA = 'FETCH_METEOR_DATA';
export const REFRESH_METEOR_DATA = 'REFRESH_METEOR_DATA';

export const fetchIssPositionAction = () => ({
    type: FETCH_ISS_POSITION
});

export const refreshIssPositionAction = (position) => ({
    type: REFRESH_ISS_POSITION,
    position: position.iss_position
});

export const fetchMeteorDataAction = () => ({
    type: FETCH_METEOR_DATA
});

export const refreshMeteorDataAction = (data) => ({
    type: REFRESH_METEOR_DATA,
    meteor_data: data
});
