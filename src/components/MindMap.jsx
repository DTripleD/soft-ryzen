import icons from "../images/icons.svg";

const MindMap = () => {
  return (
    <section>
      <div className="container">
        <h2 className="title">Mind map</h2>
        <ul className="mind_map_list">
          <li className="mind_map_item">
            <p className="card_text">
              All owners of APE NFTs and all future collections will receive a
              percentage of sales based on the number of NFTs they own
            </p>
            <h3 className="card_title">Yape drop</h3>
          </li>
          <li className="mind_map_item">
            <p className="card_text">
              Launch of the 2nd YACHT Collection Releasing the first version of
              the Ape Slam Game
            </p>
            <h3 className="card_title">New Collection</h3>
          </li>
          <li className="mind_map_item">
            <p className="card_text">
              Launch your own token, the proceeds of which will go to a global
              fund to LAUNCH YACHT CLUB AND PROMOTE it
            </p>
            <h3 className="card_title">Token</h3>
          </li>
          <li className="mind_map_item last">
            <svg className="up_left_arrow_icon">
              <use href={icons + "#up-left-arrow"}></use>
            </svg>
            <h3 className="card_title">Learn more in mind map</h3>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MindMap;
