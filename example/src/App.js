import React from 'react'

import { MainPage } from 'website-boilerplate-component'
import 'website-boilerplate-component/dist/index.css'

const App = () => {
  return (
      <div>
          <MainPage 
              name="Apinan Yogaratnam" 
              description="A motivated programmer"
              linkedin="https://www.linkedin.com/in/apinan-yogaratnam"
              github="https://github.com/apinanyogaratnam"
              email="apinanapinan@icloud.com"
              facebook="https://www.facebook.com/apinan.yogaratnam.7" 
          />
      </div>
  );
}

export default App
