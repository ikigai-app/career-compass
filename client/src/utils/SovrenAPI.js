import Constants from "expo-constants";

const resumeParser = async (payload) => {
  try {
    const END_POINT = Constants.manifest.extra.sovren_endPoint;
    const ACCOUNT_ID = Constants.manifest.extra.sovren_accountID;
    const SERVICE_KEY = Constants.manifest.extra.sovren_serviceKEY;

    const response = await fetch(END_POINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Sovren-AccountId": ACCOUNT_ID,
        "Sovren-ServiceKey": SERVICE_KEY,
      },
      body: JSON.stringify(payload),
    });
    const res = await response.json();
    return res;
  } catch (error) {
    console.error(error);
  }
};

export default resumeParser;
