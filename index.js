function compareStudents(a, b) {
  // 1. First priority:
  if (a["chemistry"] + a["biology"] > b["chemistry"] + b["biology"]) {
    return -1;
  }
  if (a["chemistry"] + a["biology"] < b["chemistry"] + b["biology"]) {
    return 1;
  }

  // 2. Second priority: Biology
  if (a["biology"] > b["biology"]) {
    return -1;
  }
  if (a["biology"] < b["biology"]) {
    return 1;
  }

  // 3. Third priority: Date of birth
  const aDate = new Date(a["dob"].split("-").reverse().join("-"));
  const bDate = new Date(b["dob"].split("-").reverse().join("-"));
  if (aDate < bDate) {
    return -1;
  }
  if (aDate > bDate) {
    return 1;
  }

  return 0;
}

// Test cases
  let testCase1 = [
      {
        name: "Leo Messi",
        dob: "31-12-1995",
        biology: 95,
        chemistry: 91,
      },
      {
        name: "Cristiano Ronaldo",
        dob: "31-05-1992",
        biology: 90,
        chemistry: 81,
      },
      {
        name: "Virat Kohli",
        dob: "31-12-1995",
        biology: 95,
        chemistry: 96,
      },
      {
        name: "Rohit Sharma",
        dob: "31-12-1995",
        biology: 85,
        chemistry: 86,
      },
      {
        name: "Viswanathan Anand",
        dob: "12-12-1994",
        biology: 99,
        chemistry: 10,
      },
    ];
    testCase1.sort(compareStudents);
    console.log(testCase1);
    
    let testCase2 = [
      {
        name: "Leo Messi",
        dob: "31-12-1995",
        biology: 100,
        chemistry: 80,
      },
      {
        name: "Cristiano Ronaldo",
        dob: "31-05-1992",
        biology: 80,
        chemistry: 100,
      },
      {
        name: "Virat Kohli",
        dob: "31-12-1995",
        biology: 30,
        chemistry: 40,
      },
      {
        name: "Rohit Sharma",
        dob: "31-12-1995",
        biology: 40,
        chemistry: 30,
      },
      {
        name: "Viswanathan Anand",
        dob: "12-12-1994",
        biology: 99,
        chemistry: 10,
      },
    ];
    
testCase2.sort(compareStudents);
console.log(testCase2);
