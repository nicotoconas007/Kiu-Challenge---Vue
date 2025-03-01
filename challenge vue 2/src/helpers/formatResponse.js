export const formatResponse = (data) => {
    return data.map((item) => ({
      image: item.image?.original || "",
      name: item.name || "",
      type: item.type || "",
      network: item.network?.name || "",
      officialSite: item.officialSite || "",
      genres: item.genres || [],
    }));
  };