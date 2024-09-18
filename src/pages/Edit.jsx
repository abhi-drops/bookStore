import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBook } from '../redux/slice/bookSlice';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
  const { id } = useParams();
  const books = useSelector(state => state.books);
  const bookToEdit = books.find(book => book.id === id);

  const [title, setTitle] = useState(bookToEdit ? bookToEdit.title : '');
  const [description, setDescription] = useState(bookToEdit ? bookToEdit.description : '');
  const [cover, setCover] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCoverChange = (e) => {
    setCover(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBook = {
      ...bookToEdit,
      title,
      description,
      cover: cover ? URL.createObjectURL(cover) : bookToEdit.cover,
    };

    dispatch(updateBook(updatedBook));
    navigate('/');
  };

  if (!bookToEdit) {
    return <p>Book not found</p>;
  }

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
          />
        </div>

        <textarea
          className="textarea textarea-success w-80"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <button type="submit" className="btn btn-success w-80">Update Book</button>
      </form>
    </div>
  );
}

export default Edit;
