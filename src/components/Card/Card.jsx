const Card = ({ icon }) => {
  const handleClick = () => {
    console.log(icon);
  };

  return (
    <div
      className="
        card
        flex items-center justify-center
        w-20 h-28
      text-white
      bg-black border-4 border-solid border-white rounded-lg
        cursor-pointer
        hover:-translate-y-2
        transition
      "
      onClick={handleClick}
    >
      {icon}
    </div>
  );
};

export default Card;
