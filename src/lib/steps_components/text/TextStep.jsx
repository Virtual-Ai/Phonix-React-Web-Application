import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Bubble from './Bubble'
import Image from './Image'
import ImageContainer from './ImageContainer'
import Loading from '../common/Loading'
import TextStepContainer from './TextStepContainer'
import data from './data'

let flag = ''

class TextStep extends Component {
  /* istanbul ignore next */
  state = {
    loading: true,
    apiResponse: {},
    wordApiResponse: [],
  }

  apiCallOver = false
  constructor(props) {
    super(props)
    data[0] = 'hello'
  }

  componentDidMount() {
    const { step, speak, previousValue, triggerNextStep } = this.props
    const { component, delay, waitAction } = step
    const isComponentWatingUser = component && waitAction

    setTimeout(() => {
      this.setState({ loading: false }, () => {
        if (!isComponentWatingUser && !step.rendered) {
          triggerNextStep()
        }
      })
    }, delay)
    const data =
      '{"text": ' +
      '"' +
      previousValue +
      '"' +
      ',"responseType": ["corrected", "grammarScore", "rulesApplied", "offset", "summary"]}'

    if (
      previousValue !== '' &&
      previousValue !== 'menu' &&
      previousValue !== '1' &&
      previousValue !== '2'
    ) {
      if (flag === '1') {
        try {
          this.apiCallOver = false
          fetch('https://api.perfecttense.com/correct', {
            method: 'POST',
            body: data,
            headers: {
              Authorization: 'aFGicqvQtRa5yUvcUUq5nAtt',
              AppAuthorization: 'Ic1O6hUKd568nt8gz4Dozgtt',
              'Content-Type': 'application/json',
            },
          })
            .then((res) => res.json())
            .then((json) => {
              this.apiCallOver = true
              this.setState({ apiResponse: json })
              let i = 0
              let message = ''
              if (json.offset[0].corrections.length !== 0) {
                for (
                  i = 0;
                  i <
                  json.offset[0].corrections[0].options[0].appliedRules.length;
                  i++
                ) {
                  message =
                    message +
                    json.offset[0].corrections[0].options[0].appliedRules[i]
                      .message +
                    '\n'
                }
                message =
                  message + '\nCorrected Sentence will be: ' + json.corrected
              } else {
                message = 'This sentence is structured correctly.'
              }

              speak(step, message)
            })
          //   const json = await response.json().then(()=> {
          //     this.setState({ apiResponse: json })
          //     this.apiCallOver = true})
          fetch('https://api.perfecttense.com/usage', {
            method: 'GET',
            headers: {
              Authorization: 'aFGicqvQtRa5yUvcUUq5nAtt',
              AppAuthorization: 'Ic1O6hUKd568nt8gz4Dozgtt',
            },
          })
            .then((res) => {
              return res.json()
            })
            .then((response) => {
              console.log('Api Calls Remaining:', response.apiRemainToday)
            })
        } catch (err) {
          console.error(err)
        }
      } else {
        try {
          this.apiCallOver = false
          fetch(
            'https://api.dictionaryapi.dev/api/v2/entries/en_US/' +
              previousValue,
          )
            .then((res) => {
              if (res.status === 200) {
                return res.json()
              } else {
                return 'wrong'
              }
            })
            .then((json) => {
              this.apiCallOver = true

              if (json === 'wrong') {
                this.setState({
                  wordApiResponse: [
                    { message: 'Please type the correct spelling' },
                  ],
                })
                speak(step, 'Please type the correct spelling')
              } else {
                this.setState({ wordApiResponse: json })
                speak(
                  step,
                  json[0].word +
                    '  means                                 ' +
                    json[0].meanings[0].definitions[0].definition,
                )
              }
            })
            .catch((err) => {})
        } catch (err) {}
      }
    } else if (previousValue === '1') {
      flag = previousValue
      this.apiCallOver = true
      speak(step, 'Please enter the sentence you wish to check ')
    } else if (previousValue === '2') {
      this.apiCallOver = true
      flag = previousValue
      speak(step, 'Please enter the word to know its meaning')
    } else if (previousValue === 'menu') {
      this.apiCallOver = true
      speak(
        step,
        'Hello..! Choose one of the following options: \n 1. To check grammatical errors.\n 2. To know the meaning of a word.',
      )
    } else {
      this.apiCallOver = true
      speak(
        step,
        'Hello..! Choose one of the following options: \n 1. To check grammatical errors.\n 2. To know the meaning of a word.',
      )
    }
  }
  getMessage = () => {
    const { previousValue, step } = this.props
    const { message } = step

    if (message.includes('{previousValue}')) {
      if (previousValue === '1') {
        return 'Please enter the sentence you wish to check.'
      } else if (previousValue === '2') {
        return 'Please enter the word to know its meaning.'
      } else if (previousValue === 'menu') {
        return 'Hello..! Choose one of the following options: \n 1. To check grammatical errors.\n 2. To know the meaning of a word.'
      } else if (this.state.apiResponse.hasOwnProperty('offset')) {
        if (this.state.apiResponse.offset[0].corrections.length !== 0) {
          let i = 0
          let message = ''
          for (
            i = 0;
            i <
            this.state.apiResponse.offset[0].corrections[0].options[0]
              .appliedRules.length;
            i++
          ) {
            message =
              message +
              this.state.apiResponse.offset[0].corrections[0].options[0]
                .appliedRules[i].message +
              '\n'
          }
          message =
            message +
            '\nCorrected Sentence will be: ' +
            this.state.apiResponse.corrected
          data[0] = message
          return message
        } else {
          data[0] = 'This sentence is structured correctly.'
          return 'This sentence is structured correctly.'
        }
      } else if (this.state.wordApiResponse.length !== 0) {
        if (this.state.wordApiResponse[0].hasOwnProperty('meanings')) {
          return (
            this.state.wordApiResponse[0].word +
            ' : ' +
            this.state.wordApiResponse[0].meanings[0].definitions[0].definition
          )
        } else {
          return this.state.wordApiResponse[0].message
        }
      }
    }

    return message ? message.replace(/{previousValue}/g, previousValue) : ''
  }

