import "./Banner.css";
import rasm1 from "../../assets/rasm1.png";
import rasm7 from "../../assets/rasm7.png"
import { FiTruck, FiCheckCircle, FiCreditCard, } from "react-icons/fi";
import { yangiMahsulot, mashhurMahsulot } from "../mock";
import { LuSprout } from "react-icons/lu";
import { IoLogoLinkedin, IoLogoFacebook,  IoLogoInstagram,  IoLogoSkype, IoLogoTwitter,  IoLogoPinterest  } from "react-icons/io";
const Banner = () => {
  return (
    <>
      <section className="band">
        <div className="container">

          <div className="ichki_qsm">

            <div className="chaptarf">

              <h1 className="yozuv1">
                The furniture brand for the future, with timeless designs
              </h1>

              <button className="bt">
                View collection
              </button>

              <p className="yozuv2">
                A new era in eco friendly furniture with Avelon, the French luxury
                retail brand with nice fonts, tasteful colors and a beautiful way
                to display things digitally using modern web technologies.
              </p>

            </div>

            <div className="rasm">

              <img src={rasm1} alt="chair" />

            </div>

          </div>

        </div>
      </section>

      <section className="container">
        <div className="brand">

          <h2 className="title">
            What makes our brand different
          </h2>

          <div className="cards">

            <div className="card">
              <FiTruck className="icon" />
              <h3 className="heading">Next day as standard</h3>
              <p className="text">
                Order before 3pm and get your order the next day as standard.
              </p>
            </div>

            <div className="card">
              <FiCheckCircle className="icon" />
              <h3 className="heading">Made by true artisans</h3>
              <p className="text">
                Handmade crafted goods made with real passion and craftsmanship.
              </p>
            </div>

            <div className="card">
              <FiCreditCard className="icon" />
              <h3 className="heading">Unbeatable prices</h3>
              <p className="text">
                For our materials and quality you<br />
                wont find better prices anywhere
              </p>
            </div>

            <div className="card">
              <LuSprout className="icon" />
              <h3 className="heading">Recycled packaging</h3>
              <p className="text">
                We use 100% recycled materials to package all our products.
              </p>
            </div>
          </div>
        </div>
      
    <h2 className="sarlash">
  New ceramics
</h2>

<div className="qato">
  {yangiMahsulot.map((item) => (
    <div className="kart" key={item.id}>
      <img src={item.img} alt={item.nom} />
      <h3 className="nom">{item.nom}</h3>
      <p className="narx">{item.narx}</p>
    </div>
  ))}
</div>

<button className="tugma">
  View collection
</button>

<h2 className="sarlavha">
  Our popular products
</h2>

<div className="qato2">
  {mashhurMahsulot.map((item) => (
    <div className="kart" key={item.id}>
      <img src={item.img} alt={item.nom} />
      <h3 className="nom">{item.nom}</h3>
      <p className="narx">{item.narx}</p>
    </div>
  ))}
</div>

<button className="tugma">
  View collection
</button>

   <section className="obuna-bolimi">
        <div className="konteyner">
          <h2 className="obuna-bolimi__sarlavha">Join the club and get the benefits</h2>
          <p className="obuna-bolimi__tavsif">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores and more
          </p>
          <form className="obuna-shakli" onSubmit={(e) => e.preventDefault()}>
            <input type="email" className="obuna-shakli__input" placeholder="your@email.com" />
            <button type="submit" className="tugma-asosiy">Sign up</button>
          </form>
        </div>
      </section>

      <section className="hikoya-bolimi">
        <div className="hikoya-bolimi__matn">
          <h2 className="hikoya-bolimi__sarlavha">From a studio in London to a global brand with over 400 outlets</h2>
          <p className="hikoya-bolimi__paragraf">
            When we started Avion, the idea was simple. Make high quality furniture
            affordable and available for the mass market.
          </p>
          <p className="hikoya-bolimi__paragraf">
            Handmade, and lovingly crafted furniture and homeware is what we live,
            breathe and design so our Chelsea boutique become the hotbed for the
            London interior design community.
          </p>
          <button className="tugma-ikkinchi">Get in touch</button>
        </div>
        <img
          className="hikoya-bolimi__rasm"
          src={rasm7}
          alt="Living room"
        />
      </section>
      <footer className="futer">
        <div className="konteyner">
          <div className="futer__ustunlar">
            <div className="futer__ustun">
              <h4 className="futer__ustun-sarlavha">Menu</h4>
              <ul className="futer__royxat">
                <li><a href="#">New arrivals</a></li>
                <li><a href="#">Best sellers</a></li>
                <li><a href="#">Recently viewed</a></li>
                <li><a href="#">Popular this week</a></li>
                <li><a href="#">All products</a></li>
              </ul>
            </div>
            <div className="futer__ustun">
              <h4 className="futer__ustun-sarlavha">Categories</h4>
              <ul className="futer__royxat">
                <li><a href="#">Crockery</a></li>
                <li><a href="#">Furniture</a></li>
                <li><a href="#">Homeware</a></li>
                <li><a href="#">Plant pots</a></li>
                <li><a href="#">Chairs</a></li>
                <li><a href="#">Crockery</a></li>
              </ul>
            </div>
            <div className="futer__ustun">
              <h4 className="futer__ustun-sarlavha">Our company</h4>
              <ul className="futer__royxat">
                <li><a href="#">About us</a></li>
                <li><a href="#">Vacancies</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Returns policy</a></li>
              </ul>
            </div>
            <div className="futer__ustun">
              <h4 className="futer__ustun-sarlavha">Join our mailing list</h4>
              <form className="futer__obuna-shakli obuna-shakli" onSubmit={(e) => e.preventDefault()}>
                <input type="email" className="obuna-shakli__input" placeholder="your@email.com" />
                <button type="submit" className="tugma-asosiy1">Sign up</button>
              </form>
            </div>
          </div>
          <div className="futer__pastki">
            <p>Copyright 2026 Avion LTD</p>
            <div className="futer__ijtimoiy">
              <a href="#"><IoLogoLinkedin /></a>
              <a href="#"><IoLogoFacebook /></a>
              <a href="#"><IoLogoInstagram /></a>
              <a href="#">< IoLogoSkype /></a>
              <a href="#"><IoLogoTwitter /></a>
              <a href="#">< IoLogoPinterest /></a>
            </div>
          </div>
        </div>
      </footer>
</section>
    </>
  );
};
export default Banner;