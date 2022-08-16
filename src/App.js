import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Home/>
      </MainLayout>
    </div>
  )
}

export default App
