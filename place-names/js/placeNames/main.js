function main() {
  //array of names
  const names = ["Nashville",
    "Hong Kong",
    "The back yard",
    "Earth",
    "London",
    "The mall",
    "Ryman Auditorium",
    "The Great Wall of China"]


  console.log("All Place Names");
  for (let name of names) {
    console.log(name);
  }

  console.log("\n");


  //console.log(place names with "The")
  console.log("'The' Place Names");
  const includeThe = "the"
  names.filter(name => {
    if (name.toLowerCase().includes(includeThe.toLowerCase())) {
      console.log(name);
    }
  })

  //another way console.log(place names with "The")
  names.filter(name => {
    if (name.startsWith('The')) {
      console.log(name);
    }
  })


}

main();