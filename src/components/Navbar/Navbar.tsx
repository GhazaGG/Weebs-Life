import Link from "next/link"
import InputSearch from "../InputSearch/InputSearch";

const Navbar = () => {
    return (
        <header className="font-Montserrat fixed w-full flex justify-between px-16 py-3 text-sky-950 bg-white" >
            <Link href='/' className="text-2xl font-extrabold text-sky-700">Weebs Life</Link>
            <nav className="flex items-center">
                <Link href='/anime' className="mx-3 font-bold">Anime</Link>
                <Link href='/manga' className="mx-3 font-bold">Manga</Link>
            </nav>
            <div className="gap-2">
                <Link href="/" className="mr-3">Sign Up</Link>
                <Link href="/" >Sign In</Link>
            </div>
        </header>
    )
}



export default Navbar;
