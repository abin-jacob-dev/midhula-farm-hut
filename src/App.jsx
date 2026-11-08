import { useState } from 'react'
import { FaInstagram, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaFish, FaShippingFast, FaHeart, FaStar } from 'react-icons/fa'

const IG = 'https://www.instagram.com/midhula_farm_hut/'
const WA = 'https://wa.me/918129120437'
const PHONE = 'tel:+918129120437'

const heroImg = 'https://scontent.cdninstagram.com/v/t51.71878-15/503142096_1151682853393327_8849898369671011473_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=109&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=j-0GY5Emc9cQ7kNvwFnTCCD&_nc_oc=Adq_V29YTzRu6L9VFNcxnMyiGptXr9PoMJHetPqzXveINGIOSGyyl75Gd-F5_XiK8OI&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_ss=7f689&oh=00_AQRU-DBC3hD93RajD9K5rlyvjKSRg3_plOyMyVRi1DR6Eg&oe=6AF62D06'

const products = [
  { name: 'Guppy', desc: 'Vibrant hybrid guppies in many strains — healthy, courier-ready.', img: 'https://scontent.cdninstagram.com/v/t51.71878-15/877178014_18099103166385303_1583203290878817068_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=100&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=H3C0ZBeSa3MQ7kNvwHZxYbF&_nc_oc=AdppjfH7CzcrI7AeUO9AMeWMLPJv8m3bKcHNT5xx_X95qoQgAKL5TnvELeCu6QXNxsw&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_ss=7f689&oh=00_AQTCrNgFtg04rZvMdBwbaqTDBG3ySrXZQQyf0WM6LWGRmQ&oe=6AF61EE2' },
  { name: 'Platy', desc: 'Colourful platies — great for beginners and community tanks.', img: 'https://scontent.cdninstagram.com/v/t51.71878-15/892790171_28626980043651823_3503468925821318698_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=100&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=43kuzj_bCx4Q7kNvwF10wI1&_nc_oc=AdpnEsedJ4Y5P6cZ5fALQ4BD8LgApKzzjcG8dac_mo65Q4nsiZqTH0qRqNfFhuFZp98&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_ss=7f689&oh=00_AQSewFUjy3xwbzYDiX4ULjQn6lDMnOdC3ED0TyFIbD8HlQ&oe=6AF625EC' },
  { name: 'Rainbow Cichlid', desc: 'Stunning rainbow cichlids with vivid colour and personality.', img: 'https://scontent.cdninstagram.com/v/t51.71878-15/877178014_18099103166385303_1583203290878817068_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=100&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=H3C0ZBeSa3MQ7kNvwHZxYbF&_nc_oc=AdppjfH7CzcrI7AeUO9AMeWMLPJv8m3bKcHNT5xx_X95qoQgAKL5TnvELeCu6QXNxsw&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_ss=7f689&oh=00_AQTCrNgFtg04rZvMdBwbaqTDBG3ySrXZQQyf0WM6LWGRmQ&oe=6AF61EE2' },
  { name: 'Bloody Mary Shrimp', desc: 'Deep red Bloody Mary shrimps — perfect for planted tanks.', img: 'https://scontent.cdninstagram.com/v/t51.71878-15/862725070_1380145590606590_5602285881587944054_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=103&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=r1FoyB75_2sQ7kNvwHDpcfu&_nc_oc=AdpV1ac6msU4l8ph5bZ6CAklhP1zPtdh1UqM4-mf7st1cOjcmkLaRGPOJ7jnXhVQlQo&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_ss=7f689&oh=00_AQTCoHm1LmvPGwpr5Pq8vB8m1A43zUB_8rM0TJyBn-LcrA&oe=6AF62CB0' },
  { name: 'Koi Carp', desc: 'Healthy Koi carp and eggs — farm-bred in Kerala.', img: 'https://scontent.cdninstagram.com/v/t51.71878-15/869208488_1146319177959895_9067909857975739622_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=106&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=0RWbfBPVaMIQ7kNvwF6TSPZ&_nc_oc=AdrvOmPDHaLIkNFl1b8cQbZk4ncIjl3LxVlgSqRq7UISjQoDAN34x64-iyaDGaUgqLQ&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_ss=7f689&oh=00_AQT9voN7rQFvUUvxirKvGZBhrejPqKZjxwcf0MuhDjuF2w&oe=6AF645D6' },
  { name: 'Isopods & More', desc: 'Isopods, crustaceans and live food for your aquarium.', img: 'https://scontent.cdninstagram.com/v/t51.71878-15/869663667_4324316231214131_3111191706357169643_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=iokcuqKqao0Q7kNvwFtd3h8&_nc_oc=AdqoRyCbynK8V8-ebZrUMnXpFeSQfFcdtCMVDIQU--CcpzCfgAcw6hthOA8ob9vTuJM&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_ss=7f689&oh=00_AQTK3DNdw5-eLjDNwnmcrfRSxImkCIQGgYEB3Nti4u-1Vw&oe=6AF61F1D' },
]

