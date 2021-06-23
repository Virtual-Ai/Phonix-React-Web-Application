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
    synonymsResponse:[]
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

      if (previousValue === '1') {
      flag = previousValue
      this.apiCallOver = true
      speak(step, 'Please enter the sentence you wish to check ')
    } else if (previousValue === '2') {
      this.apiCallOver = true
      flag = previousValue
      speak(step, 'Please enter the word to know its meaning and its usage')
    } else if(previousValue==='3'){
      this.apiCallOver = true
      flag=previousValue
      speak(step,'Please enter the word to know its synonyms')
    }  
    else if (previousValue === 'menu') {
      this.apiCallOver = true
      speak(
        step,
        'Hello..! Choose one of the following options: \n 1. To check grammatical errors.\n 2. To know the meaning and usage of a word.\n 3. To know synonyms of word.',
      )
    }
    else if (
      previousValue !== ''
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
      } else if(flag==="2") {
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
                speak(step," usage of "+json[0].word+" is as follows ")
                speak(step,json[0].meanings[0].definitions[0].example)
              }
            })
            .catch((err) => {})
        } catch (err) {}
      }else if(flag==='3'){
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
                  synonymsResponse: [
                    { message: 'Please type the correct spelling' },
                  ],
                })
                speak(step, 'Please type the correct spelling')
              } else {
                this.setState({ synonymsResponse: json })
                speak(step,"Synonyms of "+json[0].word +" are ")
                if(json[0].meanings[0].definitions[0].synonyms.length>4){
                  for(let i=0;i<4;i++){
                    speak(step,json[0].meanings[0].definitions[0].synonyms[i])
                  }
                }else{

                  json[0].meanings[0].definitions[0].synonyms.forEach(element => {
                    speak(
                      step,
                        element
                    )
                  });

                }
                
                
                
              }
            })
            .catch((err) => {})
        } catch (err) {}

      }
    }
     else {
      this.apiCallOver = true
      speak(
        step,
        'Hello..! Choose one of the following options: \n 1. To check grammatical errors.\n 2. To know the meaning and usage of a word.\n 3. To know synonyms of word.',
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
        return 'Please enter the word to know its meaning and its usage'
      }else if(previousValue==='3'){
        return 'Please enter the word to know its synonyms.'
      } 
      else if (previousValue === 'menu') {
        return 'Hello..! Choose one of the following options: \n 1. To check grammatical errors.\n 2. To know the meaning and usage of a word.\n 3. To know synonyms of word.'
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
              this.state.wordApiResponse[0].meanings[0].definitions[0].definition+'\nusage of '+this.state.wordApiResponse[0].word +" is as follow : "+this.state.wordApiResponse[0].meanings[0].definitions[0].example
            )

          
         
        } else {
          return this.state.wordApiResponse[0].message
        }
      } else if (this.state.synonymsResponse.length !== 0){
         if(this.state.synonymsResponse[0].hasOwnProperty('meanings')){
          let str='Synonyms of '+this.state.synonymsResponse[0].word+' :';
          if( this.state.synonymsResponse[0].meanings[0].definitions[0].synonyms.length > 4){
            for(let i=0;i<4;i++){
              str=str+"\n"+this.state.synonymsResponse[0].meanings[0].definitions[0].synonyms[i]
            }
          }else{
            this.state.synonymsResponse[0].meanings[0].definitions[0].synonyms.forEach(element => {
              str=str+"\n"+element
            });
          }
          
          return (
           str.trim()
          )
        }else {
          return this.state.synonymsResponse[0].message
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
