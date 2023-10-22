import styles from "./ElementLink.module.scss";
import { ReactComponent as Close } from "assets/svg/close.svg";
import LinkDetails from "components/LinkDetails/LinkDetails";

const ElementLinkDetails = ({ closeModal, data }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_inner}>
        <Close onClick={closeModal} />
        <LinkDetails {...data} />
      </div>
    </div>
  );
};

export default ElementLinkDetails;
