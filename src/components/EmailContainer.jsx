import React, {useState} from "react";
import EmailDetails from "./EmailDetails";
import Fetch from "./Fetch";

// const sender = 'this is sender email, sent by';
// const time = 'this is where time will go';
// const message = 'this is where raw message will go ';
// const summarized = 'summarized email'


function EmailContainer() {
    const [emailData, setEmailData] = useState({
        sender : ''
    })

    const updateEmailData = (data) => {
        setEmailData({
            sender : data.sender, 
            summary : data.summary,
            time : data.time
        })
    }

    return(
        <div>
            <Fetch onFetchSuccess = {updateEmailData}/>
            <EmailDetails emailData = {emailData}/>
        </div>
    )
}

export default EmailContainer;