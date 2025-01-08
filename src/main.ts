export function add(numbers: string): number {
  console.log("Input:", numbers);

  if (numbers === "") {
    return 0;
  }

  if (!numbers.includes(",") && !numbers.includes("\n")) {
    return parseInt(numbers, 10);
  }

  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    const delimiter = numbers.slice(2, delimiterEndIndex);

    const numbersWithoutDelimiter = numbers.slice(delimiterEndIndex + 1);
    const nums = numbersWithoutDelimiter
      .split(delimiter)
      .map((num) => parseInt(num, 10));

    return nums.reduce((sum, num) => sum + num, 0);
  }

  const nums = numbers.split(/[,\n]+/).map((num) => parseInt(num, 10));
  return nums.reduce((sum, num) => sum + num, 0);
}
