import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [shortUrl, setshortUrl] = useState('url_test.com')

  return (
    <>
      <form action='http://localhost:3000/' method='post'>
        <label >
          Url:
          <input type="text" name="Url" />
        </label>
        
        <input type="submit" value="Submit" />
      </form>
      <p>
        your new url: 
        <a href='#'>{shortUrl}</a>
      </p>
    </>
  )
}

export default App
