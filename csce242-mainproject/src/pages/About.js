import '../styles/styles.css';
import Jeanne from '../assets/images/Jeanne.jpg';
import John from '../assets/images/John.jpg';

const About = () => (
    <main className="main-content">
      <section className="about-content">
        <h2>What We Are All About!</h2>
        <p>
                    <strong>
                        At Palmetto Fresh Meats, we take pride in delivering high-quality, farm-fresh meats straight 
                        to your table. Our commitment to excellence starts with sourcing locally raised livestock and 
                        ensuring that every step of the process meets the highest industry standards. From humane handling 
                        to expert butchering, we strive to provide our customers with the freshest, most flavorful 
                        cuts possible. Whether you're looking for premium dry-aged beef or custom pork processing, 
                        our skilled team is dedicated to offering superior products with unmatched care and craftsmanship.
                    </strong>
                </p>
                <p>
                    <strong>
                        Palmetto Fresh Meats is a family owned and operated company based in Aynor, SC.
                        Our meat is locally grown within South Carolina! The owners John and Jeanne Doyle have been in the cattle 
                        business since the 80s and have recently moved into the butcher business! We offer hog and cattle processing, 
                        and we also dry age our beef for the best tasting experience!
                    </strong>
                </p>
                <p> 
                    <strong>
                        Here at Palmetto Fresh Meats we believe in the quality of the products our customers are getting. 
                        John, Jeanne, as well as their whole family have been eating their high quality homegrown beef all their lives. 
                        It was important to them to give back to the community and having fresh meats avaliable is how they have decided to do just that. 
                    </strong>  
                </p>
                <p>
                    <strong>
                        We are an USDA custom meat processor. What that means is that everyday onsite there is a federal inspector 
                        shadowing every part of the process. This makes sure that all of our employees are up to par with federal 
                        codes.
                    </strong>
                </p>
      </section>
      <section className="employees">
        <div className="employees-div">
          <section className="employees-info">
            <img src={Jeanne} alt="Jeanne Doyle" />
            <h3>Jeanne Doyle</h3>
            <h4>Owner</h4>
            <p>Jeanne is the brains of our operation!</p>
          </section>
          <section className="employees-info">
            <img src={John} alt="John Doyle" />
            <h3>John Doyle</h3>
            <h4>Owner</h4>
            <p>John is a cattle rancher with more than 40 years of experience!</p>
          </section>
        </div>
      </section>
    </main>
  );
  
  export default About;
  