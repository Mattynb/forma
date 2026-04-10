import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { 
  BookOpen, 
  Clock, 
  ChevronRight, 
  GraduationCap, 
  ShieldCheck, 
  Heart, 
  Zap,
  Menu,
  X,
  ArrowUp,
  Library,
  CheckCircle2
} from 'lucide-react';
import { curriculumData, introText, conclusionText, Module, Discipline } from './data';

export default function App() {
  const [activeDiscipline, setActiveDiscipline] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1a1a1a] font-sans selection:bg-[#d4af37] selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#d4af37] origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
                <img src="/logo.jpeg" alt="FORMA Institute Logo" width={60} height={60} className="rounded-full" />
              <div>
                <h1 className="text-lg font-bold tracking-tight leading-none">FORMA INSTITUTE</h1>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Formação Ministerial</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('intro')} className="text-sm font-medium hover:text-[#d4af37] transition-colors">Início</button>
              <button onClick={() => scrollToSection('curriculum')} className="text-sm font-medium hover:text-[#d4af37] transition-colors">Currículo</button>
              <button onClick={() => scrollToSection('conclusion')} className="text-sm font-medium hover:text-[#d4af37] transition-colors">Conclusão</button>
              <div className="h-6 w-px bg-gray-200 mx-2" />
              <div className="flex flex-col items-end">
                <span className="text-[10px] uppercase text-gray-400">Instrutor</span>
                <span className="text-xs font-semibold">Prof. Pr. Marcos G Nascimento</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[45] bg-white pt-20 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-xl font-semibold">
              <button onClick={() => scrollToSection('intro')} className="text-left py-2 border-b border-gray-100">Início</button>
              <button onClick={() => scrollToSection('curriculum')} className="text-left py-2 border-b border-gray-100">Currículo</button>
              <button onClick={() => scrollToSection('conclusion')} className="text-left py-2 border-b border-gray-100">Conclusão</button>
              <div className="mt-4">
                <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">Instrutor</p>
                <p className="text-lg">Prof. Pr. Marcos G Nascimento</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header id="intro" className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-5">
          <div className="absolute top-20 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1a1a1a] rounded-full blur-[100px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-[#d4af37]/10 text-[#b8860b] rounded-full">
              Programa de Formação Ministerial
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 text-[#1a1a1a]">
              Projeto Pedagógico e <br />
              <span className="text-[#d4af37]">Plano de Ensino Integral</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm font-medium text-gray-600">
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-[#d4af37]" />
                <span>2.5 Anos (30 Meses)</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen size={18} className="text-[#d4af37]" />
                <span>1.800 Horas Totais</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#d4af37]" />
                <span>Edição Expandida e Confessional</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="prose prose-lg max-w-none text-gray-600 leading-relaxed text-justify"
          >
            {introText.split('\n\n').map((para, i) => (
              <p key={i} className="mb-4">{para}</p>
            ))}
          </motion.div>

          {/* Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { title: "Saber", sub: "Ortodoxia", icon: <Library />, desc: "Fundamentação dogmática e apologética rigorosa." },
              { title: "Ser", sub: "Ortopatia", icon: <Heart />, desc: "Integridade do caráter pastoral e intimidade espiritual." },
              { title: "Fazer", sub: "Ortopraxia", icon: <Zap />, desc: "Prática da pregação expositiva e liderança servidora." }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#faf9f6] rounded-xl flex items-center justify-center text-[#d4af37] mb-4 mx-auto">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold mb-1">{pillar.title}</h3>
                <p className="text-xs font-bold text-[#d4af37] uppercase tracking-widest mb-3">{pillar.sub}</p>
                <p className="text-sm text-gray-500">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </header>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Estrutura Curricular</h2>
            <p className="text-gray-500">Explore os módulos e disciplinas que compõem a jornada de formação.</p>
          </div>

          <div className="space-y-12">
            {curriculumData.map((module, mIdx) => (
              <ModuleCard 
                key={module.id} 
                module={module} 
                index={mIdx}
                activeDiscipline={activeDiscipline}
                setActiveDiscipline={setActiveDiscipline}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section id="conclusion" className="py-24 bg-[#1a1a1a] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#d4af37] blur-[150px] rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-10">Conclusão do Programa</h2>
            <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed text-justify mb-16">
              <p>{conclusionText}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left border-t border-white/10 pt-12">
              <div>
                <h4 className="text-[#d4af37] font-bold uppercase tracking-widest text-sm mb-4">Instituição</h4>
                <p className="text-xl font-bold">FORMA Institute</p>
                <p className="text-gray-400">Programa de Formação Ministerial</p>
              </div>
              <div>
                <h4 className="text-[#d4af37] font-bold uppercase tracking-widest text-sm mb-4">Instrutor Responsável</h4>
                <p className="text-xl font-bold">Prof. Pr. Marcos G Nascimento</p>
                <p className="text-gray-400">Teólogo e Pastor</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#121212] border-t border-white/5 text-center text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto px-6">
          <p>© {new Date().getFullYear()} FORMA Institute. Todos os direitos reservados.</p>
          <p className="mt-2 text-[10px] uppercase tracking-widest">Fides Quaerens Intellectum</p>
        </div>
      </footer>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 p-4 bg-[#d4af37] text-white rounded-full shadow-lg z-50 hover:bg-[#b8860b] transition-colors"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

interface ModuleCardProps {
  key?: any;
  module: Module;
  index: number;
  activeDiscipline: string | null;
  setActiveDiscipline: (id: string | null) => void;
}

function ModuleCard({ 
  module, 
  index, 
  activeDiscipline, 
  setActiveDiscipline 
}: ModuleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group"
    >
      <div className="flex items-start gap-4 md:gap-8">
        <div className="hidden md:flex flex-col items-center">
          <div className="w-12 h-12 rounded-full border-2 border-[#d4af37] flex items-center justify-center font-bold text-[#d4af37] bg-white z-10">
            {module.id}
          </div>
          <div className="w-px h-full bg-gray-100 mt-2" />
        </div>

        <div className="flex-1 bg-[#faf9f6] rounded-3xl p-6 md:p-10 border border-gray-100 hover:border-[#d4af37]/30 transition-all">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d4af37] mb-2 block">Módulo {module.id}</span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">{module.title.replace('Módulo ' + module.id + ': ', '')}</h3>
            </div>
            <div className="md:hidden w-10 h-10 rounded-full border border-[#d4af37] flex items-center justify-center font-bold text-[#d4af37]">
              {module.id}
            </div>
          </div>
          
          <p className="text-gray-600 mb-8 leading-relaxed">{module.description}</p>

          <div className="space-y-4">
            {module.disciplines.map((disc) => (
              <DisciplineItem 
                key={disc.id} 
                disc={disc} 
                isActive={activeDiscipline === disc.id}
                onToggle={() => setActiveDiscipline(activeDiscipline === disc.id ? null : disc.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface DisciplineItemProps {
  key?: any;
  disc: Discipline;
  isActive: boolean;
  onToggle: () => void;
}

function DisciplineItem({ disc, isActive, onToggle }: DisciplineItemProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
      <button 
        onClick={onToggle}
        className="w-full text-left p-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-lg bg-[#faf9f6] flex items-center justify-center text-xs font-bold text-gray-400">
            {disc.id}
          </div>
          <div>
            <h4 className="font-bold text-sm md:text-base">{disc.title}</h4>
            <div className="flex items-center gap-3 text-[10px] text-gray-400 font-medium uppercase mt-1">
              <span className="flex items-center gap-1"><Clock size={10} /> {disc.hours}h</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span>Disciplina</span>
            </div>
          </div>
        </div>
        <ChevronRight size={18} className={`text-gray-300 transition-transform ${isActive ? 'rotate-90' : ''}`} />
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 border-t border-gray-50 bg-gray-50/30">
              <div className="mb-6">
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37] mb-2">Ementa</h5>
                <p className="text-sm text-gray-600 leading-relaxed">{disc.syllabus}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37] mb-3">Tópicos das Aulas</h5>
                  <ul className="space-y-2">
                    {disc.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle2 size={14} className="text-[#d4af37] mt-0.5 shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37] mb-3">Bibliografia Recomendada</h5>
                  <ul className="space-y-3">
                    {disc.bibliography.map((bib, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-[11px] text-gray-500 italic leading-snug">
                        <div className="w-1 h-1 bg-[#d4af37] rounded-full mt-1.5 shrink-0" />
                        <span>{bib}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
