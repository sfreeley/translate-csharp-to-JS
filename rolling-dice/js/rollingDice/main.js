function main() {
  console.log("Let's roll some dice, baby!");
  console.log("---------------------------")

  for (let i = 0; i < 10; i++) {
    let dieString;
    let dieString2;
    let rolledNumber = Math.floor(Math.random() * ((6 - 1) + 1)) + 1;
    let rolledNumber2 = Math.floor(Math.random() * ((6 - 1) + 1)) + 1;

    switch (rolledNumber) {
      case 1:
        dieString = "\u2680"
        break;
      case 2:
        dieString = "\u2681";
        break;
      case 3:
        dieString = "\u2682";
        break;
      case 4:
        dieString = "\u2683";
        break;
      case 5:
        dieString = "\u2684";
        break;
      case 6:
        dieString = "\u2685";
        break;

    }

    switch (rolledNumber2) {
      case 1:
        dieString2 = "\u2680"
        break;
      case 2:
        dieString2 = "\u2681";
        break;
      case 3:
        dieString2 = "\u2682";
        break;
      case 4:
        dieString2 = "\u2683";
        break;
      case 5:
        dieString2 = "\u2684";
        break;
      case 6:
        dieString2 = "\u2685";
        break;

    }

    let message = `${dieString} + ${dieString2}  == ${rolledNumber + rolledNumber2}`
    if (rolledNumber == rolledNumber2) {
      console.log(`${message} DOUBLES!`)
    } else {
      console.log(message)
    }


  }


}

main();