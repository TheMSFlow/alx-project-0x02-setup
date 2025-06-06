import Header from "@/components/layout/Header"
import Link from "next/link"


const Posts:React.FC = () => {
    return (
        <>
            <h1>Posts page</h1>
            <nav className="flex flex-row gap-4">
               <Header />
            </nav>

        </>
    )
}

export default Posts