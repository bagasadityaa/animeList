import AnimeList from "@/components/AnimeList/AnimeList";
import Header from "@/components/AnimeList/Header";
import Link from "next/link";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "../libs/api-libs";

const Page = async () => {
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=3`
  // );
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let rekomendasiAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  rekomendasiAnime = reproduce(rekomendasiAnime, 8);
  return (
    <>
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header
          title="Rekomendasi"
          // linkTitle="Lihat Semua"
          // linkHref="/populer"
        />
        <AnimeList api={rekomendasiAnime} />
      </section>
    </>
  );
};

export default Page;
