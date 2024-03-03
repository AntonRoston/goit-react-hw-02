
import css from "./Options.module.css"
import PropTypes from "prop-types"


const Options = ({ onUpdate, total, onReset }) => {
  return (
    <div className={css.optionWrapper}>
      <div className={css.valueBtnWrapper}>
        <button className={css.goodBtn} onClick={() => onUpdate("good")}>
          Good 
        </button>
        <button className={css.neutralBtn} onClick={() => onUpdate("neutral")}>
          Neutral
        </button>
        <button className={css.badBtn} onClick={() => onUpdate("bad")}>
          Bad 
        </button>
      </div>
      {total >= 1 ? (
        <button className={css.resetBtn} onClick={() => onReset()}>
          Reset
        </button>
      ) : null}
    </div>
  );
};

Options.propTypes = {
    total: PropTypes.number.isRequired,
}

export default Options;
