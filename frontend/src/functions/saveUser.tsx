import { User } from '../context/UsersContext';


export const saveUser = async (url:string, user: User) => {
    fetch(url,  {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then((response) => {
        if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    }).then ((data) => {    
        console.log("Success:", data);
    }
    ).catch((error) => {
        console.error("Error:", error);
    }
    );
}