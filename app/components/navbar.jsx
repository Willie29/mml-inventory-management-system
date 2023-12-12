import Image from "next/image";
import Logo from "../../public/logo.png";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="navbar">
            <Image src={Logo} alt="MML" />
            <Link href="/">Logout</Link>
        </div>
    );
}

export default Navbar;