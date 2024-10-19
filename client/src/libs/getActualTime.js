const getActualTime = () => {
    const now = new Date(),
        actualHours = parseInt(now.getHours()),
        actualMinutes = parseInt(now.getMinutes()),
        [actualYear,actualMonth,actualDay] = now.toISOString().split('T')[0].split('-')

    return {
        actualHours,
        actualMinutes,
        actualMonth: parseInt(actualMonth),
        actualDay: parseInt(actualDay),
        actualYear: parseInt(actualYear)
    }
}

console.log(getActualTime())

export default getActualTime