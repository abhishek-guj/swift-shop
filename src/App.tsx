import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './layout'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Catalog from './components/Catalog'
// import {Layout} from "./"

function App() {

  return (
    <div className="mt-10 w-full">
      <Layout>
        <main className='flex flex-col px-4'>
          {/* <Sidebar /> */}
          <Dashboard />
          <Catalog />
        </main>
      </Layout>
    </div>
  )
}

export default App
