import React, { useEffect, useState } from 'react'

function App() {
 let [bookBLOCK, setBookBLOCK] = useState([]);
 let [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://node-assign.onrender.com/book');
        const data = await response.json();
        setBookBLOCK(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
      
    }
    fetchBooks();

  }, []);

  return (
    <div>
      <table className=' border-collapse border border-gray-200 w-full'>
          <thead className=' bg-gray-100'>
            <tr className=' border-b border-gray-200'>
              <th className=' p-2 text-left'>Title</th>
              <th className=' p-2 text-left'>isbn</th>
              <th className=' p-2 text-left'>published_date</th>
              <th className=' p-2 text-left'>status</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="4" className=' p-2 text-center'>Loading...</td>
              </tr>
            ) : (
              bookBLOCK.map((book) => (
                <tr key={book.id} className=' border-b border-gray-200'>
                  <td className=' p-2'>{book.title}</td>
                  <td className=' p-2'>{book.isbn}</td>
                  <td className=' p-2'>{book.published_date}</td>
                  <td className=' p-2'>{book.status}</td>
                </tr>
              ))
            )}
          </tbody>
      </table>
    </div>
  )
}

export default App