/* // function isLeapYear(year) {
  const reminder = year % 4;
  if (reminder === 0) {
    console.log("Your year is leap year ", year);
  } else {
    console.log("your year is naot a leap year ", year);
  }
}

// isLeapYear(1960);

// alterntive way using return
function isLeapYear(year) {
  const reminder = year % 4;
  if (reminder === 0) {
    return true;
    //   console.log("Your year is leap year ", year);
  } else {
    return false;
    //   console.log("your year is naot a leap year ", year);
  }
}

const boss = isLeapYear(1960);
// console.log(boss);
 */
// shortcut

function isLeapYear(year) {
  const reminder = year % 4;
  if (reminder === 0) {
    console.log("Your year is leap year ", year);
  } else {
    console.log("your year is naot a leap year ", year);
  }
}

const boss = isLeapYear(1960);
console.log(boss);
