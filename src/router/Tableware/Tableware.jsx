import "./Tableware.css";
import products from "../../components/mock";
import { FaLinkedin, FaFacebookSquare, FaInstagram, FaSkype, FaTwitter, FaPinterest, } from "react-icons/fa";
const Tableware = () => {
  return (
    <div>
    <section className="mahsulotlar">
      <div className="container">
        <h2 className="mahsulot_sarlavha">View all products</h2>

        <div className="filter_desktop">
          <div className="filter_chap">
            <select>
              <option>Category</option>
            </select>

            <select>
              <option>Product type</option>
            </select>

            <select>
              <option>Price</option>
            </select>

            <select>
              <option>Brand</option>
            </select>
          </div>

          <div className="filter_ong">
            <span>Sorting by:</span>

            <select>
              <option>Date added</option>
            </select>
          </div>
        </div>

        <div className="filter_mobile">
          <button>Sorting</button>

          <button>Filtering</button>
        </div>

        <div className="mahsulot_grid">
          {products.map((item) => (
            <div className="mahsulot_karta" key={item.id}>
              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>

              <p>{item.price}</p>
            </div>
          ))}
        </div>

        <button className="korish_btn">
          View collection
        </button>
      </div>
    </section>

    <footer className="pastki">
      <div className="container">
        <div className="ustki_qism">

          <div className="bolim">
            <h3>Menu</h3>

            <a href="#">New arrivals</a>
            <a href="#">Best sellers</a>
            <a href="#">Recently viewed</a>
            <a href="#">Popular this week</a>
            <a href="#">All products</a>
          </div>

          <div className="bolim">
            <h3>Categories</h3>

            <a href="#">Crockery</a>
            <a href="#">Furniture</a>
            <a href="#">Homeware</a>
            <a href="#">Plant pots</a>
            <a href="#">Chairs</a>
            <a href="#">Crockery</a>
          </div>

          <div className="bolim">
            <h3>Our company</h3>

            <a href="#">About us</a>
            <a href="#">Vacancies</a>
            <a href="#">Contact us</a>
            <a href="#">Privacy</a>
            <a href="#">Returns policy</a>
          </div>

          <div className="email_qism">
            <h3>Join our mailing list</h3>

            <div className="email_input">
              <input
                type="email"
                placeholder="your@email.com"
              />

              <button>Sign up</button>
            </div>
          </div>

        </div>

        <div className="chiziq"></div>

        <div className="past_qism">

          <p>Copyright 2022 Avion LTD</p>

          <div className="iconlar">
            <FaLinkedin />
            <FaFacebookSquare />
            <FaInstagram />
            <FaSkype />
            <FaTwitter />
            <FaPinterest />
          </div>

        </div>

      </div>
    </footer>
    </div>
  );
};

export default Tableware;