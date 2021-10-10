export const getJoke = (req) => {
  const language = req.headers["accept-language"];
  return { text: `Your nickname is big daddy in language: ${language}` };
};