  renderMessage = () => {
    const { step, steps, previousStep, triggerNextStep } = this.props
    const { component } = step

    if (component) {
      return React.cloneElement(component, {
        step,
        steps,
        previousStep,
        triggerNextStep,
      })
    }

    return this.getMessage()
  }

  render() {
    const {
      step,
      isFirst,
      isLast,
      avatarStyle,
      bubbleStyle,
      hideBotAvatar,
      hideUserAvatar,
    } = this.props
    const { loading } = this.state
    const { avatar, user, botName } = step

    const showAvatar = user ? !hideUserAvatar : !hideBotAvatar

    const imageAltText = user ? 'Your avatar' : `${botName}'s avatar`

    return (
      <TextStepContainer
        className={`rsc-ts ${user ? 'rsc-ts-user' : 'rsc-ts-bot'}`}
        user={user}
      >
        <ImageContainer className="rsc-ts-image-container" user={user}>
          {isFirst && showAvatar && (
            <Image
              className="rsc-ts-image"
              style={avatarStyle}
              showAvatar={showAvatar}
              user={user}
              src={avatar}
              alt={imageAltText}
            />
          )}
        </ImageContainer>
        <Bubble
          className="rsc-ts-bubble"
          style={(bubbleStyle, { whiteSpace: 'pre-wrap' })}
          user={user}
          showAvatar={showAvatar}
          isFirst={isFirst}
          isLast={isLast}
          // style={{whiteSpace:'pre-wrap'}}
        >
          {loading ? (
            <Loading />
          ) : this.apiCallOver ? (
            this.renderMessage()
          ) : (
            <Loading />
          )}
        </Bubble>
      </TextStepContainer>
    )
  }
}

TextStep.propTypes = {
  avatarStyle: PropTypes.objectOf(PropTypes.any).isRequired,
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  bubbleStyle: PropTypes.objectOf(PropTypes.any).isRequired,
  hideBotAvatar: PropTypes.bool.isRequired,
  hideUserAvatar: PropTypes.bool.isRequired,
  previousStep: PropTypes.objectOf(PropTypes.any),
  previousValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ]),
  speak: PropTypes.func,
  step: PropTypes.objectOf(PropTypes.any).isRequired,
  steps: PropTypes.objectOf(PropTypes.any),
  triggerNextStep: PropTypes.func.isRequired,
}

TextStep.defaultProps = {
  previousStep: {},
  previousValue: '',
  speak: () => {},
  steps: {},
}

export default TextStep
