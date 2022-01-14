import Image from 'next/image';

import styles from '../styles/About.module.css';

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o <span>PokeNext</span></h1>
            <p>Elit irure cupidatat velit culpa nisi reprehenderit pariatur irure. Quis magna pariatur sint aliqua ut ad enim quis esse consequat magna enim dolor. Officia esse elit exercitation ex ipsum nulla mollit tempor. Aute ad officia irure ad. Aliquip quis dolor quis ad magna consequat non pariatur velit. Consectetur excepteur velit in ut officia irure culpa duis velit fugiat culpa culpa sint. Nisi incididunt id ex enim mollit eu magna ipsum id officia consequat quis.</p>
            <Image 
                src="/images/charizard.png"
                alt="charizard"
                width="300"
                height="300"
            />
        </div>
    )
}