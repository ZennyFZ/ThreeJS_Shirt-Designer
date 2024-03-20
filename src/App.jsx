import Designer from '../src/pages/Designer'
import CanvasModel from './canvas/CanvasModel'
import ImageEditor from './pages/ImageEditor'
import './index.css'


function App() {

  return (
    <main className='mainContent'>
      <Designer />
      <CanvasModel />
      <ImageEditor />
    </main>
  )
}

export default App
