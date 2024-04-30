import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Apply from './components/Apply/Apply.jsx'
import Events from './components/Events/Events.jsx'
import Training from './components/Training/Training.jsx'
import Shelter from './components/Shelter/Shelter.jsx'
import Maintainence from './components/Maintainence/Maintainence.jsx'
import Feedback from './components/Feedback/Feedback.jsx'
import Adopter from './components/Adopter/Adopter.jsx'
import Dog from './components/Dog/Dog.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='adopter' element={<Adopter />} />
      <Route path='about' element={<About />} />
      <Route path='apply' element={<Apply />} />
      <Route path='dogs' element={<Dog />} />
      <Route path='events' element={<Events />} />
      <Route path='shelter' element={<Shelter />} />
      <Route path='training' element={<Training />} />  
      <Route path='maintainence' element={<Maintainence />} /> 
      <Route path='feedback' element={<Feedback />} />  
      <Route path='*' element={<div>Not Found</div>}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
