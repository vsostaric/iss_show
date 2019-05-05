import axios from 'axios';

export const fetchMeteorData = () => {
    return axios.get("https://data.nasa.gov/resource/y77d-th95.json")
        .then(function (response) {
            return response.data;
        }).catch(function (error) {
            console.log(error);
        });
};
