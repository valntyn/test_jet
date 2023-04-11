import { useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addResultToList } from '../../features/scoreSlice/scoreSlice';
import { QuizOption, QuizQuestion } from '../../types/QuizType';

import './Quiz.scss';

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(
    null,
  );
  const [score, setScore] = useState(0);
  const [correctScore, setCorrectScore] = useState(0);
  const [invalidScore, setInvalidScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [usedEnglishWords, setUsedEnglishWords] = useState<string[]>([]);

  const { words } = useAppSelector(state => state.words);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (questionNumber > 10) {
      setCurrentQuestion(null);
      dispatch(addResultToList(score));

      return;
    }

    const availableWords = words.filter(
      (word) => !usedEnglishWords.includes(word.english),
    );
    const correctWord
      = availableWords[Math.floor(Math.random() * availableWords.length)];

    if (correctWord) {
      const otherWords = words
        .filter((word) => word.id !== correctWord.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      const options: QuizOption[] = [
        { text: correctWord.native, isCorrect: true },
        ...otherWords.map((word) => ({ text: word.native, isCorrect: false })),
      ].sort(() => 0.5 - Math.random());

      const question: QuizQuestion = {
        question: correctWord.english,
        options,
      };

      setCurrentQuestion(question);
    }
  }, [words, questionNumber, usedEnglishWords]);

  const handleOptionClick = (isCorrect: boolean, text: string) => {
    if (isCorrect) {
      setCorrectScore((prev) => prev + 1);
      setScore((prevScore) => prevScore + 1);

      setUsedEnglishWords((prevUsedEnglishWords) => [
        ...prevUsedEnglishWords,
        text,
      ]);
    } else {
      setInvalidScore((prev) => prev + 1);
    }

    setQuestionNumber((prevQuestionNumber) => prevQuestionNumber + 1);
  };

  const handleClickRestart = () => () => {
    setQuestionNumber(1);
    setScore(0);
    setInvalidScore(0);
    setCorrectScore(0);
    setUsedEnglishWords([]);
  };

  if (!currentQuestion) {
    return (
      <div className="quiz">
        <p className="quiz__result">
          {`--- correct answers: ${correctScore * 10}% ---`}
        </p>
        <button
          type="button"
          className="quiz__finish-button"
          onClick={handleClickRestart()}
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="quiz">
      <p className="quiz__questions">{`Question ${questionNumber} of 10`}</p>
      <p className="quiz__word">{currentQuestion.question}</p>
      <div className="quiz__block">
        {currentQuestion.options.map((option) => (
          <button
            className="quiz__button"
            type="button"
            onClick={() => handleOptionClick(
              option.isCorrect, currentQuestion.question,
            )}
          >
            {option.text}
          </button>
        ))}
      </div>
      <p className="quiz__score">{`${correctScore}/${invalidScore}`}</p>
      <div className="quiz__finish-box">
        <button
          className="quiz__finish-button"
          type="button"
          onClick={() => setCurrentQuestion(null)}
        >
          Finish
        </button>
      </div>
    </div>
  );
};
