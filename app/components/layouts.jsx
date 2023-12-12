import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Layouts = ({ children }) => {
    return (
        <>
            <Navbar></Navbar>
            <div className="layout">
                <div className="sidebar"><Sidebar></Sidebar></div>
                <div className="konten">{children}</div>
            </div>
        </>
    );
}

export default Layouts;