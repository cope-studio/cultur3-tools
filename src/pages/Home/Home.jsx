import styles from "./Home.module.scss";
import { imageImports, iconImports } from "../../assets/";
import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { CompanyCard } from "../../components";
import { GlobalContext } from "../../utils/context/GlobalContext.jsx";
import { motion } from "framer-motion";
import clsx from "clsx";
import ScrollTrigger from "react-scroll-trigger";
import TypeWriter from "typewriter-effect";

import "./Home.css";

const Home = () => {
  const { innerWidth, cursorPosition } = useContext(GlobalContext);
  const {
    greenFlower,
    colorfulFlower,
    galaxy,
    logo,
    rings,
    lightOrangeCocentricSquare,
    sony,
    warner,
    universal,
    platoon,
    september,
    ada,
    amuse,
    sevenStar,
    bbRecords,
    hunter,
    firstAccess,
    threeCircle,
    threeBentArrows,
    ministry,
    truckFestival,
    blueFlower,
    ticket,
    blueHexagonalBadge,
    purpleHexagonalFlower,
    yellowSquareBadge,
    redOctagonalBadge,
    greenCircularBadge,
    purpleStar,
    yellowStar,
    redStar,
    darkPurpleSphere,
    redCard,
    bamboo,
    lightOrangeSquare,
    blueCircularBadge,
    redFlower,
    blueRing,
    whiteStar,
    whiteOctagonalBadge,
    growthRed,
    ideaBlue,
    marketYellow,
  } = imageImports;
  const companyList = [
    { id: 0, image: sony },
    { id: 1, image: warner },
    { id: 2, image: universal },
    { id: 3, image: ministry },
    { id: 4, image: platoon },
    { id: 5, image: september },
    { id: 6, image: ada },
    { id: 7, image: amuse },
    { id: 8, image: sevenStar },
    { id: 9, image: bbRecords },
    { id: 10, image: hunter },
    { id: 11, image: firstAccess },
    // { id: 12, image: threeCircle },
    // { id: 13, image: truckFestival },
    // { id: 14, image: threeBentArrows },
  ];
  const { telegram, forwardArrow, twitter, instagram, discord, remove } =
    iconImports;
  const greenFlowerHero = useRef(null);
  const colorfulFlowerHero = useRef(null);
  const [isModalRequested, setIsModalRequested] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [iconLaunchInView, setIconLaunchInView] = useState(false);
  const [hypeBombInView, setHypeBombInView] = useState(false);
  const [workWithInView, setWorkWithInView] = useState(false);
  const [cultureCultInView, setCultureCultInView] = useState(false);

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  let requestOptionsForContactUsForm = {
    method: "post",
    headers: myHeaders,
    redirect: "follow",
    body: JSON.stringify([[name, email, message]]),
  };
  function handleSubmit(e) {
    e.preventDefault();

    fetch(
      "https://v1.nocodeapi.com/shishir/google_sheets/zfDNCFZpdvMRqVpj?tabId=Contact Us",
      requestOptionsForContactUsForm
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    setName("");
    setEmail("");
    setMessage("");
  }
  const companyContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: workWithInView ? 1 : 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const companyItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: workWithInView ? 0 : 20,
      opacity: workWithInView ? 1 : 0,
    },
  };
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        {isModalRequested && (
          <div
            onClick={() => setIsModalRequested(false)}
            className={styles.modalContainer}
          >
            <form
              onSubmit={handleSubmit}
              onClick={(e) => {
                e.stopPropagation();
                setIsModalRequested(true);
              }}
              className={styles.modal}
            >
              <div className={styles.header}>
                <h3>Hey There!</h3>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsModalRequested(false);
                  }}
                >
                  <img src={remove} alt="Close" />
                </button>
              </div>

              <p>
                Please fill in the details below so that we can get in contact
                with you.
              </p>
              <div className={styles.inputs}>
                <input
                  className={styles.input}
                  type="text"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                />
                <input
                  className={styles.input}
                  type="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                />
                <textarea
                  className={styles.textArea}
                  name="message"
                  id=""
                  value={message}
                  required
                  onChange={(e) => setMessage(e.target.value)}
                  cols="30"
                  rows="10"
                  placeholder="Enter Your Message"
                ></textarea>
              </div>
              <button type="submit" className={styles.submit}>
                Submit
              </button>
            </form>
          </div>
        )}
        <div className={styles.content}>
          <header>
            <div className={styles.imageContainer}>
              <img src={logo} alt="Logo" />
              <div className={styles.logoText}>
                <h2>Cultur3 </h2>
                <h2>Tools</h2>
              </div>
            </div>
            <a href="https://t.me/+VECH0ef_S0NhOGY8">
              {innerWidth > 800 ? (
                <button className={styles.gradientButton}>
                  <img src={telegram} alt="Telegram" />
                  <span>Join our Telegram</span>
                </button>
              ) : (
                <button className={styles.gradientButton}>
                  <img src={telegram} alt="Telegram" />
                </button>
              )}
            </a>
          </header>
          <div className={styles.headingContainer}>
            <h1 className={styles.heroHeading}>In Web3,</h1>
            <h1 className={styles.heroHeading}>
              <span className={styles.gradientText}>Patience</span> isn’t a
              Virtue
            </h1>
          </div>
          <p>Let’s launch faster & bigger?</p>

          <div className={styles.bottomImagesContainer}>
            <motion.div
              transition={{ duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] }}
              initial={{ y: -300, x: 1000 }}
              animate={{ y: 0, x: 0 }}
              ref={greenFlowerHero}
              className={styles.greenFlower}
            >
              <img src={greenFlower} alt="Green Flower" />
            </motion.div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsModalRequested(true);
              }}
              className={styles.gradientButton}
            >
              <span>Say Hello &#128075;</span>
            </button>
            <motion.div
              transition={{ duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] }}
              initial={{ y: 300, x: -1000 }}
              animate={{ y: 0, x: 0 }}
              className={styles.galaxy}
            >
              <img src={galaxy} alt="Galaxy" />
            </motion.div>
          </div>
          <div ref={colorfulFlowerHero} className={styles.colorfulFlower}>
            <img src={colorfulFlower} alt="Colorful Flower" />
          </div>
        </div>

        <div className={styles.centerGradient}></div>
      </section>
      <section className={styles.gridContainer1}>
        <motion.section
          transition={{ duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] }}
          initial={{ x: -1000 }}
          animate={{ x: iconLaunchInView ? 0 : -1000 }}
          className={styles.iconicLaunch}
        >
          <div className={styles.text}>
            <h1>
              Every Great Story Begins with an
              <ScrollTrigger
                onEnter={() => {
                  setIconLaunchInView(true);
                }}
              >
                <span className={styles.gradientText}> Iconic</span>
              </ScrollTrigger>{" "}
              Launch
            </h1>
            <p className={styles.firstPara}>
              The best web3 companies will win on culture and community.
            </p>{" "}
            <p>
              Cultur3 helps build both with precise data tools and thesis
              building teams
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img src={rings} alt="Rings" />
          </div>
        </motion.section>

        <motion.section
          transition={{ duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] }}
          initial={{ x: 1000 }}
          animate={{ x: hypeBombInView ? 0 : 1000 }}
          className={styles.hypeBombs}
        >
          <div className={styles.text}>
            <h1>
              <ScrollTrigger
                onEnter={() => {
                  setHypeBombInView(true);
                }}
              >
                <span className={styles.gradientText}> Hype</span>
              </ScrollTrigger>{" "}
              Bombs
            </h1>
            <p className={styles.firstPara}>
              We build multi chapter stories with founders Our story starts with
              building great narratives alongside founders that people love.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img src={lightOrangeCocentricSquare} alt="Hype Bombs" />
          </div>
        </motion.section>
      </section>
      <section className={styles.companies}>
        <div className={styles.gradientLine1}></div>

        <h1>
          Who we <span className={styles.gradientText}> work </span>
          with
        </h1>
        <motion.div
          variants={companyContainer}
          initial="hidden"
          animate="visible"
          className={clsx(styles.companiesList, "container")}
        >
          {companyList.map((item) => (
            <ScrollTrigger
              onEnter={() => {
                setWorkWithInView(true);
              }}
            >
              <CompanyCard
                variants={companyItem}
                image={item.image}
                key={item.id}
                id={item.id}
                className="item"
              />
            </ScrollTrigger>
          ))}
        </motion.div>
        <div className={styles.gradientLine2}></div>
        <div className={styles.imageContainer}>
          <img src={blueFlower} alt="Blue Flower" />
        </div>
      </section>
      <section className={styles.gridContainer2}>
        <section className={styles.cultureCult}>
          <motion.div
            animate={{ x: cultureCultInView ? 0 : 1900 }}
            initial={{ x: 1900 }}
            transition={{ duration: "0.4", ease: [0.6, 0.01, -0.05, 0.9] }}
            className={styles.imageContainer}
          >
            <img src={ticket} alt="Ticket" />
          </motion.div>
          <div className={styles.textContainer}>
            <ScrollTrigger
              onEnter={() => setCultureCultInView(true)}
            ></ScrollTrigger>{" "}
            <h1>Culture Cult Communities</h1>
            <p>
              We build multi chapter stories with founders Our story starts with
              building great narratives alongside founders that people love.
            </p>
          </div>
        </section>
        <section className={styles.lightUp}>
          <h1>
            What we <span>light </span>up
          </h1>
          <div className={styles.imagesContainer}>
            <div className={styles.imageContainer}>
              <img src={blueHexagonalBadge} alt="Blue Hexagonal Badge" />
              <p>NFT Projects</p>
            </div>
            <div className={styles.imageContainer}>
              <img src={purpleHexagonalFlower} alt="Purple Hexagonal Flower" />
              <p>DAO Launches</p>
            </div>
            <div className={styles.imageContainer}>
              <img src={yellowSquareBadge} alt="Yellow Square Badge" />
              <p>Dapp Listings</p>
            </div>
            <div className={styles.imageContainer}>
              <img src={redOctagonalBadge} alt="Red Octagonal Badge" />
              <p>Token Drops</p>
            </div>
            <div className={styles.imageContainer}>
              <img src={greenCircularBadge} alt="Green Circular Badge" />
              <p>Metaverse Projects</p>
            </div>
          </div>
          <div className={styles.starImages}>
            <img className={styles.yellow} src={yellowStar} alt="Yellow Star" />
            <img className={styles.purple} src={purpleStar} alt="Purple Star" />
            <img className={styles.red} src={redStar} alt="Red Star" />
          </div>
        </section>
        <div className={styles.gradientLine1}></div>
      </section>
      <section className={styles.how}>
        <h1>How do we do it?</h1>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.imageForSmallScreen}>
              <img src={ideaBlue} alt="Idea Blue" />
            </div>

            <p>The Idea</p>
            <ul>
              <li>Product Planning</li>
              <li>Opportunity Assessment</li>
              <li>Market Feasibility Report</li>
            </ul>
            <div className={styles.imageContainer}>
              <img src={darkPurpleSphere} alt="Purple Sphere" />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imageForSmallScreen}>
              <img src={marketYellow} alt="Market Yellow" />
            </div>
            <p>The Market</p>
            <ul>
              <li>Market Planning</li>
              <li>Content Production</li>
              <li>Consumer Research</li>
            </ul>
            <div className={styles.imageContainer}>
              <img src={redCard} alt="Red Card" />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imageForSmallScreen}>
              <img src={growthRed} alt="Growth Red" />
            </div>
            <p>The Growth</p>
            <ul>
              <li>Communication Strategy</li>
              <li>Media Engagement</li>
              <li>Thought Leadership</li>
            </ul>
            <div className={styles.imageContainer}>
              <img src={bamboo} alt="Bamboo" />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.gridContainer3}>
        <section className={styles.images}>
          <div className={styles.first}>
            <img className={styles.star} src={purpleStar} alt="Purple Star" />
            <img className={styles.star} src={yellowStar} alt="Yellow Star" />
            <img className={styles.star} src={purpleStar} alt="Purple Star" />
            <img className={styles.star} src={yellowStar} alt="Yellow Star" />
          </div>
          <div className={styles.second}>
            <img className={styles.flower} src={blueFlower} alt="Blue Flower" />
            <img className={styles.star} src={redStar} alt="Red Star" />
            <img className={styles.ring} src={blueRing} alt="Blue Ring" />
            <img className={styles.star} src={whiteStar} alt="White Star" />
            <img className={styles.flower} src={redFlower} alt="Red Flower" />
          </div>
          <div className={styles.third}>
            <img className={styles.star} src={whiteStar} alt="White Star" />
            <img
              className={styles.badge}
              src={whiteOctagonalBadge}
              alt="White Octagonal Badge"
            />
            <img
              className={styles.flower}
              src={greenFlower}
              alt="Green Flower"
            />
            <img className={styles.star} src={purpleStar} alt="Purple Star" />
          </div>
          <div className={styles.fourth}>
            <img className={styles.star} src={yellowStar} alt="Yellow Star" />
            <img className={styles.flower} src={redFlower} alt="Red Flower" />
            <img className={styles.star} src={redStar} alt="Red Star" />
          </div>
        </section>
        <section className={styles.whoToTag}>
          <h1>
            Who do we <span className={styles.gradientText}>tag with?</span>
          </h1>
          <div className={styles.paraAndImage}>
            <div className={styles.left}>
              <p>You, of course!</p>
              <p>Just let us know how, right here:</p>
              <div className={styles.input}>
                <input type="email" placeholder="Your Email Here" />
                <img src={forwardArrow} alt="Forward Arrow" />
              </div>
            </div>
            <div className={styles.right}>
              <img src={lightOrangeSquare} alt="Light Orange Square" />
            </div>
          </div>
        </section>
      </section>
      <footer className={styles.footer}>
        <div className={styles.image}>
          <img src={blueCircularBadge} alt="Blue Circular Badge" />
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1>Get in touch</h1>
            <p>The best web3 companies will win on culture and community. </p>
            <div
              onClick={(e) => {
                e.stopPropagation();
                setIsModalRequested(true);
              }}
              className={styles.chat}
            >
              <span>Let's Chat</span>
              <img src={forwardArrow} alt="Forward Arrow" />
            </div>
          </div>
          <div className={styles.right}>
            <h1>Contact</h1>
            <p>hello@culture.tools</p>
            <h1 className={styles.join}>Join our circle</h1>
          </div>
        </div>
        <div className={styles.copyrightButtons}>
          <p className={styles.copyright}>© Cultur3 Tools 2021</p>
          <div className={styles.buttons}>
            <a href="https://www.instagram.com/cultur3.tools/">
              <button>Instagram</button>
            </a>
            <a href="https://twitter.com/0xcultur3">
              <button>Twitter</button>
            </a>
            <a href="https://t.me/+VECH0ef_S0NhOGY8">
              {" "}
              <button>Telegram</button>
            </a>
          </div>
        </div>

        <h1 className={styles.bottomLargeHeading}>Cultur3 Tools</h1>
        <div className={styles.contentForSmallScreen}>
          <h1>Cultur3 Tools</h1>
          <p>Follow us on Socials</p>
          <div className={styles.icons}>
            <a href="https://twitter.com/0xcultur3">
              <div className={styles.icon}>
                <img src={twitter} alt="Twitter" />
              </div>
            </a>
            <a href="https://www.instagram.com/cultur3.tools/">
              {" "}
              <div className={styles.icon}>
                <img src={instagram} alt="Instagram" />
              </div>{" "}
            </a>
            <a href="https://t.me/+VECH0ef_S0NhOGY8">
              <div className={styles.icon}>
                <img src={telegram} alt="Telegram" />
              </div>
            </a>
          </div>
          <span>© Cultur3 Tools 2021</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
