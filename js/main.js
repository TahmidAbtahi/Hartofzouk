/* HART OF ZOUK — shared scripts */

// ── Inject shared nav + footer ──
const NAV_HTML = `
<nav class="nav">
  <a href="index.html" class="nav-brand">
    <img src="assets/logo.png" alt="Hart of Zouk logo">
    <span>Hart of Zouk</span>
  </a>
  <button class="nav-burger" aria-label="Menu" onclick="toggleMenu(this)">
    <span></span><span></span><span></span>
  </button>
  <ul class="nav-menu" id="nav-menu">
    <li><a href="index.html" data-page="home">Home</a></li>
    <li class="has-dropdown">
      <a href="events.html" data-page="events">Events</a>
      <ul class="dropdown">
        <li class="dd-label">Featured</li>
        <li><a href="showcase.html">★ Summer Showcase 2026</a></li>
        <li class="dd-label">Upcoming</li>
        <li><a href="events.html#urbankiz-mondays">Urbankiz Mondays</a></li>
        <li><a href="events.html#sweet-moments">Sweet Moments Workshop</a></li>
        <li class="dd-label">Archive</li>
        <li><a href="https://www.instagram.com/hartofzouk" target="_blank" rel="noopener">Past Events (100+) ↗</a></li>
      </ul>
    </li>
    <li><a href="gallery.html" data-page="gallery">Gallery</a></li>
    <li><a href="services.html" data-page="services">Services</a></li>
    <li><a href="about.html" data-page="about">About</a></li>
    <li><a href="contact.html" data-page="contact" class="nav-cta">Connect</a></li>
  </ul>
</nav>`;

const FOOTER_HTML = `
<footer class="footer">
  <img src="assets/watermark.png" class="watermark-bg" alt="" aria-hidden="true">
  <div class="footer-grid">
    <div class="footer-brand">
      <img src="assets/logo.png" alt="Hart of Zouk">
      <p>Where connection, rhythm, and community meet. DMV dance events, studio rental, and event design — curated with hart.</p>
    </div>
    <div>
      <h4>Explore</h4>
      <ul>
        <li><a href="events.html">Upcoming Events</a></li>
        <li><a href="showcase.html">★ Summer Showcase 2026</a></li>
        <li><a href="https://www.instagram.com/hartofzouk" target="_blank" rel="noopener">Past Events ↗</a></li>
        <li><a href="gallery.html">Gallery</a></li>
        <li><a href="services.html">Studio Rental</a></li>
        <li><a href="about.html">Our Story</a></li>
      </ul>
    </div>
    <div>
      <h4>Community</h4>
      <ul>
        <li><a href="https://instagram.com/hartofzouk" target="_blank" rel="noopener">Instagram</a></li>
        <li><a href="https://facebook.com" target="_blank" rel="noopener">Facebook</a></li>
        <li><a href="http://www.openwindowevents.com" target="_blank" rel="noopener">Open Window Events</a></li>
        <li><a href="contact.html">Newsletter</a></li>
      </ul>
    </div>
    <div>
      <h4>Visit</h4>
      <ul>
        <li>Falls Church, VA 22046</li>
        <li><a href="tel:3017046584">(301) 704-6584</a></li>
        <li><a href="mailto:openwindowimmersiveevents@gmail.com">Email us</a></li>
        <li style="color:var(--muted);font-style:italic">Mondays · Class 7:30 · Social 8:30</li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 Hart of Zouk · Curated by @darlingdre</span>
    <div class="footer-social">
      <a href="https://instagram.com/hartofzouk" target="_blank" rel="noopener" aria-label="Instagram">IG</a>
      <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">FB</a>
      <a href="tel:3017046584" aria-label="Call">☏</a>
    </div>
  </div>
  <div style="text-align:center;margin-top:1.6rem;font-size:.78rem;color:rgba(240,230,211,.35);position:relative">
    This website is made with <span style="color:#c4532a">♥</span> by
    <a href="https://tahmidabtahi.github.io/heartboundcoders/" target="_blank" rel="noopener"
       style="color:rgba(240,230,211,.55);text-decoration:none;border-bottom:1px dotted rgba(240,230,211,.3)">heart.bound.coders</a>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  // inject nav + footer
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // active page highlight
  const page = document.body.dataset.page;
  if (page) {
    document.querySelectorAll(`.nav-menu a[data-page="${page}"]`).forEach(a => a.classList.add('active'));
  }

  // mobile dropdown toggle
  document.querySelectorAll('.has-dropdown > a').forEach(a => {
    a.addEventListener('click', e => {
      if (window.innerWidth <= 920) {
        const li = a.parentElement;
        if (!li.classList.contains('open-dd')) { e.preventDefault(); li.classList.add('open-dd'); }
      }
    });
  });

  // reveal on scroll
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
});

function toggleMenu(btn) {
  btn.classList.toggle('open');
  document.getElementById('nav-menu').classList.toggle('open');
}

/* ── Google Drive helper ──
   Replace null driveId values with real file IDs.
   Get ID: right-click file in Drive → Share → copy link → extract ID */
function driveUrl(id) { return 'https://drive.google.com/uc?export=view&id=' + id; }
