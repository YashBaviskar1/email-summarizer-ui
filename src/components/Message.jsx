import React, { useEffect , useState } from "react";

const Message = () => {
    const [data, setData]= useState(null)
    useEffect(()=> {
        fetch('http://127.0.0.1:5000/api/send').then(response => response.json()).then(data => setData(data.message))
    }, [])

    return <div> data from Flask : {data} </div>
}

export default Message;