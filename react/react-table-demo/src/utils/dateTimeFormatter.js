export function dateTimeFormatter(dateTime) {
    const [date, time] = dateTime.split('T')
    const [year, month, day] = date.split('-')
    return `${day}/${month}/${year}`
}  