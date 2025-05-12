import styles from "../styles/EventCard.module.css";
import { formatDate } from "../utils";

interface EventCardProps {
  event: PartyEvent;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={event.image.toString()} />
        <div className={styles.emoji}>
          <img src={event.emoji.toString()} />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.name}>
            <h1>{event.name}</h1>
          </div>
          <div className={styles.date}>
            <p>{formatDate(event.date)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
