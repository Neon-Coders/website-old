import Layout from "@/components/Layout";
import Projects from "@/components/Projects";
import { projectConfig } from "@/config/projects";

export default function About() {
  return (
    <Layout>
      <Projects items={projectConfig.mainLink} />
    </Layout>
  );
}
