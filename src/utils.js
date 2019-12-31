
export const formatHolidays = (holidays) => {
  return holidays.map(holiday => {
    return {...holiday, date: new Date(holiday["date"])}
  })
}
