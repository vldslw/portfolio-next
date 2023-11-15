export const getLandingData = async () => {
  const response = await fetch(`${process.env.BASE_URL}/api/landing`, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) throw new Error("Unable to fetch posts.");

  return response.json();
};
