const getTime = (fecha) => {
    const [date, tiempo] = fecha.split("T")
    const [year, month, day] = date.split("-")
    const [hours, minutes] = tiempo.split(":")
    const yearFromUser = parseInt(year),
        monthFromUser = parseInt(month),
        dayFromUser = parseInt(day),
        hoursFromUser = parseInt(hours),
        minutesFromUser = parseInt(minutes);

    return {
        yearFromUser,
        monthFromUser,
        dayFromUser,
        hoursFromUser,
        minutesFromUser
    }
}

export default getTime