/* eslint-disable no-restricted-globals */
// worker file
import { sanitiseWordsList } from "../../util/sanitise-word-list";

self.onmessage = (event) => {
  const rawData = event.data;

  const sanitizedData = sanitiseWordsList(rawData);
  postMessage(sanitizedData);
};

export {}