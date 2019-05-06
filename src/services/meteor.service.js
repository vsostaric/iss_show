import axios from 'axios';

export const fetchMeteorData = () => {
    return axios.get("https://data.nasa.gov/resource/y77d-th95.json")
        .then(function (response) {
            return response.data;
        }).catch(function (error) {
            console.log(error);
        });
};

export const groupMeteorDataByYear = (data) => {
    const groupObject = data.meteor_data.map(d => d.year).filter(d => d).map(d => {
        return {year: new Date(d).getFullYear()}
    })
        .reduce(function (group, item) {
            const key = item.year;
            group[key] = group[key] || 0;
            group[key] = group[key] + 1;
            return group;
        }, {});

    const groups = [];

    Object.keys(groupObject).forEach(key => {
        groups.push({
            year: key,
            count: groupObject[key]
        })
    });

    return groups;

};
