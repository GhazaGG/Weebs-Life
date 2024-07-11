interface ShowcaseProps{
    title?: string
}

const Header: React.FC<ShowcaseProps> = ({title ="Welcome To Weebs Life!"}) => {
    return (
        <div className=" text-white font-bold  h-56  bg-utama text-5xl flex flex-col items-center justify-center">
            <h1>{title}</h1>
            <p className="text-sm font-light pt-2">Immerse yourself in the ultimate anime experience with Weebs Life.</p>
        </div>
    )
}

export default Header