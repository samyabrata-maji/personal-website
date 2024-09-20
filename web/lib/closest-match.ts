const valid_urls = ["/", "/blogs", "/socials", "/projects", "/resume"];

const jaccard_similarity = (str1: string, str2: string) => {
  const set1 = new Set(str1);
  const set2 = new Set(str2);
  const intersectionSize = new Set([...set1].filter((x) => set2.has(x))).size;
  const unionSize = set1.size + set2.size - intersectionSize;
  return intersectionSize / unionSize;
};

const closest_match = (s: string) => {
  const SIM_THRESHOLD = 0.5;
  let matches = valid_urls
    .map((url) => ({ url, similarity: jaccard_similarity(s, url) }))
    .filter((value) => value.similarity >= SIM_THRESHOLD)
    .sort((a, b) => b.similarity - a.similarity);

  if (matches.length == 0) {
    const closest = valid_urls.reduce(
      (best_match, url) => {
        const similarity = jaccard_similarity(s, url);
        return similarity > best_match.similarity
          ? { url, similarity }
          : best_match;
      },
      { url: "", similarity: 0 },
    );
    matches.push(closest);
  }

  return matches;
};

export { closest_match };
