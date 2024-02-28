import css from './Options.module.css'

const Options = ({handleFeedback, totalFeedback}) => {
  return (
    <div>
        <button className={css.buttonOption} onClick={() => handleFeedback('good')}>Good</button>
        <button className={css.buttonOption} onClick={() => handleFeedback('neutral')}>Neutral</button>
        <button className={css.buttonOption} onClick={() => handleFeedback('bad')}>Bad</button>
        {totalFeedback > 0 &&  <button className={css.buttonOption} onClick={() => handleFeedback('reset')}>Reset</button>}
        
    </div>
  );
};

export default Options