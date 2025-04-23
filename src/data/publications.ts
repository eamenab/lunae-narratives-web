import { useEffect, useState } from "react";

const SHEET_URL = "https://opensheet.elk.sh/1Agg1t_VF_Jpy-hNp9mb3DrcqFNPW3bkqH2UHewJPlC0/publicaciones";

export const usePublications = () => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    fetch(SHEET_URL)
      .then((res) => res.json())
      .then((data) => {
        setPublications(data);
      })
      .catch((err) => console.error("Failed to load publications", err));
  }, []);

  return publications;
};