const gallery = [
  'https://scontent.cdninstagram.com/v/t51.71878-15/503142096_1151682853393327_8849898369671011473_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=109&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=j-0GY5Emc9cQ7kNvwFnTCCD&_nc_oc=Adq_V29YTzRu6L9VFNcxnMyiGptXr9PoMJHetPqzXveINGIOSGyyl75Gd-F5_XiK8OI&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_ss=7f689&oh=00_AQRU-DBC3hD93RajD9K5rlyvjKSRg3_plOyMyVRi1DR6Eg&oe=6AF62D06',
  'https://scontent.cdninstagram.com/v/t51.71878-15/890048069_2662680467488725_1031078963457516831_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=OzVNrqdumn4Q7kNvwHbE_Nu&_nc_oc=AdoEnePxl20nfTL2KDyjqB8LswkwgYnQha04cbLdgydPGpZ81_vcBhB7Ihx_2LB07Ug&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_ss=7f689&oh=00_AQT1a989mTdv_51pKkgC6N2py_9Ea0jDial65hlpEdX-Zg&oe=6AF62563',
  'https://scontent.cdninstagram.com/v/t51.71878-15/886185412_1753916832363163_3096466393267252510_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=103&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=gZQgGL1dvXcQ7kNvwGh276K&_nc_oc=AdrSwYMa5aTrjBN2bn14ipPtP1S3A1nXEcSXY8e0ltNHxNrrFHnsFvqxjqWxxxMRm-s&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_ss=7f689&oh=00_AQSDB_I7V2-C9JWqZ-s5dX-5C2UWxatHRA4a_PgCUmeqzA&oe=6AF62F59',
  'https://scontent.cdninstagram.com/v/t51.71878-15/869663667_4324316231214131_3111191706357169643_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=iokcuqKqao0Q7kNvwFtd3h8&_nc_oc=AdqoRyCbynK8V8-ebZrUMnXpFeSQfFcdtCMVDIQU--CcpzCfgAcw6hthOA8ob9vTuJM&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_ss=7f689&oh=00_AQTK3DNdw5-eLjDNwnmcrfRSxImkCIQGgYEB3Nti4u-1Vw&oe=6AF61F1D',
  'https://scontent.cdninstagram.com/v/t51.71878-15/862725070_1380145590606590_5602285881587944054_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=103&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=r1FoyB75_2sQ7kNvwHDpcfu&_nc_oc=AdpV1ac6msU4l8ph5bZ6CAklhP1zPtdh1UqM4-mf7st1cOjcmkLaRGPOJ7jnXhVQlQo&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_ss=7f689&oh=00_AQTCoHm1LmvPGwpr5Pq8vB8m1A43zUB_8rM0TJyBn-LcrA&oe=6AF62CB0',
  'https://scontent.cdninstagram.com/v/t51.71878-15/869208488_1146319177959895_9067909857975739622_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=106&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=0RWbfBPVaMIQ7kNvwF6TSPZ&_nc_oc=AdrvOmPDHaLIkNFl1b8cQbZk4ncIjl3LxVlgSqRq7UISjQoDAN34x64-iyaDGaUgqLQ&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_ss=7f689&oh=00_AQT9voN7rQFvUUvxirKvGZBhrejPqKZjxwcf0MuhDjuF2w&oe=6AF645D6',
]

