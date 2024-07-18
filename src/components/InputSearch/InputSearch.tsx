"use client"
import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

interface InputProps{
    content: string
}

const InputSearch  : React.FC<InputProps> = ({content}) => {
    const searchRef = useRef<HTMLInputElement>(null)
    const router = useRouter()

    const searcHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if(searchRef.current){
            const keyword = searchRef.current.value
            if(content == "Anime"){
                router.push(`/search/Anime/${keyword}`)
            }else if(content == "Manga"){
                router.push(`/search/Manga/${keyword}`)
            }else{
                alert(`${content} is not available`)
            }
        }
    }

    return (
        <div className="relative w-full">
            <input 
            placeholder="Search Anime... " 
            className="rounded-lg w-full p-1 border-2 border-utama" 
            ref={searchRef}
            />
            <button onClick={searcHandler}>
                <MagnifyingGlass size={24} className="absolute top-1 end-2"/>
            </button>
        </div>
    )
}

export default InputSearch