import { useEffect, useState } from 'react'
import './App.css'
import { Books } from './components/Books.jsx'
import { useBooks } from './hooks/useBooks'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './layout/Header';

function useSearch() {
  const [search, setSearch] = useState('')
  return { search, setSearch }
}


function App() {
  const { search, setSearch } = useSearch()
  const { books, getBooks, findBooks } = useBooks({ search })



  const handleSearch = (event) => {
    event.preventDefault()
    const newSearch = event.target.value;

    if (search.startsWith(' ')) return

    findBooks(newSearch)


  }


  useEffect(() => {
    getBooks()

    // console.log(search)
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
