import { getAnimeResponse } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList/AnimeList";
import Header from "@/components/AnimeList/Header";
import Link from "next/link";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);
  console.log(decodeKeyword);

  const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`);
  console.log(keyword);
  return (
    <>
      <section>
        <Header title={`Pencarian untuk ${decodeKeyword}...`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
