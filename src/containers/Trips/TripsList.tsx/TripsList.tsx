import { Trip } from "../../../types";
import TripCard from "../TripCard.tsx/TripCard";

import styles from "./TripsList.module.scss";

interface TripsListProps {
  trips: Trip[];
}

const TripsList: React.FC<TripsListProps> = ({ trips }) => {
  return (
    <section className={styles.trips}>
      <h2 className="visually-hidden">Trips List</h2>
      <ul className={styles.tripList}>
        {trips.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </ul>
    </section>
  );
};

export default TripsList;
