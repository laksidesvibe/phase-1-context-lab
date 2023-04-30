/* Your Code Here */

const createEmployeeRecord = ([firstName, familyName, title, payPerHour]) => ({
    firstName,
    familyName,
    title,
    payPerHour,
    timeInEvents: [],
    timeOutEvents: [],
  });
  
  const createEmployeeRecords = (array) => array.map(createEmployeeRecord);
  
  const createTimeEvent = (type) => function(dateStamp) {
    const [date, hour] = dateStamp.split(' ')
    const timeEvent = {
      type,
      hour: parseInt(hour),
      date,
    };
    this[type === "TimeIn" ? "timeInEvents" : "timeOutEvents"].push(timeEvent);
    return this;
  };
  
  const createTimeInEvent = createTimeEvent("TimeIn");
  const createTimeOutEvent = createTimeEvent("TimeOut");
  
  const hoursWorkedOnDate = function(date) {
    const timeIn = this.timeInEvents.find((event) => event.date === date);
    const timeOut = this.timeOutEvents.find((event) => event.date === date);
    return (timeOut.hour - timeIn.hour) / 100;
  };
  
  const wagesEarnedOnDate = function(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
  };
  
  const findEmployeeByFirstName = (srcArray, firstName) =>
    srcArray.find((employee) => employee.firstName === firstName);
  
  const calculatePayroll = (array) =>
    array.reduce((total, employee) => total + allWagesFor.call(employee), 0);
  

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

