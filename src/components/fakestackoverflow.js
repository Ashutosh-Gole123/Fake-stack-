import Model from '../models/model.js';
import Col2 from './col2.js';
import Header from "./header"
import { useState } from 'react';

const model = new Model();

export default function FakeStackOverflow() {
  const [visitedQuestion, setVisitedQuestion] = useState(0);
  const [renderedQuestions, setRenderedQuestions] = useState(model.getAllQstns());
  const [mode, setMode] = useState(1);
  const [searchResults, setSearchResults] = useState([]);


  return (
      <div className="App">
            <Header setSearchResults={setSearchResults} />
        <div id="main" className="main">
          <div id="col1">
            <div id="questionsPageClick" onClick={() => {setRenderedQuestions(model.getAllQstns()); setMode(0)}}>Questions</div>
            <div id="tagsPageClick" onClick={() => setMode(1)}>Tags</div>
          </div>

          <Col2 model={model} mode={mode} setMode={setMode} renderedQuestions={renderedQuestions} setRenderedQuestions={setRenderedQuestions} visitedQuestion={visitedQuestion} setVisitedQuestion={setVisitedQuestion} searchResults={searchResults} />
        </div>
      </div>
  );
}
