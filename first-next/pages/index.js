import Link from 'next/link'

const Index = () => (
    <div>
        <Link href='/about'>
            <a>About page</a>
        </Link>
        <Link href='/contact'>
            <a>Contact page</a>
        </Link>
        <h1>Our Index Page!!!</h1>
    </div>
)

export default Index;