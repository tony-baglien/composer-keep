import { useState } from "react";
import { Link } from "react-router-dom";
import Burger from "../Components/Burger";

const MobileFooter = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <footer onClick={handleClick} className={isExpanded ? "expanded" : ""}>
            {!isExpanded ? (
                <Burger />
            ) : (
                <>
                    <Link to="/upload">Upload a piece</Link>
                    <Link to="/your-pieces">Your pieces</Link>
                    <Link to="/">Home</Link>
                </>
            )}
        </footer>
    );
};

export default MobileFooter;
