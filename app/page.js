import { Cover } from "@/components/Cover/Cover";
import { getCoverData } from "@/services/getData";

export default async function Home() {
  const coverData = (await getCoverData())[0];

  return (
    <main>
      <Cover coverData={coverData} />
    </main>
  );
}
