import { createContext, useContext, useEffect, useState } from "react";

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [tracks, setTracks] = useState([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // Fetch
  useEffect(() => {
    if (!debouncedSearch) {
      setTracks([]);
      return;
    }

    const fetchTracks = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          `https://itunes.apple.com/search?term=${debouncedSearch}&entity=song&limit=12`
        );

        const data = await res.json();

        const formatted = data.results.map(track => ({
          id: track.trackId,
          title: track.trackName,
          artist: track.artistName,
          cover: track.artworkUrl100.replace("100x100", "300x300"),
          album: track.collectionName,
          preview: track.previewUrl
        }));

        setTracks(formatted);
      } catch {
        setError("Failed to load tracks");
      } finally {
        setLoading(false);
      }
    };

    fetchTracks();
  }, [debouncedSearch]);

  return (
    <MusicContext.Provider
      value={{
        tracks,
        search,
        setSearch,
        loading,
        error
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => useContext(MusicContext);