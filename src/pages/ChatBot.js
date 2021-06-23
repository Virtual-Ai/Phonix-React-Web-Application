import React from 'react'
import { ThemeProvider } from 'styled-components'
import ChatBot from '../lib/index'

import botIcon from './BotIcon.png'
import './chatbot-styles.css'

const otherFontTheme = {
  background: '#f5f8fb',
  fontFamily: 'Balsamiq Sans',
  headerBgColor: '#a2d2e4',
  headerFontColor: '#fff',
  headerFontSize: '20px',
  botBubbleColor: '#a2d2e4',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
}

const steps = [
  {
    id: '1',
    message:
      'Hello..! Choose one of the following options: \n 1. To check grammatical errors.\n 2. To know the meaning of a word.',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hi {previousValue}, nice to meet you!',
    trigger: 2,
  },
]

function Chat() {
  return (
    <>
      <ThemeProvider theme={otherFontTheme}>
        <React.StrictMode>
          <div
            className="chat-mb"
            style={{
              textAlign: ' -webkit-center',
              zIndex: 'auto',
            }}
          >
            <ChatBot
              botAvatar={botIcon}
              steps={steps}
              speechSynthesis={{ enable: true, lang: 'en' }}
              recognitionEnable={true}
              width="700px"
              headerTitle="Phonix Chat"
              enableSmoothScroll={true}
            />
          </div>
        </React.StrictMode>
      </ThemeProvider>
    </>
  )
}

export default Chat
