const STORAGE_KEY = "code";

export const useStorage = () => {
  const storageCode = localStorage.getItem(STORAGE_KEY);

  if (storageCode) {
    return storageCode;
  }

  const code = new URLSearchParams(window.location.search).get("code");

  if (code) {
    localStorage.setItem(STORAGE_KEY, code);
    return code;
  }
};
