import { useState } from "react";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import consteelLogo from "@/assets/consteel-logo.png";

const emailSchema = z.object({
  email: z.string().trim().email({ message: "Email inválido" }).max(255, { message: "Email muito longo" })
});

const FooterSection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = emailSchema.safeParse({ email });
    
    if (!result.success) {
      toast({
        title: "Erro",
        description: result.error.errors[0].message,
        variant: "destructive"
      });
      return;
    }
    
    // Aqui você pode adicionar a lógica para enviar o email
    toast({
      title: "Sucesso!",
      description: "Subscrição realizada com sucesso."
    });
    setEmail("");
  };

  const navigationLinks = [
    { label: "Quem somos", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Projetos", href: "#projects" }
  ];

  const legalLinks = [
    { label: "Contatos", href: "#contact" },
    { label: "Privacidade", href: "#privacy" },
    { label: "Reclamações", href: "#complaints" }
  ];

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-consteel-darker py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Logo e Redes Sociais */}
          <div className="flex flex-col gap-6">
            <img 
              src={consteelLogo}
              alt="Consteel"
              className="h-12 w-auto object-contain"
            />
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-white/20 rounded-full flex items-center justify-center hover:border-consteel-gold hover:bg-consteel-gold/10 transition-all duration-300"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-white/20 rounded-full flex items-center justify-center hover:border-consteel-gold hover:bg-consteel-gold/10 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-white/20 rounded-full flex items-center justify-center hover:border-consteel-gold hover:bg-consteel-gold/10 transition-all duration-300"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Links de Navegação */}
          <div className="flex flex-col gap-3">
            {navigationLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="text-white text-left hover:text-consteel-gold transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Links Legais */}
          <div className="flex flex-col gap-3">
            {legalLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="text-white text-left hover:text-consteel-gold transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="O seu email"
                className="px-4 py-3 rounded-full bg-white text-consteel-darker placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-consteel-gold"
                maxLength={255}
              />
              <button
                type="submit"
                className="px-6 py-3 bg-consteel-gold text-consteel-darker rounded-full font-semibold hover:bg-consteel-gold-glow transition-all duration-300"
              >
                Assinar Newsletter
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;