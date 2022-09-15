function showHowMuchILoveYou(amount) {
  if (typeof amount == "number" && Number.isInteger(amount) && amount > 0) {
    return `I love you th${"7".repeat(amount)}s much!`;
  } else {
    throw new Error("It's not you, it's me");
  }
}

console.log(showHowMuchILoveYou(5));

module.exports = {
  showHowMuchILoveYou,
};
