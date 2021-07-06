import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
    const history = useHistory();
    return (
        <>
            <h1>Welcome to the world of React!</h1>
            <button onClick={() => history.push('/contact')}>Go TO</button>
        </>
    );
}

export default Home;