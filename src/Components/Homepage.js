import React from 'react'
import styled from "styled-components";

const Button = styled.button`
    color: blue;
`;

const Homepage = ({buttonstate, callback, children}) => {
    return (
              <>
            { buttonstate &&
                <div>
                    This iss a homepage with state DEV2!
                    {children}
                </div>
            } 
            <br />

            <Button onClick={callback}>The appstate is {buttonstate?'true':'false'}</Button>
         </>
         
    )
};

export default Homepage;


