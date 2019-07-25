import React from 'react';
import CommentsListContainer from './CommentsListContainer';
import CommentAddContainer from './CommentAddContainer';

const App = () => {
    return (
        <div className="app">
            <CommentsListContainer />
            <CommentAddContainer />
        </div>
    )
}

export default App;