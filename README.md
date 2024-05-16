# Schedule by datetime

## Usage
From hardcoded values:
```js
getStringFromScheduleTimeUnit(2024, 1, 1, 0, 0, '+01'); // '2024-01-01T00:00:00.000+01:00'
getStringFromScheduleTimeUnit(2024, 5, 16, 17, 18, '+01'); // '2024-05-16T17:18:00.000+01:00'
```

From Date object:
```js
const now = new Date();
getStringFromScheduleTimeUnit(
  now.getFullYear(),
  now.getMonth() + 1,
  now.getDate(),
  now.getHours(),
  now.getMinutes(),
  '+01'
); // '2024-05-16T17:26:00.000+01:00' but your will be different
```
