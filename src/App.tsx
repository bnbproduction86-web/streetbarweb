import React, { useState } from 'react';
import {
  Coffee,
  Bike,
  Sparkles,
  Leaf,
  ShieldCheck,
  Star,
  MapPin,
  Clock,
  Phone,
  MessageSquare,
  ArrowRight,
  ChevronRight,
  Download,
  Calendar,
  Users,
  CheckCircle2,
  Award,
  Zap,
  BatteryCharging,
  Sliders,
  Crown,
  Heart
} from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'coffee' | 'non-coffee' | 'pastry'>('all');
  const [eventCups, setEventCups] = useState(150);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Menu items data
  const menuList = [
    {
      id: 1,
      name: 'StreetBar Signature Gold Latte',
      category: 'coffee',
      price: 15000,
      badge: '👑 Signature Gold',
      desc: 'Double shot 100% Arabika Flores, susu segar lembut dengan busa krim beludru dingin, gula aren organik & taburan edible gold dust.',
      image: '/images/gold_latte.jpg'
    },
    {
      id: 2,
      name: 'StreetBar Velvet Aren Espresso',
      category: 'coffee',
      price: 12000,
      badge: '★ Best Seller',
      desc: 'Espresso arabika pilihan dipadukan sirup aren karamel murni dan susu creamy dengan aksen daun mint segar.',
      image: '/images/kopi_susu.jpg'
    },
    {
      id: 3,
      name: 'Citrus Gold Cold Brew',
      category: 'coffee',
      price: 14000,
      badge: 'Craft Brew',
      desc: 'Cold brew murni diekstrak perlahan 16 jam dengan sari jeruk valencia segar. Sangat clean aftertaste.',
      image: '/images/gold_latte.jpg'
    },
    {
      id: 4,
      name: 'Oatside Royal Street Latte',
      category: 'coffee',
      price: 18000,
      badge: 'Plant-Based',
      desc: 'Espresso arabika spesial dipadu susu gandum Oatside Barista Blend yang kaya rasa, gurih dan 100% bebas laktosa.',
      image: '/images/kopi_susu.jpg'
    },
    {
      id: 5,
      name: 'Royal Belgian Dark Chocolate',
      category: 'non-coffee',
      price: 14000,
      badge: 'Chocolatier Pick',
      desc: 'Cokelat hitam pekat mewah dari 100% Belgian Dark Chocolate leleh disatukan dengan susu segar hangat atau dingin.',
      image: '/images/non_coffee.jpg'
    },
    {
      id: 6,
      name: 'Kyoto Gold Matcha Latte',
      category: 'non-coffee',
      price: 15000,
      badge: 'Ceremonial Uji',
      desc: 'Teh hijau matcha ceremonial grade asli dari Uji Kyoto Jepang, di-whisk tradisional dengan susu segar.',
      image: '/images/non_coffee.jpg'
    },
    {
      id: 7,
      name: 'French Golden Butter Croissant',
      category: 'pastry',
      price: 16000,
      badge: 'Fresh Baked',
      desc: 'Pastry renyah berlapis emas butter Prancis murni. Dipanaskan langsung di oven elektrik gerobak StreetBar.',
      image: '/images/pastry.jpg'
    },
    {
      id: 8,
      name: 'Artisan Glazed Cinnamon Roll',
      category: 'pastry',
      price: 15000,
      badge: 'Sweet Bakery',
      desc: 'Roti gulung kayu manis harum dengan lelehan icing gula vanila hangat yang meleleh di mulut.',
      image: '/images/pastry.jpg'
    }
  ];

  const filteredMenu = activeCategory === 'all' ? menuList : menuList.filter(m => m.category === activeCategory);

  // Catering price calculation
  const getCateringUnitPrice = (cups: number) => {
    if (cups >= 200) return 14000;
    if (cups >= 100) return 15500;
    return 17000;
  };
  const cateringUnitPrice = getCateringUnitPrice(eventCups);
  const cateringTotal = eventCups * cateringUnitPrice;

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Halo StreetBar Concierge, saya ingin memesan paket Private Catering sebanyak ${eventCups} cup untuk acara saya. Mohon informasi ketersediaan jadwal.`
    );
    window.open(`https://wa.me/6281299001101?text=${text}`, '_blank');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAF9F6', color: '#1C1917' }}>
      {/* ── Top Announcement Bar ── */}
      <div
        style={{
          background: 'linear-gradient(90deg, #1C1917 0%, #2A2421 50%, #1C1917 100%)',
          color: '#FAF7F0',
          fontSize: '12px',
          padding: '8px 20px',
          textAlign: 'center',
          borderBottom: '1px solid #3E3835',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '12px'
        }}
      >
        <span style={{ background: '#D4AF37', color: '#1C1917', fontWeight: 800, padding: '2px 8px', borderRadius: '4px', fontSize: '10px' }}>
          BEBAS ONGKIR
        </span>
        <span>Armada Gerobak Baterai Listrik Siap Melayani Area SCBD, Sudirman & Thamrin</span>
        <a
          href="http://localhost:5173"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#E6C665', fontWeight: 700, textDecoration: 'underline' }}
        >
          Buka Web App Pelanggan ❯
        </a>
      </div>

      {/* ── Main Navigation Bar ── */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: 'rgba(255, 255, 255, 0.94)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #EFECE6',
          boxShadow: '0 2px 14px rgba(0,0,0,0.03)'
        }}
      >
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #E6C665, #D4AF37)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                boxShadow: '0 4px 14px rgba(212, 175, 55, 0.35)',
                fontSize: '22px'
              }}
            >
              👑
            </div>
            <div>
              <div style={{ fontSize: '20px', fontWeight: 900, color: '#1C1917', letterSpacing: '-0.5px' }}>
                StreetBar
              </div>
              <div style={{ fontSize: '10px', fontWeight: 800, color: '#B38F2A', letterSpacing: '0.8px', textTransform: 'uppercase' }}>
                Mobilitas Indonesia
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            <a href="#about" style={{ fontSize: '13px', fontWeight: 700, color: '#57524C', textDecoration: 'none' }}>
              Tentang Kami
            </a>
            <a href="#menu" style={{ fontSize: '13px', fontWeight: 700, color: '#57524C', textDecoration: 'none' }}>
              Menu Artisanal
            </a>
            <a href="#fleet" style={{ fontSize: '13px', fontWeight: 700, color: '#57524C', textDecoration: 'none' }}>
              Armada Gerobak Listrik
            </a>
            <a href="#catering" style={{ fontSize: '13px', fontWeight: 700, color: '#57524C', textDecoration: 'none' }}>
              Private Event
            </a>
            <a href="#franchise" style={{ fontSize: '13px', fontWeight: 700, color: '#57524C', textDecoration: 'none' }}>
              Kemitraan
            </a>
          </nav>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href="http://localhost:5175"
              target="_blank"
              rel="noreferrer"
              style={{
                background: '#FAF9F6',
                border: '1px solid #E8DCC4',
                color: '#B38F2A',
                padding: '9px 16px',
                borderRadius: '10px',
                fontSize: '12px',
                fontWeight: 800,
                textDecoration: 'none'
              }}
            >
              Portal Admin
            </a>
            <a
              href="http://localhost:5173"
              target="_blank"
              rel="noreferrer"
              style={{
                background: 'linear-gradient(135deg, #E6C665 0%, #D4AF37 100%)',
                color: '#FFFFFF',
                padding: '10px 20px',
                borderRadius: '10px',
                fontSize: '12px',
                fontWeight: 800,
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(212, 175, 55, 0.35)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Coffee size={15} /> Pesan Kopi (App)
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero Section ── */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '80px 24px 100px' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '50px', alignItems: 'center' }}>
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#FBF8F1',
                border: '1px solid #E8DCC4',
                padding: '6px 14px',
                borderRadius: '999px',
                fontSize: '12px',
                fontWeight: 800,
                color: '#B38F2A',
                marginBottom: '20px'
              }}
            >
              <Sparkles size={14} /> LUXURY STREET COFFEE ON WHEELS
            </div>

            <h1
              style={{
                fontSize: '48px',
                fontWeight: 900,
                lineHeight: 1.15,
                color: '#1C1917',
                marginBottom: '20px',
                letterSpacing: '-1px'
              }}
            >
              Kopi Kafe Kelas Atas Disajikan dari Gerobak Baterai Listrik.
            </h1>

            <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#57524C', marginBottom: '32px' }}>
              <strong>StreetBar</strong> menghadirkan standar baru menikmati kopi artisanal 100% single origin Arabika Flores Bajawa NTT. Diseduh langsung oleh barista terlatih menggunakan armada gerobak baterai listrik nol emisi langsung ke depan gedung, kantor, atau kediaman Anda — <strong>100% Bebas Biaya Antar</strong>.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <a
                href="http://localhost:5173"
                target="_blank"
                rel="noreferrer"
                style={{
                  background: 'linear-gradient(135deg, #E6C665 0%, #D4AF37 100%)',
                  color: '#FFFFFF',
                  padding: '14px 28px',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: 800,
                  textDecoration: 'none',
                  boxShadow: '0 6px 20px rgba(212, 175, 55, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                Panggil Gerobak ke Lokasi ❯
              </a>
              <a
                href="#catering"
                style={{
                  background: '#FFFFFF',
                  border: '1.5px solid #E8DCC4',
                  color: '#1C1917',
                  padding: '14px 28px',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: 800,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                Sewa untuk Event / Kantor
              </a>
            </div>

            {/* Trust Badges */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', borderTop: '1px solid #EFECE6', paddingTop: '24px' }}>
              <div>
                <div style={{ fontSize: '20px', fontWeight: 900, color: '#B38F2A' }}>100%</div>
                <div style={{ fontSize: '11px', color: '#7D756D', fontWeight: 600 }}>Nol Emisi BBM (Baterai)</div>
              </div>
              <div>
                <div style={{ fontSize: '20px', fontWeight: 900, color: '#B38F2A' }}>Rp 0</div>
                <div style={{ fontSize: '11px', color: '#7D756D', fontWeight: 600 }}>Biaya Pengantaran</div>
              </div>
              <div>
                <div style={{ fontSize: '20px', fontWeight: 900, color: '#B38F2A' }}>★ 4.98</div>
                <div style={{ fontSize: '11px', color: '#7D756D', fontWeight: 600 }}>Rating 10,000+ Penikmat</div>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: '28px',
                overflow: 'hidden',
                border: '2px solid #E8DCC4',
                boxShadow: '0 24px 60px rgba(212, 175, 55, 0.25)',
                position: 'relative',
                background: '#FFFFFF'
              }}
            >
              <img
                src="/images/cart.jpg"
                alt="Gerobak Baterai Listrik StreetBar"
                style={{ width: '100%', height: '480px', objectFit: 'cover' }}
              />

              <div
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  right: '20px',
                  background: 'rgba(255, 255, 255, 0.94)',
                  backdropFilter: 'blur(10px)',
                  padding: '18px 22px',
                  borderRadius: '18px',
                  border: '1px solid #E8DCC4',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div style={{ fontSize: '11px', color: '#B38F2A', fontWeight: 800 }}>ARMADA AKTIF SEKARANG</div>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: '#1C1917' }}>4 Gerobak Listrik Siap Meluncur</div>
                  <div style={{ fontSize: '11px', color: '#7D756D' }}>Menara Astra • BEI SCBD • Grand Indonesia • Senayan</div>
                </div>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: '#10B981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF'
                  }}
                >
                  <Bike size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 Pillars Keunggulan StreetBar ── */}
      <section id="about" style={{ padding: '80px 24px', backgroundColor: '#FFFFFF', borderTop: '1px solid #EFECE6', borderBottom: '1px solid #EFECE6' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 50px' }}>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#B38F2A', letterSpacing: '1px' }}>
              STANDAR KUALITAS STREETBAR
            </span>
            <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#1C1917', margin: '8px 0 12px' }}>
              Mengapa StreetBar Menjadi Pilihan Utama Jakarta?
            </h2>
            <p style={{ fontSize: '14px', color: '#7D756D', lineHeight: 1.6 }}>
              Inovasi mobilitas perkotaan modern yang memadukan komitmen keberlanjutan lingkungan dengan cita rasa kopi artisanal premium.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {[
              {
                icon: Leaf,
                title: '100% Nol Emisi BBM',
                desc: 'Armada gerobak didukung penuh baterai lithium elektrik, tanpa asap knalpot dan tanpa suara bising mesin.'
              },
              {
                icon: Coffee,
                title: 'Arabika Flores Bajawa',
                desc: 'Biji kopi single origin dipetik tangan dari perkebunan dataran tinggi Bajawa NTT dengan sertifikasi mutu specialty.'
              },
              {
                icon: Crown,
                title: 'Estetika White & Gold',
                desc: 'Desain gerobak modern putih dan emas mewah yang elegan, bersih, higienis, dan Instagramable di lokasi komersial.'
              },
              {
                icon: MapPin,
                title: 'Bebas Biaya Pengantaran',
                desc: 'Panggil barista kami langsung ke lobi kantor atau depan hunian Anda tanpa tambahan biaya ongkir sepeserpun.'
              }
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FAF9F6',
                    borderRadius: '20px',
                    padding: '28px 24px',
                    border: '1px solid #EFECE6',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px'
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: '#FBF8F1',
                      border: '1px solid #E8DCC4',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#B38F2A'
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#1C1917', margin: 0 }}>
                    {pillar.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#7D756D', lineHeight: 1.6, margin: 0 }}>
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Signature Menu Showcase ── */}
      <section id="menu" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '36px' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#B38F2A', letterSpacing: '1px' }}>
                KATALOG MENU ARTISANAL
              </span>
              <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#1C1917', margin: '6px 0 0' }}>
                Kelezatan Kopi & Pastry StreetBar
              </h2>
            </div>

            {/* Category tabs */}
            <div style={{ display: 'flex', gap: '8px', background: '#FFFFFF', padding: '4px', borderRadius: '12px', border: '1px solid #EFECE6' }}>
              {[
                { id: 'all', label: 'Semua Menu' },
                { id: 'coffee', label: '☕ Kopi Signature' },
                { id: 'non-coffee', label: '🍫 Non-Kopi' },
                { id: 'pastry', label: '🥐 Pastry' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: 'none',
                    background: activeCategory === cat.id ? 'linear-gradient(135deg, #E6C665, #D4AF37)' : 'none',
                    color: activeCategory === cat.id ? '#FFFFFF' : '#57524C',
                    fontWeight: 800,
                    fontSize: '12px',
                    cursor: 'pointer'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {filteredMenu.map(item => (
              <div
                key={item.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1px solid #EFECE6',
                  overflow: 'hidden',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ position: 'relative', height: '170px' }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e: any) => { e.target.src = '/images/gold_latte.jpg'; }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        background: 'linear-gradient(135deg, #E6C665, #D4AF37)',
                        color: '#FFFFFF',
                        fontSize: '10px',
                        fontWeight: 800,
                        padding: '3px 8px',
                        borderRadius: '6px'
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <div style={{ padding: '18px' }}>
                    <h4 style={{ margin: '0 0 6px', fontSize: '15px', fontWeight: 800, color: '#1C1917' }}>
                      {item.name}
                    </h4>
                    <p style={{ margin: 0, fontSize: '12px', color: '#7D756D', lineHeight: 1.5 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    padding: '14px 18px',
                    borderTop: '1px solid #F5F3EE',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: '#FAF9F6'
                  }}
                >
                  <div>
                    <span style={{ fontSize: '10px', color: '#8C847A' }}>Mulai dari</span>
                    <div style={{ fontSize: '15px', fontWeight: 900, color: '#B38F2A' }}>
                      Rp {item.price.toLocaleString('id-ID')}
                    </div>
                  </div>

                  <a
                    href="http://localhost:5173"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      background: '#1C1917',
                      color: '#D4AF37',
                      padding: '7px 14px',
                      borderRadius: '8px',
                      fontSize: '11px',
                      fontWeight: 800,
                      textDecoration: 'none'
                    }}
                  >
                    Pesan ❯
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── StreetBar EV Fleet Innovation ── */}
      <section id="fleet" style={{ padding: '80px 24px', backgroundColor: '#FFFFFF', borderTop: '1px solid #EFECE6', borderBottom: '1px solid #EFECE6' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#B38F2A', letterSpacing: '1px' }}>
              TEKNOLOGI GEROBAK LISTRIK
            </span>
            <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#1C1917', margin: '8px 0 16px' }}>
              StreetBar Electric Mobile Bar (EV)
            </h2>
            <p style={{ fontSize: '14px', color: '#57524C', lineHeight: 1.6, marginBottom: '24px' }}>
              Setiap gerobak StreetBar merupakan unit kafe mini mandiri yang beroperasi 100% menggunakan tenaga baterai lithium elektrik. Dilengkapi mesin espresso dual boiler, oven mini, filter air berstandar SCA, dan POS satelit real-time.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { title: 'Baterai Lithium 48V / 60Ah', desc: 'Daya jelajah 60 KM per-charge dengan sistem regenerative braking tanpa emisi karbon.' },
                { title: 'Commercial Espresso Machine Onboard', desc: 'Suhu stabil 93°C dan tekanan ekstraksi 9 bar menghasilkan crema emas sempurna.' },
                { title: 'Oven Elektrik Terintegrasi', desc: 'Menghangatkan croissant dan pastry langsung sesaat sebelum diserahkan kepada Anda.' },
                { title: 'Sistem GPS Satelit & Pembayaran Instan', desc: 'Terhubung live ke aplikasi Anda untuk pelacakan rute dan pembayaran QRIS instan.' }
              ].map((spec, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#FBF8F1', border: '1px solid #E8DCC4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B38F2A', flexShrink: 0, marginTop: '2px' }}>
                    <CheckCircle2 size={15} />
                  </div>
                  <div>
                    <strong style={{ fontSize: '14px', color: '#1C1917' }}>{spec.title}</strong>
                    <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#7D756D', lineHeight: 1.5 }}>
                      {spec.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: '#1C1917',
              borderRadius: '28px',
              padding: '36px',
              color: '#FFFFFF',
              boxShadow: '0 20px 50px rgba(0,0,0,0.15)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Zap size={24} color="#D4AF37" />
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 800 }}>Spesifikasi Teknis Unit</h3>
              </div>
              <span style={{ fontSize: '11px', color: '#D4AF37', background: 'rgba(212, 175, 55, 0.2)', padding: '3px 8px', borderRadius: '6px' }}>
                MODEL: STREETBAR-EV 2026
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', fontSize: '13px' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ color: '#D4AF37', fontSize: '11px', fontWeight: 700 }}>KAPASITAS SAJI</div>
                <div style={{ fontSize: '20px', fontWeight: 800, marginTop: '4px' }}>120 Cup / Trip</div>
                <div style={{ color: '#A8A29E', fontSize: '11px' }}>Dapat restock di hub terdekat</div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ color: '#D4AF37', fontSize: '11px', fontWeight: 700 }}>WAKTU SEDUH</div>
                <div style={{ fontSize: '20px', fontWeight: 800, marginTop: '4px' }}>90 Detik / Cup</div>
                <div style={{ color: '#A8A29E', fontSize: '11px' }}>Cepat tanpa antrean panjang</div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ color: '#D4AF37', fontSize: '11px', fontWeight: 700 }}>TINGKAT KEBISINGAN</div>
                <div style={{ fontSize: '20px', fontWeight: 800, marginTop: '4px' }}>&lt; 35 dB (Senyap)</div>
                <div style={{ color: '#A8A29E', fontSize: '11px' }}>Sangat ramah lingkungan kerja</div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ color: '#D4AF37', fontSize: '11px', fontWeight: 700 }}>RADIUS OPERASIONAL</div>
                <div style={{ fontSize: '20px', fontWeight: 800, marginTop: '4px' }}>3.5 KM / Unit</div>
                <div style={{ color: '#A8A29E', fontSize: '11px' }}>Jangkau segitiga emas Jakarta</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Private Event & Catering Calculator ── */}
      <section id="catering" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto', background: '#FFFFFF', borderRadius: '32px', padding: '48px', border: '1.5px solid #E8DCC4', boxShadow: '0 20px 60px rgba(212, 175, 55, 0.12)' }}>
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 36px' }}>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#B38F2A', letterSpacing: '1px' }}>
              PRIVATE EVENT & CATERING
            </span>
            <h2 style={{ fontSize: '30px', fontWeight: 900, color: '#1C1917', margin: '6px 0 10px' }}>
              Hadirkan Gerobak Mewah StreetBar di Acara Anda
            </h2>
            <p style={{ fontSize: '14px', color: '#7D756D', lineHeight: 1.6 }}>
              Pernikahan, pameran corporate, peluncuran produk, hingga intimate gathering di kantor atau rumah Anda.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px', alignItems: 'center' }}>
            {/* Interactive Calculator */}
            <div>
              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 800, color: '#1C1917' }}>
                    Perkiraan Jumlah Tamu / Cup Kopi:
                  </label>
                  <span style={{ fontSize: '20px', fontWeight: 900, color: '#B38F2A' }}>
                    {eventCups} Cup
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="500"
                  step="10"
                  value={eventCups}
                  onChange={e => setEventCups(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#D4AF37', cursor: 'pointer', height: '8px' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#8C847A', marginTop: '6px' }}>
                  <span>50 Cup (Min.)</span>
                  <span>250 Cup</span>
                  <span>500+ Cup</span>
                </div>
              </div>

              {/* Package Inclusion List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#57524C' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="#B38F2A" />
                  <span>1 Unit Gerobak Baterai Listrik Mewah Putih & Emas</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="#B38F2A" />
                  <span>2 Orang Barista Profesional Bersertifikasi StreetBar</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="#B38F2A" />
                  <span>Bebas Pilih Menu (Gold Latte, Aren Espresso, Matcha, Choco)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="#B38F2A" />
                  <span>Custom Sleeve Cup dengan Logo Perusahaan / Acara Anda</span>
                </div>
              </div>
            </div>

            {/* Total Card */}
            <div
              style={{
                background: 'linear-gradient(135deg, #1C1917 0%, #2A2421 100%)',
                color: '#FFFFFF',
                borderRadius: '24px',
                padding: '32px',
                textAlign: 'center',
                boxShadow: '0 12px 30px rgba(0,0,0,0.2)'
              }}
            >
              <div style={{ fontSize: '12px', color: '#D4AF37', fontWeight: 800 }}>ESTIMASI BIAYA EVENT</div>
              <div style={{ fontSize: '34px', fontWeight: 900, color: '#FAF7F0', margin: '8px 0 4px' }}>
                Rp {cateringTotal.toLocaleString('id-ID')}
              </div>
              <div style={{ fontSize: '12px', color: '#A8A29E', marginBottom: '20px' }}>
                Hanya Rp {cateringUnitPrice.toLocaleString('id-ID')} / Cup (Termasuk gerobak & barista)
              </div>

              <button
                onClick={handleWhatsAppBooking}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '12px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #E6C665 0%, #D4AF37 100%)',
                  color: '#FFFFFF',
                  fontSize: '13px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 14px rgba(212, 175, 55, 0.4)'
                }}
              >
                <MessageSquare size={16} /> Konsultasi Tanggal via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Franchise & Commercial Property Partnership ── */}
      <section id="franchise" style={{ padding: '80px 24px', backgroundColor: '#FFFFFF', borderTop: '1px solid #EFECE6' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontSize: '11px', fontWeight: 800, color: '#B38F2A', letterSpacing: '1px' }}>
            KOLABORASI & KEMITRAAN BISNIS
          </span>
          <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#1C1917', margin: '6px 0 12px' }}>
            Tempatkan Gerobak StreetBar di Properti Anda
          </h2>
          <p style={{ fontSize: '14px', color: '#7D756D', maxWidth: '640px', margin: '0 auto 40px', lineHeight: 1.6 }}>
            Bekerja sama dengan pemilik gedung perkantoran, pusat perbelanjaan, dan pengembang properti komersial untuk menghadirkan fasilitas kafe artisanal berkelas bagi tenant & pengunjung.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', textAlign: 'left' }}>
            <div style={{ padding: '24px', borderRadius: '18px', background: '#FAF9F6', border: '1px solid #EFECE6' }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>🏢</div>
              <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#1C1917', marginBottom: '6px' }}>Lobi Gedung Kantor</h4>
              <p style={{ fontSize: '12px', color: '#7D756D', lineHeight: 1.5 }}>
                Tingkatkan kepuasan tenant kantor dengan kopi specialty tanpa perlu instalasi pipa air atau renovasi sipil yang rumit.
              </p>
            </div>
            <div style={{ padding: '24px', borderRadius: '18px', background: '#FAF9F6', border: '1px solid #EFECE6' }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>🛍️</div>
              <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#1C1917', marginBottom: '6px' }}>Pusat Perbelanjaan & Mall</h4>
              <p style={{ fontSize: '12px', color: '#7D756D', lineHeight: 1.5 }}>
                Optimalisasi area atrium dan koridor dengan konsep gerobak listrik mobile yang fleksibel dan estetis.
              </p>
            </div>
            <div style={{ padding: '24px', borderRadius: '18px', background: '#FAF9F6', border: '1px solid #EFECE6' }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>🤝</div>
              <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#1C1917', marginBottom: '6px' }}>Kemitraan Investor Unit</h4>
              <p style={{ fontSize: '12px', color: '#7D756D', lineHeight: 1.5 }}>
                Miliki unit armada gerobak baterai listrik StreetBar dengan skema autopilot dikelola sepenuhnya oleh tim profesional kami.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: '#1C1917', color: '#FFFFFF', padding: '60px 24px 30px' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '40px', marginBottom: '40px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, #E6C665, #D4AF37)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>
                👑
              </div>
              <span style={{ fontSize: '18px', fontWeight: 900, color: '#FFFFFF' }}>StreetBar</span>
            </div>
            <p style={{ fontSize: '12px', color: '#A8A29E', lineHeight: 1.6, maxWidth: '280px' }}>
              <strong>PT. StreetBar Mobilitas Indonesia</strong><br />
              Pelopor Luxury Mobile Coffee Bar bertenaga baterai listrik ramah lingkungan di Indonesia.
            </p>
          </div>

          <div>
            <h5 style={{ fontSize: '13px', fontWeight: 800, color: '#D4AF37', marginBottom: '14px' }}>LAYANAN KAMI</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', color: '#A8A29E' }}>
              <a href="#menu" style={{ color: 'inherit', textDecoration: 'none' }}>Katalog Menu Kopi</a>
              <a href="#fleet" style={{ color: 'inherit', textDecoration: 'none' }}>Gerobak Listrik EV</a>
              <a href="#catering" style={{ color: 'inherit', textDecoration: 'none' }}>Private Event Catering</a>
              <a href="#franchise" style={{ color: 'inherit', textDecoration: 'none' }}>Kemitraan Properti</a>
            </div>
          </div>

          <div>
            <h5 style={{ fontSize: '13px', fontWeight: 800, color: '#D4AF37', marginBottom: '14px' }}>PORTAL SISTEM</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', color: '#A8A29E' }}>
              <a href="http://localhost:5173" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Customer Mobile App</a>
              <a href="http://localhost:5174" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Bartender KDS Display</a>
              <a href="http://localhost:5175" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Admin Executive Portal</a>
            </div>
          </div>

          <div>
            <h5 style={{ fontSize: '13px', fontWeight: 800, color: '#D4AF37', marginBottom: '14px' }}>KONTAK KAMI</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', color: '#A8A29E' }}>
              <span>Lobby Menara Astra, Jl. Sudirman</span>
              <span>WhatsApp: 0812-9900-1101</span>
              <span>Email: concierge@streetbar.id</span>
              <span>Jakarta, Indonesia</span>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: '1240px', margin: '0 auto', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#7D756D' }}>
          <span>© 2026 PT. StreetBar Mobilitas Indonesia. All rights reserved.</span>
          <span>Designed with Luxury White & Gold Aesthetic</span>
        </div>
      </footer>
    </div>
  );
}

