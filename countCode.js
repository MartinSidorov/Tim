function countCode(input) {
  let count = 0;
  const regex = /co.e/gi;

  while (regex.exec(input)) {
    count++;
  }

  return count;
}
