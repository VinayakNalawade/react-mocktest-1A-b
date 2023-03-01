import {Component} from 'react'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {selected: languageGreetingsList[0]}

  changeSelected = selected => this.setState({selected})

  renderButton = each => {
    const {selected} = this.state

    const changeSelection = () => this.changeSelected(each)
    return (
      <li className="li" key={each.id}>
        <button
          onClick={changeSelection}
          type="button"
          className={
            selected.id === each.id ? 'selected-button' : 'normal-button'
          }
        >
          {each.buttonText}
        </button>
      </li>
    )
  }

  renderContent = () => {
    const {selected} = this.state

    return (
      <img
        className="content-img"
        alt={selected.imageAltText}
        src={selected.imageUrl}
      />
    )
  }

  render() {
    return (
      <div className="main-container">
        <h1 className="main-heading">Multilingual Greetings</h1>
        <ul className="button-container">
          {languageGreetingsList.map(each => this.renderButton(each))}
        </ul>
        <div className="content-container">{this.renderContent()}</div>
      </div>
    )
  }
}

export default App
