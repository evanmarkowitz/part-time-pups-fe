import React, { Component } from 'react'
import './FilterModal.css'

class FilterModal extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  
  render() {
    return(
      <article className='modal-wrapper'>
        <section className='modal-card'>
          <div className='filters'>
            <section className='column dog-size'>
              <h2>DOG SIZE</h2>
              <button><span className='size'>Small</span><span className='weight'>05-15lbs</span></button>
              <button><span className='size'>Medium</span><span className='weight'>16-40lbs</span></button>
              <button><span className='size'>Large</span><span className='weight'>41- 100lbs</span></button>
            </section>
            <section className='column activity'>
              <h2>ACTIVITY</h2>
              <button>Low</button>
              <button>Average</button>
              <button>High</button>
            </section>
            <section className='column distance'>
            </section>
          </div>
        </section>
        <section className='background' />
      </article>
    )
  }
}

export default FilterModal