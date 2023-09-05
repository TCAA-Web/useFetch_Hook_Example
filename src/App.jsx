import './App.css'
import { useFetch } from './hooks/useFetch'

function App() {

  const url = "https://jsonplaceholder.typicode.com/todos"
  const {data} = useFetch(url)

  return (
    <>
      <h1>useFetch Hook</h1>
      {data?.map((item, index) => {
        return (
          <p key={index}>{item.title}</p>
        )
      })}
    </>
  )
}

export default App
