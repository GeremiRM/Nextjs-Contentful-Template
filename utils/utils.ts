import { RichTextContent } from "contentful";

// Amount of words an average adult can read per minute
const WORDS_PER_MINUTE = 200;

export const getArticleWordCount = (document: RichTextContent) => {
  let wordCount = 0;
  document.content?.map(
    (item) => (wordCount += item.content![0].value!.length)
  );

  return wordCount;
};

export const getReadingTime = (words: number) => {
  const minutes = words / WORDS_PER_MINUTE;
  const seconds = (minutes - Math.floor(minutes)) * 60;

  // 2:29 -> 2 minutes : 2:30 -> 3 minutes
  return seconds < 30 ? Math.floor(minutes) : Math.ceil(minutes);
};
