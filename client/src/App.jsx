
import './App.css'
import {BrowserRouter,Routes,Route,}from 'react-router-dom'


import PendingPage from './pages/pendingListPage'
import PendingFormPage from './pages/pendingFormPage'
import EditListPage from './pages/editListPage'
function App() {

  return (
    <>
     <BrowserRouter>
<Routes>
  <Route path='/' element={<PendingPage/>} />
  <Route path='/pendingForm' element={<PendingFormPage/>} />
  <Route path='/edit' element={<EditListPage/>} />

</Routes>
     </BrowserRouter>
    </>
  )
}

export default App
