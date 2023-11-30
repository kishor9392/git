import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'

import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    initial: languageFiltersData[0].id,
    data: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getProduct()
  }

  updateId = x => {
    this.setState({initial: x, isLoading: true}, this.getProduct)
  }

  loading = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  item = () => {
    const {data} = this.state
    return (
      <ul className="ul2">
        {data.map(each => (
          <RepositoryItem key={each.id} data={each} />
        ))}
      </ul>
    )
  }

  getProduct = async () => {
    const {initial} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${initial}`

    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)

    const jsonData = await response.json()

    const newData = jsonData.popular_repos.map(each => ({
      avatarUrl: each.avatar_url,
      forksCount: each.forks_count,
      issuesCount: each.issues_count,
      id: each.id,
      name: each.name,
      starsCount: each.stars_count,
    }))

    this.setState({data: newData, isLoading: false})
  }

  render() {
    const {initial, isLoading} = this.state

    return (
      <div className="bg">
        <h1 className="h1">Popular</h1>
        <ul className="ul">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              key={each.id}
              data={each}
              isCheck={initial === each.id}
              update={this.updateId}
            />
          ))}
        </ul>

        {isLoading ? this.loading() : this.item()}
      </div>
    )
  }
}

export default GithubPopularRepos
