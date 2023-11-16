import { Cover } from "@/components/Cover/Cover";
import { Stack } from "@/components/Stack/Stack";
// import { getLandingData } from "@/services/getData";

export const getLandingData = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/landing`,
    {
      next: {
        revalidate: 60,
      },
    },
  );

  if (!response.ok) throw new Error("Unable to fetch posts.");

  return response.json();
};

export default async function Home() {
  if (!process.env.NEXT_PUBLIC_BASE_API_URL) {
    return null;
  }
  const landingData = (await getLandingData())[0];

  return (
    <main>
      <Cover data={landingData} />
      <Stack data={landingData} />
    </main>
  );
}
