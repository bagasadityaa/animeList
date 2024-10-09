import AnimeList from "@/components/AnimeList/AnimeList";
import Header from "@/components/AnimeList/Header";
import Link from "next/link";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "../libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=10");
  const seasonAnime = await getAnimeResponse("seasons/now", "limit=10");
  let rekomendasiAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  rekomendasiAnime = reproduce(rekomendasiAnime, 10);
  return (
    <>
      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={rekomendasiAnime} />
      </section>
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
          title="Seasons Anime"
          linkTitle="Lihat Semua"
          linkHref="/seasons"
        />
        <AnimeList api={seasonAnime} />
      </section>
    </>
  );
};

export default Page;
