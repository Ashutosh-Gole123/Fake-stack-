import React, { useState } from 'react';


function QuestionForm({model,setMode}) {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [tags, setTags] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        console.log('Title:', title);
        console.log('Text:', text);
        console.log('Tags:', tags);
        console.log('Username:', username);
    
        // Check if any of the required fields are empty
        if (title.trim() === '' || text.trim() === '' || tags.trim() === '' || username.trim() === '') {
            console.log('Error: All fields are required.');
            return; // Exit the function early if any field is empty
        }
    
        // Split tags input into an array
        const tagArray = tags.split(' ');
    
        // Add the question using the model method
        const newQuestion = model.insertQstn(title, text, tagArray, username);
        setMode(0);
        // Optionally, handle success/failure here
        console.log('Question added successfully:', newQuestion);
    
        // Clear the form fields
        setTitle('');
        setText('');
        setTags('');
        setUsername('');
    }
    
    return (
        <form className="form questionForm" onSubmit={handleSubmit}>
            <div className="title" id="questionsTitle">
                <h2>Question Title*</h2>
                <h6>Limit title to 100 characters or less</h6>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} style={{border: "1px solid black", width: "300px", height: '35px'}} required />
            </div>
            <div className="questionInput" id="questionInput">
                <h2>Question Text*</h2>
                <h6>Add details</h6>
                <textarea name="question" id="ques" cols="60" rows="15" value={text} onChange={(e) => setText(e.target.value)}required ></textarea>
            </div>
            <div className="tags" id="questionTags">
                <h2>Tags*</h2>
                <h6>Add keywords separated by whitespace.</h6>
                <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} style={{border: '1px solid black', width: '300px', height: '35px'}} required/>
            </div>
            <div className="username" id="questionUsernames">
                <h2>Username*</h2>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={{border: "1px solid black", width: "300px", height: "35px"}} required/><br/>
            </div>
            <div style={{display: 'flex', justifyContent:' space-between', alignItems: 'center'}}>
                <button id="postQstnBtn" style={{backgroundColor: 'rgb(0, 136, 255)', color: 'white', margin: '10px 0'}} type='submit'>Post
                    Question
                </button>
                <span className="red" style={{color: 'red'}}>* indicates mandatory fields</span>
            </div>
        </form>
    );
}

export default QuestionForm;
