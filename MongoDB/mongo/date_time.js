var date_time = new Date();
print("\nJavaScript Date object refers to the current date and time according to system settings.");
print("new Date() " + date_time);
print("toDateString() " + date_time.toDateString());
print("toISOString() " + date_time.toISOString());
print("toJSON() " + date_time.toJSON());
print("Use toUTCString() instead of toGMTString() " + date_time.toGMTString());
print("toLocaleDateString() " + date_time.toLocaleDateString());
print("toLocaleString() " + date_time.toLocaleString());
print("toLocaleTimeString() " + date_time.toLocaleTimeString());
print("toString() " +  date_time.toString());
print("toTimeString() "  + date_time.toTimeString())
print("toUTCString() " + date_time.toUTCString());
print("valueOf() " + date_time.valueOf());
print("new Date(valueOf()) " + new Date(date_time.valueOf()));

String.prototype.format = function () {
	var args = arguments;
	return this.replace(/\{\{|\}\}|\{(\d+)\}/g, function (curlyBrack, index) {
		return ((curlyBrack == "{{") ? "{" : ((curlyBrack == "}}") ? "}" : args[index]));
	});
};

print("Manual String Format h:m:s {0}:{1}:{2}".format(date_time.getHours(), date_time.getMinutes(), date_time.getSeconds()));
print("Manual String Format m-d-yyyy {0}-{1}-{2}".format(date_time.getMonth() + 1, date_time.getDay(), date_time.getFullYear()));

print();

var time = date_time.getTime();
print("getTime() on new Date() method returns the numeric value corresponding to the time for the specified date according to universal time. This method is functionally equivalent to the valueOf() method. ");
print(time);
print("new Date(getTime() on new Date()) " + new Date(time));

print();

function sleep(delay) {
	var start = new Date().getTime();
	while (new Date().getTime() < start + delay);
}
print("Wait for 15 seconds.");
sleep(15000);
print("15 seconds elapsed.");

print();

var date_split = date_time.toString().trim().split(/\s+/);
var current_weekday = date_split[0]; 
var current_month = date_split[1];
var current_time = date_split[4];
var current_gmt = date_split[5];
print("Current Weekday: " + current_weekday);
print("Current Month: " + current_month);
print("Current Time: " + current_time);
print("Current GMT: " + current_gmt);
var timezone_split = date_time.toString().trim().split(/\(+/);
var split_timezone = timezone_split[1].split(/\)+/);
var current_timezone = split_timezone[0];
print("Current Time Zone: " + current_timezone);

print();

var locale_date = date_time.toLocaleDateString();
print("toLocaleDateString() on new Date() Returns a string with a locality sensitive representation of the date portion of this date based on system settings.");
print("Locale Date: " + locale_date);
// print("Current Weekday: " + locale_date.split(/[,]+/)[0]);
print("Current Weekday: " + locale_date.split(/\,+/)[0]);
// print("Current Month: " + locale_date.split(/[,]+/)[1].trim().split(/[ ]+/)[0]);
print("Current Month: " + locale_date.split(/\,+/)[1].trim().split(/\s+/)[0]);

print();

for (var i = 1; i < 8; i++) {
	var string_date = "1/" + i + "/" + date_time.getFullYear();
	var date_weekday = new Date(string_date);
	var split_weekday = date_weekday.toString().trim().split(/\s+/);
	var weekday = split_weekday[0];
	print("Short Weekday: " + weekday);
}

print();

for (var i = 1; i < 8; i++) {
	var string_date = "1/" + i + "/" + date_time.getFullYear();
	var date_weekday = new Date(string_date);	
	var weekday_locale = date_weekday.toLocaleDateString();
	// var locale_split = weekday_locale.split(/[,]+/);
	var locale_split = weekday_locale.split(/\,+/);
	var long_weekday = locale_split[0];
	print("Long Weekday: " + long_weekday);
}

print();

for (var i = 1; i < 13; i++) {
	var string_date = i + "/1/" + date_time.getFullYear();
	var date_month = new Date(string_date);
	var month_split = date_month.toString().split(/\s+/);
	var month = month_split[1];
	print("Short Month: " + month);
}

print();

