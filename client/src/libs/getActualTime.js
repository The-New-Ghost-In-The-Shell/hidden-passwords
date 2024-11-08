const getActualTime = () => {
    const now = new Date(),
        actualHours = parseInt(now.getHours()),
        actualMinutes = parseInt(now.getMinutes()),
        [actualYear,actualMonth,actualDay] = now.toISOString().split('T')[0].split('-')

    return {
        hours: actualHours,
        minutes: actualMinutes,
        month: parseInt(actualMonth),
        day: parseInt(actualDay),
        year: parseInt(actualYear)
    }
}


export default getActualTime