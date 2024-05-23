import "../styles/header.css";

export default function Header() {
  return (
    <header className="game-header">
      {/* header title */}
      <div className="game-header__title">
        <p className="game-header__title-item">ROCK</p>
        <p className="game-header__title-item">PAPER</p>
        <p className="game-header__title-item">SCISSORS</p>
        <p className="game-header__title-item">LIZARD</p>
        <p className="game-header__title-item">SPOCK</p>
      </div>

      {/* score */}
      <div className="game-header__score">
        <p className="game-header__score-label">SCORE</p>
        <p className="game-header__score-value">12</p>
      </div>
    </header>
  );
}
