import React, { Component } from "react";
import PropTypes from "prop-types";
import Bubble from "./Bubble";
import Image from "./Image";
import ImageContainer from "./ImageContainer";
import Loading from "../common/Loading";
import TextStepContainer from "./TextStepContainer";
import data from "./data";

class TextStep extends Component {
    /* istanbul ignore next */
    state = {
        loading: true,
        apiResponse: {},
        
    };
    
    apiCallOver=false
    constructor(props){
      super(props);
      data[0]="hello";
    }
    
    

    componentDidMount() {
        const { step, speak, previousValue, triggerNextStep } = this.props;
        const { component, delay, waitAction } = step;
        const isComponentWatingUser = component && waitAction;

        setTimeout(() => {
            this.setState({ loading: false }, () => {
                if (!isComponentWatingUser && !step.rendered) {
                    triggerNextStep();
                }
                
            });
        }, delay);
        const data =
            '{"text": ' +
            '"' +
            previousValue +
            '"' +
            ',"responseType": ["corrected", "grammarScore", "rulesApplied", "offset", "summary"]}';
        
        if(previousValue!==''){
            try {
                this.apiCallOver = false;
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
                        this.apiCallOver=true  
                        this.setState({ apiResponse: json })
                        let i = 0;
                        let message = ''
                        if (json.offset[0].corrections.length !== 0) {
                            
                            for (
                                i = 0; i < json.offset[0].corrections[0].options[0].appliedRules.length; i++
                            ) {
                                message = message + json.offset[0].corrections[0].options[0].appliedRules[i].message + "\n"
                            }
                            message = message + "\nCorrected Sentence will be: " + json.corrected
                            
            
                        } else {
                           message = "This sentence is structured correctly."
            
                        }

                        speak(step, message);
                    });
                //   const json = await response.json().then(()=> {
                //     this.setState({ apiResponse: json })  
                //     this.apiCallOver = true})
                  
                  
              } catch (err) {
                  console.error(err);
              }
        }else{
            this.apiCallOver=true
            speak(step, "Hello !, type in a phrase to know more...");

        }
        fetch('https://api.perfecttense.com/usage', {
                          method: 'GET',
                          headers: {
                            Authorization: 'aFGicqvQtRa5yUvcUUq5nAtt',
                            AppAuthorization: 'Ic1O6hUKd568nt8gz4Dozgtt',
                          },
                      })
                      .then((res)=> {
                            return res.json();
                          })
                          .then((response) => {
                            console.log("Api Calls Remaining:",response.apiRemainToday);
                          });
    }
    getMessage = () => {
        const { previousValue, step } = this.props;
        const { message } = step;

        if (message.includes("{previousValue}")) {
            // console.log(this.state.apiResponse)
            // if (this.state.apiResponse[0].matches.length !== 0) {
            //     let message = "";
            //     for (let i = 0; i < this.state.apiResponse[0].matches.length; i++) {
            //         message =
            //             message + this.state.apiResponse[0].matches[i].message + "\n";
            //     }
            //     // console.log(message)
            //     data[0] = message;
            //     return message;
            // } else {
            //     data[0] = "This sentence is structured correctly.";
            //     return "This sentence is structured correctly.";
            // }

            if (this.state.apiResponse.offset[0].corrections.length !== 0) {
                let i = 0;
                let message = ''
                for (
                    i = 0; i < this.state.apiResponse.offset[0].corrections[0].options[0].appliedRules.length; i++
                ) {
                    message = message + this.state.apiResponse.offset[0].corrections[0].options[0].appliedRules[i].message + "\n"
                }
                message = message + "\nCorrected Sentence will be: " + this.state.apiResponse.corrected
                data[0]=message;
                return message;

            } else {
                data[0] = "This sentence is structured correctly.";
                return "This sentence is structured correctly.";

            }

        //     var i = 0;
        //     for (
        //         i = 0; i < data.offset[0].corrections[0].options[0].appliedRules.length; i++
        //     ) {
        //         task(i);
        //     }

        //     function task(i) {
        //         setTimeout(function() {
        //             console.log(i);
        //             serverMessage(
        //                 data.offset[0].corrections[0].options[0].appliedRules[i].message
        //             );
        //             speechSynthesis.speak(
        //                 new SpeechSynthesisUtterance(
        //                     data.offset[0].corrections[0].options[0].appliedRules[i].message
        //                 )
        //             ); // Add tasks to do
        //         }, 2000 * i);
        //     }
        //     setTimeout(correct, 1500 * i);

        //     function correct() {
        //         serverMessage(
        //             'Corrected Sentence will be: ' + data.offset[0].correctedSentence
        //         );
        //         speechSynthesis.speak(
        //             new SpeechSynthesisUtterance(
        //                 'Corrected Sentence will be' + data.offset[0].correctedSentence
        //             )
        //         );
        //     }


        }


        return message ? message.replace(/{previousValue}/g, previousValue) : "";
    };

    renderMessage = () => {
        const { step, steps, previousStep, triggerNextStep } = this.props;
        const { component } = step;
    

        // console.log(message.includes("{previousValue}"));

        if (component) {
            return React.cloneElement(component, {
                step,
                steps,
                previousStep,
                triggerNextStep,
            });
        }

        return this.getMessage();

        
        
    };

    render() {
        const {
            step,
            isFirst,
            isLast,
            avatarStyle,
            bubbleStyle,
            hideBotAvatar,
            hideUserAvatar,
        } = this.props;
        const { loading } = this.state;
        const { avatar, user, botName } = step;

        const showAvatar = user ? !hideUserAvatar : !hideBotAvatar;

        const imageAltText = user ? "Your avatar" : `${botName}'s avatar`;

        return (
            <TextStepContainer
        className={`rsc-ts ${user ? "rsc-ts-user" : "rsc-ts-bot"}`}
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
          style={(bubbleStyle, { whiteSpace: "pre-wrap" })}
          user={user}
          showAvatar={showAvatar}
          isFirst={isFirst}
          isLast={isLast}
          // style={{whiteSpace:'pre-wrap'}}
        >
            
          {loading ? <Loading /> : this.apiCallOver ? this.renderMessage() : <Loading/>}
          
        </Bubble>
      </TextStepContainer>
        );
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
};

TextStep.defaultProps = {
    previousStep: {},
    previousValue: "",
    speak: () => {},
    steps: {},
};

export default TextStep;
