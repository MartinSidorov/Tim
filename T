let countCode = (letter) => {
  found = 0
  codeNum = 0
  while (codeNum < data.length) {
    if (data[codeNum].startsWish(letter)) {
      found++
      //console.log(found)
    }
    codeNum++
  }
  return
}

console.log(countCode(´i´))

console.log(countCode(´K´))

console.log(countCode(´U´))
