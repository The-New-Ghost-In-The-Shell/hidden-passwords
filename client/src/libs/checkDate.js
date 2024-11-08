import getActualTime from "../libs/getActualTime.js"
export const dateOK = (response, now) => {
    if(now.year > response.year) return true
    if (now.year == response.year && now.month >= response.month && now.day >= response.day && now.hours >= response.hours && now.minutes >= response.minutes) {
        return true
    }
    return false
}



const ahora = {
    "year": 2024,
    "month": 11,
    "day": 15,
    "hours": 21,
    "minutes": 3
}

const respuesta = {
    "passwordID": "991b5f61-2a32-40d1-895e-4025b88f41cb",
    "passwords": [
        "password5",
        "password6"
    ],
    "year": 2024,
    "month": 9,
    "day": 7,
    "hours": 18,
    "minutes": 3
}

// console.log(getActualTime(), "Soy el now de getActualTime")

// console.log(dateOK(respuesta, ahora))