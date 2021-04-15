import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Bubble from './Bubble'
import Image from './Image'
import ImageContainer from './ImageContainer'
import Loading from '../common/Loading'
import TextStepContainer from './TextStepContainer'

class TextStep extends Component {
  /* istanbul ignore next */
  state = {
    loading: true,
    apiResponse: [],
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
        speak(step, previousValue)
      })
    }, delay)
    const data =
      'cmd=grammar_check&format=json&text=' +
      previousValue +
      '.&slang=en_US&customerid=IMWJ2KtS1XQhOST'
    try {
      fetch('https://svc.webspellchecker.net/spellcheck31/script/ssrv.fcgi?', {
        method: 'POST',
        body: data,
      })
        .then((res) => res.json())
        .then((json) => this.setState({ apiResponse: json }))
    } catch (err) {
      console.error(err)
    }
  }

  getMessage = () => {
    const { previousValue, step } = this.props
    const { message } = step

    if (message.includes('{previousValue}')) {
      // console.log(this.state.apiResponse)
      if (this.state.apiResponse[0].matches.length !== 0) {
        let message = ''
        for (let i = 0; i < this.state.apiResponse[0].matches.length; i++) {
          message =
            message + this.state.apiResponse[0].matches[i].message + '\n'
        }
        // console.log(message)
        return message
      } else {
        return 'No changes'
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
          {loading ? <Loading /> : this.renderMessage()}
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
