# website-boilerplate-component

> a simple react component to start off with creating personal websites

[![NPM](https://img.shields.io/npm/v/website-boilerplate-component.svg)](https://www.npmjs.com/package/website-boilerplate-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save website-boilerplate-component
```

## Usage

```jsx
import React, { Component } from 'react'

import MainPage from 'website-boilerplate-component'
import 'website-boilerplate-component/dist/index.css'

class Example extends Component {
  render() {
    return <MainPage
        name="Apinan Yogaratnam" 
        description="A motivated programmer"
        linkedin="https://www.linkedin.com/in/apinan-yogaratnam"
        github="https://github.com/apinanyogaratnam"
        email="example@icloud.com"
        facebook="https://www.facebook.com/apinan.yogaratnam.7" 
    />
  }
}
```

## License

MIT © [apinanyogaratnam](https://github.com/apinanyogaratnam)
