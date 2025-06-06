import Link from "next/link"


const Posts:React.FC = () => {
    return (
        <>
            <h1>Posts page</h1>
            <nav className="flex flex-row gap-4">
                <Link href={'/home'}>Go to Home page</Link>
                <Link href={'/about'}>Go to About page</Link>
                <Link href={'/posts'}>Go to About page</Link>
            </nav>

        </>
    )
}

export default Posts