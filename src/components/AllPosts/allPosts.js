import React from 'react'
import Question from "./question"
import QstnButton from "../askQstnBtn"

export default function AllPosts({model, renderedQuestions, setRenderedQuestions, setVisitedQuestion, setMode,onAskQuestionClick,onAskAnswerClick2 }) { 
    const handleAskQuestionClick = () => {
        onAskQuestionClick(); // Call the function provided by the parent
    };
    const handleSubmit = () => {
        onAskAnswerClick2(); // Call the function provided by the parent
    };
    return (
        <div className="AllPosts">
            <div id="questionsGrid">
                <h2>All Questions</h2>
                <div>
            <button className="askQstnBtn btn" id="QuestionForm"  onClick={handleAskQuestionClick}>Ask Question</button>
                </div>
                <span id="questionCount">{renderedQuestions.length} question{renderedQuestions.length === 1 ? '' : 's'}</span>
                <div>
                    <button id="newestBtn" onClick={() => {model.sortQstnsByDate(); setRenderedQuestions(model.getAllQstns());}}>Newest</button>
                    <button id="activeBtn" onClick={() => {model.sortQstnsByActive(); setRenderedQuestions(model.getAllQstns());}}>Active</button>
                    <button id="unansweredBtn" onClick={() => {setRenderedQuestions(renderedQuestions.filter(q => q.ansIds.length === 0));}}>Unanswered</button>
                </div>
            </div>
            <div id="questions">
                <div id="questions">
                    {renderedQuestions.map((qstn) => (
                        <Question key={qstn.qid} qstn={qstn} visitThisQstn={() => {setVisitedQuestion(qstn); setMode(2)}} onAskAnswerClick={handleSubmit}/>
                    ))}
                </div>
            </div>
        </div>
    );
}