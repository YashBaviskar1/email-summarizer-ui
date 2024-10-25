function EmailDetails({ emailData }){
    // const sender = 'this is sender email, sent by';
    // const time = 'this is where time will go';
    // const message = 'this is where raw message will go ';
    // const summarized = 'summarized email'


    const { sender, summary, time } = emailData;

    const summaryPoints = summary ? summary.split('.').map(point => point.trim()).filter(point => point !== '') : [];

    return (<div class = 'email-details'>
        <p> sender : {sender || ''}</p>
        <p> time : {time || ''} </p>
        <p>Summary:</p>
            <ul>
                {summaryPoints.map((point, index) => (
                    <li key={index}>{point}.</li> 
                ))}
            </ul>
    </div>)
}

export default EmailDetails;