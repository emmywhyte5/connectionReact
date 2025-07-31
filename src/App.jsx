import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";

function App() {
 let [bookBLOCK, setBookBLOCK] = useState([]);
 let [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:3021/book/', {
          credentials: 'include',
        });
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

  const deleteBook = async (id) => {
    try {
      const response = await fetch(`http://localhost:3021/book/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const data = await response.json();
      console.log(data);

    }catch (error) {
      console.error('Error deleting book:', error);
    }
  };
  

  return (
    <div>
      <table className=' border-collapse border border-gray-200 w-full'>
          <thead className=' bg-gray-100'>
            <tr className=' border-b border-gray-200'>
              <th className=' p-2 text-left'>Title</th>
              <th className=' p-2 text-left'>isbn</th>
              <th className=' p-2 text-left'>published_date</th>
              <th className=' p-2 text-left'>status</th>
              <th className=' p-2 text-left'>Delete</th>
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
                  <td className=' p-2'><button onClick={() => deleteBook(book.id)} className=' bg-red-500 text-white p-2 rounded hover:bg-red-800 hover:cursor-pointer'><MdDelete /></button> </td>
                </tr>
              ))
            )}
          </tbody>
      </table>
      {bookBLOCK.length === 0 && !loading && (
        <div className=' text-center mt-4'>No books available</div>
      )}
    </div>
  )
}

export default App