import { Cover } from "@/components/Cover/Cover";
import { Skills } from "@/components/Skills/Skills";
import { Stack } from "@/components/Stack/Stack";
import { getLandingData } from "@/services/getData";

export default async function Home() {
  if (!process.env.NEXT_PUBLIC_BASE_API_URL) {
    return null;
  }
  const landingData = (await getLandingData())[0];

  return (
    <main>
      <Cover data={landingData} />
      <Stack data={landingData} />
      <Skills data={landingData} />
    </main>
  );
}
