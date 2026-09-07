import "./Footer.css";

const projects = [
  { name: "Commons", url: "https://commons.wikimedia.org/" },
  { name: "Wikivoyage", url: "https://www.wikivoyage.org/" },
  { name: "Wiktionary", url: "https://www.wiktionary.org/" },
  { name: "Wikibooks", url: "https://www.wikibooks.org/" },
  { name: "Wikidata", url: "https://www.wikidata.org/" },
  { name: "Wikiversity", url: "https://www.wikiversity.org/" },
  { name: "Wikiquote", url: "https://www.wikiquote.org/" },
  { name: "MediaWiki", url: "https://www.mediawiki.org/" },
  { name: "Wikisource", url: "https://www.wikisource.org/" },
  { name: "Wikispecies", url: "https://species.wikimedia.org/" },
  { name: "Wikifunctions", url: "https://www.wikifunctions.org/" },
  { name: "Meta-Wiki", url: "https://meta.wikimedia.org/" },
];

function Footer() {
  return (
    <footer className="footer">
      <h2>Explore More Projects</h2>

      <div className="footer-grid">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.name}
          </a>
        ))}
      </div>

      <div className="footer-bottom">
        <p>
          This encyclopedia-style project is created for learning and practice
          purposes.
        </p>

        <p>© 2026 Knowledge Hub</p>
      </div>
    </footer>
  );
}

export default Footer;