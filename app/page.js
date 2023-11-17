import { Cover } from "@/components/Cover/Cover";
import { Projects } from "@/components/Projects/Projects";
import { Skills } from "@/components/Skills/Skills";
import { Stack } from "@/components/Stack/Stack";
import { getLandingData } from "@/services/getData";
import { getProjects } from "@/services/getData";

export default async function Home() {
  if (!process.env.NEXT_PUBLIC_BASE_API_URL) {
    return null;
  }
  const landingData = (await getLandingData())[0];
  const projects = await getProjects();

  return (
    <main>
      <Cover data={landingData} />
      <Stack data={landingData} />
      <Skills data={landingData} />
      <Projects data={projects} />
    </main>
  );
}
