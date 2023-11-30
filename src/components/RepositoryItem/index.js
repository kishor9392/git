import {FaStar} from 'react-icons/fa6'
import {PiGitForkThin, PiInfoThin} from 'react-icons/pi'

import './index.css'

const RepositoryItem = props => {
  const {data} = props
  const {avatarUrl, forksCount, issuesCount, name, starsCount} = data

  return (
    <li className="list">
      <img src={avatarUrl} alt={name} className="img" />
      <h1 className="name">{name}</h1>
      <div className="s">
        <FaStar className="star" />
        <p className="st">{starsCount} stars</p>
      </div>

      <div className="s">
        <PiGitForkThin className="forks" />
        <p className="st">{forksCount} forks</p>
      </div>

      <div className="s">
        <PiInfoThin className="issues" />
        <p className="st">{issuesCount} issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
