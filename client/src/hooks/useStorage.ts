const STORAGE_KEY = "code";

export const useStorage = () => {
  const code = new URLSearchParams(window.location.search).get("code");

  if (code) {
    localStorage.setItem(STORAGE_KEY, code);
    return code;
  }

  return localStorage.getItem(STORAGE_KEY);
};
