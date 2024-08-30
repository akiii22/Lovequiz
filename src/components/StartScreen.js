function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome Love</h2>
      <h3>{numQuestions} questions to test how much do you know me</h3>
      <button className="btn-start" onClick={() => dispatch({ type: "start" })}>
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
