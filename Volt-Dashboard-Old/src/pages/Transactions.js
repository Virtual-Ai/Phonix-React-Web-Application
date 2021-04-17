// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faCheck,
//   faCog,
//   faHome,
//   faSearch,
// } from '@fortawesome/free-solid-svg-icons';
// import {
//   Col,
//   Row,
//   Form,
//   Button,
//   ButtonGroup,
//   Breadcrumb,
//   InputGroup,
//   Dropdown,
// } from '@themesberg/react-bootstrap';

// import { TransactionsTable } from '../components/Tables';

import React from 'react'
import { ThemeProvider } from 'styled-components'
import ChatBot from '../lib/index'

const otherFontTheme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
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

const ThemedExample = () => (
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
        />
      </div>
    </React.StrictMode>
  </ThemeProvider>
)

export default ThemedExample
