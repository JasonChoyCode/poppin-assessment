import React, { useState } from "react";
import styles from "./styles/EventAdd.module.css";
import EventCard from "./components/EventCard";
import "./App.css";
import { totalEvents } from "./data/eventData";
import { getNewParty } from "./utils";

function App() {
  const [events, setEvents] = useState<PartyEvent[]>(totalEvents);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  function newParty(e: React.MouseEvent<HTMLButtonElement>) {
    const newEvent: PartyEvent = getNewParty(events.length + 1);
    setEvents([...events, newEvent]);
    e.currentTarget.blur();
  }

  return (
    <div className={styles.page}>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className={styles.search}
          placeholder="Search anything..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>

      <div className={styles.eventsContainer}>
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      <button className={styles.addPartyButton} onClick={newParty}>
        +
      </button>
    </div>
  );
}

export default App;
