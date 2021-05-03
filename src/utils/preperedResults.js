export const preperedResults = result => {
  if (!result) {
    return;
  }
  const createdDate = new Date(+result.date);
  const date = createdDate.toLocaleDateString();
  const time = createdDate.toLocaleTimeString();

  const testingResult = result.testing.reduce(
    (acc, test, index, arr) => {
      if (!acc.questionsCount) {
        acc = { ...acc, questionsCount: arr.length };
      }

      if (test.isTestPassed) {
        return { ...acc, trueAnswers: acc.trueAnswers + 1 };
      }

      return acc;
    },
    { trueAnswers: 0, questionsCount: 0 }
  );

  const totalScore = Math.round(
    (testingResult.trueAnswers / testingResult.questionsCount) * 100
  );

  return { ...result, date, time, totalScore };
};
