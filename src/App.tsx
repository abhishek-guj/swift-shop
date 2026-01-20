import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './layout'
// import {Layout} from "./"

function App() {

  return (
    <div className="border border-amber-400 w-full">
      <Layout >
        <div> some data</div>
      </Layout>
    </div>
  )
}

export default App
