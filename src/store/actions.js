export const FETCH_ISS_POSITION = 'FETCH_ISS_POSITION';
export const REFRESH_ISS_POSITION = 'REFRESH_ISS_POSITION';
export const REFRESH_METEOR_DATA = 'REFRESH_METEOR_DATA';

export const fetchIssPositionAction = () => ({
    type: FETCH_ISS_POSITION
});

export const refreshIssPositionAction = (position) => ({
    type: REFRESH_ISS_POSITION,
    position: position.iss_position
});
