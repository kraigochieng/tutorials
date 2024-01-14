import { Outlet } from "react-router-dom";

export default function BookNavbar() {
    return (
        <>
            <h2>BookNavbar</h2>
            <Outlet context={{hello: "world"}}/>
        </>
    )
}