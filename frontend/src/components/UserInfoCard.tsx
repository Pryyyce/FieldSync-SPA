import React from "react";
import { User } from "../context/UsersContext";
type UserProps = {user: User;};

const UserInfoCard: React.FC<UserProps> = (props) => {
    const user = props.user;
    return (

        <div key={user.email} className="user-card">
                <h2>{user.name}</h2>
                <p>Company: {user.company.name}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
            </div>
    );
}

export default UserInfoCard;