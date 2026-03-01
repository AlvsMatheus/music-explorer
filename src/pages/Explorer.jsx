import { useNavigate } from "react-router-dom";
import { useMusic } from "../context/MusicContext";
import MusicCard from "../components/explorer/MusicGrid";

const Explorer = () => {
  const { tracks, search, setSearch, loading } = useMusic();
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen w-full bg-[url('/explorer_background.png')]">
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col gap-24">
        <header className="flex flex-col items-center gap-20">
          <img src="/logo.png" alt="Youbloom Explorer" className="w-64" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search music..."
            className="h-14 w-full max-w-2xl px-6 rounded-full bg-white/20 backdrop-blur-md text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-white/40 transition"
          />
        </header>
        <MusicCard
          onSelect={(id) => navigate(`/details/${id}`)}
          tracks={tracks}
          loading={loading}
        />
      </div>
    </main>
  );
};

export default Explorer;
