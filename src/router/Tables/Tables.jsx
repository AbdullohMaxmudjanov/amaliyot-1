import "./Tables.css";
import rasm1 from "../../assets/rasm1.png";
import rasm6 from "../../assets/rasm6.png";
import rasm4 from "../../assets/rasm4.png";
import rasm2 from "../../assets/rasm2.png";
import rasm11 from "../../assets/rasm11.png";
import { FaTruck, FaCheckCircle, FaCreditCard, FaSeedling, FaLinkedin, FaFacebookSquare, FaInstagram, FaSkype, FaTwitter, FaPinterest, } from "react-icons/fa";
const Tables = () => {
  return (
    <>
      <section className="mahsulot_korinish">
        <div className="container">
          <div className="asosiy_qism">

            <div className="stul_rasmi">
              <img src={rasm11} alt="The Dandy Chair" />
            </div>

            <div className="malumot_tomoni">

              <h1>The Dandy Chair</h1>

              <h2 className="narx_qismi">£250</h2>

              <div className="tavsif_qismi">
                <h3>Description</h3>

                <p className="matn_qismi">
                  A timeless design, with premium materials features as one of
                  our most popular and iconic pieces. The dandy chair is perfect
                  for any stylish living space with beech legs and lambskin
                  leather upholstery.
                </p>

                <ul className="royxat_qismi">
                  <li>Premium material</li>
                  <li>Handmade upholstery</li>
                  <li>Quality timeless classic</li>
                </ul>
              </div>

              <div className="olcham_qismi">
                <h3>Dimensions</h3>

                <div className="olchamlar">
                  <div>
                    <h4>Height</h4>
                    <p>110cm</p>
                  </div>

                  <div>
                    <h4>Width</h4>
                    <p>75cm</p>
                  </div>

                  <div>
                    <h4>Depth</h4>
                    <p>50cm</p>
                  </div>
                </div>
              </div>

              <div className="pastki_qism">

                <div className="miqdor_qismi">
                  <span>Amount</span>

                  <div className="son_tanlash">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                </div>

                <button className="savat_tugmasi">
                  Add to cart
                </button>

              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="yoqishi_mumkin">
        <div className="container">

          <h2>You might also like</h2>

          <div className="kartalar_qatori">

            <div className="karta_qismi">
              <img
                className="karta_rasmi"
                src={rasm1}
                alt="The Dandy Chair"
              />

              <h3 className="karta_nomi">
                The Dandy Chair
              </h3>

              <p className="karta_narxi">
                £250
              </p>
            </div>

            <div className="karta_qismi">
              <img
                className="karta_rasmi"
                src={rasm6}
                alt="Rustic Vase Set"
              />

              <h3 className="karta_nomi">
                Rustic Vase Set
              </h3>

              <p className="karta_narxi">
                £155
              </p>
            </div>

            <div className="karta_qismi">
              <img
                className="karta_rasmi"
                src={rasm4}
                alt="The Silky Vase"
              />

              <h3 className="karta_nomi">
                The Silky Vase
              </h3>

              <p className="karta_narxi">
                £125
              </p>
            </div>

            <div className="karta_qismi">
              <img
                className="karta_rasmi"
                src={rasm2}
                alt="The Lucy Lamp"
              />

              <h3 className="karta_nomi">
                The Lucy Lamp
              </h3>

              <p className="karta_narxi">
                £399
              </p>
            </div>

          </div>

          <div className="tugma_qismi">
            <button>View collection</button>
          </div>

        </div>
      </section>

      <section className="afzallik_qismi">
        <div className="container">
          <h2 className="afzallik_sarlavha">
            What makes our brand different
          </h2>

          <div className="afzallik_qator">
            <div className="afzallik_karta">
              <FaTruck className="afzallik_icon" />

              <h3>Next day as standard</h3>

              <p>
                Order before 3pm and get your order
                the next day as standard
              </p>
            </div>

            <div className="afzallik_karta">
              <FaCheckCircle className="afzallik_icon" />

              <h3>Made by true artisans</h3>

              <p>
                Handmade crafted goods made with
                real passion and craftsmanship
              </p>
            </div>

            <div className="afzallik_karta">
              <FaCreditCard className="afzallik_icon" />

              <h3>Unbeatable prices</h3>

              <p>
                For our materials and quality you
                won't find better prices anywhere
              </p>
            </div>

            <div className="afzallik_karta">
              <FaSeedling className="afzallik_icon" />

              <h3>Recycled packaging</h3>

              <p>
                We use 100% recycled packaging to
                ensure our footprint is manageable
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="obuna_qism">
        <div className="container">
          <div className="obuna_ichi">
            <h2>Join the club and get the benefits</h2>

            <p>
              Sign up for our newsletter and receive exclusive offers on
              new ranges, sales, pop up stores and more.
            </p>

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

          <div className="footer_yuqori">

            <div className="manzil_qismi">
              <h2>Avion</h2>

              <p>21 New York Street</p>
              <p>New York City</p>
              <p>United States of America</p>
              <p>432 34</p>
            </div>

            <div className="ijtimoiy_qismi">
              <h3>Social links</h3>

              <div className="icon_qatori">
                <a href="#"><FaLinkedin /></a>
                <a href="#"><FaFacebookSquare /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaSkype /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaPinterest /></a>
              </div>
            </div>

            <div className="menyu_qismi">
              <h3>Menu</h3>

              <a href="#">New arrivals</a>
              <a href="#">Best sellers</a>
              <a href="#">Recently viewed</a>
              <a href="#">Popular this week</a>
              <a href="#">All products</a>
            </div>

            <div className="kategoriya_qismi">
              <h3>Categories</h3>

              <a href="#">Crockery</a>
              <a href="#">Furniture</a>
              <a href="#">Homeware</a>
              <a href="#">Plant pots</a>
              <a href="#">Chairs</a>
            </div>

            <div className="kompaniya_qismi">
              <h3>Our company</h3>

              <a href="#">About us</a>
              <a href="#">Vacancies</a>
              <a href="#">Contact us</a>
              <a href="#">Privacy</a>
              <a href="#">Returns policy</a>
            </div>

          </div>

          <div className="footer_pasti">
            <p>Copyright 2022 Avion LTD</p>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Tables;