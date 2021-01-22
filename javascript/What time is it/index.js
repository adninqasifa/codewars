function toHumanTime(timestring) {
  let nbrs = "twelve,one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen,fourteen,quarter,sixteen,seventeen,eighteen,nineteen,twenty,twenty-one,twenty-two,twenty-three,twenty-four,twenty-five,twenty-six,twenty-seven,twenty-eight,twenty-nine,half".split(","),
      [h,m] = timestring.match(/\d\d/g).map(Number);
  return m==0 ? `${nbrs[h%12]} o'clock` : m<31 ? `${nbrs[m]}${m%15?" minute"+(m==1?"":"s"):""} past ${nbrs[h%12]}` : `${nbrs[60-m]}${m!=45?" minute"+(m==59?"":"s"):""} to ${nbrs[h%12+1]}` ;
}

// Test Function do not edit
function Test(fun, result) {
  console.log(JSON.stringify(fun) === JSON.stringify(result));
}

// Test assertions
Test(toHumanTime("05:28 pm"), 'twenty-eight minutes past five');
Test(toHumanTime("12:00"), 'twelve o\'clock');
Test(toHumanTime("03:45am"), 'quarter to four');
Test(toHumanTime('07:15'), 'quarter past seven');
Test(toHumanTime("23:30"), 'half past eleven');
Test(toHumanTime("00:01"), 'one minute past twelve');
Test(toHumanTime("17:51"), 'nine minutes to six');

// DONE
