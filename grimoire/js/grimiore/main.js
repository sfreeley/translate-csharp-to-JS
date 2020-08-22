function main() {
  console.log("Do you believe in magic?");
  console.log("------------------------");

  const allSpells = [
    {
      Name: "Turn enemy into a newt",
      IsEvil: true,
      EnergyReqired: 5.1
    },
    {
      Name: "Conjure some gold for a local charity",
      IsEvil: false,
      EnergyReqired: 2.99
    },
    {
      Name: "Give a deaf person the ability to heal",
      IsEvil: false,
      EnergyReqired: 12.2
    },
    {
      Name: "Make yourself emperor of the universe",
      IsEvil: true,
      EnergyReqired: 100.0
    },
    {
      Name: "Convince your relatives your political views are correct",
      IsEvil: false,
      EnergyReqired: 2921.5
    }
  ]

  const makeGoodSpellBook = (spells) => {
    const goodBook = {
      Title: "Good Book",
      Spells: spells.filter(spell => !spell.IsEvil)
    }

    return goodBook
  }

  const makeEvilSpellBook = (spells) => {
    const evilBook = {
      Title: "Evil Book",
      Spells: spells.filter(spell => spell.IsEvil)
    }
    return evilBook
  }

  const goodBook = makeGoodSpellBook(allSpells)
  const evilBook = makeEvilSpellBook(allSpells)

  const displaySpellBook = (book) => {
    console.log(book.Title);
    for (let aSpell of book.Spells) {
      console.log(aSpell.Name)
    }
  }

  displaySpellBook(goodBook);
  console.log("\n");
  displaySpellBook(evilBook);

}

main();