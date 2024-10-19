export const dateOK = (response, actualDate) => {
    if (actualDate.actualYear >= response.year && actualDate.actualMonth >= response.month && actualDate.actualDay >= response.day && actualDate.actualHours >= response.hours && actualDate.actualMinutes >= response.minutes) {
        return true
    }
    return false
}


const response = {
    "_id": "6705c925f2d2a60c491ebb30",
    "passwords": [
        "8vu8mnr56ytKUXk19hIRjN7kD3eHbkIi"
    ],
    "year": 2024,
    "month": 11,
    "day": 8,
    "hours": 19,
    "minutes": 6,
    "__v": 0
}

const date = {
    actualHours: 19,
    actualMinutes: 36,
    actualYear: 2024,
    actualMonth: 10,
    actualDay: 9
}

console.log(dateOK(response, date))