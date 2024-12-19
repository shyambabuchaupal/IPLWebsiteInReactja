import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InPageNavigation from "./InPageNavigation";

function MatchDetail() {
  let { id } = useParams();


  const [matchData, setMatchData] = useState([]);

  async function matchdetail() {
    const url = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${id}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "1b86a4dd70msh9fcf4f2263c1280p104ab7jsn224cd34ac589",
        "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setMatchData(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    matchdetail();
  }, []);
  return (
    <>
      <h2>{id}</h2>
      {matchData.length <= 0 ? (
        <h1>Loadding ......</h1>
      ) : (
        <InPageNavigation
          teams={[
            matchData.matchInfo.team1.name,
            matchData.matchInfo.team2.name,
          ]}
        ></InPageNavigation>
      )}
    </>
  );
}

export default MatchDetail;
