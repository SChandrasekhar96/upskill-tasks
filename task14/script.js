const divide = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b == 0) {
      reject("Division is not allowed");
    } else {
      resolve(a / b);
    }
  });
};

const testcase = [
  { a: 5, b: 0 },
  { a: 4, b: 1 },
  { a: 10, b: 3 },
  { a: 4, b: 0 },
  { a: 15, b: 4 },
];

testcase.forEach(async (testcase) => {
  try {
    const result = await divide(testcase.a, testcase.b);
    console.log(result);
  } catch {
    console.log("Division is not allowed");
  }
});
