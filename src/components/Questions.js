import Options from "./Options";

function Questions({ question, answer, dispatch }) {
  console.log(question);
  return (
    <div className="question-container">
      <h1>{question.question}</h1>
      <Options question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}

export default Questions;
