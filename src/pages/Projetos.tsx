import { Link } from "react-router-dom";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";

const projects = [
  {
    id: "wind-energy",
    title: "Wind Energy",
    category: "Energy",
    year: "2019/2020",
    location: "Spain, Portugal",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "airbus-a380",
    title: "Airbus A380",
    category: "Aeronautics",
    year: "2017",
    location: "Seville, Spain",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "joinery",
    title: "Joinery",
    category: "Construction",
    year: "2019/2020",
    location: "Portugal, France",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "hydro-electric",
    title: "Hydro-Electric",
    category: "Construction",
    year: "2018",
    location: "Spain",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
  },
];

const Projetos = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">
            Projetos
            <div className="h-1 w-32 bg-[#F7B200] mt-2"></div>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs text-gray-500 mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
                  <div className="text-sm text-gray-600 mb-1">{project.year}</div>
                  <div className="text-sm text-gray-600 mb-4">{project.location}</div>
                  <div className="flex items-center text-[#F7B200] text-sm font-semibold">
                    Ver detalhes
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
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

export default Projetos;