for (i = 1; i < 13; i++) {
	var string_date = i + "/1/" + date_time.getFullYear();
	var date_month = new Date(string_date);	
	var locale_date = date_month.toLocaleDateString();
	// var locale_split = locale_date.split(/[,]+/);
	var locale_split = locale_date.split(/\,+/);
	// var month_split = locale_split[1].trim().split(/[ ]+/);
	var month_split = locale_split[1].trim().split(/\s+/);
	var long_month = month_split[0];
	print("Long Month: " + long_month);
}

print();

Date.prototype.stdTimezoneOffset = function() {
	var jan = new Date(this.getFullYear(), 0, 1);
	var jul = new Date(this.getFullYear(), 6, 1);
	return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
}

Date.prototype.dst = function() {
	return this.getTimezoneOffset() < this.stdTimezoneOffset();
}
print("Date.prototype: Allows the addition of properties to a JavaScript Date object.");
print("Daylight Saving Time: " + date_time.dst());

print();

print("The value of Date.length is 7. This is the number of arguments handled by the constructor.");
print("Date.length: " + Date.length);

print();

var date_now = Date.now();
print("Date.now() Returns the numeric value corresponding to the current time - the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC. And is same as getTime() on new Date().");
print("Date.now(): " + date_now);
print("new Date(Date.now()): " + new Date(date_now));

print();

var date_parse = Date.parse("Wed Sep 30 2015 19:38:37 GMT+0530 (India Standard Time)");
print("Date.parse() Parses a string representation of a date and returns the number of milliseconds since 1 January, 1970, 00:00:00, UTC.");
print("Date.parse(\"Wed Sep 30 2015 19:38:37 GMT+0530 (India Standard Time)\"): " + date_parse);
print("new Date(Date.parse(\"Wed Sep 30 2015 19:38:37 GMT+0530 (India Standard Time))\"): " + new Date(date_parse));

print()

var utc_date = new Date(Date.UTC(2015, 9, 1, 0, 0, 0, 0));
print("Date.UTC() Accepts the same parameters as the longest form of the constructor (i.e. 2 to 7) and returns the number of milliseconds since 1 January, 1970, 00:00:00 UTC.");
print("Date.UTC(year, month[, day[, hour[, minute[, second[, millisecond]]]]])");
print("new Date(Date.UTC(2015, 9, 1, 0, 0, 0, 0)): " + utc_date);

print();

print("getDate() on new Date() Returns the day of the month (1-31) for the specified date according to local time.");
print(date_time.getDate());

print();

print("getDay() on new Date() Returns the day of the week (0-6) for the specified date according to local time.");
print(date_time.getDay());

print();

print("getFullYear() on new Date() Returns the year (4 digits for 4-digit years) of the specified date according to local time.");
print(date_time.getFullYear());

print();

print("getHours() on new Date() Returns the hour (0-23) in the specified date according to local time.");
print(date_time.getHours());

print();

print("getMilliseconds() on new Date() Returns the milliseconds (0-999) in the specified date according to local time.");
print(date_time.getMilliseconds());

print();

print("getMinutes() on new Date() Returns the minutes (0-59) in the specified date according to local time.");
print(date_time.getMinutes());

print();

print("getMonth() on new Date() Returns the month (0-11) in the specified date according to local time.");
print(date_time.getMonth());

print();

print("getSeconds() on new Date() Returns the seconds (0-59) in the specified date according to local time.");
print(date_time.getSeconds());

print();

print("getTime() on new Date() Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC (negative for prior times).");
print(date_time.getTime());

print();

print("getTimezoneOffset() on new Date() Returns the time-zone offset in minutes for the current locale.");
print(date_time.getTimezoneOffset());

print();

print("getUTCDate() on new Date() Returns the day (date) of the month (1-31) in the specified date according to universal time.");
print(date_time.getUTCDate());

print();

print("getUTCDay() on new Date() Returns the day of the week (0-6) in the specified date according to universal time.");
print(date_time.getUTCDay());

print();

print("getUTCFullYear() on new Date() Returns the year (4 digits for 4-digit years) in the specified date according to universal time.");
print(date_time.getUTCFullYear());

print();

