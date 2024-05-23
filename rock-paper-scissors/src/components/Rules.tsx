import "../styles/rules.css";
import ImageRules from "../images/image-rules-bonus.svg";
import IconClose from "../images/icon-close.svg";

export default function Rules() {
  return (
    <div className="game-rules">
      <div className="game-rules__overlay"></div>
      <div className="game-rules__wrapper">
        <h1 className="game-rules__title">RULES</h1>
        <img
          src={IconClose}
          className="game-rules__close-icon"
          alt="close icon"
        />
        <img src={ImageRules} className="game-rules__image" alt="game rules" />
      </div>
    </div>
  );
}
