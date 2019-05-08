import axios from 'axios';

export const fetchIssPosition = () => {
    return axios.get("http://api.open-notify.org/iss-now.json")
        .then(function (response) {
            return response.data;
        }).catch(function (error) {
            console.log(error);
        });
};

export const findClosestMeteor = (position, meteor_data) => {

    let minDistance = Infinity;
    let closestMeteor = {};

    meteor_data.filter(data => data.geolocation && data.geolocation.coordinates)
        .forEach(data => {
            const meteorGeolocationCoordinates = data.geolocation.coordinates;
            const distance = calculateDistance(
                position.latitude, position.longitude,
                meteorGeolocationCoordinates[0], meteorGeolocationCoordinates[1]
            );

            if (distance < minDistance) {
                minDistance = distance;
                closestMeteor = data;
            }
        });

    return closestMeteor;
};

const calculateDistance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
};
