import * as React from "react";

import { ReactComponent as Edit } from "assets/svg/edit.svg";
import { ReactComponent as Delete } from "assets/svg/delete2.svg";
import styles from "./Action.module.scss";

const Action: React.FC<{
  data: any;
  customText?: string;
  onClickEdit: (data: any) => void;
  onClickDelete: (data: any) => void;
}> = ({ data, onClickEdit, onClickDelete }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_icons}>
        <Edit onClick={() => onClickEdit(data)} />
        <Delete onClick={() => onClickDelete(data)} />
      </div>
    </div>
  );
};

export default Action;
