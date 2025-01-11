import Card from "../Card/Card";

const Board = ({ difficulty = 1 }) => {
  if (difficulty < 0 || difficulty > 2) return null;

  const emojis = ["🚀", "🏠", "🏢", "🏥", "🏦", "🏫", "🏭", "🏰", "💻", "📱"];
  const cards = emojis.map((emoji, index) => <Card key={index} icon={emoji} />);

  return (
    <div
      // Apply max-w-96 class only when difficulty is 1 (3x2 board)
      className={`
      board flex items-center justify-center gap-4 flex-wrap
      ${difficulty === 1 ? "max-w-80" : ""}
      `}
    >
      {cards}
    </div>
  );
};

export default Board;
