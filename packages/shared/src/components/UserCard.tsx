const UserCard = ({ username }: { username?: string }) => {
    return <div>userName: {username ?? "user"}</div>;
};

export default UserCard;
