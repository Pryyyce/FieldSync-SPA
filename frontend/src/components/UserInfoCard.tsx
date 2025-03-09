import React from "react";
import User from "../data/Interfaces";
import "./UserInfoCard.css";
type UserProps = {user: User;};

const UserInfoCard: React.FC<UserProps> = React.memo((props) => {
    const user = props.user;
    return (

        <div key={user.id} className="user-card">
                <h2 className="user-name">{user.name}</h2>
                <p><span className="label">Company:</span>{user.company.name}</p>
                <p><span className="label">Email:</span> {user.email}</p>
                <p><span className="label">Phone:</span> {user.phone}</p>
            </div>
    );
});

export default UserInfoCard;