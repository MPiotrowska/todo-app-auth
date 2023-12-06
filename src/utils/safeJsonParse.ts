export const safeJsonParse = (jsonString: string) => {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error(`There was an error with retrieving saved tasks: ${error}`);
  }
};
