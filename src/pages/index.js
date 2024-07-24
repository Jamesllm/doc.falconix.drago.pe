import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container" style={{ display: "flex" }}>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
            >
              Iniciar con el Tutorial
            </Link>
          </div>
            <p className="hero__subtitle" style={{marginTop: "10px"}}>{siteConfig.tagline}</p>
        </Heading>
        <div>
          <img src="https://placeholder-"/>
        </div>
        
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main><HomepageFeatures /></main>
    </Layout>
  );
}
