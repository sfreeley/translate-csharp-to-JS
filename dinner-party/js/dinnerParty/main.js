function main() {
  //get all guests by invoking getGuests, which return an array of all the guests
  const guests = getGuests();
  //an object that consists of two properties Table1 and Table2 (both with empty arrays as values)
  const tables = {
    "Table 1": [],
    "Table 2": []
  };

  //iterating through the guests array; 
  for (const guest of guests) {
    //the value of tables.Table1 is array, use .map method on array to return 
    //the guest with a specified occupation
    const table1Occupations = tables["Table 1"].map(g => g.occupation);
    //if the array includes the guest's specified occupation... push that
    //guest object into Table2's array
    if (table1Occupations.includes(guest.occupation)) {
      tables["Table 2"].push(guest);
      //else, push that guest object into the first Table1 array
    } else {
      tables["Table 1"].push(guest);
    }
  }

  //loop through the keys of the table object Table1 and Table2
  for (const tableName of Object.keys(tables)) {
    //tableGuests variable has the values of Table1 and Table2
    const tableGuests = tables[tableName];
    console.log(tableName);
    //iterate through the tableGuests values 
    //and display name, occupation, and bio for each one
    for (const guest of tableGuests) {
      console.log(`${guest.name} (${guest.occupation}) ${guest.bio}`);
    }
  }
}


function getGuests() {
  return [
    {
      name: "Marilyn Monroe",
      occupation: "entertainer",
      bio: "(1926 - 1962) American actress, singer, model"
    },
    {
      name: "Abraham Lincoln",
      occupation: "politician",
      bio: "(1809 - 1865) US President during American civil war"
    },
    {
      name: "Martin Luther King",
      occupation: "activist",
      bio: "(1929 - 1968)  American civil rights campaigner"
    },
    {
      name: "Rosa Parks",
      occupation: "activist",
      bio: "(1913 - 2005)  American civil rights activist"
    },
    {
      name: "Peter Sellers",
      occupation: "entertainer",
      bio: "(1925 - 1980) British actor and comedian"
    },
    {
      name: "Alan Turing",
      occupation: "computer scientist",
      bio: "(1912 - 1954) - British computing pioneer, Turing machine, algorithms, cryptology, computer architecture, saved the world"
    },
    {
      name: "Admiral Grace Hopper (1906–1992) – developed early compilers: FLOW-Matic, COBOL; worked on UNIVAC; gave speeches on computer history, where she gave out nano-seconds",
      occupation: "computer scientist",
      bio: "(1906–1992) - developed early compilers: FLOW-Matic, COBOL; worked on UNIVAC; gave speeches on computer history, where she gave out nano-seconds"
    },
    {
      name: "Indira Gandhi",
      occupation: "politician",
      bio: "(1917 - 1984) Prime Minister of India 1966 - 1977",
    }
  ];
}

main();