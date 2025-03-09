import {User} from "../context/UsersContext";
import FetchButton from "./FetchButton";
import {saveUser} from "../functions/saveUser";
export default function SaveUserButton(props: {user: User; url: string;}) {
    
    const user = props.user;
    

    
    return (
        <>
        <FetchButton buttonName="Save" url={props.url} tryFetch={(url:string)=>saveUser(url,user)} />
        </>
    );
};
