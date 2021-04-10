import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTest } from '../../utils/apiUtils';

export default function SimpleTest() {
  const dispatch = useDispatch();

  const [isInputTypeQuestion, setIsInputTypeQuestion] = useState(false);
  const [theme, setTheme] = useState('');
  const [question, setQuestion] = useState('');
  const [trueAnswer, setTrueAnswer] = useState('');
  const [answer, setAnswer] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);

  const handleAdd = () => {
    if (isInputTypeQuestion) {
      const newQuestions = [...questions, { question, trueAnswer }];
      const newAnswers = [...answers, trueAnswer];

      setQuestions(newQuestions);
      setAnswers(newAnswers);
      setQuestion('');
      setTrueAnswer('');
      return;
    }

    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    setAnswer('');
  };

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'radio') {
      setIsInputTypeQuestion(!isInputTypeQuestion);
      return;
    }

    if (name === 'theme') {
      setTheme(value);
      return;
    }

    if (name === 'question') {
      setQuestion(value);
      return;
    }

    if (name === 'trueAnswer') {
      setTrueAnswer(value);
      return;
    }

    if (name === 'answer') {
      setAnswer(value);
      return;
    }
  };

  const hendleSubmit = e => {
    e.preventDefault();

    dispatch(addTest({ theme, test: { questions, answers } }));
  };

  return (
    <form onSubmit={hendleSubmit}>
      <label>
        <input
          type="radio"
          name="radio"
          checked={isInputTypeQuestion}
          onChange={handleChange}
        />
        Question
      </label>
      <label>
        <input
          type="radio"
          name="radio"
          checked={!isInputTypeQuestion}
          onChange={handleChange}
        />
        Answer
      </label>
      <br />
      <label>
        Theme:
        <input type="text" value={theme} name="theme" onChange={handleChange} />
      </label>
      <br />
      {isInputTypeQuestion ? (
        <>
          <label>
            Question:
            <input
              type="text"
              value={question}
              name="question"
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            True answer:
            <input
              type="text"
              name="trueAnswer"
              value={trueAnswer}
              onChange={handleChange}
            />
          </label>
        </>
      ) : (
        <label>
          Answer:
          <input
            type="text"
            name="answer"
            value={answer}
            onChange={handleChange}
          />
        </label>
      )}
      <br />
      <button type="button" onClick={handleAdd}>
        add
      </button>
      <div>
        <h1>Test:</h1>
        <h2>Theme: {theme}</h2>
        <h3>Questions: </h3>
        <ul>
          {questions.map(question => (
            <li key={question.question}>
              {question.question} - {question.trueAnswer}
            </li>
          ))}
        </ul>
        <h3>Answers: </h3>
        <ul>
          {answers.map(answer => (
            <li key={answer}>{answer}</li>
          ))}
        </ul>
      </div>
      <br />
      <button type="submit">Save test</button>
    </form>
  );
}
