import Head from "next/head";
import styles from "../styles/Home.module.scss";
const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Alex Karidas</title>
        <meta name="Alex's portfolio" content="My Web Developer portfolio" />
      </Head>
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default Layout;
