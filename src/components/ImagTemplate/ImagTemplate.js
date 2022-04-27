import './ImagTemplate.css';

export default function ImagTemplate({ tags, path, className }) {
  return (
    <img
      alt={tags}
      src={
        path
          ? `https://image.tmdb.org/t/p/w300${path}`
          : 'https://novi-vorota.com.ua/catalog/view/theme/novivorota/images/notfound.png'
      }
      className={className}
    />
  );
}
