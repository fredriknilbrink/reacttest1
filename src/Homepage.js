import React from 'react'
import styled from "styled-components";

const Button = styled.button`
    color: blue;
`;

const Homepage = ({buttonstate, callback}) => {
    return (
        <>
            This iss a homepage with state 
            <br />
            <Button onClick={callback}>The appstate is {buttonstate?'true':'false'}</Button>
         </>
    )
};

export default Homepage;