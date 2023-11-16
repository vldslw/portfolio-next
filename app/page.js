import { Cover } from "@/components/Cover/Cover";
import { Stack } from "@/components/Stack/Stack";
import { getLandingData } from "@/services/getData";

export default async function Home() {
  const landingData = (await getLandingData())[0];

  return (
    <main>
      <Cover data={landingData} />
      <Stack data={landingData} />
    </main>
  );
}
