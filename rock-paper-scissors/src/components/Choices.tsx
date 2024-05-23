import "../styles/choices.css";
import IconRockSvg from "../images/icon-rock.svg";
import IconPaperSvg from "../images/icon-paper.svg";
import IconScissorsSvg from "../images/icon-scissors.svg";
import IconLizardSvg from "../images/icon-lizard.svg";
import IconSpockSvg from "../images/icon-spock.svg";

export default function Choices() {
  return (
    <div className="game-choices">
      <div className="game-choices__choice">
        <img src={IconScissorsSvg} alt="Scissors Icon" />
      </div>
      <div className="game-choices__choice">
        <img src={IconSpockSvg} alt="Spock Icon" />
      </div>
      <div className="game-choices__choice">
        <img src={IconPaperSvg} alt="Paper Icon" />
      </div>
      <div className="game-choices__choice">
        <img src={IconLizardSvg} alt="Lizard Icon" />
      </div>
      <div className="game-choices__choice">
        <img src={IconRockSvg} alt="Rock Icon" />
      </div>
    </div>
  );
}
