import css from './Description.module.css'

const Description = ({title, paragraph}) => {
  return (
    <div className={css.descriptionSection}>
        <h1>{title}</h1>
        <p className={css.descriptionParagraph}>{paragraph}</p>
    </div>
  )
}

export default Description