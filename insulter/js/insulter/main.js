function main() {
  const insults = [
    "You look like what morning breath smells like.",
    "If you tried to give me cpr I would probably throw myself back under water",
    "I am not a fan of you",
    "You think you're so special...and you are. The fact of your existence is nearly impossible to believe",
    "I'd rather walk than be on the same plane as you",
    "If I were given a million dollars to hang out with you...I would, but then I'd have to spend half of it on therapy",
    "Do you have to be so...like that?"
  ];

  // This code ensures we don't end up with duplicate insults
  const indexes = [];
  //while indexes array length is < 3, get random insults that do not duplicate and push the index number of that insult into the indexes array
  while (indexes.length < 3) {
    const candidate = getRandomInt(0, insults.length - 1);
    if (!indexes.includes(candidate)) {
      indexes.push(candidate);
    }
  }

  //then loop through the indexes array
  for (let i = 0; i < indexes.length; i++) {
    //set value at specific index to the variable index
    const index = indexes[i];
    //display the insult that pertains to that index number from the insults array
    console.log(insults[index]);
  }
}

// Remember getting a random integer in C# is different
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

main();