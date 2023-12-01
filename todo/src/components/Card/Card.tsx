import cicle_on from "../../assets/cicle-on.svg";
import cicle_off from "../../assets/cicle-off.svg";
import trash from "../../assets/trash.svg";
import styles from "./Card.module.css";

export function Card() {
  return (
    <div className={styles.container}>
      <img src={cicle_off} alt="" />
      <span>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </span>
      <img src={trash} alt=""  className={styles.trash}/>
    </div>
  );
}
