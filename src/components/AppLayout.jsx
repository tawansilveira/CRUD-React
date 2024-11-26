import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const AppLayout = () => {
    return (
        <div className="flex flex-col min-h-screen justify-between">
            <div><Header/></div>
            <div className="mb-auto"><Outlet/></div>
            <div><Footer/></div>
        </div>
    )
}

export default AppLayout;