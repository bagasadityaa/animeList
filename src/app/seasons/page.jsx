"use client";
import AnimeList from "@/components/AnimeList/AnimeList";
import Header from "@/components/Utilities/Header";
import Pagination from "@/components/Utilities/Pagination";
import React, { useEffect, useState } from "react";

const Seasons = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/seasons/now?page=${page}`
    );
    const data = await response.json();
    setTopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);
  return (
    <>
      <Header title={`ANIME SEASONS #${page}`} />
      <AnimeList api={topAnime} />
      <Pagination
        setPage={setPage}
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
      />
    </>
  );
};

export default Seasons;
