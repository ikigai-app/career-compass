const safeFnExecute = (fn) => {
  try {
    return { value: fn() };
  } catch (error) {
    return { error };
  }
};

const validateJson = (jsonInput) => {
  const { error: jsonError, value } = safeFnExecute(() =>
    JSON.parse(jsonInput)
  );

  if (jsonError) {
    jsonError.message = `Invalid JSON received: ${jsonInput}, error: ${jsonError.message}`;
    return { error: jsonError };
  }

  if (!value) {
    return { error: new Error(`Invalid JSON received: ${jsonInput}`) };
  }

  return { value };
};

export default validateJson;
