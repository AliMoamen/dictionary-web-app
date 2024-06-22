const baseURL: string = "https://api.dictionaryapi.dev/api/v2/entries/en/";
type fetchedData = {
  word: string;
  phonetic: string;
  phonetics: {
    text: string;
    audio: string;
  }[];
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      synonyms: string[];
      antonyms: string[];
      example?: string;
    }[];
  }[];
  sourceUrls: string[];
};

export type speech = {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example?: string;
};

export type data = {
  [key: string]: speech[] | string | string[][] | string[];
  partsOfSpeech: string[];
  word: string;
  phonetic: string;
  audio: string;
  sources: string[];
};

export const fetchData = async (word: string) => {
  const response = await fetch(baseURL + word);
  const parsedResponse: fetchedData[] = await response.json();

  if (!parsedResponse.length) {
    return null;
  }

  const finalData: data = {
    word: parsedResponse[0]["word"],
    partsOfSpeech: [],
    phonetic: parsedResponse[0]["phonetic"],
    audio: "",
    sources: [],
  };

  parsedResponse.forEach((dataPoint: fetchedData) => {
    dataPoint["meanings"].forEach((meaning) => {
      if (!(meaning["partOfSpeech"] in finalData)) {
        finalData["partsOfSpeech"].push(meaning["partOfSpeech"]);
        finalData[meaning["partOfSpeech"]] = [];
      }
      let speechList: speech[] = finalData[meaning["partOfSpeech"]] as speech[];
      speechList = [...speechList, ...meaning["definitions"]];
      finalData[meaning["partOfSpeech"]] = speechList;
    });
    if (!finalData.audio) {
      dataPoint["phonetics"].forEach((phonetic) => {
        if (!finalData.audio) {
          finalData.phonetic = phonetic["text"];
          finalData.audio = phonetic["audio"];
        }
      });
    }
    finalData["sources"] = [
      ...finalData["sources"],
      ...dataPoint["sourceUrls"],
    ];
  });
  finalData["partsOfSpeech"].sort();

  return finalData;
};
