// Custom error class
class LessThanZeroError extends Error {
  constructor(message) {
    super(message)
    this.name = "LessThanZeroError"
    this.code = "ERR_NEGATIVE_INPUT"
  }
}

function mightThrowError(input) {
  if (input < 0) {
    throw new LessThanZeroError("Input should not be less than zero")
  }
  return input * 2
}

export function processInput(value) {
  try {
    if (typeof value !== "number") {
      const error = new TypeError("The provided input must be a number")
      error.code = "ERR_INVALID_INPUT"
      throw error
    }
    return mightThrowError(value)
  } catch (error) {
    if (error instanceof LessThanZeroError) {
      console.log(error.message)
      throw error
    } else {
      console.log("Something unexpected happened:", error)
      throw error
    }
  }
}

const testInputs = [5, -3, "10"];

testInputs.forEach((input) => {
  try {
    const result = processInput(input);
    console.log(`Success: ${result}`);
  } catch (error) {
    console.log(getFriendlyErrorMessage(error));
  }
});

function getFriendlyErrorMessage(error) {
  const errorCodeMap = {
    ERR_INVALID_INPUT: "The provided input is not valid.",
    ERR_NEGATIVE_INPUT: "Negative numbers are not allowed.",
    // Add more mappings as needed.
  };

  // Cast the error to any to access the errorCode property
  const errorCode = error.code;
  return errorCodeMap[errorCode] || error.message;
}