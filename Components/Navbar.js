import Link from "next/link";
import Image from "next/image";

import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    return(
        <nav className={styles.navbar}>
            <div>
                <Image
                    className={styles.logo}
                    src="/images/pokeball.png" 
                    alt="Logo" 
                    width="30"
                    height="30"
                />
                <h1>PokeNext</h1>
            </div>
            <ul className={styles.link_items}>
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                    <Link href="/about"><a>Sobre</a></Link>
                </li>
            </ul>
        </nav>
    )
}