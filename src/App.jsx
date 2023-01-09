import { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTours = async () => {
    setLoading(true);

    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setTours(data);
      setLoading(false);
    } catch (error) {}
  };
  useEffect(() => {
    getTours();
  }, []);
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  if (loading) {
    return <Loading />;
  }
  if (tours.length === 0) {
    return (
      <main className="container">
        <section className="layout toursleft">
          <h2>No Tours Left</h2>
          <button className="getback" onClick={() => setTours(getTours())}>
            Get Back
          </button>
        </section>
      </main>
    );
  }
  return (
    <main className="container">
      <section className="layout tours-heading">
        <h6>Tours</h6>
        <h2>Our Tours Guide</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          praesentium.
          <span>Lorem ipsum dolor sit amet consectetur.</span>
        </p>
      </section>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
