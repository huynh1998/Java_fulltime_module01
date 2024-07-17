let MyDate = function (day, month, year) {
  (this.day = day), (this.month = month), (this.year = year);
};
this.getDay = function () {
  return this.day;
};
this.getMonth = function () {
  return this.month;
};
