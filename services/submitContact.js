export const submitContact = async ({ name, email, message }) => {
  const response = await fetch(
    `https://formsubmit.co/ajax/bdb4270190712c74720c3f60c05f26a1`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    },
  );
  let res;
  if (response.ok) {
    res = response.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res;
};
