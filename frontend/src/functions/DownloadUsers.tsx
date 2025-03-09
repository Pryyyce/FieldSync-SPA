import getUsers from "./getUsers";
import { useUsersContext} from "../context/UsersContext";
import User from "../data/Interfaces";

export const DownloadUsers = async (url: string) => {
   
    const { setUsers } = useUsersContext();
    try {
        await getUsers(url, setUsers);

    } catch (error) {
        console.error("Error downloading users:", error);
    }
};
