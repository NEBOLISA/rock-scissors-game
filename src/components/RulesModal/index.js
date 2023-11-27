import "./Rules.css";
import ImageRules from "../../images/image-rules.svg";
import { FaXmark } from "react-icons/fa6";
function Rules({ showModal, setShowModal, onClick }) {
  const toggleModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className={showModal ? "overlay" : "hide"} onClick={onClick}></div>
      <div className={showModal ? "rules " : "rules hide"}>
        <div className="rules_header">
          <p className="rules_title">RULES</p>
          <FaXmark
            fontSize={27}
            color="#C3C3C3"
            onClick={toggleModal}
            cursor="pointer"
          />
        </div>
        <div className="rules_img_div">
          <img src={ImageRules} alt="rules" className="rules_img" />
        </div>
      </div>
    </>
  );
}
export default Rules;
