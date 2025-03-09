import FetchButton from "./FetchButton";
import { useUsersContext, User } from "../context/UsersContext";
import getUsers from "../functions/getUsers";

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