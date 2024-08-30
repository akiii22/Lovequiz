import { useState } from "react";

function Finished({ dispatch, points, maxPossiblePoints }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const percentage = (points / maxPossiblePoints) * 100;
  let message;

  if (percentage === 100) {
    message = "🥰 Perfect match! You know me so well!";
  } else if (percentage >= 80) {
    message = "😍 Almost perfect! You really know me!";
  } else if (percentage >= 60) {
    message = "😊 Good job! You know me pretty well.";
  } else if (percentage >= 40) {
    message = "😅 Not bad, but there's room for improvement.";
  } else if (percentage >= 10) {
    message = "🥲 Ouch! We need to talk about this...";
  } else {
    message = "💔 I'm really disappointed. Let's work on this.";
  }

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleRestart = () => {
    handleToggleModal();
    dispatch({ type: "restart" });
  };

  return (
    <>
      <div className="btn-results">
        <button className="btn-showresult" onClick={handleToggleModal}>
          Show Results
        </button>
        <button className="btn-restart" onClick={handleRestart}>
          Restart
        </button>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p className="result">
              <span className="close" onClick={handleToggleModal}>
                &times;
              </span>
              <span className="message">{message}</span>
              You scored <strong>{points}</strong> out of {maxPossiblePoints} (
              {Math.ceil(percentage)}%)
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Finished;
