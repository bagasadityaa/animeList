import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  // console.log(api.data);
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-5 sm:grid-cols-3 px-4">
      {api.data?.map((anime, index) => {
        return (
          <Link
            href={`/anime/${anime.mal_id}`}
            className="cursor-pointer transition-all text-color-primary hover:text-color-accent"
            key={index}
          >
            <div className="relative bg-white rounded-lg overflow-hidden shadow-md">
              {/* Tambahkan tampilan durasi di kanan bawah */}
              <span className="absolute bottom-2 right-2 bg-black text-white px-2 py-1 rounded">
                3:45 {/* Durasi contoh */}
              </span>
              <Image
                src={anime.images.webp.image_url}
                alt={anime.title}
                width={350}
                height={350}
                className="w-full max-h-64 object-cover"
              />
              <h3 className="font-bold text-md md:text-xl  p-4">
                {anime.title}
              </h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
