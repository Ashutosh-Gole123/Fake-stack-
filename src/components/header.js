import { useState } from 'react';
import Model from '../models/model.js';

const model = new Model();
export default function Header({ setSearchResults,setSearchInput,setMode }) {
    const [searchQuery, setSearchQuery] = useState('');
    setSearchInput(searchQuery);
    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            // Get the search query
            const searchQuery = e.target.value.trim();
    
            // If the search query is empty, set mode to 6 and return
            if (searchQuery === '') {
                setMode(6);
                return;
            }
    
            // Split the search query into an array of words
            // Initialize arrays to store tag search results and word search results
            let tagResults = [];
            let wordResults = [];
    
            // Check if the search query is enclosed in square brackets (tag search)
            const isTagSearch = searchQuery.startsWith('[') && searchQuery.endsWith(']');
            const searchWords = searchQuery.toLowerCase().split(' ');
    
            // Perform tag search if it's a tag search
            if (isTagSearch) {
                // Extract tag name from the search query
                const tagName = searchQuery.substring(1, searchQuery.length - 1).toLowerCase();
    
                // Filter questions based on whether their tag names contain the tag name
                tagResults = model.getAllQstns().filter(question =>
                    question.tagIds.some(tagId => {
                        const tag = model.tagIdToName(tagId);
                        return tag.toLowerCase().includes(tagName);
                    })
                );
            }
    
            // Perform word search for non-tag searches
            if (!isTagSearch) {
                // Filter questions based on whether their title or text contain at least one word from the search query
                wordResults = model.getAllQstns().filter(question =>
                    searchWords.some(word =>
                        question.title.toLowerCase().includes(word) ||
                        question.text.toLowerCase().includes(word)
                    )
                );
            }
    
            // Combine tag and word search results
            const results = [...tagResults, ...wordResults];
    
            setSearchResults(results);
    
            console.log(results);
        }
    };
    
    
    
    
    return (
        <div id="header" className="header">
            <h1>Fake Stack Overflow</h1>
            <input
                type="text"
                placeholder="Search..."
                id="searchBar"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
            />
        </div>
    );
}