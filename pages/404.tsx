import Link from "next/link";

import { useEffect } from "react";
import { useRouter } from "next/router";

import styles from "../styles/NotFound.module.scss";

const NotFound = ({}) => {
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [router]);

  return (
    <div className={styles.notFound}>
      <div className={styles.message}>
        <h1>404</h1>
        <p>Page does not exist</p>
      </div>
      <p className={styles.link}>
        Redirecting to <Link href="/">Homepage</Link>...
      </p>
    </div>
  );
};

export default NotFound;
