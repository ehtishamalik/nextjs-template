"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./cookie-banner.module.css";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const dismissed = localStorage.getItem("cookieBannerDismissed");
      if (!dismissed) {
        setIsVisible(true);
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieBannerDismissed", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.banner}>
      <div className={styles.banner__inner}>
        <div className={styles.banner__icon} aria-hidden="true">
          🍪
        </div>

        <p className={styles.banner__text}>
          We use cookies to improve your browsing experience. By closing this
          banner or continuing to use our site, you agree to our{" "}
          <Link href="/legal/privacy-policy" className={styles.banner__link}>
            privacy policy
          </Link>
          .
        </p>

        <div className={styles.banner__actions}>
          <button
            type="button"
            onClick={handleAccept}
            className={`${styles.banner__btn} ${styles["banner__btn--accept"]}`}
          >
            Accept
          </button>
          {/* <button
            type="button"
            onClick={handleAccept}
            className={`${styles.banner__btn} ${styles["banner__btn--decline"]}`}
          >
            Decline
          </button> */}
        </div>
      </div>
    </div>
  );
}
