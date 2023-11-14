export const getCoverData = async () => {
  const response = await fetch(`${process.env.BASE_URL}/api/cover`, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) throw new Error("Unable to fetch posts.");

  return response.json();
};
