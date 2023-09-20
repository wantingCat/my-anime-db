/* eslint-disable react/prop-types */
import "./TopAnime.css";
import Card from "./Card";

const TopAnime = (props) => {
  const synopsisHandler = () => {
    props.onClick();
  };

  return (
    <div className="anime-grid">
      {props.topAnime.map((anime) => (
        <Card
          key={anime.mal_id}
          title={anime.title}
          rank={anime.rank}
          score={anime.score}
          img={anime.images.jpg.image_url}
          onClick={synopsisHandler}
        />
      ))}
    </div>
  );
};

export default TopAnime;
