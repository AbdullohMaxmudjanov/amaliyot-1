import { TbTruckDelivery } from "react-icons/tb";
import { FiCheckCircle } from "react-icons/fi";
import { LuCreditCard } from "react-icons/lu";
import { PiPlant } from "react-icons/pi";
import rasm8 from "../../assets/rasm8.png"
import rasm9 from "../../assets/rasm9.png"
import rasm1 from "../../assets/rasm1.png";
import rasm2 from "../../assets/rasm6.png";
import rasm3 from "../../assets/rasm4.png";
import rasm4 from "../../assets/rasm2.png";
import rasm5 from "../../assets/rasm3.png";
import rasm6 from "../../assets/rasm5.png";
import rasm10 from "../../assets/rasm10.png";
import { FaLinkedin, FaFacebookSquare, FaInstagram, FaSkype, FaTwitter, FaPinterest, } from "react-icons/fa";
import "./Ceramics.css"
const Ceramics = () => {
  return (
    <div className="container">
      <section className="bosh">
        <div className="container">
          <div className="hero">
            <img src={rasm8} alt="" />

            <div className="oyna">
              <h1>
                Luxury homeware for people who love timeless design quality
              </h1>

              <p>Shop the new Spring 2022 collection today</p>

              <button>View collection</button>
            </div>
          </div>
        </div>
      </section>

      <section className="afzal">
        <div className="container">
          <h2>What makes our brand different</h2>

          <div className="kartalar">

            <div className="kart">
              <TbTruckDelivery />
              <h3>Next day as standard</h3>
              <p>Order before 3pm and get your order the next day as standard</p>
            </div>

            <div className="kart">
              <FiCheckCircle />
              <h3>Made by true artisans</h3>
              <p>Handmade crafted goods made with real passion and craftsmanship</p>
            </div>

            <div className="kart">
              <LuCreditCard />
              <h3>Unbeatable prices</h3>
              <p>For our materials and quality you won't find better prices anywhere</p>
            </div>

            <div className="kart">
              <PiPlant />
              <h3>Recycled packaging</h3>
              <p>We use 100% recycled to ensure our footprint is more manageable</p>
            </div>

          </div>
        </div>
      </section>

      <section className="mahsulotlar">
      <div className="container">

        <div className="kartalar">

          <div className="kart">
            <img src={rasm1} alt="" />
            <h3>The Dandy chair</h3>
            <p>£250</p>
          </div>

          <div className="kart">
            <img src={rasm2} alt="" />
            <h3>Rustic Vase Set</h3>
            <p>£155</p>
          </div>

          <div className="kart">
            <img src={rasm3} alt="" />
            <h3>The Silky Vase</h3>
            <p>£125</p>
          </div>

          <div className="kart">
            <img src={rasm4} alt="" />
            <h3>The Lucy Lamp</h3>
            <p>£399</p>
          </div>

        </div>

        <div className="tugma_quti">
          <button>View collection</button>
        </div>

        <div className="banner">
          <div className="banner_matn">
            <h2>It started with a small idea</h2>

            <p>
              A global brand with local beginnings, our story began in a small
              studio in South London in early 2014.
            </p>

            <button>View collection</button>
          </div>

          <div className="banner_rasm">
            <img src={rasm9} alt="" />
          </div>
        </div>

      </div>
    </section>   

     <section
        className="obuna_qismi"
        style={{ backgroundImage: `url(${rasm10})` }}
      >
        <div className="container">
          <div className="obuna_ichi">
            <h2>Join the club and get the benefits</h2>

            <p>
              Sign up for our newsletter and receive exclusive offers on new
              ranges, sales, pop up stores and more.
            </p>

            <div className="imkoniyatlar">
              <span> Exclusive offers</span>
              <span> Free events</span>
              <span> Large discounts</span>
            </div>

            <div className="email_qatori">
              <input
                type="email"
                placeholder="your@email.com"
              />
              <button>Sign up</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer_qismi">
        <div className="container">
          <div className="footer_ustunlari">

            <div className="menyu_bolimi">
              <h3>Menu</h3>
              <a href="#">New arrivals</a>
              <a href="#">Best sellers</a>
              <a href="#">Recently viewed</a>
              <a href="#">Popular this week</a>
              <a href="#">All products</a>
            </div>

            <div className="kategoriya_bolimi">
              <h3>Categories</h3>
              <a href="#">Crockery</a>
              <a href="#">Furniture</a>
              <a href="#">Homeware</a>
              <a href="#">Plant pots</a>
              <a href="#">Chairs</a>
            </div>

            <div className="kompaniya_bolimi">
              <h3>Our company</h3>
              <a href="#">About us</a>
              <a href="#">Vacancies</a>
              <a href="#">Contact us</a>
              <a href="#">Privacy</a>
              <a href="#">Returns policy</a>
            </div>

            <div className="royxatdan_otish">
              <h3>Join our mailing list</h3>

              <div className="footer_email">
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
      </footer>  
    </div>
  );
}
export default Ceramics;