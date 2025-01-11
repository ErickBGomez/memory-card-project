import observable from "../../patterns/observable";

const handleClick = (icon) => {
  observable.notify(icon);
};

const showIcon = (icon) => {
  console.log(icon);
};

observable.subscribe(showIcon);

const Card = ({ icon }) => {
  return (
    <div
      className="
        card
        flex items-center justify-center
        w-20 h-28
      text-white
      bg-black border-4 border-solid border-white rounded-lg
        cursor-pointer select-none
        hover:-translate-y-2
        transition
      "
      onClick={() => handleClick(icon)}
    >
      {icon}
    </div>
  );
};

export default Card;
