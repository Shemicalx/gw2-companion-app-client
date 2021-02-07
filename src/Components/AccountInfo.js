const AccountInfo = (props) => {
    return (
        <div className='App__MainSection'>
            <h2>Account Information:</h2>
            <ul>
                <li>API key: {props.apiKey}</li>
                <li>Characters:</li>
            </ul>
            

        </div>
    )
};

export default AccountInfo;