import React from 'react'

import Header from './Header'
import MenuAdmin from './MenuAdmin'
import Order from './Order'

class App extends React.Component {
  render() {
    return (
      <div className='burger-paradise'>
        <div className='menu'>
          <Header title='Very Hot Burger' amount={10} hot={true} />
        </div>
        <Order />
        <MenuAdmin />
      </div>
    )
  }
}

export default App
