import "./Chairs.css";
import rasm11 from "../../assets/rasm11.png";
import rasm3 from "../../assets/rasm3.png";
import rasm1 from "../../assets/rasm1.png";
import rasm2 from "../../assets/rasm2.png";
import rasm12 from "../../assets/rasm12.png"
import { FaTruck, FaCheckCircle, FaCreditCard, FaSeedling, FaLinkedin, FaFacebookSquare, FaInstagram, FaSkype, FaTwitter, FaPinterest, } from "react-icons/fa";
const Chairs = () => {
  return (
    <>
      <section className="mahsulot_qismi">
        <div className="container">

          <div className="asosiy_qator">

            <div className="rasm_qismi">
              <img src={rasm11} alt="The Dandy Chair" />
            </div>

            <div className="malumot_qismi">

              <h1>The Dandy Chair</h1>

              <h2>£250</h2>

              <div className="tavsif_qismi">

                <h3>Product description</h3>

                <p>
                  A timeless design, with premium materials features as one of
                  our most popular and iconic pieces. The dandy chair is perfect
                  for any stylish living space with beech legs and lambskin
                  leather upholstery.
                </p>

              </div>

              <div className="olcham_qismi">

                <h3>Dimensions</h3>

                <div className="olchamlar">

                  <div>
                    <span>Height</span>
                    <p>110cm</p>
                  </div>

                  <div>
                    <span>Width</span>
                    <p>75cm</p>
                  </div>

                  <div>
                    <span>Depth</span>
                    <p>50cm</p>
                  </div>

                </div>

              </div>

              <div className="pastki_qism">

                <div className="miqdor_qismi">

                  <p>Quantity</p>

                  <div className="son_qismi">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>

                </div>

                <div className="tugma_qismi">

                  <button className="savat_btn">
                    Add to cart
                  </button>

                  <button className="sevimli_btn">
                    Save to favorites
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      <section className="yoqishi_qismi">
        <div className="container">

          <h2>You might also love these</h2>

          <div className="kartalar_qator">

            <div className="katta_karta">

              <img src={rasm3} alt="" />

              <h3>The Poplar suede sofa</h3>

              <p>£980</p>

            </div>

            <div className="kichik_karta">

              <img src={rasm1} alt="" />

              <h3>The Dandy chair</h3>

              <p>£250</p>

            </div>

            <div className="kichik_karta">

              <img src={rasm2} alt="" />

              <h3>The Dandy chair</h3>

              <p>£250</p>

            </div>

          </div>

          <div className="button_qismi">
            <button>See collection</button>
          </div>

        </div>
      </section>

      <section className="afzallik_bolimi">
        <div className="container">

          <h2 className="sarlavha_qismi">
            What makes our brand different
          </h2>

          <div className="afzallik_qator">

            <div className="afzallik_karta">
              <FaTruck className="belgi_icon" />

              <h3>Next day as standard</h3>

              <p>
                Order before 3pm and get your order the next day as standard.
              </p>
            </div>

            <div className="afzallik_karta">
              <FaCheckCircle className="belgi_icon" />

              <h3>Made by true artisans</h3>

              <p>
                Handmade crafted goods made with real passion and craftsmanship.
              </p>
            </div>

            <div className="afzallik_karta">
              <FaCreditCard className="belgi_icon" />

              <h3>Unbeatable prices</h3>

              <p>
                For our materials and quality you won't find better prices anywhere.
              </p>
            </div>

            <div className="afzallik_karta">
              <FaSeedling className="belgi_icon" />

              <h3>Recycled packaging</h3>

              <p>
                We use 100% recycled packaging to reduce our environmental impact.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="azolik_bolimi">

        <div className="container">

          <div className="azolik_qator">

            <div className="rasm_tarafi">
              <img src={rasm12} alt="" />
            </div>

            <div className="matn_tarafi">

              <h2>
                Join the club and get the benefits
              </h2>

              <p>
                Sign up for our newsletter and receive exclusive offers on new
                ranges, sales, pop up stores and more.
              </p>

              <div className="email_qutisi">

                <input
                  type="email"
                  placeholder="your@email.com"
                />

                <button>
                  Sign up
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      <footer className="pastki_bolim">

        <div className="container">

          <div className="ustunlar_qatori">

            <div className="logo_qismi">

              <h2>Avion</h2>

              <p>21 New York Street</p>
              <p>New York City</p>
              <p>United States of America</p>
              <p>432 34</p>

            </div>

            <div className="ijtimoiy_qismi">

              <h3>Social links</h3>

              <div className="iconlar_qatori">

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
          <div className="copyright_qismi">
            <p>Copyright 2022 Avion LTD</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Chairs;