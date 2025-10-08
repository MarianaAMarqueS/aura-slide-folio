import { Link } from "react-router-dom";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";

const newsItems = [
  {
    id: "empresa-gazela-2021",
    title: "Empresa Gazela",
    subtitle: "91 Empresas \"Gazela\" da região Centro",
    date: "15.10.2025",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: "empresa-gazela-500",
    title: "Empresa Gazela",
    subtitle: "91 Empresas \"Gazela\" da região Centro",
    date: "15.10.2025",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    featured: false,
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {newsItems.map((news, index) => (
              <Link
                key={news.id}
                to={`/news/${news.id}`}
                className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl ${
                  index === 0 ? 'bg-gradient-to-br from-gray-50 to-white' : 'bg-gradient-to-br from-[#F7B200] to-[#FFD700]'
                }`}
                style={{
                  boxShadow: index === 1 ? '0 20px 60px rgba(247, 178, 0, 0.3)' : '0 10px 30px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="p-8 md:p-12 flex flex-col h-full min-h-[500px]">
                  <div className={`flex-1 ${index === 0 ? 'flex items-center' : ''}`}>
                    {index === 0 ? (
                      <div className="w-full">
                        <div className="text-[#CCCCCC] text-[120px] md:text-[180px] font-bold leading-none mb-4 tracking-tight">
                          21'
                        </div>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600 uppercase tracking-wider">EMPRESA</div>
                            <div className="text-4xl font-bold text-black">GAZELA</div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="relative h-64 mb-8 rounded-2xl overflow-hidden shadow-lg">
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-8xl font-bold">
                          500
                        </div>
                        <div className="absolute bottom-4 left-4 text-white text-xl font-bold">
                          MAIORES EMPRESAS<br/>BAIRRADA
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className={index === 0 ? 'text-gray-900' : 'text-white'}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{news.title}</h2>
                    <p className={`text-lg mb-6 ${index === 0 ? 'text-gray-700' : 'text-white/90'}`}>
                      {news.subtitle}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                        index === 0 ? 'bg-[#F7B200] text-black' : 'bg-black text-[#F7B200]'
                      }`}>
                        {news.date}
                      </span>
                      
                      <div className={`flex items-center gap-2 font-semibold ${
                        index === 0 ? 'text-[#F7B200]' : 'text-black'
                      }`}>
                        Ver detalhes
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
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
