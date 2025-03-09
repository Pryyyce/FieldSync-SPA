import { data } from "react-router-dom";
const getUsers = async (
    url: string,
    setData: (data: any) => void,
) => {
    try {
        const response = await fetch(url);
        console.log("Response status:", response);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
    } catch (error) {
        throw new Error(`Fetch error: ${error}`);
    }
};

export default getUsers;
