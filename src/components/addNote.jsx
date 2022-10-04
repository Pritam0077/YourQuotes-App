import React, { useState } from 'react';

const AddNote = ({ handleAddNote }) => {

  const [noteText, setNoteText] = useState('');

  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  }

  const handleSave = (e) => {
    e.preventDefault();
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText('');
    }
  }

  return (
    <div className="card new" >
      <textarea
        cols="10"
        rows="6"
        placeholder="Type to add a YourQuotes..."
        onChange={handleChange}
        value={noteText}
      ></textarea>
      <input type="text" placeholder='Writer Name...' />
      <div className="footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSave}>Post</button>
      </div>
    </div>
  );
};

export default AddNote;
