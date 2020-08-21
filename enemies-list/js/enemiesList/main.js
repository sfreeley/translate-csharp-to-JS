function main() {
  const enemies = [
    {
      FirstName: "Joshua",
      LastName: "Flowers",
      Offenses: {
        reason1: "Being a jerk to me in elementary school",
        reason2: "Not being nice to me in elementary school"
      },
      IsReallyHated: true
    },
    {
      FirstName: "Darth",
      LastName: "Vader",
      Offenses: {
        reason1: "Cut off Luke's hand",
        reason2: "Murdered all those kids",
        reason3: "Unkind management practices"
      },
      IsReallyHated: false
    },
    {
      FirstName: "Betty",
      LastName: "Rudelady",
      Offenses: {
        reason1: "Phone calls in the theater",
        reason2: "Phone calls on the bus",
        reason3: "Phone calls in line at the grocery store",
        reason4: "Poor conversationalist"
      },
      IsReallyHated: true
    },
    {
      FirstName: "Leon",
      LastName: "Peck",
      Offenses: {
        reason1: "Keeps giving me a hotplate"
      },
      IsReallyHated: false
    }

  ]

  console.log("My Enemies List!");
  console.log("----------------");

  for (let enemy of enemies) {
    if (enemy.IsReallyHated) {
      console.log(`${enemy.FirstName} ${enemy.LastName} (Really, really dislike!)`);
    } else {
      console.log(`${enemy.FirstName} ${enemy.LastName}`);
    }

  }

}

main();