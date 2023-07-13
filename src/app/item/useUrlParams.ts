"use client";
import React from "react";

export const useUrlParams = () => {
  const [id, setId] = React.useState<URLSearchParams>();
  React.useEffect(() => {
    // Get the query string from the URL
    const queryString = window.location.search;
    // Create a new URLSearchParams object from the query string
    const searchParams = new URLSearchParams(queryString);
    setId(searchParams);
  }, []);
  return id;
};
