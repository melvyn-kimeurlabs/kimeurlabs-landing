import Head from 'next/head'
import Image from 'next/image'

const researchReports = [
  {
    title: "Holiday Shopping 2024: A season for sparking inspiration",
    image: "/images/holiday-shopping-2024.jpg",
    category: "Research Report"
  },
  {
    title: "Accenture Life Trends 2025",
    image: "/images/life-trends-2025.jpg",
    category: "Research Report"
  },
  {
    title: "Only 16% of companies are on track for net zero. Is yours?",
    image: "/images/net-zero-tracking.jpg",
    category: "Research Report"
  },
  {
    title: "Ready to supercharge productivity for growth and competitiveness?",
    image: "/images/productivity-growth.jpg",
    category: "Research Report"
  },
  {
    title: "The rise of AI-generated deepfakes: Impact on business and society",
    image: "/images/deepfakes-research.jpg",
    category: "Research Report"
  },
  {
    title: "Best Buy: Transforming retail through innovation",
    image: "/images/best-buy-research.jpg",
    category: "Research Report"
  },
  {
    title: "Building technical balance: Managing tech debt for growth",
    image: "/images/tech-balance-debt.jpg",
    category: "Research Report"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Head>
        <title>Accenture-like Website</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="flex flex-col md:flex-row justify-between items-center p-4 bg-black sticky top-0 z-50">
        <div className="text-accenture-purple text-3xl font-bold mb-4 md:mb-0">&gt;</div>
        <nav className="space-y-2 md:space-y-0 md:space-x-6 flex flex-col md:flex-row items-center">
          <a href="#" className="hover:text-accenture-purple">What we do</a>
          <a href="#" className="hover:text-accenture-purple">What we think</a>
          <a href="#" className="hover:text-accenture-purple">Who we are</a>
          <a href="#" className="hover:text-accenture-purple">Careers</a>
        </nav>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span>USA</span>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white">
          TOGETHER WE
          <br />
          REIN<span className="text-accenture-purple">&gt;</span>ENTED
        </h1>
        <p className="max-w-2xl mb-8 text-sm md:text-base text-white">
          The supply chains we need, the special effects that wow, the
          stadiums we fill, the food we eat, the clothes we wear, the cars
          we drive, the homes where we live, the holidays we take, the
          trees we grow—together, we can reinvent anything.
        </p>
        <button className="bg-accenture-purple text-white px-6 py-2 rounded hover:bg-purple-700 transition duration-300">
          See what we do
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {researchReports.map((item, index) => (
            <div key={index} className="relative group cursor-pointer">
              <div className="aspect-[600/848] relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={index === 0}
                />
                <div className="absolute top-0 left-0 p-4">
                  <span className="text-xs uppercase bg-white text-black px-2 py-1 font-medium">
                    {item.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
