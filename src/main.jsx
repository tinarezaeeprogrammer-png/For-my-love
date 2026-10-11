import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  ArrowDown,
  Heart,
  Mail,
  Music2,
  MoonStar,
  Sparkles,
  Stars,
  Volume2,
  VolumeX,
  X,
  Check,
  Play,
  Pause,
} from "lucide-react";
import "./style.css";

const PARTNER_NAME = "Zac";
const YOUR_NAME = "Ellie";
const MUSIC_PATH = "/music/love-song.mp3";
const letters = [
  {
    tag: "A LITTLE TRUTH",
    title: "You make ordinary days feel special.",
    text: "Hey, my favorite person. If you were here right now, I would probably try to steal a smile from you first. Somehow, even thinking about you can make an ordinary day feel softer and brighter. I made this tiny universe to give you a small piece of the happiness you bring me. ♡",
  },
  {
    tag: "WHAT I HOPE YOU KNOW",
    title: "You matter more than you realize.",
    text: "Zac, I may not always find the perfect words, but I hope you never doubt how much you mean to me. Your laugh, your little habits, our conversations, and all the tiny moments that might seem ordinary are the things I want to remember. You make a difference simply by being yourself.",
  },
  {
    tag: "A WISH FOR US",
    title: "More memories, more reasons to smile.",
    text: "If our story were a book, I would want its pages filled with laughter, late-night conversations, gentle moments, silly jokes, and memories we will look back on with a smile. I cannot predict every chapter ahead, but I am happy you are part of my story right now. Thank you for being you, Zac. ♡",
  },
];
const stars = [
  [
    "You make me smile",
    "You can make a hard day feel lighter without even trying. ♡",
    15,
    25,
  ],
  [
    "My favorite thought",
    "Some of my favorite moments begin with a thought of you.",
    82,
    20,
  ],
  [
    "A little promise",
    "I will keep finding little ways to remind you that you matter.",
    73,
    72,
  ],
  [
    "My wish",
    "More laughter, more memories, and more reasons to smile together.",
    22,
    76,
  ],
  [
    "The brightest star",
    "Out of all these stars, you are still my favorite. — ♡",
    50,
    46,
  ],
];

function Particles() {
  return (
    <div className="particles" aria-hidden="true">
      {Array.from({ length: 46 }, (_, i) => (
        <span
          key={i}
          className={`particle p${i % 8}`}
          style={{
            left: `${(i * 37 + 3) % 100}%`,
            animationDelay: `-${(i * 1.71) % 22}s`,
            animationDuration: `${13 + (i % 10) * 1.7}s`,
          }}
        >
          {["♡", "✦", "·", "✧"][i % 4]}
        </span>
      ))}
    </div>
  );
}

