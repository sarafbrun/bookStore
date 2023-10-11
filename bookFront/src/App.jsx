import { useEffect, useState } from 'react'
import './App.css'
import { Books } from './components/Books.jsx'
import { useBooks } from './hooks/useBooks'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './layout/Header';




function App() {
  const [search, setSearch] = useState('')
  const [books, setBooks] = useState([])

  const getBooks = async () => {
    const data = await fetch('http://localhost:3000/api/books')
    const responseBooks = await data.json();
    if (data.status === 200) {
      setBooks(responseBooks.data)
    }
  }


  const handleSearch = (event) => {
    event.preventDefault()

    //Nos aseguramos de utilizar el último valor almacenándolo
    const newSearch = event.target.value
    if (newSearch.startsWith(' ')) return

    setSearch(newSearch)
  }

  useEffect(() => {
    getBooks()
    console.log('Se esta mostrando:', books)
  }, [])


  return (
    <>
      <Header />
      <div className='page'>

        <form className='search'>
          <label>Busca tu libro por título, autor(a), ISBN10...</label>
          <input placeholder='Título, autor...' name='searching' onChange={handleSearch} value={search}></input>
        </form>

        <main>
          <Books books={books} />
        </main>

      </div>
    </>
  )
}



export default App
