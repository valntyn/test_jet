export type QuizOption = {
  text: string;
  isCorrect: boolean;
};

export type QuizQuestion = {
  question: string;
  options: QuizOption[];
};
