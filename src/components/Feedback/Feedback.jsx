import ProtoTypes from "prop-types"

const Feedback = ({ good, neutral, bad, total, positive }) => {
    return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}%</p>
    </div>
    );
    
};

Feedback.protoTypes = {
  good: ProtoTypes.number.isRequired,
  neutral: ProtoTypes.number.isRequired,
  bad: ProtoTypes.number.isRequired,
  total: ProtoTypes.number.isRequired,
  positive: ProtoTypes.number.isRequired,
};

export default Feedback;
