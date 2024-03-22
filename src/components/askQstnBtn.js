// QstnButton.js

import React, { useState } from 'react';
import Model from '../models/model.js';
import Col2 from './col2.js'; // Import Col2 component

import "../stylesheets/App.css";
const model = new Model();

function QstnButton({handleAskQuestionClick }) {
    
    return (
        <>
           {/* {mode==3?(<Col2 mode={mode} model={model}/>):""}  */}
             {/* Render Col2 component passing mode as prop */}
        </>
    );
}

export default QstnButton;
