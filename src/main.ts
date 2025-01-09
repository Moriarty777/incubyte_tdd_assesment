export function add(numbers: string): number {
  //Return 0 for empty strings
  if (numbers === "") {
    return 0;
  }

  // Check for negative number function
  const checkForNegatives = (nums: number[]) => {
    const negativeNumbers = nums.filter((num) => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`Negatives not allowed: ${negativeNumbers.join(", ")}`);
    }
  };

  // Return same number if no delimiter present
  if (!numbers.includes(",") && !numbers.includes("\n")) {
    const num = parseInt(numbers, 10);
    checkForNegatives([num]);
    return num > 1000 ? 0 : num;
  }

  // If custom delimiter is present
  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    const customDelimiterPart = numbers.slice(2, delimiterEndIndex);

    let delimiter: string;
    if (
      customDelimiterPart.startsWith("[") &&
      customDelimiterPart.endsWith("]")
    ) {
      delimiter = customDelimiterPart.slice(1, -1); // Remove the square brackets
    } else {
      delimiter = customDelimiterPart; // Single character delimiter without brackets
    }

    const escapedDelimiter = delimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    const numbersWithoutDelimiter = numbers.slice(delimiterEndIndex + 1);
    const nums = numbersWithoutDelimiter
      .split(new RegExp(escapedDelimiter))
      .map((num) => Number(num))
      .filter((num) => num <= 1000);
    checkForNegatives(nums);
    return nums.reduce((sum, num) => sum + num, 0);
  }

  // Default case for comma and newline seperated numbers
  const nums = numbers
    .split(/[,\n]+/)
    .map((num) => Number(num))
    .filter((num) => num <= 1000);
  checkForNegatives(nums);
  return nums.reduce((sum, num) => sum + num, 0);
}
