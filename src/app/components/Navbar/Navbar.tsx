import Link from "next/link"


const Navbar = () => {
    return (
        <header className="flex justify-between px-16 py-3 text-sky-950" >
            <Link href='/' className="text-2xl font-extrabold text-sky-700">Weebs Life</Link>
            <nav className="">
                <Link href='/anime' className="mx-3 font-bold">Anime</Link>
                <Link href='/manga' className="mx-3 font-bold">Manga</Link>
            </nav>
            <input placeholder="Search Anime... " className="rounded-md" />
        </header>
    )
}



export default Navbar;
