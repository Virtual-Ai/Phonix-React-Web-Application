import React from 'react'
import { ThemeProvider } from 'styled-components'
import ChatBot from '../lib/index'
import PageTitle from '../components/Typography/PageTitle'

const otherFontTheme = {
  background: '#f5f8fb',
  fontFamily: 'inherit',
  headerBgColor: '#6e48aa',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
}

const steps = [
  {
    id: '1',
    message: 'What is your name?',
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
      <PageTitle>ChatBot</PageTitle>
<ThemeProvider theme={otherFontTheme}>
    <React.StrictMode>
      <div
        style={{
          textAlign: ' -webkit-center',
          marginBottom: '30px',
          zIndex: 'auto',
        }}
      >
        <ChatBot
          steps={steps}
          speechSynthesis={{ enable: true, lang: 'en' }}
          recognitionEnable={true}
          width="700px"
          headerTitle="Phonix"
          enableSmoothScroll="True"
        />
      </div>
    </React.StrictMode>
  </ThemeProvider>      
    </>
  )
}

export default Chat
