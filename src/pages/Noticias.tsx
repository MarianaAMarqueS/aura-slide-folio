import { Link } from "react-router-dom";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";

const newsItems = [
  {
    id: "empresa-gazela-2021",
    title: "Empresa Gazela",
    category: "Prémios",
    date: "15.10.2025",
    description: "91 Empresas \"Gazela\" da região Centro",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "empresa-gazela-500",
    title: "500 Maiores Empresas",
    category: "Rankings",
    date: "15.10.2025",
    description: "Ranking das maiores empresas da Bairrada",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "expansao-internacional",
    title: "Expansão Internacional",
    category: "Negócios",
    date: "10.09.2025",
    description: "Novos mercados na Europa e América",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "certificacao-qualidade",
    title: "Certificação de Qualidade",
    category: "Qualidade",
    date: "05.08.2025",
    description: "ISO 9001 e certificações internacionais",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  },
];

const Noticias = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">
            Notícias
            <div className="h-1 w-32 bg-[#F7B200] mt-2"></div>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {newsItems.map((news) => (
              <Link
                key={news.id}
                to={`/news/${news.id}`}
                className="news-card"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="news-info-section p-6">
                  <div className="news-category bg-[#F7B200] text-black px-3 py-1 rounded-full text-xs font-semibold inline-block mb-3 transition-all duration-300">
                    {news.category}
                  </div>
                  <h3 className="news-title text-xl font-bold text-[#F7B200] mb-2">{news.title}</h3>
                  <div className="news-info text-sm text-[#F7B200] mb-1">{news.date}</div>
                  <div className="news-description text-sm text-[#F7B200] mb-4">{news.description}</div>
                  <div className="news-border pt-4 border-t border-[#F7B200] transition-all duration-300">
                    <div className="news-link flex items-center text-[#F7B200] text-sm font-semibold transition-all duration-300">
                      Ver detalhes
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default Noticias;
