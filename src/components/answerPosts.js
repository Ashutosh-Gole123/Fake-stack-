import React, { useState } from 'react';

function AnswerPosts({ model,qstn }) {
  console.log(qstn);
  const [username, setUsername] = useState('');
  const [answerText, setAnswerText] = useState('');
  const [error, setError] = useState('');
  const handleAnswerSubmit = () => {
    if (username.trim() === '') {
      setError('Please enter a username');
      return;
    }

    if (answerText.trim() === '') {
      setError('Please enter a description');
      return;
    }

    model.insertAns(username, answerText, qstn);
    setUsername('');
    setAnswerText('');
    setError('');
  };

  return (
    <div className="form answerForm">
      <div className="username" id="answerUsername">
        <h2>Username*</h2>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={{ border: "1px solid black", width: "300px", height: "35px", }} /><br />
      </div>
      <div className="answerInput" id="answerInput">
        <h2>Answer Text*</h2>
        <textarea value={answerText} onChange={(e) => setAnswerText(e.target.value)} name="answer" id="ans" cols="60" rows="15"></textarea>
      </div>
      <span className="answerSubmit">
        <button onClick={handleAnswerSubmit} style={{ backgroundColor: 'rgb(0, 136, 255)', color: 'white', margin: '10px 0' }}>Post Answer</button>
        <span className="red" style={{ color: 'red' }}>* indicates mandatory fields</span>
      </span>
    </div>
  );
}

export default AnswerPosts;
