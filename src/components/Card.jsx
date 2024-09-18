import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/slice/bookSlice';
import { useNavigate } from 'react-router-dom';

function Card({ book }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit/${book.id}`);
  };

  const handleDelete = () => {
    dispatch(removeBook(book.id));
  };

  return (
    <div className="card card-compact bg-base-100 shadow-xl w-full max-w-xs lg:max-w-sm h-[60vh] bg-stone-900">
      <figure>
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-40 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-semibold">{book.title}</h2>
        <p className="text-sm text-gray-400">{book.description}</p>
        <div className="card-actions justify-end">
          <button onClick={handleEdit} className="btn btn-success btn-sm">Edit</button>
          <button onClick={handleDelete} className="btn bg-red-500 text-black hover:bg-red-700 btn-sm">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
