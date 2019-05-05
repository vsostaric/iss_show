import axios from 'axios';

export const fetchIssPosition = () => {
    return axios.get("http://api.open-notify.org/iss-now.json")
        .then(function (response) {
            return response.data;
        }).catch(function (error) {
            console.log(error);
        });
};
