import React, { useState } from 'react';


function QuestionForm({model}) {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [tags, setTags] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Split tags input into an array
        const tagArray = tags.split(' ');

        // Add the question using the model method
        const newQuestion = model.insertQstn(title, text, tagArray, username);

        // Optionally, handle success/failure here
        console.log('Question added successfully:', newQuestion);

        // Clear the form fields
        setTitle('');
        setText('');
        setTags('');
        setUsername('');
    }

    return (
        <div className="form questionForm">
            <div className="title" id="questionsTitle">
                <h2>Question Title*</h2>
                <h6>Limit title to 100 characters or less</h6>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} style={{border: "1px solid black", width: "300px", height: '35px'}} />
            </div>
            <div className="questionInput" id="questionInput">
                <h2>Question Text*</h2>
                <h6>Add details</h6>
                <textarea name="question" id="ques" cols="60" rows="15" value={text} onChange={(e) => setText(e.target.value)}></textarea>
            </div>
            <div className="tags" id="questionTags">
                <h2>Tags*</h2>
                <h6>Add keywords separated by whitespace.</h6>
                <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} style={{border: '1px solid black', width: '300px', height: '35px'}} />
            </div>
            <div className="username" id="questionUsernames">
                <h2>Username*</h2>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={{border: "1px solid black", width: "300px", height: "35px"}}/><br/>
            </div>
            <div style={{display: 'flex', justifyContent:' space-between', alignItems: 'center'}}>
                <button id="postQstnBtn" style={{backgroundColor: 'rgb(0, 136, 255)', color: 'white', margin: '10px 0'}} onClick={handleSubmit}>Post
                    Question
                </button>
                <span className="red" style={{color: 'red'}}>* indicates mandatory fields</span>
            </div>
        </div>
    );
}

export default QuestionForm;
