import React from 'react';

import timeToString from "../../modules/timeToString";
import Model from "../../models/model"
const model = new Model();


function SearchResults({ searchResults,model,setMode,setVisitedQuestion }) {
    const getTagNames = (tagIds) => {
        return tagIds.map((tagId) => model.getTagById(tagId).name);
      };
    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', options);
      };
  if (!searchResults || searchResults.length === 0) {
    return <div>No results found.</div>;
  }
  const handleClick = (question) => {
    setVisitedQuestion(question);
    setMode(2);
  };
  return (
    <div>
    {searchResults.map((question, index) => (
        <div className="question" key={index}>
            
            <div className="question-left">
                <span className="answerCount">{question.ansIds.length} answer{question.ansIds.length !== 1 ? 's' : ''}</span><br />
                <span className="viewCount">{question.views} view{question.views !== 1 ? 's' : ''}</span>
            </div>
            <div className="question-mid">
                <span className="question-title" onClick={() => handleClick(question)}>{question.title}</span>
                <div className="tag-list">
                    {question.tagIds.map(tagId => (
                        <span className="tag" key={tagId}>{model.tagIdToName(tagId)}</span>
                    ))}
                </div>
            </div>
            <div className="question-right">
                <span className="asker">{question.askedBy} </span>
                <span className="posted-time">asked {timeToString(question.askDate)}</span>
            </div>
        </div>
    ))}
</div>
  );
}

export default SearchResults;
