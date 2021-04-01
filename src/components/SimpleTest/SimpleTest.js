import React, { useState } from 'react';

// const tests = [{}];

export default function SimpleTest() {
  const [thema, setThema] = useState('');
  const [someInput, setSomeInput] = useState('');
  const [isInputTypeQuestion, setIsInputTypeQuestion] = useState(false);
  const [trueAnswer, setTrueAnswer] = useState('');
  const [answers, setAnswers] = useState([]);
  const [test, setTest] = useState({});

  const hendlerSubmit = e => {
    e.preventDefault();
    if (trueAnswer) {
      const { questions } = test;
      setTest({
        ...test,
        thema,
        questions: questions
          ? [...questions, { question: someInput, trueAnswer }]
          : [{ question: someInput, trueAnswer }],
      });
      setAnswers([...answers, trueAnswer]);
      setIsInputTypeQuestion(false);
      setSomeInput('');
      setTrueAnswer('');
      return;
    }
    if (someInput) {
      setAnswers([...answers, someInput]);
      setSomeInput('');
      return;
    }

    setTest({
      ...test,
      answers: [...answers],
    });
    setThema('');
    setAnswers([]);
  };

  return (
    <form onSubmit={hendlerSubmit}>
      <label>
        <input
          type="radio"
          checked={isInputTypeQuestion}
          onChange={() => setIsInputTypeQuestion(!isInputTypeQuestion)}
        />
        Question
      </label>
      <label>
        <input
          type="radio"
          checked={!isInputTypeQuestion}
          onChange={() => setIsInputTypeQuestion(!isInputTypeQuestion)}
        />
        Answer
      </label>
      <br />
      {test && !test.thema && isInputTypeQuestion && (
        <label>
          Thema:
          <input
            type="text"
            value={thema}
            onChange={e => setThema(e.target.value)}
          />
        </label>
      )}
      <br />
      <label>
        {isInputTypeQuestion ? 'Question' : 'Answer'}:
        <input
          type="text"
          value={someInput}
          name={isInputTypeQuestion ? 'question' : 'answer'}
          onChange={e => setSomeInput(e.target.value)}
        />
      </label>
      <br />
      {isInputTypeQuestion && (
        <>
          <label>
            True answer:
            <input
              type="text"
              value={trueAnswer}
              onChange={e => setTrueAnswer(e.target.value)}
            />
          </label>
          <br />
        </>
      )}
      <button type="submit" disabled={!trueAnswer && !someInput}>
        add
      </button>
      {test.questions && (
        <div>
          <h1>Test:</h1>
          <h2>Thema: {test.thema}</h2>
          <h3>Questions: </h3>
          <ul>
            {test.questions.map(question => (
              <li key={question.question}>{question.question}</li>
            ))}
          </ul>
          <h3>Answers: </h3>
          <ul>
            {answers.map(answer => (
              <li key={answer}>{answer}</li>
            ))}
          </ul>
        </div>
      )}
      <br />
      <button type="submit" disabled={!test.questions}>
        Test build compleate
      </button>
    </form>
  );
}
