import UserCard from "@packages/shared/src/components/UserCard";
import { Outlet } from "react-router-dom";

export const App = () => {
    return (
        <div>
            <h1>ADMIN MODULE</h1>
            <Outlet />
            <UserCard username="from admin" />
        </div>
    );
};
