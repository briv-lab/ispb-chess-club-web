import React, { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Clock3,
  MapPin,
  CalendarDays,
  Instagram,
  Mail,
  MoveUpRight,
  BookOpen,
  Trophy,
  Sun,
  Moon,
  Monitor,
} from "lucide-react";
import { Button } from "./components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./components/ui/accordion";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./components/ui/dialog";
import { useTheme } from "./hooks/use-theme";
import { RotatingText } from "./components/rotating-text";
import { ClubMemory } from "./components/club-memory";
import { adhesion, instagram, links, members, faqs } from "./content";
import "./styles.css";
function App() {
  const [menu, setMenu] = useState(false);
  const [archive, setArchive] = useState(false);
  const { mode, theme, chooseTheme } = useTheme();
  return (
    <>
      <a className="skip-link" href="#main">
        Aller au contenu
      </a>
      <div className="topline">
        <span>UNIVERSITÉ CLAUDE BERNARD LYON 1</span>
        <span>LES ÉCHECS, MAIS SURTOUT LES GENS.</span>
      </div>
      <header className="site-header">
        <div className="shell flex items-center justify-between gap-6 py-5">
          <a className="brand" href="#">
            <img src="/images/logo.webp" alt="" />
            <span>
              CHESS CLUB<small>ISPB · LYON</small>
            </span>
          </a>
          <nav
            aria-label="Navigation principale"
            className="hidden items-center gap-8 lg:flex"
          >
            {links.map(([name, url]) => (
              <a className="nav-link" key={url} href={url}>
                {name}
              </a>
            ))}
          </nav>
          <div className="header-actions flex items-center gap-3">
            <Button
              className="theme-toggle"
              variant="ghost"
              size="icon"
              type="button"
              aria-label={
                theme === "dark"
                  ? "Passer au thème clair"
                  : "Passer au thème sombre"
              }
              title={
                mode === "system"
                  ? "Thème automatique, selon ton appareil"
                  : `Thème ${theme === "dark" ? "sombre" : "clair"}`
              }
              onClick={() => chooseTheme(theme === "dark" ? "light" : "dark")}
            >
              <span className="theme-icons" aria-hidden="true">
                <Sun className="theme-sun" />
                <Moon className="theme-moon" />
              </span>
            </Button>
            <Button asChild className="hidden sm:inline-flex" size="sm">
              <a href={adhesion} target="_blank" rel="noreferrer">
                Rejoindre le club <ArrowUpRight />
              </a>
            </Button>
            <Button
              className="lg:hidden"
              variant="ghost"
              size="icon"
              aria-label={menu ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menu}
              aria-controls="mobile-nav"
              onClick={() => setMenu(!menu)}
            >
              {menu ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {menu && (
          <nav
            id="mobile-nav"
            aria-label="Navigation mobile"
            className="shell flex flex-col gap-5 pb-6 lg:hidden"
          >
            {[...links, ["Nous contacter", "#contact"]].map(([name, url]) => (
              <a key={url} href={url} onClick={() => setMenu(false)}>
                {name}
              </a>
            ))}
            <a href={adhesion}>Adhérer au club ↗</a>
          </nav>
        )}
      </header>
      <main id="main">
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="tiny-square" /> LE CLUB D’ÉCHECS DE L’ISPB ·
              DEPUIS 2022
            </p>
            <h1>
              Une table.
              <br />
              Un échiquier.
              <br />
              <em>À toi de jouer.</em>
            </h1>
            <RotatingText />
            <p className="hero-description">
              Des premières pièces déplacées aux parties endiablées : ici, on
              joue, on apprend et on se retrouve. Quel que soit ton niveau.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Button asChild>
                <a href="#planning">
                  Passer faire une partie <ArrowUpRight />
                </a>
              </Button>
              <a className="text-link" href="#club">
                Découvrir le club <ArrowRight className="size-4" />
              </a>
            </div>
            <div className="hero-bottom">
              <div className="avatars">
                {["briac.webp", "lina.webp", "trungti.webp"].map((i) => (
                  <img key={i} src={"/images/members/" + i} alt="" />
                ))}
              </div>
              <p>
                Débutant, intermédiaire,
                <br />
                <strong>ou pourquoi pas grand maître !</strong>
              </p>
              <span className="hand-note">
                Tout le monde
                <br />a sa place ici.
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="photo-frame">
              <img
                src="/images/club.jpg"
                alt="Deux membres du Chess Club en pleine partie sur le campus"
                fetchPriority="high"
              />
              <div className="photo-caption">
                <span>LA VIE DU CLUB</span>
                <span>Un mardi, entre deux cours.</span>
              </div>
            </div>
            <svg
              className="chess-stamp"
              viewBox="0 0 144 144"
              aria-hidden="true"
              focusable="false"
            >
              <defs>
                <path id="stamp-top" d="M 22 76 A 50 50 0 0 1 122 76" />
                <path id="stamp-bottom" d="M 22 76 A 50 50 0 0 0 122 76" />
              </defs>
              <text className="stamp-lettering">
                <textPath
                  href="#stamp-top"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  ON SE RETROUVE
                </textPath>
              </text>
              <text
                className="stamp-knight"
                x="72"
                y="76"
                textAnchor="middle"
                dominantBaseline="central"
              >
                ♞
              </text>
              <text className="stamp-lettering">
                <textPath
                  href="#stamp-bottom"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  AUTOUR DU JEU
                </textPath>
              </text>
            </svg>
            <div className="photo-note">
              <span className="note-pin" />
              <span>
                « Encore une dernière ? »<small>Tout le monde, à 19h14</small>
              </span>
            </div>
            <div className="chess-corner" aria-hidden="true" />
          </div>
        </section>
        <section className="meeting-strip">
          <div className="shell meeting-content">
            <span className="strip-title">
              Le rendez-vous du mardi <span>↗</span>
            </span>
            <span>
              <Clock3 /> 17h15 à 19h15
            </span>
            <span>
              <MapPin /> Campus Lyon 1 · ISPB
            </span>
            <a href="#planning">
              Infos pratiques <ArrowRight className="size-4" />
            </a>
          </div>
        </section>
        <section id="club" className="shell club-section">
          <div>
            <p className="eyebrow">01 / L’ESPRIT DU CLUB</p>
            <h2>
              Le sérieux du jeu.
              <br />
              <em>Le plaisir d’être ensemble.</em>
            </h2>
          </div>
          <div className="club-story">
            <p>
              Depuis 2022, le Chess Club réunit les étudiants de l’université
              Claude Bernard Lyon 1 autour d’un même échiquier.
            </p>
            <p>
              Pas besoin de connaître la défense sicilienne pour pousser la
              porte. Viens apprendre les règles, tenter une nouvelle ouverture
              ou simplement partager une bonne partie.
            </p>
            <a className="text-link" href="#bureau">
              Rencontrer le (génial) bureau <ArrowUpRight className="size-4" />
            </a>
          </div>
        </section>
        <div className="shell principles">
          <div>
            <span className="piece" aria-hidden="true">
              ♙
            </span>
            <div>
              <h3>Première partie ?</h3>
              <p>
                On t’explique les règles.
                <br />
                Les pièces, on les fournit.
              </p>
            </div>
          </div>
          <div>
            <span className="piece" aria-hidden="true">
              ♘
            </span>
            <div>
              <h3>Envie de progresser ?</h3>
              <p>
                On échange des idées.
                <br />
                Et on analyse nos erreurs.
              </p>
            </div>
          </div>
          <div>
            <span className="piece" aria-hidden="true">
              ♔
            </span>
            <div>
              <h3>L’esprit de compétition ?</h3>
              <p>
                Un tournoi, des adversaires.
                <br />
                Toujours la même convivialité.
              </p>
            </div>
          </div>
        </div>
        <section id="planning" className="schedule-section">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">02 / ON SE RETROUVE QUAND ?</p>
                <h2>À vos agendas.</h2>
              </div>
              <span className="section-aside">
                La bonne excuse pour fermer ses cours.
              </span>
            </div>
            <div className="schedule-grid">
              <div className="weekly-card">
                <div className="flex items-center justify-between">
                  <span className="eyebrow">LE RENDEZ-VOUS HABITUEL</span>
                  <CalendarDays className="size-5" />
                </div>
                <h3>
                  Les mardis,
                  <br />
                  <em>on joue.</em>
                </h3>
                <div className="weekly-time">
                  <Clock3 className="size-5" />
                  17h15 → 19h15
                </div>
                <p>
                  Parties libres, conseils et découvertes.
                  <br />
                  Viens pour une séance d’essai.
                </p>
                <div className="weekly-location">
                  <MapPin className="size-5 shrink-0" />
                  <div>
                    <strong>Université Lyon 1 · ISPB</strong>
                    <small>
                      La salle et la reprise sont à confirmer auprès du club.
                    </small>
                  </div>
                </div>
                <Button asChild className="inverse-button w-full">
                  <a href="mailto:contact@ispbchessclub.fr">
                    Demander la prochaine séance <ArrowUpRight />
                  </a>
                </Button>
              </div>
              <div className="event-column">
                <div className="event-placeholder">
                  <span className="eyebrow">LE PROCHAIN TOURNOI</span>
                  <Trophy className="size-8" />
                  <h3>
                    Qui soulèvera
                    <br />
                    le prochain trophée ?
                  </h3>
                  <p>
                    La prochaine date n’est pas encore annoncée.
                    <br />
                    Les nouvelles du club arrivent sur Instagram.
                  </p>
                  <a
                    className="text-link"
                    href={instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Suivre l’aventure <ArrowUpRight className="size-4" />
                  </a>
                  <span className="decorative-rook" aria-hidden="true">
                    ♜
                  </span>
                </div>
                <button
                  className="archive-toggle"
                  onClick={() => setArchive(!archive)}
                  aria-expanded={archive}
                  aria-controls="archives"
                >
                  <span>
                    Dans les archives <small>Tournoi du 10 avril 2025</small>
                  </span>
                  <span>{archive ? "−" : "+"}</span>
                </button>
                {archive && (
                  <div id="archives" className="archive-content">
                    <p>
                      Le tournoi annuel de l’ISPB Chess Club s’est tenu le 10
                      avril 2025 à 17h, en Salle des Pas Perdus.
                    </p>
                    <a
                      className="text-link"
                      href="https://www.helloasso.com/associations/ispb-chess-club/evenements/inscription-tournoi-ispb-chess-club-2025"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Voir la page de l’édition 2025{" "}
                      <ArrowUpRight className="size-4" />
                    </a>
                    <p className="mt-3 text-sm">
                      Ancien planning : séances de janvier à avril, salles Cier
                      203, RAH, RBC, RB et RCD. Ces salles ne constituent pas le
                      planning actuel.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        <ClubMemory />
        <section id="bureau" className="shell team-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / LES GENS DERRIÈRE LES PIÈCES</p>
              <h2>Le (génial) bureau.</h2>
            </div>
            <p className="section-aside">
              Les visages du site historique.
              <br />
              Composition actuelle à confirmer.
            </p>
          </div>
          <div className="team-grid">
            {members.map((m) => (
              <article key={m.name} className="member">
                <div className="portrait">
                  {m.image ? (
                    <img
                      src={"/images/members/" + m.image}
                      alt={m.name}
                      loading="lazy"
                    />
                  ) : (
                    <div className="portrait-placeholder">
                      <span aria-hidden="true">♘</span>
                      <small>PHOTO À VENIR</small>
                    </div>
                  )}
                </div>
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </article>
            ))}
          </div>
          <div className="team-footnote">
            <span>
              Une association étudiante, des gens passionnés, et quelques débats
              sur les ouvertures.
            </span>
            <a href="mailto:contact@ispbchessclub.fr" className="text-link">
              Un mot au bureau <Mail className="size-4" />
            </a>
          </div>
        </section>
        <section id="cours" className="learning-section">
          <div className="shell learning-grid">
            <div>
              <p className="eyebrow">04 / UN COUP D’AVANCE</p>
              <h2>
                On ne naît pas
                <br />
                grand maître.
                <br />
                <em>On commence.</em>
              </h2>
              <p>
                Les cours en ligne du club, à ton rythme.
                <br />
                Pour comprendre, essayer, et revenir jouer.
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="inverse-button mt-7">
                    Ouvrir les cours <BookOpen />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle className="font-serif text-3xl">
                    Les cours du Chess Club
                  </DialogTitle>
                  <DialogDescription className="mb-6 mt-3 text-muted-foreground">
                    Retrouve la playlist du site original. Choisis une vidéo
                    dans le menu du lecteur.
                  </DialogDescription>
                  <iframe
                    className="aspect-video w-full"
                    src="https://www.youtube-nocookie.com/embed/videoseries?list=PLE030V6AHHs57b44BtJ2TxYEOhESH8h0A"
                    title="Cours d’échecs du Chess Club"
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <a
                    className="text-link mt-5"
                    href="https://www.youtube.com/playlist?list=PLE030V6AHHs57b44BtJ2TxYEOhESH8h0A"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Voir sur YouTube <ArrowUpRight className="size-4" />
                  </a>
                </DialogContent>
              </Dialog>
            </div>
            <figure className="learning-photo">
              <img
                src="/images/chess.jpg"
                alt="Un échiquier en bois et ses pièces, prêt pour une partie"
                loading="lazy"
                width="1200"
                height="800"
              />
              <figcaption>
                <span>Heidi Walley / Unsplash</span>
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="shell faq-section">
          <div>
            <p className="eyebrow">AVANT DE POUSSER LA PORTE</p>
            <h2>Une petite question ?</h2>
            <p className="faq-intro">
              De quoi préparer ta première visite.
              <br />
              Et si on a oublié quelque chose, écris-nous.
            </p>
            <a
              className="text-link mt-4"
              href="mailto:contact@ispbchessclub.fr"
            >
              Contacter le bureau <Mail className="size-4" />
            </a>
          </div>
          <Accordion type="single" collapsible className="faq-list">
            {faqs.map(({ question, answer, link }, i) => (
              <AccordionItem
                key={question}
                value={"q" + i}
                className="border-b border-border"
              >
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>
                  <p>{answer}</p>
                  {link && (
                    <a
                      className="text-link mt-3"
                      href={link.href}
                      {...(link.href.startsWith("https:")
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                    >
                      {link.label}
                      <ArrowUpRight className="size-4" />
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
        <section id="contact" className="contact-section">
          <div className="shell contact-grid">
            <div>
              <p className="eyebrow">ET SI ON FAISAIT UNE PARTIE ?</p>
              <h2>
                Le prochain coup,
                <br />
                <em>c’est le tien.</em>
              </h2>
            </div>
            <div>
              <p>
                Une question, une envie de nous rejoindre,
                <br />
                ou juste de parler échecs ?
              </p>
              <a
                className="contact-mail"
                href="mailto:contact@ispbchessclub.fr"
              >
                contact@ispbchessclub.fr <MoveUpRight className="size-6" />
              </a>
              <a
                className="text-link"
                href={instagram}
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="size-4" /> @ispbchessclub{" "}
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="shell footer">
        <a className="brand" href="#">
          <img src="/images/logo.webp" alt="" />
          <span>
            CHESS CLUB<small>ISPB · LYON</small>
          </span>
        </a>
        <span>Depuis 2022. Et encore beaucoup de parties à jouer.</span>
        <div className="footer-controls">
          <button
            type="button"
            className="text-link theme-auto"
            aria-pressed={mode === "system"}
            onClick={() => chooseTheme("system")}
            title="Suivre le thème clair ou sombre de ton appareil"
          >
            <Monitor className="size-4" />
            Thème auto
            {mode === "system" && (
              <span className="auto-dot" aria-hidden="true" />
            )}
          </button>
          <a href="#" className="text-link">
            Retour en haut ↑
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
