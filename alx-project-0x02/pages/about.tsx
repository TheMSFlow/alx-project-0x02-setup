import Link from "next/link"
import Button from "@/components/common/Button";

const About:React.FC = () => {
    return (
        <>
            <h1>About page</h1>
            <nav className="flex flex-row gap-4">
                <Link href={'/home'}>Go to Home page</Link>
                <Link href={'/about'}>Go to About page</Link>
            </nav>
            <div className="p-8 space-y-4">
                <Button label="Small Rounded-sm" size="small" shape="rounded-sm" />
                <Button label="Medium Rounded-md" size="medium" shape="rounded-md" />
                <Button label="Large Rounded-full" size="large" shape="rounded-full" />
            </div>
        </>
    )
}

export default About