import Nav from "./Nav";
import MobileFooter from "./MobileFooter";
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
    const [visible, setVisible] = useState();
    const location = useLocation();

    return (
        <>
            <Nav />
            <main>
                <Outlet />
                <div className="title-wrapper">
                    <h1>Composer Craft</h1>
                    <div className="subtitle-wrapper">
                        <p id="store">Store</p>
                        <p id="review">Review</p>
                        <p id="collab">Collab</p>
                    </div>
                </div>
            </main>
            <MobileFooter />
        </>
    );
};

export default Layout;
