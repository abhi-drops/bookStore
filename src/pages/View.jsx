import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import AddButton from '../components/AddButton';

function View() {
  const books = useSelector(state => state.books);

  return (
    <div className="w-screen min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-10">
      <AddButton/>
      {books.length > 0 ? (
        books.map(book => (
          <Card key={book.id} book={book} />
        ))
      ) : (
        <p className="text-center text-gray-500 w-full col-span-full">No books available. Add a new book!</p>
      )}
    </div>
  );
}

export default View;
