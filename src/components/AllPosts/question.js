import Model from "../../models/model"
import timeToString from "../../modules/timeToString";


export default function Question({model, qstn, visitThisQstn }) {
    console.log(qstn);
    return (
        <div className="question">
            <div className="question-left">
                <span className="answerCount">{qstn.ansIds.length} answer{qstn.ansIds.length !== 1 ? 's' : ''}</span><br />
                <span className="viewCount">{qstn.views} view{qstn.views !== 1 ? 's' : ''}</span>
            </div>
            <div className="question-mid">
                <span className="question-title" onClick={visitThisQstn}>{qstn.title}</span>
                <div className="tag-list">
                    {qstn.tagIds.map(tagId => (
                        <span className="tag" key={tagId}>{model.tagIdToName(tagId)}</span>
                    ))}
                </div>
            </div>
            <div className="question-right">
                <span className="asker">{qstn.askedBy} </span>
                <span className="posted-time">asked {timeToString(qstn.askDate)}</span>
            </div>
        </div>
    );
}

