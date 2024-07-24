import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import CustomSection from "../components/Section/CustomSection";
import Dashboard from "../components/Home/Dashboard";
import Diagrama from "../components/Home/Diagrama";
import HomepageHeader from "../components/Home/Header";


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <CustomSection>
        <HomepageHeader />
      </CustomSection>
      <main>
        <CustomSection bgColor="bg-[#fd7254]">
          <Diagrama />
        </CustomSection>
        <CustomSection>
          <Dashboard />
        </CustomSection>
      </main>
    </Layout>
  );
}
