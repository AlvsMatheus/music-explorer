import React from 'react'

const MusicGrid = ({tracks, loading, onSelect}) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  {loading
    ? Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-4 animate-pulse"
        >
          <div className="w-full aspect-square bg-white/20 rounded-xl mb-4" />
          <div className="h-4 bg-white/20 rounded mb-2" />
          <div className="h-3 bg-white/20 rounded w-2/3" />
        </div>
      ))
    : tracks.map(track => (
        <div
          key={track.id}
          className="
            bg-white/10 backdrop-blur-md
            rounded-2xl p-4
            hover:scale-105 hover:bg-white/20
            transition duration-300
            cursor-pointer
          "
          onClick={() => onSelect(track.id)}
        >
          <img
            src={track.cover}
            alt={track.title}
            className="rounded-xl mb-4 w-full aspect-square object-cover"
          />

          <h3 className="text-white font-semibold truncate">
            {track.title}
          </h3>

          <p className="text-white/60 text-sm">
            {track.artist}
          </p>
        </div>
      ))}
</section>
  )
}

export default MusicGrid
