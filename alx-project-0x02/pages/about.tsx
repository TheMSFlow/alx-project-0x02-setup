import Link from "next/link"

const About:React.FC = () => {
    return (
        <>
            <h1>About page</h1>
            <nav className="flex flex-row gap-4">
                <Link href={'/home'}>Go to Home page</Link>
                <Link href={'/about'}>Go to About page</Link>
            </nav>
        </>
    )
}

export default About