print("getUTCHours() on new Date() Returns the hours (0-23) in the specified date according to universal time.");
print(date_time.getUTCHours());

print();

print("getUTCMilliseconds() on new Date() Returns the milliseconds (0-999) in the specified date according to universal time.");
print(date_time.getUTCMilliseconds());

print();

print("getUTCMinutes() on new Date() Returns the minutes (0-59) in the specified date according to universal time.");
print(date_time.getUTCMinutes());

print();

print("getUTCMonth() on new Date() getUTCMonth() Returns the month (0-11) in the specified date according to universal time.");
print(date_time.getUTCMonth());

print();

print("getUTCSeconds() on new Date() Returns the seconds (0-59) in the specified date according to universal time.");
print(date_time.getUTCSeconds());

print();

print("getYear() on new Date() Returns the year (usually 2-3 digits) in the specified date according to local time. Use getFullYear() instead.");
print(date_time.getYear());

print();

/*
Custom Date And Time Format Specifiers

https://code.google.com/p/datejs/wiki/FormatSpecifiers


Format  Description                                                                  Example
------  ---------------------------------------------------------------------------  -----------------------
 s      The seconds of the minute between 0-59.                                      "0" to "59"
 ss     The seconds of the minute with leading zero if required.                     "00" to "59"
 
 m      The minute of the hour between 0-59.                                         "0"  or "59"
 mm     The minute of the hour with leading zero if required.                        "00" or "59"
 
 h      The hour of the day between 1-12.                                            "1"  to "12"
 hh     The hour of the day with leading zero if required.                           "01" to "12"
 
 H      The hour of the day between 0-23.                                            "0"  to "23"
 HH     The hour of the day with leading zero if required.                           "00" to "23"
 
 d      The day of the month between 1 and 31.                                       "1"  to "31"
 dd     The day of the month with leading zero if required.                          "01" to "31"
 ddd    Abbreviated day name. Date.CultureInfo.abbreviatedDayNames.                  "Mon" to "Sun" 
 dddd   The full day name. Date.CultureInfo.dayNames.                                "Monday" to "Sunday"
 
 M      The month of the year between 1-12.                                          "1" to "12"
 MM     The month of the year with leading zero if required.                         "01" to "12"
 MMM    Abbreviated month name. Date.CultureInfo.abbreviatedMonthNames.              "Jan" to "Dec"
 MMMM   The full month name. Date.CultureInfo.monthNames.                            "January" to "December"

 yy     The year as a two-digit number.                                              "99" or "08"
 yyyy   The full four digit year.                                                    "1999" or "2008"
 
 t      Displays the first character of the A.M./P.M. designator.                    "A" or "P"
        $C.amDesignator or Date.CultureInfo.pmDesignator
 tt     Displays the A.M./P.M. designator.                                           "AM" or "PM"
        $C.amDesignator or Date.CultureInfo.pmDesignator
 
 S      The ordinal suffix ("st, "nd", "rd" or "th") of the current day.            "st, "nd", "rd" or "th"


Standard Date And Time Format Specifiers

Format  Description                                                                  Example ("en-US")
------  ---------------------------------------------------------------------------  -----------------------
 d      The CultureInfo shortDate Format Pattern                                     "M/d/yyyy"
 D      The CultureInfo longDate Format Pattern                                      "dddd, MMMM dd, yyyy"
 F      The CultureInfo fullDateTime Format Pattern                                  "dddd, MMMM dd, yyyy h:mm:ss tt"
 m      The CultureInfo monthDay Format Pattern                                      "MMMM dd"
 r      The CultureInfo rfc1123 Format Pattern                                       "ddd, dd MMM yyyy HH:mm:ss GMT"
 s      The CultureInfo sortableDateTime Format Pattern                              "yyyy-MM-ddTHH:mm:ss"
 t      The CultureInfo shortTime Format Pattern                                     "h:mm tt"
 T      The CultureInfo longTime Format Pattern                                      "h:mm:ss tt"
 u      The CultureInfo universalSortableDateTime Format Pattern                     "yyyy-MM-dd HH:mm:ssZ"
 y      The CultureInfo yearMonth Format Pattern                                     "MMMM, yyyy"
 
 */