function App() {
  const [entered, setEntered] = useState(false),
    [letterOpen, setLetterOpen] = useState(false),
    [page, setPage] = useState(0);
  const [finalOpen, setFinalOpen] = useState(false),
    [musicOn, setMusicOn] = useState(false),
    [musicAvailable, setMusicAvailable] = useState(false);
  const [starMessage, setStarMessage] = useState(null),
    [secret, setSecret] = useState(false);
  const audio = useRef(null);
  useEffect(() => {
    if (!audio.current) return;
    if (musicOn) audio.current.play().catch(() => setMusicOn(false));
    else audio.current.pause();
  }, [musicOn]);
  useEffect(() => {
    const esc = (e) => {
      if (e.key === "Escape") {
        setLetterOpen(false);
        setFinalOpen(false);
        setStarMessage(null);
      }
    };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);
  const closeAll = () => {
    setLetterOpen(false);
    setFinalOpen(false);
    setStarMessage(null);
  };
  return (
    <main className="site-shell">
      <Particles />
      <div className="glow glow-a" />
      <div className="glow glow-b" />
      <audio
        ref={audio}
        src={MUSIC_PATH}
        loop
        onCanPlay={() => setMusicAvailable(true)}
        onError={() => setMusicAvailable(false)}
      />
      <header className="topbar">
        <button className="brand" onClick={() => setEntered(false)}>
          <span className="brand-icon">
            <Heart size={15} fill="currentColor" />
          </span>{" "}
          FOR {PARTNER_NAME.toUpperCase()}, ALWAYS
        </button>
        <button
          className={`music-toggle ${musicOn ? "playing" : ""}`}
          onClick={() => setMusicOn((v) => !v)}
        >
          {musicOn ? <Volume2 size={16} /> : <VolumeX size={16} />}{" "}
          {musicOn ? "Music on" : "Music off"}{" "}
          {musicOn && (
            <span className="bars">
              <i />
              <i />
              <i />
            </span>
          )}
        </button>
      </header>
      {!entered ? (
        <section className="hero section-enter">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="kicker">
            <span className="live-dot" /> A SMALL UNIVERSE, MADE FOR YOU
          </div>
          <div className="hero-heart-wrap">
            <div className="ring ring-one" />
            <div className="ring ring-two" />
            <div className="hero-heart">
              <Heart size={50} fill="currentColor" strokeWidth={1} />
            </div>
            <b className="orbit-star s1">✦</b>
            <b className="orbit-star s2">✧</b>
            <b className="orbit-star s3">✦</b>
          </div>
          <p className="pretitle">For my favorite person</p>
          <h1>
            Hey, <span className="neon">{PARTNER_NAME}</span>.<br />
            <em>You are my favorite kind of magic.</em>
          </h1>
          <p className="hero-copy">
            A little place in the universe that belongs to you.
            <br />
            Take a breath, turn on the music, and come on in.
          </p>
          <button className="primary" onClick={() => setEntered(true)}>
            Enter our little universe <ArrowRight size={17} />
          </button>
          <div className="scroll-hint">
            YOUR LITTLE SURPRISE AWAITS <ArrowDown size={13} />
          </div>
        </section>
      ) : (
        <div className="content section-enter">
          <section className="welcome panel">
            <div className="moon">
              <MoonStar size={27} />
            </div>
            <span className="eyebrow">
              <Sparkles size={13} /> YOU MADE IT
            </span>
            <h2>
              Welcome to your universe, <em>{PARTNER_NAME}.</em>
            </h2>
            <p>
              Every little detail here was made with you in mind. Explore slowly
              — there are tiny messages hidden in the stars.
            </p>
            <div className="micro-line">— A LITTLE LOVE, IN EVERY CORNER —</div>
          </section>
          <section className="section">
            <div className="section-heading">
              <span className="number">01</span>
              <div>
                <span className="eyebrow">LOOK A LITTLE CLOSER</span>
                <h2>Our little constellation</h2>
              </div>
            </div>
            <p className="muted">
              Tap any glowing star. Each one has a little thought I wanted you
              to keep.
            </p>
            <div className="sky">
              <div className="sky-stars">
                {Array.from({ length: 70 }, (_, i) => (
                  <i
                    key={i}
                    style={{
                      left: `${(i * 53 + 11) % 100}%`,
                      top: `${(i * 31 + 7) % 100}%`,
                      animationDelay: `-${(i % 9) * 0.45}s`,
                    }}
                  />
                ))}
              </div>
              <svg
                className="lines"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path d="M15 25 L50 46 L82 20 M50 46 L73 72 L22 76 L15 25" />
              </svg>
              {stars.map(([label, msg, x, y], i) => (
                <button
                  key={label}
                  className={`constellation c${i}`}
                  style={{ left: `${x}%`, top: `${y}%` }}
                  onClick={() => setStarMessage({ label, msg })}
                  aria-label={`Reveal: ${label}`}
                >
                  <span>✦</span>
                  <i>{label}</i>
                </button>
              ))}
              <div className="sky-caption">
                <Stars size={14} /> FIVE LITTLE THOUGHTS, ALL ABOUT YOU
              </div>
            </div>
          </section>
          <section className="section">
            <div className="section-heading">
              <span className="number">02</span>
              <div>
                <span className="eyebrow">SOMETHING FROM THE HEART</span>
                <h2>A letter, just for you</h2>
              </div>
            </div>
            <div className="letter-feature">
              <div className="envelope-scene">
                <div className="halo" />
                <div className="envelope">
                  <div className="paper">
                    <Heart size={19} />
                  </div>
                  <div className="flap" />
                  <div className="seal">
                    <Heart size={17} fill="currentColor" />
                  </div>
                </div>
                <b className="spark a">✦</b>
                <b className="spark b">✧</b>
              </div>
              <div className="letter-copy">
                <span className="pill">
                  <Mail size={12} /> PRIVATE MAIL
                </span>
                <h3>
                  Words I hope you
                  <br />
                  <em>can feel, not just read.</em>
                </h3>
                <p>
                  Some things are easier to write from the heart. I put a few of
                  mine here, with your name on every page.
                </p>
                <button
                  className="secondary"
                  onClick={() => {
                    setPage(0);
                    setLetterOpen(true);
                  }}
                >
                  Unseal your letter <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </section>
          <section className="music-panel">
            <div className="record">
              <div className="grooves" />
              <div className="record-heart">
                <Heart size={20} fill="currentColor" />
              </div>
            </div>
            <div className="music-copy">
              <span className="eyebrow">
                <Music2 size={13} /> SET THE MOOD
              </span>
              <h2>A song for this moment.</h2>
              <p>
                {musicAvailable
                  ? "Your song is ready. Let it play while you explore this little universe."
                  : "Add your favorite MP3 to make this little universe sound like your story."}
              </p>
              <button
                className="play-button"
                onClick={() => setMusicOn((v) => !v)}
              >
                {musicOn ? <Pause size={15} /> : <Play size={15} />}{" "}
                {musicOn ? "Pause the music" : "Play our song"}
              </button>
              {!musicAvailable && <small>public/music/love-song.mp3</small>}
            </div>
          </section>
          <section className="final-tease">
            <div className="final-orb">
              <Heart size={28} fill="currentColor" />
            </div>
            <span className="eyebrow">ONE LAST LITTLE THING</span>
            <h2>
              There is something
              <br />
              <em>I really want you to know.</em>
            </h2>
            <p>When you're ready, open the final message.</p>
            <button className="final-button" onClick={() => setFinalOpen(true)}>
              Open my heart <Heart size={16} fill="currentColor" />
            </button>
          </section>
          <footer>
            CRAFTED WITH LOVE, JUST FOR {PARTNER_NAME.toUpperCase()}{" "}
            <span>♡</span> IN EVERY UNIVERSE.
          </footer>
        </div>
      )}
      {starMessage && (
        <div className="backdrop" onClick={closeAll}>
          <section
            className="modal star-modal"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close"
              onClick={() => setStarMessage(null)}
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <div className="modal-star">✦</div>
            <span className="eyebrow">A MESSAGE FROM THE STARS</span>
            <h2>{starMessage.label}</h2>
            <p>{starMessage.msg}</p>
            <button
              className="text-button"
              onClick={() => setStarMessage(null)}
            >
              Keep this close ♡
            </button>
          </section>
        </div>
      )}
      {letterOpen && (
        <div className="backdrop" onClick={closeAll}>
          <section
            className="modal letter-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Your private letter"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close"
              onClick={() => setLetterOpen(false)}
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <div className="modal-top">
              PERSONAL LETTER <span>♡ FOR {PARTNER_NAME.toUpperCase()}</span>
            </div>
            <div className="letter-icon">
              <Mail size={25} />
            </div>
            <span className="eyebrow">{letters[page].tag}</span>
            <h2>{letters[page].title}</h2>
            <p>{letters[page].text}</p>
            <div className="letter-controls">
              <span>
                0{page + 1} <i>/ 0{letters.length}</i>
              </span>
              <div className="dots">
                {letters.map((_, i) => (
                  <button
                    key={i}
                    className={i === page ? "active" : ""}
                    onClick={() => setPage(i)}
                    aria-label={`Page ${i + 1}`}
                  />
                ))}
              </div>
              <button
                className="next"
                onClick={() =>
                  page === letters.length - 1
                    ? setLetterOpen(false)
                    : setPage((p) => p + 1)
                }
              >
                {page === letters.length - 1 ? "Close letter" : "Next page"}{" "}
                <ArrowRight size={14} />
              </button>
            </div>
            <div className="signature">
              {YOUR_NAME} <Heart size={13} fill="currentColor" />
            </div>
          </section>
        </div>
      )}
      {finalOpen && (
        <div className="backdrop final-backdrop" onClick={closeAll}>
          <section
            className="modal confession"
            role="dialog"
            aria-modal="true"
            aria-label="My final confession"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close"
              onClick={() => setFinalOpen(false)}
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <div className="confetti">✦　·　♡　·　✦</div>
            <div className="confession-heart">
              <Heart size={46} fill="currentColor" />
            </div>
            <span className="eyebrow">MY WHOLE HEART, IN A FEW WORDS</span>
            <h2>
              {PARTNER_NAME},<br />
              <em>I love you.</em>
            </h2>
            <div className="rule">
              <span />
              <Heart size={12} fill="currentColor" />
              <span />
            </div>
            <p>
              Maybe this page began with stars, glowing hearts, and a little bit
              of magic. But what I want to tell you is real: you have a way of
              making my world feel brighter just by being in it.
            </p>
            <p>
              I love your laugh, your real self, the little things that make you
              who you are, and the moments that turn into memories before we
              even realize it. I hope life gives us many more reasons to smile
              together.
            </p>
            <p className="highlight">
              In every version of tomorrow, I hope there is a little more
              laughter, a little more wonder, and a little more of us. You mean
              more to me than this page could ever say. ♡
            </p>
            <div className="signature centered">
              Always, and in every universe{" "}
              <Heart size={13} fill="currentColor" />
            </div>
            <button className="secondary" onClick={() => setFinalOpen(false)}>
              <Check size={15} /> Keep this in my heart
            </button>
          </section>
        </div>
      )}
      {entered && (
        <>
          {!secret ? (
            <button
              className="secret-trigger"
              onClick={() => setSecret(true)}
              aria-label="Reveal a hidden message"
            >
              <Sparkles size={17} />
            </button>
          ) : (
            <div className="secret-toast">
              Psst... you're someone's favorite person. ♡{" "}
              <button onClick={() => setSecret(false)} aria-label="Dismiss">
                <X size={14} />
              </button>
            </div>
          )}
        </>
      )}
    </main>
  );
}
createRoot(document.getElementById("root")).render(<App />);
