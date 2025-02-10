const Card = ({ url, onClick }) => {
  return (
    <div
      className="
        card
        flex items-center justify-center
        w-20 h-28
        text-white
        bg-black border-4 border-solid border-white rounded-lg
        cursor-pointer select-none
      "
      onClick={onClick}
    >
      <img src={url} />
    </div>
  );
};

export default Card;
