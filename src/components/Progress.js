function Progress({ index, numQuestion, points, maxPossiblePoints, answer }) {
  return (
    <div className="progress">
      <progress
        className="progress-bar"
        max={numQuestion}
        value={index + Number(answer !== null)}
      ></progress>
      <div className="progress-info">
        <p>
          Question <strong>{index + 1}</strong> / {numQuestion}
        </p>
        <p>
          <strong>{points}</strong> / {maxPossiblePoints}
        </p>
      </div>
    </div>
  );
}

export default Progress;
