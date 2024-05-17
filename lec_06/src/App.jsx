import Card from './components/Card'
import './App.css'

function App() {
  return (
    <>
      <h1 className=' bg-blue-600 text-black p-3 rounded-2xl mb-5'>Hello Tailwind</h1>
      <Card username="Shaili" btnText="View Profile"/>
      <Card username="Urban" btnText="Show Profile"/>
    </>
  )
}

export default App
