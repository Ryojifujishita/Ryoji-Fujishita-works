export const handler = async (event, context) => {
  console.log("Auth function has been invoked");
  return {
    statusCode: 200,
    body: "GitHub Auth Function Placeholder",
  };
};