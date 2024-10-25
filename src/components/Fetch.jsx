import React from 'react';

function Fetch({ onFetchSuccess }) {
    const doFetch = () => {
        fetch('http://127.0.0.1:5000/fetch_latest_email').then(respone => respone.json()).then(data => {console.log(data.email)
            alert(data.sender, data.summary, data.time)
            onFetchSuccess(data);
        })
    }
    
    return (<div class = "fetch">
       <button onClick={doFetch}> Fetch Latest </button>
    </div>)
}

export default Fetch;