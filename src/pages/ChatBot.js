import React from 'react'
import { ThemeProvider } from 'styled-components'
import ChatBot from '../lib/index'
import PageTitle from '../components/Typography/PageTitle'
import botIcon from './BotIcon.png'
import './chatbot-styles.css'

const otherFontTheme = {
  background: '#f5f8fb',
  fontFamily: 'Balsamiq Sans',
  headerBgColor: '#ff914d',
  headerFontColor: '#fff',
  headerFontSize: '20px',
  botBubbleColor: '#ff914d',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
}

const steps = [
  {
    id: '1',
    message: 'Hello !, type in a phrase to know more...',
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
      <div className="chat-mb"
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
          headerTitle="Phonix"
          enableSmoothScroll={true}
        />
      </div>
    </React.StrictMode>
  </ThemeProvider>      
    </>
  )
}

export default Chat
