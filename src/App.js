import React from 'react'
import UsingHooks from './Component/UsingHooks'
import Usingfunctionhook from './Component/Usingfunctionhook'
import ColorPara from './Component/ColorPara'
import ColorButton from './Component/ColorButton'
import Lodash from './Component/Lodash'

const App = () => {
  return (
    <div>
      <br/>
      <ColorPara />
      <hr/>
      <ColorButton />
      <hr/>
      <UsingHooks/>
      <hr/>
      <hr/>
      <Usingfunctionhook/>
      <hr/>
      <Lodash/>

    </div>
  )
}

export default App