const getStringFromScheduleTimeUnit = require('./app');

describe('getStringFromScheduleTimeUnit()', () => {
    test('1st January is displayed correctly', () => {
        expect(
            getStringFromScheduleTimeUnit(2024, 1, 1, 0, 0, '+01')
        ).toBe('2024-01-01T00:00:00.000+01:00');
    });

    test('hardcoded time is displayed correctly', () => {
        expect(
            getStringFromScheduleTimeUnit(2024, 5, 16, 17, 18, '+01')
        ).toBe('2024-05-16T17:18:00.000+01:00');
    });

    test.skip('current time is displayed correctly', () => {
        const now = new Date();
        const [
            year,
            month,
            day,
            hour,
            minute,
            timeZoneOffset
        ] = [
            now.getFullYear(),
            now.getMonth() + 1,
            now.getDate(),
            now.getHours(),
            now.getMinutes(),
            '+01']
        expect(
            getStringFromScheduleTimeUnit(year, month, day, hour, minute, timeZoneOffset)
        ).toBe(
            `${year}-${month}-${day}T${hour}:${minute}:00.000${timeZoneOffset}:00`

        );
    });
});