const reviews = [
  { text: 'High quality fishes, safe courier, affordable price.', author: 'Google reviewer', stars: 5 },
  { text: 'Different varieties of guppies are available. Good quality fish. Courier service also available.', author: 'Fish lover', stars: 5 },
  { text: 'Fish and live plants received without damage due to quality packaging. Very happy!', author: 'Customer from Hyderabad', stars: 5 },
  { text: 'Quality and variety of fishes are really awesome. Packing and delivery very professional.', author: 'Verified buyer', stars: 5 },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 glass border-b border-slate-200/60">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-display font-bold text-xl text-sky-900">
            <span className="text-2xl">🐟</span> Midhula Farm Hut
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            <a href="#about" className="hover:text-sky-600">About</a>
            <a href="#products" className="hover:text-sky-600">Products</a>
            <a href="#services" className="hover:text-sky-600">Services</a>
            <a href="#gallery" className="hover:text-sky-600">Gallery</a>
            <a href="#contact" className="hover:text-sky-600">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a href={WA} target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              <FaWhatsapp /> WhatsApp
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-slate-700" aria-label="menu">
              ☰
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 px-4 py-3 flex flex-col gap-3 text-sm">
            <a onClick={() => setMenuOpen(false)} href="#about">About</a>
            <a onClick={() => setMenuOpen(false)} href="#products">Products</a>
            <a onClick={() => setMenuOpen(false)} href="#services">Services</a>
            <a onClick={() => setMenuOpen(false)} href="#gallery">Gallery</a>
            <a onClick={() => setMenuOpen(false)} href="#contact">Contact</a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="hero-gradient text-white pt-28 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-sm font-medium mb-5 backdrop-blur">
              📍 Thrissur, Kerala · Farm-bred fishes
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Find your need and feel the reality
            </h1>
            <p className="mt-5 text-lg text-sky-100 max-w-xl">
              Ornamental and edible fishes at affordable prices. Healthy, farm-bred stock
              with safe courier delivery across India — straight from Mupliyam, Thrissur.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                <FaWhatsapp /> Order on WhatsApp
              </a>
              <a href={IG} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white px-6 py-3 rounded-full font-semibold">
                <FaInstagram /> Instagram
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-sky-100">
              <div><span className="text-2xl font-bold text-white">29K+</span><br/>Followers</div>
              <div><span className="text-2xl font-bold text-white">1.5K+</span><br/>Posts</div>
              <div><span className="text-2xl font-bold text-white">4.7★</span><br/>Rating</div>
            </div>
          </div>
          <div className="relative">
            <div className="float">
              <img src={heroImg} alt="Midhula Farm Hut fish" className="rounded-3xl shadow-2xl w-full max-w-md mx-auto ring-4 ring-white/30" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white text-sky-900 rounded-2xl shadow-xl px-4 py-3 text-sm font-semibold">
              🚚 Safe courier across India
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-sky-900">About Midhula Farm Hut</h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Midhula Farm Hut is a family-run fish farm in Mupliyam, Thrissur, Kerala —
              breeding ornamental and edible fishes with love and care. The name "Midhula"
              belongs to the owner's sister, his soul; every business and page is run in
              her name.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              From guppies and platies to koi, goldfish, cichlids and Bloody Mary shrimps,
              we offer healthy, farm-bred stock at affordable prices with professional
              packaging and courier service all over India.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { icon: <FaFish />, title: 'Farm-bred stock', desc: 'Healthy fish raised on the farm.' },
                { icon: <FaShippingFast />, title: 'Pan-India courier', desc: 'Safe delivery to your doorstep.' },
                { icon: <FaHeart />, title: 'Expert care', desc: 'Treatment & care guidance.' },
                { icon: <FaStar />, title: '4.7★ rated', desc: 'Trusted by 100+ customers.' },
              ].map((f, i) => (
                <div key={i} className="flex gap-3 items-start p-4 rounded-xl bg-white shadow-sm">
                  <div className="text-sky-600 text-xl mt-1">{f.icon}</div>
                  <div>
                    <div className="font-semibold">{f.title}</div>
                    <div className="text-sm text-slate-500">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {gallery.slice(0,4).map((g, i) => (
              <img key={i} src={g} alt="Midhula Farm Hut" className="rounded-2xl shadow-md w-full h-44 object-cover" loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-sky-900">Our Fishes & Species</h2>
            <p className="mt-4 text-slate-600">A wide variety of ornamental and edible fishes, bred and raised on the farm.</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <div key={i} className="card-hover bg-slate-50 rounded-2xl overflow-hidden shadow-sm">
                <img src={p.img} alt={p.name} className="w-full h-56 object-cover" loading="lazy" />
                <div className="p-5">
                  <h3 className="font-bold text-lg text-sky-900">{p.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                  <a href={WA} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm font-semibold text-green-600 hover:text-green-700">
                    Enquire on WhatsApp →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-sky-900 text-center">What We Offer</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { title: 'Ornamental Fishes', desc: 'Guppies, platies, swordtails, cichlids, goldfish and more.' },
              { title: 'Edible Fishes', desc: 'Farm-raised edible fishes at affordable prices.' },
              { title: 'Live Plants & Shrimps', desc: 'Bloody Mary shrimps, isopods, water hyacinth and live foods.' },
              { title: 'Courier Delivery', desc: 'Safe, professional packaging delivered across India.' },
              { title: 'Health & Care', desc: 'Treatment support and care guidance for your stock.' },
              { title: 'Bulk / Wholesale', desc: 'Bulk orders for shops and hobbyists — DM for quotes.' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 card-hover">
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center text-2xl mb-4">🐠</div>
                <h3 className="font-bold text-sky-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-sky-900">From Our Farm</h2>
            <a href={IG} target="_blank" rel="noreferrer" className="text-sky-600 font-semibold hover:text-sky-700">
              View all on Instagram →
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((g, i) => (
              <img key={i} src={g} alt="Midhula Farm Hut" className="rounded-xl w-full h-48 sm:h-64 object-cover shadow-sm" loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-sky-900 text-center">What Customers Say</h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-amber-400 text-lg">{'★'.repeat(r.stars)}</div>
                <p className="mt-3 text-sm text-slate-600 italic">"{r.text}"</p>
                <div className="mt-4 text-xs font-semibold text-slate-500">— {r.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-sky-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">Get in Touch</h2>
            <p className="mt-4 text-sky-100">DM on Instagram or WhatsApp for orders, pricing and availability.</p>
            <div className="mt-8 space-y-4">
              <a href={PHONE} className="flex items-center gap-3 text-sky-100 hover:text-white">
                <FaPhone className="text-sky-300" /> +91 81291 20437
              </a>
              <a href={WA} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sky-100 hover:text-white">
                <FaWhatsapp className="text-green-400" /> WhatsApp orders
              </a>
              <a href={IG} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sky-100 hover:text-white">
                <FaInstagram className="text-pink-300" /> @midhula_farm_hut
              </a>
              <div className="flex items-start gap-3 text-sky-100">
                <FaMapMarkerAlt className="text-sky-300 mt-1" />
                <span>Nooluvally, Mupliyam – Chembuchira Rd, Thrissur, Kerala 680684</span>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold">
                <FaWhatsapp /> Order Now
              </a>
              <a href={IG} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white px-6 py-3 rounded-full font-semibold">
                <FaInstagram /> Instagram
              </a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl ring-2 ring-white/20">
            <iframe
              title="Midhula Farm Hut location"
              src="https://www.google.com/maps?q=10.397425,76.346126&z=15&output=embed"
              className="w-full h-80 border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div>© {new Date().getFullYear()} Midhula Farm Hut · Thrissur, Kerala</div>
          <div className="flex gap-5">
            <a href={IG} target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a>
            <a href={WA} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
