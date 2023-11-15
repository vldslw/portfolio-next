import { Cover } from "@/components/Cover/Cover";
import { getLandingData } from "@/services/getData";

export default async function Home() {
  const landingData = (await getLandingData())[0];

  return (
    <main>
      <Cover data={landingData} />
    </main>
  );
}
