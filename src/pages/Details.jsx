import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const { id } = useParams();

  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrack = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(`https://itunes.apple.com/lookup?id=${id}`);

        const data = await res.json();

        if (!data.results.length) {
          setError("Track not found");
          return;
        }

        const item = data.results[0];

        setTrack({
          title: item.trackName,
          artist: item.artistName,
          album: item.collectionName,
          genre: item.primaryGenreName,
          releaseDate: item.releaseDate,
          duration: item.trackTimeMillis,
          cover: item.artworkUrl100.replace("100x100", "600x600"),
          preview: item.previewUrl,
        });
      } catch { 
        setError("Failed to load track");
      } finally {
        setLoading(false);
      }
    };

    fetchTrack();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-400">
        {error}
      </div>
    );
  }

  const minutes = Math.floor(track.duration / 60000);
  const seconds = Math.floor((track.duration % 60000) / 1000);

  return (
    <main className="relative flex justify-center items-center min-h-screen w-full text-white md:p-15 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 blur-3xl"
        style={{
          backgroundImage: `url(${track.cover})`,
        }}
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="flex flex-col md:flex-row gap-12 items-center md:items-start h-full">
        <section className="relative flex flex-col gap-5 md:gap-10">
          <img
            src={track.cover}
            alt={track.title}
            className="md:h-100 lg:h-180 lg:w-160 rounded-b-[60px] md:rounded-2xl shadow-lg ring-1 ring-white/10"
          />

          <button
            className="hidden md:block w-[30%] text-1xl rounded-full p-4 bg-white/10 backdrop-blur-md text-white border-white/40 hover:cursor-pointer"
            onClick={() => navigate(`/explorer`)}
          >
            Back to Explorer
          </button>
          <button
            className="absolute top-3 right-3 md:hidden text-sm font-bold rounded-full p-4 bg-black/60 backdrop-blur-md text-white border-white/40 hover:cursor-pointer"
            onClick={() => navigate(`/explorer`)}
          >
            Back to Explorer
          </button>
        </section>

        <div className="relative z-10 flex flex-col justify-center h-full gap-20 md:gap-15 lg:gap-20 text-center md:text-left">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl lg:text-7xl font-bold">{track.title}</h1>
            <h2 className="text-xl lg:text-3xl text-white/70">
              {track.artist}
            </h2>
          </div>

          <div className="flex flex-col gap-10 md:gap-0 lg:gap-10">
            <p className="text-xl lg:text-2xl">
              <strong>Album:</strong> {track.album}
            </p>
            <p className="text-xl lg:text-2xl">
              <strong>Genre:</strong> {track.genre}
            </p>
            <p className="text-xl lg:text-2xl">
              <strong>Duration:</strong> {minutes}:
              {seconds.toString().padStart(2, "0")}
            </p>
          </div>

          {track.preview && (
            <aside className="flex flex-col gap-2">
              <p className="text-xl lg:text-2xl text-white/70">
                Want to try this song?
              </p>
              <audio
                controls
                src={track.preview}
                className="mt-4 h-12 md:w-70 lg:w-100"
              />
            </aside>
          )}
        </div>
      </div>
    </main>
  );
};

export default Details;
