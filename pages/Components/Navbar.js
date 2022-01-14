import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return(
        <nav>
            <div>
                <Image 
                    src="/images/pokeball.png" 
                    alt="Logo" 
                    width="30"
                    height="30"
                />
                <h1>PokeNext</h1>
            </div>
            <ul>
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                    <Link href="/"><a>Sobre</a></Link>
                </li>
            </ul>
        </nav>
    )
}