import { useState, useEffect } from "react";

// Retry interceptor function
import axiosRetry from "axios-retry";
// Default axios instance
import axios from "axios";

axiosRetry(axios, {
  retries: 3, // Number of retries (Defaults to 3)
});

export const cardData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://hms-dashboard-api.vercel.app/api/card-totals") // The request is retried if it fails
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);

  return { data, isLoading };
};

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const lineChartData = (filter) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await delay(500);

      try {
        const response = await axios.post(
          "https://hms-dashboard-api.vercel.app/api/line-chart",
          {
            year: filter,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setData(response.data);
      } catch (error) {
        console.error("Error:", error);
      }

      setIsLoading(false);
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

export const patientTableData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://hms-dashboard-api.vercel.app/api/patient-table"
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
