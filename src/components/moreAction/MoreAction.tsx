import * as React from "react";

import { useNavigate } from "react-router-dom";
import { useClickOutside } from "hooks/useClickOutside";
import { useStorage } from "hooks/useStorage";
import { ReactComponent as More } from "assets/svg/more.svg";
import { ListProps } from "types";
import styles from "./More.module.scss";

const MoreActions: React.FC<{
  data: any;
  list: ListProps[];
  customText?: string;
}> = ({ data, list, customText }) => {
  const { visible, setVisible, ref, ref1 } = useClickOutside();
  const { setSessionStorage } = useStorage("__softSuite");
  const navigate = useNavigate();

  const openDropdown = () => {
    setVisible(!visible);
  };

  const closeDropdown = (link?: string, onClickModal?: any) => {
    if (link) {
      setSessionStorage(data);
      navigate(link);
    } else if (onClickModal) {
      onClickModal(data);
      setVisible(false);
    } else {
      setVisible(false);
    }
  };

  return (
    <div className={styles.container}>
      <div ref={ref1}>
        <More className={styles.container_icon} onClick={openDropdown} />
      </div>
      {visible && (
        <div
          ref={ref}
          tabIndex={-1}
          className={styles.container_modal}
          onBlur={() => closeDropdown()}
        >
          {list.map(({ icon, text, link, onClickModal }) => (
            <div
              key={text}
              className={styles.container_modal_inner}
              onClick={() =>
                closeDropdown(link ? `${link}/${data.id}` : onClickModal(data))
              }
            >
              {icon}
              <p
                className={`${styles.container_modal_inner_text} ${customText}`}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MoreActions;
