export default async function useSwell() {
  const swell = async () => (await import("swell-js")).default;
  return { swell };
}
