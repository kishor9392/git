import './index.css'

const RepositoryItem = props => {
  const {data} = props
  const {avatarUrl, forksCount, issuesCount, name, starsCount} = data

  return (
    <li className="list">
      <img src={avatarUrl} alt={name} className="img" />
      <h1 className="name">{name}</h1>
      <div className="s">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="stars"
        />
        <p className="st">{starsCount} stars</p>
      </div>

      <div className="s">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="stars"
        />

        <p className="st">{forksCount} forks</p>
      </div>

      <div className="s">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="stars"
        />

        <p className="st">{issuesCount} issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
