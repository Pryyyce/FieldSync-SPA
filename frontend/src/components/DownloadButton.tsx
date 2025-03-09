import FetchButton from "./FetchButton";
import { useUsersContext } from "../context/UsersContext";
import getUsers from "../functions/getUsers";
import User from "../Interfaces";

const DownloadButton: React.FC = () => {
    const { setUsers } = useUsersContext();

    async function downloadUsers(url: string) {
        try {
            await getUsers(url, setUsers);
        } catch (error) {
            console.error("Error downloading users:", error);
        }
    }

    return (
        <FetchButton buttonName="Download" url="https://jsonplaceholder.typicode.com/users" tryFetch={downloadUsers} />
    );
};

export default DownloadButton;