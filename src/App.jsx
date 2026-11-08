import { useState } from 'react'
import {
  FaInstagram, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaFish, FaShippingFast,
  FaHeart, FaStar, FaArrowRight, FaCheckCircle
} from 'react-icons/fa'

const IG = 'https://www.instagram.com/midhula_farm_hut/'
const WA = 'https://wa.me/918129120437'
const PHONE = 'tel:+918129120437'
const LOGO = '/midhula-farm-hut/images/profile.jpg'
const heroImg = '/midhula-farm-hut/images/img0.jpg'

const products = [
  { name: 'Guppy', desc: 'Vibrant hybrid guppies in many strains — healthy, courier-ready.', img: '/midhula-farm-hut/images/img7.jpg' },
  { name: 'Platy', desc: 'Colourful platies — great for beginners and community tanks.', img: '/midhula-farm-hut/images/img1.jpg' },
  { name: 'Rainbow Cichlid', desc: 'Stunning rainbow cichlids with vivid colour and personality.', img: '/midhula-farm-hut/images/img5.jpg' },
  { name: 'Bloody Mary Shrimp', desc: 'Deep red Bloody Mary shrimps — perfect for planted tanks.', img: '/midhula-farm-hut/images/img8.jpg' },
  { name: 'Koi Carp', desc: 'Healthy Koi carp and eggs — farm-bred in Kerala.', img: '/midhula-farm-hut/images/img6.jpg' },
  { name: 'Isopods & More', desc: 'Isopods, crustaceans and live food for your aquarium.', img: '/midhula-farm-hut/images/img4.jpg' },
]

const gallery = [
  '/midhula-farm-hut/images/img0.jpg',
  '/midhula-farm-hut/images/img2.jpg',
  '/midhula-farm-hut/images/img3.jpg',
  '/midhula-farm-hut/images/img9.jpg',
  '/midhula-farm-hut/images/img10.jpg',
  '/midhula-farm-hut/images/img5.jpg',
]

const posts = [
  { date: 'Nov 6, 2026', text: 'വയറ് നിറയെ മുട്ടകൾ ആണോ — Are the bellies full of eggs?', img: '/midhula-farm-hut/images/img1.jpg' },
  { date: 'Nov 5, 2026', text: '𝖜𝖆𝖎𝔱 𝖋𝖔𝖗 𝖙𝖍𝖊 𝖊𝖓𝖉 😍 — green terror cichlid parenting.', img: '/midhula-farm-hut/images/img2.jpg' },
  { date: 'Nov 4, 2026', text: 'Polar ൻ്റെ Treatment തീർന്നു — Polar treatment done.', img: '/midhula-farm-hut/images/img3.jpg' },
  { date: 'Oct 31, 2026', text: 'Rainbow 🌈 cichlid 😍', img: '/midhula-farm-hut/images/img5.jpg' },
  { date: 'Oct 30, 2026', text: 'Surprice ആയി മുട്ടകൾ കിട്ടി 😍 — Surprise eggs received.', img: '/midhula-farm-hut/images/img6.jpg' },
  { date: 'Oct 28, 2026', text: 'എല്ലാവർക്കും ഇവരെ മതി ♥️😍❤️', img: '/midhula-farm-hut/images/img7.jpg' },
  { date: 'Oct 25, 2026', text: 'Bloody Mary Shrimps ♥️😍❤️ #shrimps', img: '/midhula-farm-hut/images/img8.jpg' },
  { date: 'Feb 20, 2024', text: '✌️ New FARM 💪 THIS IS JUST THE BEGINNING ✌️', img: '/midhula-farm-hut/images/img0.jpg' },
]

const reviews = [
  { text: 'High quality fishes, safe courier, affordable price.', author: 'Google reviewer', stars: 5 },
  { text: 'Different varieties of guppies — healthy and very beautiful.', author: 'Fish lover', stars: 5 },
  { text: 'Fish and live plants received without damage due to quality packaging.', author: 'Customer from Hyderabad', stars: 5 },
  { text: 'Quality and variety are really awesome. Packing and delivery very professional.', author: 'Verified buyer', stars: 5 },
]

