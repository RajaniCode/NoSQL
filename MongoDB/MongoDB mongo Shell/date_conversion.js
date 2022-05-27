var date_time = new Date();

print();

print("toDateString() on new Date() Returns the \"date\" portion of the Date as a human-readable string.");
print(date_time.toDateString());

print();

print("toISOString() on new Date() Converts a date to a string following the ISO 8601 Extended Format. ");
print(date_time.toISOString());

print();

print("toJSON() on new Date() Returns a string representing the Date using toISOString(). Intended for use by JSON.stringify().");
print(date_time.toJSON());

print();

// Use toUTCString() instead.
print("toGMTString() on new Date() Returns a string representing the Date based on the GMT (UT) time zone. Use toUTCString() instead.");
print(date_time.toGMTString());

print();

print("toLocaleDateString() on new Date() Returns a string with a locality sensitive representation of the date portion of this date based on system settings.");
print(date_time.toLocaleDateString());

print();

print("toLocaleFormat() on new Date() Converts a date to a string, using a format string.");
print("toLocaleFormat() on new Date() API has not been standardized")
// print(date_time.toLocaleString());

print();

print("toLocaleString() on new Date() Returns a string with a locality sensitive representation of this date. Overrides the Object.prototype.toLocaleString() method.");
print(date_time.toLocaleString());

print();

print("toLocaleTimeString() Returns a string with a locality sensitive representation of the time portion of this date based on system settings.");
print(date_time.toLocaleTimeString());

print();

print("toSource() on new Date() Returns a string representing the source for an equivalent Date object; you can use this value to create a new object. Overrides the Object.prototype.toSource() method.");
print("toSource() on new Date() API has not been standardized")
// print(date_time.toSource());

print();

print("toString() on new Date() Returns a string representing the specified Date object. Overrides the Object.prototype.toString() method.");
print(date_time.toString());

print();

print("toTimeString() on new Date() Returns the \"time\" portion of the Date as a human-readable string.");
print(date_time.toTimeString())

print();

print("toUTCString() on new Date() Converts a date to a string using the UTC timezone.");
print(date_time.toUTCString());

print();

print("valueOf() on new Date() Returns the primitive value of a Date object. Overrides the Object.prototype.valueOf() method.");
print(date_time.valueOf());

print();