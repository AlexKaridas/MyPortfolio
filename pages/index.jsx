import styles from "../styles/Home.module.scss";
import emailjs from "@emailjs/browser";

export default function Home() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mfkdunp",
        "template_6noefyc",
        e.target,
        "5S8-jt1__8bOE1h2-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className={styles.main}>
      <div className={styles.navbar}>
        <div className={styles.name}>Alex Karidas</div>
        <ul id={styles.nav}>
          <li>About</li>
          <li>
            <a href="https://github.com/AlexKaridas">
              <i className={"fab fa-github"}></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/alex-karidas-1a6b4021a/">
              <i className={"fab fa-linkedin"}></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/AlexKaridas">
              <i className={"fab fa-twitter"}></i>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.container}>
        <div className={styles.section} id={styles.welcome}>
          {/* <div className={styles.blur}></div> */}
          <h1>
            I&apos;m a <span>Web Developer</span> bringing you{" "}
            <span>Design</span> and <span>Programming</span> from the future.
          </h1>
        </div>
        <div className={styles.section} id={styles.about}>
          <h1>About</h1>
          <h2>Always curious Always learning</h2>
          <div className={styles.aboutText}>
            I&apos;m a Web Developer from Greece with a passion for learning and
            creating. I&apos;m currently working on a front-end position at
            Metabloq.io. I&apos;m also aspiring to become a full-stack
            developer.
          </div>
        </div>
        <div className={styles.section} id={styles.work}>
          <div className={styles.workCard}></div>
          <div className={styles.workContainer}>
            <h3>
              <h1>Dig into my universe</h1>
              <h2>
                <h2>My skills are as follows:</h2> Html, CSS, Javascript, React,
                Next Js,
              </h2>
              I&apos;ve worked on a variety of projects, but I&apos;m most proud
              of my work on the following:
            </h3>
            <a href="https://github.com/AlexKaridas?tab=repositories">
              Explore
            </a>
          </div>
        </div>
        <div className={styles.section} id={styles.contact}>
          <div>
            <h1>Contact</h1>
            <h2>Have any problem to solve? </h2>
            <h2>Maybe a new website? </h2>
            <h2 id={styles.contactMe}>Contact me.</h2>
          </div>
          <div className={styles.contactForms}>
            <form onSubmit={sendEmail}>
              <h3>Email</h3>
              <input
                type="text"
                placeholder="Email"
                id="email"
                minLength="10"
                maxLength="20"
                name="email"
              />
              <h3>Name</h3>
              <input
                type="text"
                placeholder="Name"
                name="name"
                id="name"
                required
              />
              <h3>Message</h3>
              <input placeholder="Message" id="Message" name="Message" />
              <button id={styles.send} type="submit" value="Send Message">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
