// code your solution here
function superbowlWin(record) {
    for (let element of record) {
    if (element.result === "W") {
        return element.year
    }
  }
}
