import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Button.module.css';

function Button({ text, arrowSrc, href, isWhite, type = 'button' }) {
  const buttonClass = `${isWhite ? styles.whiteButton : styles.blueButton} ${styles.button}`;

  // If it's a submit button, render just a <button>
  if (type === 'submit') {
    return (
      <button type="submit" className={buttonClass}>
        {text}
        {arrowSrc && (
          <div className={styles.arrowContainer}>
            <Image src={arrowSrc} className={isWhite ? '' : 'whiteFilter'} alt="arrow" width={20} height={20} />
          </div>
        )}
      </button>
    );
  }

  // Otherwise, if href exists, wrap the button inside a Link
  if (href) {
    return (
      <Link href={href} className={styles.link}>
        <button className={buttonClass}>
          {text}
          {arrowSrc && (
            <div className={styles.arrowContainer}>
              <Image src={arrowSrc} className={isWhite ? '' : 'whiteFilter'} alt="arrow" width={20} height={20} />
            </div>
          )}
        </button>
      </Link>
    );
  }

  // Default fallback - just a normal button
  return (
    <button className={buttonClass}>
      {text}
      {arrowSrc && (
        <div className={styles.arrowContainer}>
          <Image src={arrowSrc} className={isWhite ? '' : 'whiteFilter'} alt="arrow" width={20} height={20} />
        </div>
      )}
    </button>
  );
}

export default Button;
