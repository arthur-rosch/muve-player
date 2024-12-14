import { useMutation } from "@apollo/client";
import { useState, useCallback } from "react";
import { getIPAddress, getGeolocation } from "../utils";
import { ADD_VIEW_TIMESTAMP, ADD_VIEW_UNIQUE } from "../querys";

interface UseAnalyticsProps {
  videoId: string;
}

export const useAnalytics = ({ videoId }: UseAnalyticsProps) => {
  const [cachedIP, setCachedIP] = useState<string | null>(null);
  const [cachedGeo, setCachedGeo] = useState<Record<string, any> | null>(null);

  const [addViewUnique] = useMutation(ADD_VIEW_UNIQUE);
  const [addViewTimestamp] = useMutation(ADD_VIEW_TIMESTAMP);

  
  const fetchIPAndGeo = useCallback(async () => {
    if (!cachedIP || !cachedGeo) {
      try {
        const ip = await getIPAddress();
        const geo = await getGeolocation(ip);
        setCachedIP(ip);
        setCachedGeo(geo);
      } catch (error) {
        console.error("Erro ao obter IP ou Geolocalização:", error);
      }
    }
  }, [cachedIP, cachedGeo]);

  const sendViewRequest = async () => {
    await fetchIPAndGeo();
    if (cachedIP && cachedGeo) {
      try {
        await addViewUnique({
          variables: {
            videoId,
            userIp: cachedIP,
            agent: navigator.userAgent,
            deviceType: /Mobi|Android/i.test(navigator.userAgent)
              ? "Mobile"
              : "Desktop",
            country: cachedGeo.country,
            region: cachedGeo.region,
            city: cachedGeo.city,
          },
        });
        console.log("View única registrada com sucesso.");
      } catch (error) {
        console.error("Erro ao registrar view única:", error);
      }
    }
  };

  const sendViewTimestampRequest = async (start: number, end: number) => {
    await fetchIPAndGeo();
    if (cachedIP && cachedGeo) {
      try {
        await addViewTimestamp({
          variables: {
            videoId,
            userIp: cachedIP,
            startTimestamp: start,
            endTimestamp: end,
            agent: navigator.userAgent,
            deviceType: /Mobi|Android/i.test(navigator.userAgent)
              ? "Mobile"
              : "Desktop",
            country: cachedGeo.country,
            region: cachedGeo.region,
            city: cachedGeo.city,
          },
        });
        console.log("Timestamps registrados com sucesso.");
      } catch (error) {
        console.error("Erro ao registrar timestamps:", error);
      }
    }
  };

  return {
    sendViewRequest,
    sendViewTimestampRequest,
  };
};
