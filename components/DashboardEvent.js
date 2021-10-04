import Link from "next/link";
import styles from "@/styles/DashboardEvent.module.css";
import { FaPencilAlt, FaTimes } from "react-icons/fa";

const DashboardEvent = ({ evt, handleDelete }) => {
  return (
    <div className={styles.event}>
      <h4>
        <Link href={`/events/${evt.slug}`}>
          <a>{evt.name}</a>
        </Link>
      </h4>
      <Link href={`/events/edit/${evt.id}`}>
        <a className={styles.edit}>
          <FaPencilAlt /> <span>Edit Event</span>
        </a>
      </Link>
      <a
        href="#"
        className={styles.delete}
        onClick={() => handleDelete(evt.id)}
      >
        <FaTimes /> <span>Delete</span>
      </a>
    </div>
  );
};

export default DashboardEvent;
