import { useState, useEffect } from "react";

export const cardData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://hms-dashboard-api.vercel.app/api/card-totals"
        );
        if (response.ok) {
          const json = await response.json();
          setData(json);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading };
};

export const lineChartData = (filter) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://hms-dashboard-api.vercel.app/api/line-chart",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ year: filter }),
          }
        );
        if (response.ok) {
          const json = await response.json();
          setData(json);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [filter]);

  return { data, isLoading };
};

export const pieChartData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://hms-dashboard-api.vercel.app/api/pie-chart"
        );
        if (response.ok) {
          const json = await response.json();
          setData(json);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading };
};
