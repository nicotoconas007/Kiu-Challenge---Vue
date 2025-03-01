const vowelsNum = (str) => (str.match(/[aeiou]/gi) || []).length;

export const formatResponse = (data) => {
  return data
    .map((item) => ({
      image: item.image?.original || "",
      name: item.name || "",
      type: item.type || "",
      network: item.network?.name || "",
      officialSite: item.officialSite || "",
      genres: item.genres || [],
      vowels: vowelsNum(item.name || ""),
    }))
    .sort((a, b) => a.vowels - b.vowels || a.name.localeCompare(b.name))
    .map(({ vowels, ...rest }) => rest);
};
