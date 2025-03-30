import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Button.module.css';

function Button({ text, arrowSrc, href, isWhite }) {
    return (
        <Link href={href} className={styles.link}>
            <button className={isWhite ? styles.whiteButton : styles.blueButton}>
                {text}
                <Image src={arrowSrc} className={isWhite ? '' : 'whiteFilter'} alt="arrow" width={20} height={20} />
            </button>
        </Link>
    );
}

export default Button;