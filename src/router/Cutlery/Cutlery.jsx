import "./Cutlery.css";
import rasm8 from "../../assets/rasm8.png";
import rasm12 from "../../assets/rasm12.png";
import { FaTruck, FaCheckCircle, FaCreditCard, FaSeedling, FaLinkedin, FaFacebookSquare, FaInstagram, FaSkype, FaTwitter, FaPinterest, } from "react-icons/fa";
const Cutlery = () => {
  return (
    <div>
    <section className="haqida">
      <div className="container">

        <div className="tepa">
          <h1>
            A brand built on the love of craftsmanship,
            quality and outstanding customer service
          </h1>

          <button>View our products</button>
        </div>

        <div className="birinchi_qator">

          <div className="chap_qism">
            <h2>It started with a small idea</h2>

            <p>
              A global brand with local beginnings, our story began in a
              small studio in South London in early 2014
            </p>

            <button>View collection</button>
          </div>

          <div className="ong_rasm">
            <img src={rasm8} alt="" />
          </div>

        </div>

        <div className="ikkinchi_qator">

          <div className="chap_rasm">
            <img src={rasm12} alt="" />
          </div>

          <div className="ong_matn">

            <h2>
              Our service isn't just personal, it's actually
              hyper personally exquisite
            </h2>

            <p>
              When we started Avion, the idea was simple.
              Make high quality furniture affordable and
              available for the mass market.
            </p>

            <p>
              Handmade, and lovingly crafted furniture and
              homeware is what we live, breathe and design
              so our Chelsea boutique become the hotbed
              for the London interior design community.
            </p>

            <button>Get in touch</button>

          </div>

        </div>

      </div>
    </section>

     <section className="afzallik">
        <div className="container">
          <h2 className="afzallik_sarlavha">
            What makes our brand different
          </h2>

          <div className="afzallik_qator">

            <div className="afzallik_karta">
              <FaTruck className="afzallik_icon" />

              <h3>Next day as standard</h3>

              <p>
                Order before 3pm and get your order the next day as standard
              </p>
            </div>

            <div className="afzallik_karta">
              <FaCheckCircle className="afzallik_icon" />

              <h3>Made by true artisans</h3>

              <p>
                Handmade crafted goods made with real passion and craftsmanship
              </p>
            </div>

            <div className="afzallik_karta">
              <FaCreditCard className="afzallik_icon" />

              <h3>Unbeatable prices</h3>

              <p>
                For our materials and quality you won't find better prices
                anywhere
              </p>
            </div>

            <div className="afzallik_karta">
              <FaSeedling className="afzallik_icon" />

              <h3>Recycled packaging</h3>

              <p>
                We use 100% recycled packaging to ensure our footprint is more
                manageable
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="obunaa">
        <div className="container">

          <div className="obuna_qut">

            <h2>Join the club and get the benefits</h2>

            <p>
              Sign up for our newsletter and receive exclusive offers on new
              ranges, sales, pop up stores and more
            </p>

            <div className="obuna_input">

              <input
                type="email"
                placeholder="your@email.com"
              />

              <button>Sign up</button>

            </div>

          </div>

        </div>
      </section>

      <footer className="pastki">
        <div className="container">

          <div className="footer_qator">

            <div className="footer_logo">

              <h2>Avion</h2>

              <p>21 New York Street</p>
              <p>New York City</p>
              <p>United States of America</p>
              <p>432 34</p>

            </div>

            <div className="footer_icon">

              <h3>Social links</h3>

              <div className="iconlar">
                <FaLinkedin />
                <FaFacebookSquare />
                <FaInstagram />
                <FaSkype />
                <FaTwitter />
                <FaPinterest />
              </div>

            </div>

            <div className="footer_menu">

              <h3>Menu</h3>

              <a href="#">New arrivals</a>
              <a href="#">Best sellers</a>
              <a href="#">Recently viewed</a>
              <a href="#">Popular this week</a>
              <a href="#">All products</a>

            </div>

            <div className="footer_menu">

              <h3>Categories</h3>

              <a href="#">Crockery</a>
              <a href="#">Furniture</a>
              <a href="#">Homeware</a>
              <a href="#">Plant pots</a>
              <a href="#">Chairs</a>
              <a href="#">Crockery</a>

            </div>

            <div className="footer_menu">

              <h3>Our company</h3>

              <a href="#">About us</a>
              <a href="#">Vacancies</a>
              <a href="#">Contact us</a>
              <a href="#">Privacy</a>
              <a href="#">Returns policy</a>

            </div>

          </div>

          <div className="footer_chiziq"></div>

          <p className="footer_copy">
            Copyright 2022 Avion LTD
          </p>

        </div>
      </footer>
      </div>
  );
};

export default Cutlery;