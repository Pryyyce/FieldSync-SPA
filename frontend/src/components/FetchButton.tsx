import React, {useEffect,useState} from "react";

//fetch function is customizable, so updating state/end logic is customizable
type FetchButtonProps = {
    buttonName: string;
    url: string;
    tryFetch: (url: string) => Promise<void>;
  };

const FetchButton: React.FC<FetchButtonProps> = (props) => {
    return(
        <>
            <button onClick={() => props.tryFetch(props.url)}>
                {props.buttonName}
            </button>
            
        </>
    );
};
export default FetchButton;
