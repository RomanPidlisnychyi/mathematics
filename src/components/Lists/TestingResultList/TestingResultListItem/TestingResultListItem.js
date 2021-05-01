import styles from './TestingResultListItem.module.css';

export default function TestingResultListItem({ item }) {
  return (
    <li>
      {item.questions[0].question}
      <ul>
        {item.answers.map(answer => {
          const isTestPassed = item.questions[0].isTestPassed;
          const testAnswer = item.questions[0].answer;
          const currentStyle =
            testAnswer === answer
              ? `${styles.item} ${
                  isTestPassed ? styles.passed : styles.rejected
                }`
              : styles.item;
          return (
            <li key={answer} className={currentStyle}>
              {answer}
            </li>
          );
        })}
      </ul>
    </li>
  );
}
