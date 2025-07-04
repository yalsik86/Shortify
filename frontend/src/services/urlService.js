import axiosInstance from "./axiosInstance";

export const shortenURL = async (longUrl) => {
  try {
    const res = await axiosInstance.post("/shorten", { longUrl });
    return res.data.data;
  } catch (error) {
    throw error;
  }
};


export const resolveURL = async (shortUrl) => {
    const res = await axiosInstance.get(`/resolve/${shortUrl}`);
    return res.data;
}

export const getAnalytics = async (shortUrl) => {
    const res = await axiosInstance.get(`/analytics/${shortUrl}`);
    return res.data;
}
