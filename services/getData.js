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

export const getProjects = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/projects`,
    {
      next: {
        revalidate: 60,
      },
    },
  );

  if (!response.ok) throw new Error("Unable to fetch posts.");

  return response.json();
};
