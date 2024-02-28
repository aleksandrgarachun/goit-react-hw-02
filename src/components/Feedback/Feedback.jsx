import css from './Feedback.module.css'

const Feedback = ({feedback, totalFeedback }) => {
    if(totalFeedback === 0) {
        return (
            <div>
                <p className={css.feedback}>No feedback yet</p>
            </div>
        )
    }
    const percentage = Math.round(((feedback.good + feedback.neutral) / totalFeedback) *100);
  return (
    <div>
        <p className={css.feedback}>Good: {feedback.good}</p>
        <p className={css.feedback}>Neutral: {feedback.neutral}</p>
        <p className={css.feedback}>Bad: {feedback.bad}</p>
        <p className={css.feedback}>Total: {totalFeedback}</p>
        <p className={css.feedback}>Positive: {percentage}%</p>
        

    </div>
  )
}

export default Feedback