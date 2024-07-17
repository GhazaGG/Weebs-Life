import Link from "next/link"
import InputSearch from "./InputSearch";

const Navbar = () => {
    return (
        <header className="font-Montserrat fixed w-full flex justify-between px-16 py-3 text-sky-950 bg-white" >
            <Link href='/' className="text-2xl font-extrabold text-sky-700">Weebs Life</Link>
            <nav className="flex items-center">
                <Link href='/anime' className="mx-3 font-bold">Anime</Link>
                <Link href='/manga' className="mx-3 font-bold">Manga</Link>
            </nav>
            <InputSearch />
        </header>
    )
}



export default Navbar;
