const getStringFromScheduleTimeUnit = (year, month, day, hour, minute, timeZoneOffset) => {
    month = zeroPad(month, 2);
    day = zeroPad(day, 2);
    hour = zeroPad(hour, 2);
    minute = zeroPad(minute, 2);
    return `${year}-${month}-${day}T${hour}:${minute}:00.000${timeZoneOffset}:00`;
};
const zeroPad = (num, places) => String(num).padStart(places, '0');

module.exports = getStringFromScheduleTimeUnit;
