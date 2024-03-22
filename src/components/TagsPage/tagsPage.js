import QstnButton from "../askQstnBtn";

export default function Tags({model, filterQuestions,onAskQuestionClick }) {
    const handleAskQuestionClick = () => {
        onAskQuestionClick(); // Call the function provided by the parent
    };

    return (      
    <div className="AllTags">
        <div className="tagHeadings">
        <h1>{model.getAllTags().length} Tags</h1>
        <h1>All Tags</h1>
        <button className="askQstnBtn btn" id="QuestionForm"  onClick={handleAskQuestionClick}>Ask Question</button>
        </div>
        <div className="tagsAndQuestions">
            {model.getAllTags().map(t => {
                let tagQuestions = model.getAllQstns().filter(q => q.tagIds.some(tid => tid === t.tid))
                let numTagQuestions = tagQuestions.length;
                return (
                <div className="tag" key={t.tid}>
                    <a onClick={() => {filterQuestions(tagQuestions)}}>{t.name}</a>
                    <h4>{numTagQuestions} question{numTagQuestions !== 1 ? 's' : ''}</h4>
                </div>
                )})}
        </div>
    </div>);
}