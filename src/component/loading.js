import React from 'react';
import '../assets/css/loading.css'
const Loading =props=>(
    <div className="placeLoading">
        <h1></h1>
        <p>
            {props.loadingContent}
        </p>
    </div>
);
export default Loading;