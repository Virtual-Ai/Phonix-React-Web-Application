import React, { Component } from 'react'
import UIfx from 'uifx'
import correctAudio from '../Quiz/assets/audio/correct.mp3'
import wrongAudio from '../Quiz/assets/audio/wrong.wav'
import Dragula from 'dragula'
import './SentenceBuilder.css'
import DNDModal from '../DragDrop/DNDModal'
import SentenceModal from './SentenceModal'

const data = [
  'We catch the bus every morning.',
  'The book is on the table.',
  'Water freezes at zero degrees.',
  'The Earth revolves around the Sun.',
  'They watch television regularly.',
]

class SentenceBuilder extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      items: this.shuffle(data[0].split(' ')),
      rows: [],
      modal: true,
    }
    this.dragula = new Dragula([])
    this.dragula.on('drop', this.handleDrop)
  }

  closeModal = () => {
    this.setState({ modal: false })
  }

  correctA = new UIfx(correctAudio, {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100,
  })

  wrongA = new UIfx(wrongAudio, {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100,
  })

  onNextClick = async () => {
    await this.setState({
      counter: this.state.counter + 1,
      items: this.shuffle(data[this.state.counter + 1].split(' ')),
      rows: [],
    })
    document.getElementById('Q').style.backgroundColor = 'transparent'
  }

  onPreviousClick = async () => {
    await this.setState({
      counter: this.state.counter - 1,
      items: this.shuffle(data[this.state.counter - 1].split(' ')),
      rows: [],
    })
    document.getElementById('Q').style.backgroundColor = 'transparent'
  }

  shuffle(array) {
    let currentIndex = array.length,
      randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      // And swap it with the current element.
      ;[array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ]
    }

    return array
  }

  handleDrop = (el, target, source, sibling) => {
    let items = this.dragula.containers.filter((i) => {
      return i.dataset.type === 'list'
    })[0]
    let rows = this.dragula.containers.filter((i) => {
      return i.dataset.type === 'rows'
    })[0]
    items = [...items.childNodes].map((node) => node.dataset.field)
    rows = [...rows.childNodes].map((node) => node.dataset.field)
    this.dragula.cancel(true)
    this.setState({
      items: items,
      rows: rows,
    })
  }
  addDraggable = (el) => {
    this.dragula.containers.push(el)
  }

  render() {
    console.log('Q' + this.state.counter.toString())
    window.addEventListener('touchmove', function () {})

    try {
      if (
        JSON.stringify(this.state.rows) ===
        JSON.stringify(data[this.state.counter].split(' '))
      ) {
        this.correctA.play()
        document.getElementById('Q').style.backgroundColor = '#d0ff6f'
      } else {
        if (
          this.state.rows.length === data[this.state.counter].split(' ').length
        ) {
          this.wrongA.play()
          document.getElementById('Q').style.backgroundColor = '#ff8100'
        } else if (this.state.rows.length !== 0) {
          document.getElementById('Q').style.backgroundColor = 'transparent'
        }
      }
    } catch (e) {}
    console.log(
      JSON.stringify(this.state.rows) ===
        JSON.stringify(data[this.state.counter].split(' ')),
    )
    return (
      <div className="md:m-6 tablet:mt-6" style={{ height: '100%' }}>
        {this.state.modal === true ? (
          <SentenceModal isOpen={this.state.modal} onClose={this.closeModal} />
        ) : (
          <div
            className=""
            style={{ backgroundColor: '#fad18e', borderRadius: '20px' }}
          >
            <div className="flex justify-center	mb-4 pb-4 tablet:text-sm   ">
              <div className="tablet:ml-0 outerBox">
                <div className="flex">
                  <img id="rod1" src={require('./assets/thread.png')} />
                  <img id="rod2" src={require('./assets/thread.png')} />
                </div>
                <div className="">
                  {' '}
                  <div id="P">
                    <div
                      ref={this.addDraggable}
                      data-type="rows"
                      className="answer h-32 tablet:h-auto p-8 tablet:p-4"
                      id={'Q'}
                    >
                      {this.state.rows.map((item) => {
                        return (
                          <div
                            className="p-4 tablet:p-px"
                            data-field={item}
                            key={item}
                          >
                            {item}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div
                    className="flex"
                    style={{ alignItems: 'center', marginTop: '50px' }}
                  >
                    {this.state.counter === 0 ? (
                      <img
                        width="75px"
                        className="arrowImage"
                        src={require('./assets/pre.png')}
                      />
                    ) : (
                      <img
                        onClick={this.onPreviousClick}
                        width="75px"
                        className="arrowImage"
                        src={require('./assets/pre.png')}
                      />
                    )}
                    <div
                      ref={this.addDraggable}
                      className="drag-elements inline-flex h-32 tablet:h-auto p-8 tablet:p-4"
                      data-type="list"
                    >
                      {this.state.items.map((item) => {
                        return (
                          <div
                            className="ml-2  md:float-left p-4 "
                            data-field={item}
                            key={item}
                          >
                            {item}
                          </div>
                        )
                      })}
                    </div>
                    <img
                      onClick={this.onNextClick}
                      className="arrowImage"
                      width="75px"
                      src={require('./assets/nxt.png')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default SentenceBuilder
