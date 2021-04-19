import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setQuestionSuccess,
  setAnswerSuccess,
} from '../../store/actions/testActions';
import { getTest } from '../../store/selectors/testSelectors';
import { addTest } from '../../utils/apiUtils';

export default function SimpleTest() {
  const dispatch = useDispatch();

  const [isInputTypeQuestion, setIsInputTypeQuestion] = useState(false);
  const [question, setQuestion] = useState('');
  const [trueAnswer, setTrueAnswer] = useState('');
  const [answer, setAnswer] = useState([]);
  const { answers, questions } = useSelector(getTest);

  const handleAdd = () => {
    if (isInputTypeQuestion) {
      dispatch(setQuestionSuccess({ question, trueAnswer }));
      dispatch(setAnswerSuccess(trueAnswer));
      setQuestion('');
      setTrueAnswer('');
      return;
    }

    dispatch(setAnswerSuccess(answer));
    setAnswer('');
  };

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'radio') {
      setIsInputTypeQuestion(!isInputTypeQuestion);
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

  return (
    <form>
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
    </form>
  );
}
