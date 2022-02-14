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
import { motion, useTransform, useViewportScroll } from "framer-motion";
import clsx from "clsx";
import ScrollTrigger from "react-scroll-trigger";
import TypeWriter from "typewriter-effect";

import "./Home.css";

const Home = () => {
  const { scrollYProgress } = useViewportScroll();

  const scaleHero = useTransform(
    scrollYProgress,
    [0, 0.05, 0.1, 0.15],
    [1, 0.9, 0.8, 0.8]
  );
  const opacityHero = useTransform(
    scrollYProgress,
    [0, 0.05, 0.1, 0.15],
    [1, 0.9, 0.8, 0.5]
  );

  const scaleIconicLaunch = useTransform(
    scrollYProgress,
    [0.05, 0.09, 0.13, 0.17],
    [0.8, 1, 1, 0.8]
  );
  const opacityIconicLaunch = useTransform(
    scrollYProgress,
    [0.05, 0.09, 0.13, 0.17],
    [0.5, 1, 1, 0.5]
  );
  const scaleHypeBombs = useTransform(
    scrollYProgress,
    [0.13, 0.17, 0.21, 0.25],
    [0.8, 1, 1, 0.8]
  );
  const opacityHypeBombs = useTransform(
    scrollYProgress,
    [0.13, 0.17, 0.21, 0.25],
    [0.5, 1, 1, 0.5]
  );

  const scaleWorkWith = useTransform(
    scrollYProgress,
    [0.21, 0.25, 0.29, 0.33],
    [0.8, 1, 1, 0.8]
  );
  const opacityWorkWith = useTransform(
    scrollYProgress,
    [0.21, 0.25, 0.29, 0.33],
    [0.5, 1, 1, 0.5]
  );

  const scaleCultureCult = useTransform(
    scrollYProgress,
    [0.37, 0.41, 0.45, 0.49],
    [0.8, 1, 1, 0.8]
  );
  const opacityCultureCult = useTransform(
    scrollYProgress,
    [0.37, 0.41, 0.45, 0.49],
    [0.5, 1, 1, 0.5]
  );

  const scaleLightUp = useTransform(
    scrollYProgress,
    [0.49, 0.52, 0.57, 0.61],
    [0.8, 1, 1, 0.8]
  );
  const opacityLightUp = useTransform(
    scrollYProgress,
    [0.49, 0.52, 0.57, 0.61],
    [0.5, 1, 1, 0.5]
  );

  const scaleHow = useTransform(
    scrollYProgress,
    [0.61, 0.65, 0.69, 0.73],
    [0.8, 1, 1, 0.8]
  );
  const opacityHow = useTransform(
    scrollYProgress,
    [0.61, 0.65, 0.69, 0.73],
    [0.5, 1, 1, 0.5]
  );

  const scaleWhoToTag = useTransform(
    scrollYProgress,
    [0.81, 0.85, 0.89, 0.93],
    [0.8, 1, 1, 0.8]
  );
  const opacityWhoToTag = useTransform(
    scrollYProgress,
    [0.81, 0.85, 0.89, 0.93],
    [0.5, 1, 1, 0.5]
  );

  const scaleFooter = useTransform(
    scrollYProgress,
    [0.89, 0.93, 0.97, 1],
    [0.7, 0.8, 1, 1]
  );
  const opacityFooter = useTransform(
    scrollYProgress,
    [0.89, 0.93, 0.97, 1],
    [0.5, 0.7, 1, 1]
  );
  const { innerWidth, cursorPosition } = useContext(GlobalContext);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
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
  function handleConfirmation() {
    setIsFormSubmitted(true);
    setTimeout(() => setIsFormSubmitted(false), 3000);
  }
  const {
    telegram,
    forwardArrow,
    twitter,
    instagram,
    discord,
    arrowRight,
    remove,
  } = iconImports;
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
  const [justEmail, setJustEmail] = useState("");

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  let requestOptionsForContactUsForm = {
    method: "post",
    headers: myHeaders,
    redirect: "follow",
    body: JSON.stringify([[name, email, message]]),
  };
  let requestOptionsForJustEmailForm = {
    method: "post",
    headers: myHeaders,
    redirect: "follow",
    body: JSON.stringify([[justEmail]]),
  };
  function handleJustEmailSubmit(e) {
    e.preventDefault();
    handleConfirmation();
    fetch(
      "https://v1.nocodeapi.com/shishir/google_sheets/zfDNCFZpdvMRqVpj?tabId=Just Email Form",
      requestOptionsForJustEmailForm
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    setJustEmail("");
  }
  function handleContactUsSubmit(e) {
    e.preventDefault();
    handleConfirmation();
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
        staggerChildren: 0.7,
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
    <motion.div className={styles.container}>
      <section
        style={isFormSubmitted ? { display: "flex" } : { display: "none" }}
        className={styles.confirmation}
      >
        <div>
          <h3>Thanks For Filling out the Form</h3>
        </div>
      </section>
      <section className={clsx(styles.gridContainer4, styles.hero)}>
        {isModalRequested && (
          <div
            onClick={() => setIsModalRequested(false)}
            className={styles.modalContainer}
          >
            <motion.form
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isModalRequested
                  ? {
                      opacity: 1,
                      scale: 1,
                    }
                  : { opacity: 0, scale: 0 }
              }
              onSubmit={handleContactUsSubmit}
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
                  cols="20"
                  rows="10"
                  placeholder="Enter Your Message"
                ></textarea>
              </div>
              <button type="submit" className={styles.submit}>
                Submit
              </button>
            </motion.form>
          </div>
        )}
        <motion.div
          style={
            innerWidth > 800 ? { scale: scaleHero, opacity: opacityHero } : {}
          }
          className={styles.content}
        >
          <header>
            <div className={styles.imageContainer}>
              <img src={logo} alt="Logo" />
              <div className={styles.logoText}>
                <h2>Cultur3 </h2>
                <h2>Tools</h2>
              </div>
            </div>
            <a
              href="https://t.me/+VECH0ef_S0NhOGY8"
              target="_blank"
              rel="noreferrer"
            >
              {innerWidth > 800 ? (
                <button className={styles.coloredButton}>
                  <img src={telegram} alt="Telegram" />
                </button>
              ) : (
                <button className={styles.gradientButton}>
                  <img src={telegram} alt="Telegram" />
                </button>
              )}
            </a>
          </header>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={styles.headingContainer}
          >
            <h1 className={styles.heroHeading}>In Web3,</h1>
            <h1 className={styles.heroHeading}>
              <span className={styles.gradientText}>Patience</span> isn’t a
              Virtue
            </h1>
          </motion.div>
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
        </motion.div>

        <div className={styles.centerGradient}></div>
      </section>
      <section className={styles.gridContainer1}>
        <motion.section
          // transition={{ duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] }}
          // initial={{ x: -1000 }}
          // animate={{ x: iconLaunchInView ? 0 : -1000 }}
          style={
            innerWidth > 800
              ? { scale: scaleIconicLaunch, opacity: opacityIconicLaunch }
              : {}
          }
          className={styles.iconicLaunch}
        >
          <div className={styles.text}>
            <h1>
              Every Great Story Begins with an
              <span className={styles.coloredText}> Iconic </span>
              Launch
            </h1>
            <p className={styles.firstPara}>
              The best web3 companies will win on culture and community.
            </p>
            <p>
              Cultur3 helps build both with precise data tools and thesis
              building teams.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img src={rings} alt="Rings" />
          </div>
        </motion.section>

        <motion.section
          style={
            innerWidth > 800
              ? { opacity: opacityHypeBombs, scale: scaleHypeBombs }
              : {}
          }
          className={styles.hypeBombs}
        >
          <div className={styles.text}>
            <h1>
              <span className={styles.coloredText}> Hype</span>
              Bombs
            </h1>
            <p className={styles.firstPara}>
              We build multi chapter stories with founders. Our story starts
              with building great narratives alongside founders that people
              love.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img src={lightOrangeCocentricSquare} alt="Hype Bombs" />
          </div>
        </motion.section>
      </section>
      <section className={styles.companies}>
        <motion.div
          style={
            innerWidth > 800
              ? { scale: scaleWorkWith, opacity: opacityWorkWith }
              : {}
          }
          className={styles.companiesSubContainer}
        >
          <h1>
            Who we <span className={styles.gradientText}> work </span>
            with
          </h1>
          <div
            variants={companyContainer}
            initial="hidden"
            animate="visible"
            className={clsx(styles.companiesList, "container")}
          >
            {companyList.map((item) => (
              <CompanyCard
                variants={companyItem}
                image={item.image}
                key={item.id}
                id={item.id}
                className="item"
              />
            ))}
          </div>
        </motion.div>
        <div className={styles.gradientLine2}></div>
        <div className={styles.imageContainer}>
          <img src={blueFlower} alt="Blue Flower" />
        </div>
      </section>
      <section className={styles.gridContainer2}>
        <motion.section
          style={
            innerWidth > 800
              ? { scale: scaleCultureCult, opacity: opacityCultureCult }
              : {}
          }
          className={styles.cultureCult}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className={styles.imageContainer}
          >
            <img src={ticket} alt="Ticket" />
          </motion.div>
          <div className={styles.textContainer}>
            <h1>
              Culture
              <br /> Cult
              <br /> Communities
            </h1>
            <p>
              Every iconic company is built around a movement of ideas. We want
              to identify radical thinkers and help them build breakthrough
              companies.
            </p>
          </div>
        </motion.section>
        <motion.section
          style={
            innerWidth > 800
              ? { scale: scaleLightUp, opacity: opacityLightUp }
              : {}
          }
          className={styles.lightUp}
        >
          <h1>
            What we <span>light </span>up
          </h1>
          <div className={styles.imagesContainer}>
            <div className={styles.imageContainer}>
              <img src={blueHexagonalBadge} alt="Blue Hexagonal Badge" />
              <p>
                NFT <br />
                Projects
              </p>
            </div>
            <div className={styles.imageContainer}>
              <img src={purpleHexagonalFlower} alt="Purple Hexagonal Flower" />
              <p>
                DAO <br />
                Launches
              </p>
            </div>
            <div className={styles.imageContainer}>
              <img src={yellowSquareBadge} alt="Yellow Square Badge" />
              <p>
                Dapp
                <br /> Listings
              </p>
            </div>
            <div className={styles.imageContainer}>
              <img src={redOctagonalBadge} alt="Red Octagonal Badge" />
              <p style={{ textAlign: "center" }}>
                Token
                <br /> Drops
              </p>
            </div>
            <div className={styles.imageContainer}>
              <img src={greenCircularBadge} alt="Green Circular Badge" />
              <p>
                Metaverse <br />
                Projects
              </p>
            </div>
          </div>
          <div className={styles.starImages}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className={styles.yellow}
              src={yellowStar}
              alt="Yellow Star"
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className={styles.purple}
              src={purpleStar}
              alt="Purple Star"
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className={styles.red}
              src={redStar}
              alt="Red Star"
            />
          </div>
        </motion.section>
        <div className={styles.gradientLine1}></div>
      </section>
      <section className={styles.how}>
        <motion.div
          style={
            innerWidth > 800 ? { scale: scaleHow, opacity: opacityHow } : {}
          }
          className={styles.howSubContainer}
        >
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
        </motion.div>
      </section>
      <section className={styles.gridContainer3}>
        <section className={styles.images}>
          <div className={styles.first}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className={styles.star}
              src={purpleStar}
              alt="Purple Star"
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className={styles.star}
              src={yellowStar}
              alt="Yellow Star"
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className={styles.star}
              src={purpleStar}
              alt="Purple Star"
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className={styles.star}
              src={yellowStar}
              alt="Yellow Star"
            />
          </div>
          <div className={styles.second}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className={styles.flower}
              src={blueFlower}
              alt="Blue Flower"
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className={styles.star}
              src={redStar}
              alt="Red Star"
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className={styles.ring}
              src={blueRing}
              alt="Blue Ring"
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className={styles.star}
              src={whiteStar}
              alt="White Star"
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className={styles.flower}
              src={redFlower}
              alt="Red Flower"
            />
          </div>
          <div className={styles.third}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className={styles.star}
              src={whiteStar}
              alt="White Star"
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className={styles.badge}
              src={whiteOctagonalBadge}
              alt="White Octagonal Badge"
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className={styles.flower}
              src={greenFlower}
              alt="Green Flower"
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className={styles.star}
              src={purpleStar}
              alt="Purple Star"
            />
          </div>
          <div className={styles.fourth}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className={styles.star}
              src={yellowStar}
              alt="Yellow Star"
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className={styles.flower}
              src={redFlower}
              alt="Red Flower"
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className={styles.star}
              src={redStar}
              alt="Red Star"
            />
          </div>
        </section>
        <motion.section
          style={
            innerWidth > 800
              ? { scale: scaleWhoToTag, opacity: opacityWhoToTag }
              : {}
          }
          className={styles.whoToTag}
        >
          <h1>Who do we tag with?</h1>
          <div className={styles.paraAndImage}>
            <div className={styles.left}>
              <p>You, of course!</p>
              <p>Just let us know how, right here</p>
              <form onSubmit={handleJustEmailSubmit} className={styles.input}>
                <input
                  required
                  type="email"
                  value={justEmail}
                  onChange={(e) => setJustEmail(e.target.value)}
                  placeholder="Your Email Here"
                />
                <button type="submit">
                  <img src={forwardArrow} alt="Forward Arrow" />
                </button>
              </form>
            </div>
            <div className={styles.right}>
              <img src={lightOrangeSquare} alt="Light Orange Square" />
            </div>
          </div>
        </motion.section>
      </section>
      <footer className={styles.footer}>
        <motion.div
          style={
            innerWidth > 800
              ? { scale: scaleFooter, opacity: opacityFooter }
              : {}
          }
          className={styles.footerSubContainer}
        >
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
                <img src={arrowRight} alt="Forward Arrow" />
              </div>
            </div>
            <div className={styles.right}>
              {/* <h1>Contact</h1>
            <p>hello@culture.tools</p> */}
              <h1 className={styles.join}>Join our circle</h1>
            </div>
          </div>
          <div className={styles.copyrightButtons}>
            <p className={styles.copyright}>© Cultur3 Tools 2021</p>
            <div className={styles.buttons}>
              <a
                href="https://www.instagram.com/cultur3.tools/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Instagram</button>
              </a>
              <a
                href="https://twitter.com/0xcultur3"
                target="_blank"
                rel="noreferrer"
              >
                <button>Twitter</button>
              </a>
              <a
                href="https://t.me/+VECH0ef_S0NhOGY8"
                target="_blank"
                rel="noreferrer"
              >
                <button>Telegram</button>
              </a>
            </div>
          </div>

          <h1 className={styles.bottomLargeHeading}>Cultur3 Tools</h1>
          <div className={styles.contentForSmallScreen}>
            <h1>Cultur3 Tools</h1>
            <p>Follow us on Socials</p>
            <div className={styles.icons}>
              <a
                href="https://twitter.com/0xcultur3"
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.icon}>
                  <img src={twitter} alt="Twitter" />
                </div>
              </a>
              <a
                href="https://www.instagram.com/cultur3.tools/"
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.icon}>
                  <img src={instagram} alt="Instagram" />
                </div>
              </a>
              <a
                href="https://t.me/+VECH0ef_S0NhOGY8"
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.icon}>
                  <img src={telegram} alt="Telegram" />
                </div>
              </a>
            </div>
            <span>© Cultur3 Tools 2021</span>
          </div>
        </motion.div>
      </footer>
    </motion.div>
  );
};

export default Home;
