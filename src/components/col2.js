import React, { useState,useEffect } from 'react';
import AllPosts from './AllPosts/allPosts';
import Tags from './TagsPage/tagsPage';
import SinglePost from './SinglePost/singlePost';
import QuestionForm from './QuestionForm';
import SearchResults from './AllPosts/Search';
import AnswerPosts from './answerPosts';
import NoResults from './NoResults';

export default function Col2({ model, mode, setMode, renderedQuestions,searchResults , setRenderedQuestions, visitedQuestion, setVisitedQuestion,searchInput }) {
    const handleAskQuestionClick = () => {
        setMode(3); // Set mode to 3 to render the question form
    };
    const handleAskAnswerClick = (q) => {
        console.log(q);
        setQuestion(q);

        setMode(5); // Set mode to 3 to render the question form
    };
//    console.log(searchResults);
    useEffect(() => {
        // Check if search results are available
        if (searchResults.length > 0) {
            // If search results are available, change the mode to 4
            setMode(4);
        }
       
    }, [searchResults, setMode]);

    const [question, setQuestion] = useState(null);

    const currQue = (q) => {
      // Set the passed object in the parent component's state or perform any other necessary action
    };

    return (
        <div id="col2">
        {(() => {
            switch (mode) {
                case 0:
                    return <AllPosts model={model} renderedQuestions={renderedQuestions} setRenderedQuestions={setRenderedQuestions} setMode={setMode} setVisitedQuestion={setVisitedQuestion} onAskQuestionClick={handleAskQuestionClick} />;
                case 1:
                    return <Tags model={model} filterQuestions={(questions) => {setRenderedQuestions(questions); setMode(0);}} onAskQuestionClick={handleAskQuestionClick} />;
                case 2:
                    return <SinglePost model={model} qstn={visitedQuestion} onClickSubmit={handleAskAnswerClick} currQue={currQue}/>;
                case 3:
                    return <QuestionForm model={model} qstn={visitedQuestion}setMode={setMode} />; // Added case to display QuestionForm
                case 4:
                        // Render search results
                        return  <SearchResults model={model} setMode={setMode} setVisitedQuestion={setVisitedQuestion}  searchResults={searchResults} searchInput={searchInput} />
                case 5:
                            // Render search results
                    return  <AnswerPosts model={model} qstn={question}/>
                case 6:
                            // Render search results
                    return  <NoResults />
                    default:
                    return null; // Handle default case if needed
            }
        })()}
    </div>
    );
}
