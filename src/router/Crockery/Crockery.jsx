import "./Crockery.css";
import rasm12 from "../../assets/rasm12.png";
import rasm7 from "../../assets/rasm7.png";
import rasm10 from "../../assets/rasm10.png";
import { FaTruck, FaCheckCircle, FaCreditCard, FaSeedling, FaLinkedin, FaFacebookSquare, FaInstagram, FaSkype, FaTwitter, FaPinterest, } from "react-icons/fa";
const Crockery = () => {
  return (
    <div>
    <section className="biz">
      <div className="container">
        <h1 className="satr">
          A brand built on the love of craftsmanship,
          quality and outstanding customer service
        </h1>

        <div className="qator">
          <div className="matn matn1">
            <h2>
              From a studio in London to a global brand with over 400 outlets
            </h2>

            <p>
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the mass market.
            </p>

            <p>
              Handmade, and lovingly crafted furniture and homeware is what we
              live, breathe and design so our Chelsea boutique become the
              hotbed for the London interior design community.
            </p>

            <button>Get in touch</button>
          </div>

          <div className="img img1">
            <img src={rasm7} alt="" />
          </div>

          <div className="img img2">
            <img src={rasm12} alt="" />
          </div>

          <div className="matn matn2">
            <h2>
              Our service isn't just personal, it's actually hyper personally
              exquisite
            </h2>

            <p>
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the mass market.
            </p>

            <p>
              Handmade, and lovingly crafted furniture and homeware is what we
              live, breathe and design so our Chelsea boutique become the
              hotbed for the London interior design community.
            </p>

            <button>Get in touch</button>
          </div>
        </div>
      </div>
    </section>

    <section className="farq">
  <div className="container">
    <h2 className="farq_nomi">
      What makes our brand different
    </h2>

    <div className="farq_qutilar">
      <div className="farq_quti">
        <FaTruck className="farq_icon" />

        <h3>Next day as standard</h3>

        <p>
          Order before 3pm and get your order
          the next day as standard.
        </p>
      </div>

      <div className="farq_quti">
        <FaCheckCircle className="farq_icon" />

        <h3>Made by true artisans</h3>

        <p>
          Handmade crafted goods made with
          real passion and craftsmanship.
        </p>
      </div>

      <div className="farq_quti">
        <FaCreditCard className="farq_icon" />

        <h3>Unbeatable prices</h3>

        <p>
          For our materials and quality you
          won't find better prices anywhere.
        </p>
      </div>

      <div className="farq_quti">
        <FaSeedling className="farq_icon" />

        <h3>Recycled packaging</h3>

        <p>
          We use 100% recycled packaging
          to ensure our footprint is manageable.
        </p>
      </div>
    </div>
  </div>
</section>

 <section
      className="klub"
      style={{ backgroundImage: `url(${rasm10})` }}
    >
      <div className="container">
        <div className="klub_ich">
          <h2 className="klub_nomi">
            Join the club and get the benefits
          </h2>

          <p className="klub_matn">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores and more.
          </p>

          <div className="klub_royxat">
            <div className="klub_qator">
              <FaCheckCircle className="klub_icon" />
              <span>Exclusive offers</span>
            </div>

            <div className="klub_qator">
              <FaCheckCircle className="klub_icon" />
              <span>Free events</span>
            </div>

            <div className="klub_qator">
              <FaCheckCircle className="klub_icon" />
              <span>Large discounts</span>
            </div>
          </div>

          <form className="klub_forma">
            <input
              type="email"
              placeholder="your@email.com"
            />

            <button type="submit">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </section>

    <footer className="past">
      <div className="container">
        <div className="past_yuqori">
          <div className="past_qator">
            <div className="past_bolim">
              <h3>Menu</h3>

              <a href="#">New arrivals</a>
              <a href="#">Best sellers</a>
              <a href="#">Recently viewed</a>
              <a href="#">Popular this week</a>
              <a href="#">All products</a>
            </div>

            <div className="past_bolim">
              <h3>Categories</h3>

              <a href="#">Crockery</a>
              <a href="#">Furniture</a>
              <a href="#">Homeware</a>
              <a href="#">Plant pots</a>
              <a href="#">Chairs</a>
            </div>

            <div className="past_bolim">
              <h3>Our company</h3>

              <a href="#">About us</a>
              <a href="#">Vacancies</a>
              <a href="#">Contact us</a>
              <a href="#">Privacy</a>
              <a href="#">Returns policy</a>
            </div>

            <div className="obuna">
              <h3>Join our mailing list</h3>

              <div className="obuna_quti">
                <input
                  type="email"
                  placeholder="your@email.com"
                />

                <button>Sign up</button>
              </div>
            </div>
          </div>
          <div className="footer_pasti">
            <p>Copyright 2022 Avion LTD</p>

            <div className="ijtimoiy_tarmoqlar">
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaFacebookSquare /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaSkype /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaPinterest /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
</div>
  );
};

export default Crockery;