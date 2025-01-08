export function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  if (!numbers.includes(",") && !numbers.includes("\n")) {
    const num = parseInt(numbers, 10);
    if (num < 0) {
      throw new Error(`Negatives not allowed: ${num}`);
    }
    return num;
  }

  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    const delimiter = numbers.slice(2, delimiterEndIndex);

    const numbersWithoutDelimiter = numbers.slice(delimiterEndIndex + 1);
    const nums = numbersWithoutDelimiter
      .split(delimiter)
      .map((num) => parseInt(num, 10));

    const negativeNumbers = nums.filter((num) => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`Negatives not allowed: ${negativeNumbers.join(", ")}`);
    }

    return nums.reduce((sum, num) => sum + num, 0);
  }

  const nums = numbers.split(/[,\n]+/).map((num) => parseInt(num, 10));
  const negativeNumbers = nums.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(`Negatives not allowed: ${negativeNumbers.join(", ")}`);
  }
  return nums.reduce((sum, num) => sum + num, 0);
}
