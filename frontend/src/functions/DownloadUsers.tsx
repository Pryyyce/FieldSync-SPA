import getUsers from "./getUsers";
import { useUsersContext,User } from "../context/UsersContext";

export const DownloadUsers = async (url: string) => {
   
    const { setUsers } = useUsersContext();
    try {
        await getUsers(url, setUsers);

    } catch (error) {
        console.error("Error downloading users:", error);
    }
};