const services = [
  { title: 'Ornamental Fishes', desc: 'Guppies, platies, swordtails, cichlids, goldfish and more.' },
  { title: 'Edible Fishes', desc: 'Farm-raised edible fishes at affordable prices.' },
  { title: 'Live Plants & Shrimps', desc: 'Bloody Mary shrimps, isopods, water hyacinth and live foods.' },
  { title: 'Courier Delivery', desc: 'Safe, professional packaging delivered across India.' },
  { title: 'Health & Care', desc: 'Treatment support and care guidance for your stock.' },
  { title: 'Bulk / Wholesale', desc: 'Bulk orders for shops and hobbyists — DM for quotes.' },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 glass">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 font-display text-xl font-bold text-[var(--ink)]">
            <img src={LOGO} alt="Midhula Farm Hut" className="w-9 h-9 rounded-full ring-2 ring-[var(--teal)] object-cover" />
            <span>Midhula Farm Hut</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--muted)]">
            <a href="#about" className="hover:text-[var(--teal)] transition">About</a>
            <a href="#products" className="hover:text-[var(--teal)] transition">Products</a>
            <a href="#services" className="hover:text-[var(--teal)] transition">Services</a>
            <a href="#feed" className="hover:text-[var(--teal)] transition">Feed</a>
            <a href="#contact" className="hover:text-[var(--teal)] transition">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a href={WA} target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center gap-2 bg-[var(--teal)] hover:bg-[#1fb3a0] text-[#071521] px-4 py-2 rounded-full text-sm font-bold transition">
              <FaWhatsapp /> WhatsApp
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-[var(--muted)]" aria-label="menu">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="md:hidden glass px-4 py-3 flex flex-col gap-3 text-sm">
            <a onClick={() => setMenuOpen(false)} href="#about">About</a>
            <a onClick={() => setMenuOpen(false)} href="#products">Products</a>
            <a onClick={() => setMenuOpen(false)} href="#services">Services</a>
            <a onClick={() => setMenuOpen(false)} href="#feed">Feed</a>
            <a onClick={() => setMenuOpen(false)} href="#contact">Contact</a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="hero-bg text-[var(--ink)] pt-32 pb-24 relative overflow-hidden">
        <div className="drift absolute inset-0 pointer-events-none opacity-60" aria-hidden>
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-[var(--teal)]/10 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[var(--coral)]/10 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center relative">
          <div className="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--line)] bg-white/5 text-sm font-medium text-[var(--muted)] mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--teal)] animate-pulse" />
              Thrissur, Kerala · Farm-bred fishes
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight">
              Find your need<br />
              <span className="text-[var(--teal)]">and feel</span> the reality
            </h1>
            <p className="mt-6 text-lg text-[var(--muted)] max-w-xl leading-relaxed">
              Ornamental and edible fishes at affordable prices. Healthy, farm-bred stock
              with safe courier delivery across India — straight from Mupliyam, Thrissur.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[var(--teal)] hover:bg-[#1fb3a0] text-[#071521] px-7 py-3.5 rounded-full font-bold shadow-xl shadow-teal-500/20 transition">
                <FaWhatsapp /> Order on WhatsApp
              </a>
              <a href={IG} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-[var(--line)] hover:border-[var(--teal)] text-[var(--ink)] px-7 py-3.5 rounded-full font-semibold transition">
                <FaInstagram /> Instagram
              </a>
            </div>
            <div className="mt-12 flex items-center gap-10 text-sm text-[var(--muted)] tabular">
              <div><span className="text-3xl font-bold text-[var(--ink)] block">29K+</span>Followers</div>
              <div><span className="text-3xl font-bold text-[var(--ink)] block">1.5K+</span>Posts</div>
              <div><span className="text-3xl font-bold text-[var(--ink)] block">4.7★</span>Rating</div>
            </div>
          </div>
          <div className="relative fade-up">
            <div className="float">
              <div className="img-frame rounded-[2rem] shadow-2xl shadow-teal-500/10 ring-1 ring-[var(--line)] max-w-md mx-auto overflow-hidden">
                <img src={heroImg} alt="Midhula Farm Hut fish" className="w-full aspect-[4/5] object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 glass rounded-2xl px-5 py-3 text-sm font-semibold flex items-center gap-2">
              <FaShippingFast className="text-[var(--teal)]" /> Safe courier across India
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[var(--ink)] leading-tight">
              A family farm,<br /><span className="text-[var(--teal)]">built on love.</span>
            </h2>
            <p className="mt-7 text-[var(--muted)] leading-relaxed text-lg">
              Midhula Farm Hut is a family-run fish farm in Mupliyam, Thrissur, Kerala —
              breeding ornamental and edible fishes with love and care. The name "Midhula"
              belongs to the owner's sister, his soul; every business and page is run in
              her name.
            </p>
            <p className="mt-4 text-[var(--muted)] leading-relaxed">
              From guppies and platies to koi, goldfish, cichlids and Bloody Mary shrimps,
              we offer healthy, farm-bred stock at affordable prices with professional
              packaging and courier service all over India.
            </p>
            <div className="mt-9 grid sm:grid-cols-2 gap-4">
              {[
                { icon: <FaFish />, title: 'Farm-bred stock', desc: 'Healthy fish raised on the farm.' },
                { icon: <FaShippingFast />, title: 'Pan-India courier', desc: 'Safe delivery to your doorstep.' },
                { icon: <FaHeart />, title: 'Expert care', desc: 'Treatment & care guidance.' },
                { icon: <FaStar />, title: '4.7★ rated', desc: 'Trusted by 100+ customers.' },
              ].map((f, i) => (
                <div key={i} className="flex gap-3 items-start p-4 rounded-xl glass">
                  <div className="text-[var(--teal)] text-xl mt-1">{f.icon}</div>
                  <div>
                    <div className="font-semibold text-[var(--ink)]">{f.title}</div>
                    <div className="text-sm text-[var(--muted)]">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {gallery.slice(0,4).map((g, i) => (
              <div key={i} className="img-frame rounded-2xl overflow-hidden ring-1 ring-[var(--line)]">
                <img src={g} alt="Midhula Farm Hut" className="w-full h-48 object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-28 bg-[var(--bg-2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[var(--ink)] leading-tight">
              Our fishes &amp; species
            </h2>
            <p className="mt-4 text-[var(--muted)] text-lg">A wide variety of ornamental and edible fishes, bred and raised on the farm.</p>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {products.map((p, i) => (
              <div key={i} className="card-hover glass rounded-2xl overflow-hidden flex flex-col">
                <div className="img-frame">
                  <img src={p.img} alt={p.name} className="w-full h-60 object-cover" loading="lazy" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-2xl font-bold text-[var(--ink)]">{p.name}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)] flex-1 leading-relaxed">{p.desc}</p>
                  <a href={WA} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--teal)] hover:text-[var(--coral)] transition">
                    Enquire on WhatsApp <FaArrowRight className="text-xs" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[var(--ink)]">What we offer</h2>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="card-hover glass rounded-2xl p-7">
                <div className="w-12 h-12 rounded-xl bg-[var(--teal)]/15 text-[var(--teal)] flex items-center justify-center text-xl mb-5">
                  <FaFish />
                </div>
                <h3 className="font-display text-xl font-bold text-[var(--ink)]">{s.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram feed */}
      <section id="feed" className="py-28 bg-[var(--bg-2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-[var(--ink)]">Latest from Instagram</h2>
              <p className="mt-2 text-[var(--muted)]">@midhula_farm_hut · 29K followers</p>
            </div>
            <a href={IG} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[var(--teal)] font-bold hover:text-[var(--coral)] transition">
              <FaInstagram /> View profile
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {posts.map((p, i) => (
              <a key={i} href={IG} target="_blank" rel="noreferrer" className="card-hover glass rounded-2xl overflow-hidden block">
                <div className="img-frame">
                  <img src={p.img} alt={p.text} className="w-full h-48 object-cover" loading="lazy" />
                </div>
                <div className="p-4">
                  <div className="text-xs text-[var(--muted)] mb-1.5">{p.date}</div>
                  <p className="text-sm text-[var(--ink)] line-clamp-3 leading-relaxed">{p.text}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[var(--ink)] text-center">From our farm</h2>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((g, i) => (
              <div key={i} className="img-frame rounded-2xl overflow-hidden ring-1 ring-[var(--line)]">
                <img src={g} alt="Midhula Farm Hut" className="w-full h-52 sm:h-72 object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-[var(--bg-2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[var(--ink)] text-center">What customers say</h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="glass rounded-2xl p-6">
                <div className="text-[var(--gold)] text-lg flex gap-0.5">{Array.from({length:r.stars}).map((_,j)=><FaStar key={j}/>)}</div>
                <p className="mt-3 text-sm text-[var(--muted)] italic leading-relaxed">"{r.text}"</p>
                <div className="mt-4 text-xs font-semibold text-slate-500">— {r.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[var(--ink)] leading-tight">Get in touch</h2>
            <p className="mt-5 text-[var(--muted)] text-lg">DM on Instagram or WhatsApp for orders, pricing and availability.</p>
            <div className="mt-9 space-y-4">
              <a href={PHONE} className="flex items-center gap-3 text-[var(--muted)] hover:text-[var(--teal)] transition">
                <FaPhone className="text-[var(--teal)]" /> +91 81291 20437
              </a>
              <a href={WA} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[var(--muted)] hover:text-[var(--teal)] transition">
                <FaWhatsapp className="text-[var(--teal)]" /> WhatsApp orders
              </a>
              <a href={IG} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[var(--muted)] hover:text-[var(--teal)] transition">
                <FaInstagram className="text-[var(--coral)]" /> @midhula_farm_hut
              </a>
              <div className="flex items-start gap-3 text-[var(--muted)]">
                <FaMapMarkerAlt className="text-[var(--teal)] mt-1" />
                <span>Nooluvally, Mupliyam – Chembuchira Rd, Thrissur, Kerala 680684</span>
              </div>
            </div>
            <div className="mt-9 flex gap-4 flex-wrap">
              <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[var(--teal)] hover:bg-[#1fb3a0] text-[#071521] px-7 py-3.5 rounded-full font-bold shadow-xl shadow-teal-500/20 transition">
                <FaWhatsapp /> Order Now
              </a>
              <a href={IG} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-[var(--line)] hover:border-[var(--teal)] text-[var(--ink)] px-7 py-3.5 rounded-full font-semibold transition">
                <FaInstagram /> Instagram
              </a>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-[var(--muted)]">
              <FaCheckCircle className="text-[var(--teal)]" /> Open 24 hours · Courier across India
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-[var(--line)]">
            <iframe
              title="Midhula Farm Hut location"
              src="https://www.google.com/maps?q=10.397425,76.346126&z=15&output=embed"
              className="w-full h-96 border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--line)] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
          <div className="flex items-center gap-3">
            <img src={LOGO} alt="" className="w-7 h-7 rounded-full object-cover" />
            <span>© {new Date().getFullYear()} Midhula Farm Hut · Thrissur, Kerala</span>
          </div>
          <div className="flex gap-5">
            <a href={IG} target="_blank" rel="noreferrer" className="hover:text-[var(--teal)] transition">Instagram</a>
            <a href={WA} target="_blank" rel="noreferrer" className="hover:text-[var(--teal)] transition">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
