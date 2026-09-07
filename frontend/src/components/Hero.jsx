import "./Hero.css";

const languages = [
  { name: "English", articles: "7,000,000+" },
  { name: "Español", articles: "2,100,000+" },
  { name: "Deutsch", articles: "3,000,000+" },
  { name: "Français", articles: "2,700,000+" },
  { name: "Italiano", articles: "1,900,000+" },
  { name: "Русский", articles: "2,000,000+" },
  { name: "中文", articles: "1,500,000+" },
  { name: "日本語", articles: "1,450,000+" },
  { name: "हिन्दी", articles: "170,000+" },
  { name: "العربية", articles: "1,250,000+" }
];

function Hero() {
  return (
    <div className="hero">

      <div className="languages">

        {languages.map((item, index) => (
          <div className="language-card" key={index}>
            <h3>{item.name}</h3>
            <p>{item.articles}</p>
          </div>
        ))}

      </div>

      <div className="center">

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia-logo.png"
          alt="logo"
        />

        <h1>Wikipedia</h1>

        <p>The Free Encyclopedia</p>

        <div className="search">

          <input
            type="text"
            placeholder="Search Wikipedia..."
          />

          <button>Search</button>

        </div>

      </div>

    </div>
  );
}

export default Hero;