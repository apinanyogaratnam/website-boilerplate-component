import React from 'react'

import { ExampleComponent, MainPage } from 'website-boilerplate-component'
import 'website-boilerplate-component/dist/index.css'

const App = () => {
  return (
      <div>
        <ExampleComponent text="Create React Library Example 😄" />
        <MainPage />
      </div>
  );
}

export default App
