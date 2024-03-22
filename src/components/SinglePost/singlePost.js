import QstnButton from "../askQstnBtn";
import timeToString from "../../modules/timeToString";
import { useState } from "react";
export default function SinglePost({model, qstn,onClickSubmit,currQue}) {
    let answers = model.getQstnAnswers(qstn);
    
    const [mode, setMode] = useState(1); // Initialize mode to 1

    const handleSubmitForm = () => {
        onClickSubmit(qstn);         // Call the function provided by the parent
    };
    const handleQuestion = () => {
        // Assuming you want to pass the qstn object to the parent when a certain event occurs
        currQue();
      };    return (
        <div id="singlePostPage">
            <div id="postQuestionInfo">
                <div id="postTop1">
                    <span className="answerCount bold">{qstn.ansIds.length} answer{qstn.ansIds.length !== 1 ? 's' : ''}</span>
                    <span id="question-title" className="bold">{qstn.title}</span>
                    <span className="btn-container"><QstnButton /></span>
                </div>

                <div id="postTop2">
                    <span className="viewCount bold">{qstn.views} view{qstn.views !== 1 ? 's' : ''}</span>
                    <span className="question-description">{qstn.text}</span>
                    <div id="askedInfo" className="column-right">
                        <span className="asker">{qstn.askedBy}</span>
                        <span className="posted-time"> asked {timeToString(qstn.askDate)}</span>
                    </div>
                </div>
            </div>

            <div id="answers">
                {answers.map(ans => (
                    <div className="answer" key={ans.aid}>
                        <span className="answer-description">{ans.text}</span>
                        <div className="column-right">
                            <span className="answerer">{ans.ansBy}</span>
                            <span className="posted-time"> asked {timeToString(ans.ansDate)}</span>
                        </div>
                    </div>
                ))}
            </div>

            <button id="ansQstnBtn" className="btn" onClick={handleSubmitForm}>Answer question</button>
            
        </div>);
}