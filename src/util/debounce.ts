// timer function which delays the anagrams finder
export const debounce = (callbackFn: (val:string) => void, delay: number) => {
  const timer = setTimeout(callbackFn,delay);
  
  // cleanup timer
  return () => clearTimeout(timer);
}
