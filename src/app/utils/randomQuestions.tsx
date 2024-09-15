

import { Question } from "../data/questions";

export const getRandomQuestions = (questions: Question[], numberOfQuestions: number): Question[] => {
  const shuffled = questions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numberOfQuestions);
};