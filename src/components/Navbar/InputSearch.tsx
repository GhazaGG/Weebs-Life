"use client"
import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef<HTMLInputElement>(null)
    const router = useRouter()

    const searcHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if(searchRef.current){
            const keyword = searchRef.current.value
            router.push(`/search/${keyword}`)
        }
    }

    return (
        <div className="relative">
            <input 
            placeholder="Search Anime... " 
            className="rounded-lg w-full p-1 border-utama" 
            ref={searchRef}
            />
            <button onClick={searcHandler}>
                <MagnifyingGlass size={24} className="absolute top-1 end-2"/>
            </button>
        </div>
    )
}

export default InputSearch