import Image from "next/image";

const TMDB_PROFILE_BASE = "https://image.tmdb.org/t/p/w300";

export default function CastSection({ cast }) {
  return (
    <div className="cast-section-clean">
      <h2 className="clean-section-title">Cast</h2>
      <div className="cast-gallery-clean">
        {cast.slice(0, 15).map((person) => (
          <div key={person.id} className="cast-card-clean">
            <div className="cast-image-clean">
              <Image
                src={
                  person.profile_path
                    ? TMDB_PROFILE_BASE + person.profile_path
                    : `https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&size=300&background=2a2a2a&color=ffffff&bold=true`
                }
                width={140}
                height={200}
                className="actor-image"
                alt={person.name}
                unoptimized
              />
            </div>
            <div className="cast-info-clean">
              <div className="actor-name-clean">{person.name}</div>
              <div className="character-name-clean">{person.character}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
