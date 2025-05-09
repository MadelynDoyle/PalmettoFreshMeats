import Meatcase from '../assets/images/meatcase1.jpg';
import Front2 from '../assets/images/front2.jpg';
import '../styles/styles.css';


const Home = () => (
    <main className="main-content">
      <section className="column left-img">
        <img src={Meatcase} alt="Meat" />
      </section>
      <section className="column middle-content">
        <h2>The Freshest Meat Around!</h2>
        <p>
          Are you tired of getting low quality beef and pork from the grocery store? We process meat grown locally to help farmers in our area.
        </p>
      </section>
      <section className="column right-img">
        <img src={Front2} alt="Storefront" />
      </section>
    </main>
  );
  
  export default Home;
  