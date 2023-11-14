import AllRoutes from './routes/Allroutes'
import NavBar from './components/navbar/NavBar'
import TopBar from './components/navbar/topBar'

function App() {
  return (
    <div className='min-h-screen bg-gray-100 w-full'>
        <NavBar />
        <div class="p-4 sm:ml-64">
          <AllRoutes />
        </div>
    </div>

  )
}
AllRoutes
export default App
