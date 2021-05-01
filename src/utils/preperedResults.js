export const preperedResults = result => {
  const createdDate = new Date(+result.date);
  const date = createdDate.toLocaleDateString();
  const time = createdDate.toLocaleTimeString();

  const totalScore = result.testing.reduce((acc, test, index, arr) => {
    if (test.questions[0].isTestPassed) {
      return (acc += 1);
    }

    return `${(acc / arr.length) * 100}%`;
  }, 0);

  return { ...result, date, time, totalScore };
};
