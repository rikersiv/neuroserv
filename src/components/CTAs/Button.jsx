import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Button.module.css';

function Button({ text, arrowSrc, href, isWhite }) {
    return (
        <Link href={href} className={styles.link}>
            <button className={`${isWhite ? styles.whiteButton : styles.blueButton}  ${styles.button}`}>
                {text}
                <div className={styles.arrowContainer}>
                    <Image src={arrowSrc} className={isWhite ? '' : 'whiteFilter'} alt="arrow" width={20} height={20} />
                </div>
            </button>
        </Link>
    );
}

export default Button;