import { RichTextContent } from "contentful";

export const shuffleArray = (array: any) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

// Amount of words an average adult can read per minute
const WORDS_PER_MINUTE = 200;

const getArticleWordCount = (document: RichTextContent) => {
  let wordCount = 0;
  document.content?.map(
    (item) => (wordCount += item.content![0].value!.length)
  );

  return wordCount;
};

export const getReadingTime = (document: RichTextContent) => {
  const wordCount = getArticleWordCount(document);

  const minutes = wordCount / WORDS_PER_MINUTE;
  const seconds = (minutes - Math.floor(minutes)) * 60;

  // 2:29 -> 2 minutes : 2:30 -> 3 minutes
  return seconds < 30 ? Math.floor(minutes) : Math.ceil(minutes);
};
