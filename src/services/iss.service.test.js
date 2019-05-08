import {findClosestMeteor} from "./iss.service";


test('test findClosestMeteor', () => {
    const iss_position = {latitude: "6.09333", longitude: "50.875"};
    const meteor_data =
        [{
            "fall": "Fell",
            "geolocation": {"type": "Point", "coordinates": [6.08333, 50.775]},
            "id": "1",
            "mass": "21",
            "name": "Aachen",
            "nametype": "Valid",
            "recclass": "L5",
            "reclat": "50.775000",
            "reclong": "6.083330",
            "year": "1880-01-01T00:00:00.000"
        }
            , {
            "fall": "Fell",
            "geolocation": {"type": "Point", "coordinates": [10.23333, 56.18333]},
            "id": "2",
            "mass": "720",
            "name": "Aarhus",
            "nametype": "Valid",
            "recclass": "H6",
            "reclat": "56.183330",
            "reclong": "10.233330",
            "year": "1951-01-01T00:00:00.000"
        }
            , {
            "fall": "Fell",
            "geolocation": {"type": "Point", "coordinates": [-113, 54.21667]},
            "id": "6",
            "mass": "107000",
            "name": "Abee",
            "nametype": "Valid",
            "recclass": "EH4",
            "reclat": "54.216670",
            "reclong": "-113.000000",
            "year": "1952-01-01T00:00:00.000"
        }
        ];
    const result = {};
    expect(findClosestMeteor(iss_position, meteor_data).name).toBe("Aachen");
});
