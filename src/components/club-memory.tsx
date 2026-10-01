export function ClubMemory() {
  return (
    <section
      id="souvenirs"
      className="shell memory-section"
      aria-labelledby="memory-title"
    >
      <div className="memory-grid">
        <figure className="memory-photo">
          <img
            src="/images/Marie-SEBAG.webp"
            alt="Marie Sebag concentrée sur une partie d’échecs"
            width="1024"
            height="683"
            loading="lazy"
          />
          <figcaption>Marie Sebag</figcaption>
        </figure>
        <div className="memory-copy">
          <p className="eyebrow">DANS LES SOUVENIRS DU CLUB</p>
          <h2 id="memory-title">
            Marie Sebag,
            <br />
            <em>au Chess Club.</em>
          </h2>
          <p>
            On a eu le plaisir d’accueillir Marie Sebag lors d’un précédent
            événement du club. Un sacré souvenir pour les membres présents.
          </p>
          <span className="memory-signature">Merci d’être venue, Marie.</span>
        </div>
      </div>
    </section>
  );
}
