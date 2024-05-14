import { useState, useEffect } from "react";
import axiosRetry from "axios-retry";
import axios from "axios";

axiosRetry(axios, {
  retries: Infinity,
  retryDelay: (retryCount) => {
    console.log(`retry attempt: ${retryCount}`);
    return retryCount * 2000;
  },
  retryCondition: () => true,
});

axios.defaults.baseURL = "https://hms-dashboard-api.vercel.app/";
// axios.defaults.baseURL = "http://localhost:5000/";

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const cardData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await delay(1000);
      try {
        const response = await axios.get("api/card-totals");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error: ", error);
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
      setIsLoading(true);
      await delay(500);

      try {
        const response = await axios.post(
          "/api/line-chart",
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
        setIsLoading(false);
      } catch (error) {
        console.error("Error:", error);
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
      await delay(500);
      try {
        const response = await axios.get("api/pie-chart");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error: ", error);
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
      await delay(500);
      try {
        const response = await axios.get("api/patient-table");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading };
};

export const genderDemographicData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await delay(500);
      try {
        const response = await axios.get("api/gender-demographic");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading };
};

export const revenueData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await delay(500);
      try {
        const response = await axios.get("api/revenue-chart");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading };
};
