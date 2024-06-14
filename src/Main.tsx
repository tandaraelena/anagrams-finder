import { useEffect, useState } from "react";
import { fetchURL, sanitiseWordsList } from "./utils";

const Main = () => {
  const [data, setData] = useState<Record<string, Array<string>>>({});

  // fetch data
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(fetchURL)
          .then((res) => res.text())
          .then((response) => {
            return response.split("\n").map((word) => word.trim());
          });
        const newWordsListStructure: Record<
          string,
          Array<string>
        > = sanitiseWordsList(response);
        setData(newWordsListStructure);
      } catch (error) {
        console.log((error as { message: string }).message);
      }
    };
    getData();
  }, []);

  console.log("data", data);

  return <div>hey</div>;
};

export default Main;
