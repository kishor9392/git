import './index.css'

const LanguageFilterItem = props => {
  const {data, isCheck, update} = props
  const {id, language} = data

  const onTap = () => {
    update(id)
  }

  const v = isCheck ? 'btn1' : 'btn'

  return (
    <li className="li">
      <button type="button" onClick={onTap} className={`${v}`}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
