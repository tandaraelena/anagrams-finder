import { useEffect, useState } from "react";
import { fetchData, sanitiseWord } from "./utils";

const Main = () => {
  const [data, setData] = useState<string[]>([]);

  // fetch data
  useEffect(() => {
    fetchData(setData);
  }, []);

  // console.log('data',data)

  return <div>hey</div>;
};

export default Main;
