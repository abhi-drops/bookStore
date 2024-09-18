import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/slice/bookSlice';
import { useNavigate } from 'react-router-dom';

function Add() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cover, setCover] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCoverChange = (e) => {
    setCover(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new book object
    const newBook = {
      id: Math.random().toString(),
      title,
      description,
      cover: URL.createObjectURL(cover), 
    };

    dispatch(addBook(newBook));
    navigate('/');
  };

  return (
    <div className='w-screen h-[80vh] flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5 ps-7'>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input input-bordered input-success w-full max-w-xs"
          required
        />

        <div className="">
          <label htmlFor="cover" className='mb-1 inline-block'>Cover Image</label>
          <input
            type="file"
            id="cover"
            accept="image/*"
            onChange={handleCoverChange}
            className="file-input file-input-bordered file-input-success w-full max-w-xs"
            required
          />
        </div>

        <textarea
          className="textarea textarea-success w-80"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <button type="submit" className="btn btn-success w-80">Add Book</button>
      </form>
    </div>
  );
}

export default Add;
