import Card from "../Card/Card";

const Board = ({ difficulty = 0 }) => {
  if (difficulty < 0 || difficulty > 2) return null;

  const emojis = ["🚀", "🏠", "🏢", "🏥", "🏦", "🏫", "🏭", "🏰", "💻", "📱"];
  const cards = emojis.map((emoji, index) => <Card key={index} icon={emoji} />);

  return (
    <div
      className="
    board flex items-center gap-4
    "
    >
      {cards}
    </div>
  );
};

export default Board;
