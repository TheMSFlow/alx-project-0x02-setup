import Link from "next/link"

const Home:React.FC = () => {
    return (
        <>
            <h1>Home page</h1>
            <nav className="flex flex-row gap-4">
                <Link href={'/home'}>Go to Home page</Link>
                <Link href={'/about'}>Go to About page</Link>
            </nav>
        </>
    )
}

export default Home