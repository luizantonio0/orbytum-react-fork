import { Megaphone, Plus, Search, Calendar, Building2, Tag, Clock, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";

export function Announcements() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const announcements = [
    {
      id: 1,
      title: "Edital Universal CNPq 2024",
      theme: "Pesquisa Científica e Tecnológica",
      description: "Apoio a projetos de pesquisa científica, tecnológica e de inovação, nas diversas áreas do conhecimento, que representem contribuição significativa para o desenvolvimento científico e tecnológico do País.",
      organization: "CNPq - Conselho Nacional de Desenvolvimento Científico e Tecnológico",
      date: "2024-05-30",
      status: "Aberto",
      submissionDeadline: "2024-05-30",
      amount: "R$ 150.000.000,00"
    },
    {
      id: 2,
      title: "FAPESP - Jovem Pesquisador",
      theme: "Formação de Recursos Humanos",
      description: "Apoio a jovens pesquisadores para desenvolvimento de projetos de pesquisa em instituições de ensino superior e pesquisa no Estado de São Paulo.",
      organization: "FAPESP - Fundação de Amparo à Pesquisa do Estado de São Paulo",
      date: "2024-06-15",
      status: "Aberto",
      submissionDeadline: "2024-06-15",
      amount: "R$ 80.000.000,00"
    },
    {
      id: 3,
      title: "Edital de Inovação Tecnológica FINEP",
      theme: "Inovação e Desenvolvimento Tecnológico",
      description: "Financiamento a projetos de pesquisa, desenvolvimento e inovação tecnológica em empresas brasileiras, com foco em tecnologias emergentes e soluções inovadoras.",
      organization: "FINEP - Financiadora de Estudos e Projetos",
      date: "2024-04-20",
      status: "Encerrado",
      submissionDeadline: "2024-04-20",
      amount: "R$ 200.000.000,00"
    },
    {
      id: 4,
      title: "Edital CAPES - Computação Quântica",
      theme: "Computação Quântica",
      description: "Programa de apoio à pesquisa em computação quântica, incluindo desenvolvimento de algoritmos, hardware quântico e aplicações práticas da tecnologia quântica.",
      organization: "CAPES - Coordenação de Aperfeiçoamento de Pessoal de Nível Superior",
      date: "2024-07-01",
      status: "Em Breve",
      submissionDeadline: "2024-07-01",
      amount: "R$ 50.000.000,00"
    },
    {
      id: 5,
      title: "Programa de IA e Machine Learning",
      theme: "Inteligência Artificial",
      description: "Apoio a projetos de pesquisa em inteligência artificial, aprendizado de máquina, visão computacional e processamento de linguagem natural com aplicações práticas.",
      organization: "MCTI - Ministério da Ciência, Tecnologia e Inovações",
      date: "2024-05-15",
      status: "Aberto",
      submissionDeadline: "2024-05-15",
      amount: "R$ 120.000.000,00"
    },
    {
      id: 6,
      title: "Edital de Segurança Cibernética",
      theme: "Segurança da Informação",
      description: "Fomento a pesquisas em segurança cibernética, criptografia, proteção de dados e infraestrutura crítica, visando fortalecer a segurança digital nacional.",
      organization: "BNDES - Banco Nacional de Desenvolvimento Econômico e Social",
      date: "2024-06-30",
      status: "Aberto",
      submissionDeadline: "2024-06-30",
      amount: "R$ 75.000.000,00"
    },
    {
      id: 7,
      title: "Edital Blockchain e Web3",
      theme: "Tecnologias Descentralizadas",
      description: "Apoio a projetos de pesquisa e desenvolvimento em blockchain, contratos inteligentes, NFTs e aplicações descentralizadas (dApps).",
      organization: "Fundação Araucária",
      date: "2024-03-31",
      status: "Encerrado",
      submissionDeadline: "2024-03-31",
      amount: "R$ 30.000.000,00"
    },
    {
      id: 8,
      title: "Programa de Infraestrutura de Pesquisa",
      theme: "Infraestrutura Científica",
      description: "Aquisição e modernização de equipamentos científicos de grande porte para laboratórios multiusuários em instituições de pesquisa.",
      organization: "CNPq - Conselho Nacional de Desenvolvimento Científico e Tecnológico",
      date: "2024-08-15",
      status: "Em Breve",
      submissionDeadline: "2024-08-15",
      amount: "R$ 180.000.000,00"
    },
    {
      id: 9,
      title: "Edital de Cooperação Internacional",
      theme: "Pesquisa Colaborativa Internacional",
      description: "Apoio a projetos de pesquisa em colaboração com instituições estrangeiras, incluindo mobilidade de pesquisadores e organização de eventos científicos.",
      organization: "CAPES - Coordenação de Aperfeiçoamento de Pessoal de Nível Superior",
      date: "2024-05-20",
      status: "Aberto",
      submissionDeadline: "2024-05-20",
      amount: "R$ 95.000.000,00"
    },
  ];

  const filteredAnnouncements = announcements.filter(a => {
    const matchesSearch = a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         a.theme.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         a.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         a.organization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || a.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: announcements.length,
    open: announcements.filter(a => a.status === "Aberto").length,
    closed: announcements.filter(a => a.status === "Encerrado").length,
    upcoming: announcements.filter(a => a.status === "Em Breve").length,
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Aberto": return <CheckCircle className="w-5 h-5 text-[#10b981]" />;
      case "Encerrado": return <XCircle className="w-5 h-5 text-[#8b96a5]" />;
      default: return <Clock className="w-5 h-5 text-[#ff8c42]" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Aberto": return "bg-[#10b981]/20 text-[#10b981]";
      case "Encerrado": return "bg-[#8b96a5]/20 text-[#8b96a5]";
      default: return "bg-[#ff8c42]/20 text-[#ff8c42]";
    }
  };

  const getDaysRemaining = (date: string, status: string) => {
    if (status === "Encerrado") return null;
    const today = new Date();
    const deadline = new Date(date);
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="h-full overflow-auto p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-white mb-2">Editais</h1>
        <p className="text-[#8b96a5]">Acompanhe editais de fomento e oportunidades de financiamento</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-[#0d1f30] rounded-xl p-4 border border-[#3d4f62]/30 shadow-[4px_4px_12px_#050c14,-4px_-4px_12px_#0f2638]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#8b96a5] text-sm">Total</span>
            <Megaphone className="w-5 h-5 text-[#4a9eff]" />
          </div>
          <div className="text-white text-2xl font-bold">{stats.total}</div>
        </div>

        <div className="bg-[#0d1f30] rounded-xl p-4 border border-[#3d4f62]/30 shadow-[4px_4px_12px_#050c14,-4px_-4px_12px_#0f2638]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#8b96a5] text-sm">Abertos</span>
            <CheckCircle className="w-5 h-5 text-[#10b981]" />
          </div>
          <div className="text-white text-2xl font-bold">{stats.open}</div>
        </div>

        <div className="bg-[#0d1f30] rounded-xl p-4 border border-[#3d4f62]/30 shadow-[4px_4px_12px_#050c14,-4px_-4px_12px_#0f2638]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#8b96a5] text-sm">Em Breve</span>
            <Clock className="w-5 h-5 text-[#ff8c42]" />
          </div>
          <div className="text-white text-2xl font-bold">{stats.upcoming}</div>
        </div>

        <div className="bg-[#0d1f30] rounded-xl p-4 border border-[#3d4f62]/30 shadow-[4px_4px_12px_#050c14,-4px_-4px_12px_#0f2638]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#8b96a5] text-sm">Encerrados</span>
            <XCircle className="w-5 h-5 text-[#8b96a5]" />
          </div>
          <div className="text-white text-2xl font-bold">{stats.closed}</div>
        </div>
      </div>

      {/* Actions Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8b96a5]" />
          <input
            type="text"
            placeholder="Buscar editais..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-[#0d1f30] rounded-xl border border-[#3d4f62]/30 text-white placeholder-[#8b96a5] shadow-[inset_2px_2px_4px_#050c14] focus:outline-none focus:border-[#ff8c42]/50"
          />
        </div>

        {/* Filter by Status */}
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-3 bg-[#0d1f30] rounded-xl border border-[#3d4f62]/30 text-white shadow-[inset_2px_2px_4px_#050c14] focus:outline-none focus:border-[#ff8c42]/50"
        >
          <option value="all">Todos os Status</option>
          <option value="Aberto">Abertos</option>
          <option value="Em Breve">Em Breve</option>
          <option value="Encerrado">Encerrados</option>
        </select>

        {/* New Announcement Button */}
        <button className="px-6 py-3 bg-gradient-to-r from-[#ff8c42] to-[#f94c10] text-white rounded-xl shadow-[0_4px_12px_rgba(255,140,66,0.3)] hover:shadow-[0_6px_16px_rgba(255,140,66,0.5)] transition-all duration-300 flex items-center gap-2 font-medium">
          <Plus className="w-5 h-5" />
          <span>Novo Edital</span>
        </button>
      </div>

      {/* Announcements List */}
      <div className="space-y-4">
        {filteredAnnouncements.map((announcement) => {
          const daysRemaining = getDaysRemaining(announcement.date, announcement.status);

          return (
            <div
              key={announcement.id}
              className={`bg-[#0d1f30] rounded-2xl p-6 border border-[#3d4f62]/30 shadow-[6px_6px_16px_#050c14,-6px_-6px_16px_#0f2638] hover:shadow-[inset_2px_2px_6px_#050c14,inset_-2px_-2px_6px_#0f2638] transition-all duration-300 ${
                announcement.status === "Encerrado" ? "opacity-70" : ""
              }`}
            >
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Announcement Info */}
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#ff8c42] to-[#f94c10] shadow-lg">
                      <Megaphone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-2">{announcement.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <div className="flex items-center gap-2">
                          <Tag className="w-4 h-4 text-[#4a9eff]" />
                          <span className="text-sm text-[#4a9eff]">{announcement.theme}</span>
                        </div>
                        <span className="text-[#3d4f62]">•</span>
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-[#8b96a5]" />
                          <span className="text-sm text-[#8b96a5]">{announcement.organization}</span>
                        </div>
                      </div>
                      <p className="text-sm text-[#8b96a5] mb-3">{announcement.description}</p>

                      {/* Additional Info */}
                      <div className="flex flex-wrap gap-4">
                        <div className="px-3 py-2 bg-[#0a1929] rounded-lg border border-[#3d4f62]/30">
                          <span className="text-xs text-[#8b96a5]">Valor Total</span>
                          <p className="text-sm text-[#10b981] font-semibold">{announcement.amount}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Announcement Meta */}
                <div className="flex flex-col items-start lg:items-end gap-3 lg:min-w-[200px]">
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-full ${getStatusColor(announcement.status)}`}>
                    {getStatusIcon(announcement.status)}
                    <span className="text-sm font-medium">{announcement.status}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#8b96a5]" />
                    <div className="text-xs">
                      <span className="text-[#8b96a5]">Prazo: </span>
                      <span className="text-white font-medium">
                        {new Date(announcement.date).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                  </div>

                  {daysRemaining !== null && (
                    <div className={`px-3 py-2 rounded-lg ${
                      daysRemaining <= 7
                        ? "bg-[#ef4444]/20 border border-[#ef4444]/30"
                        : daysRemaining <= 30
                        ? "bg-[#ff8c42]/20 border border-[#ff8c42]/30"
                        : "bg-[#10b981]/20 border border-[#10b981]/30"
                    }`}>
                      <div className="flex items-center gap-2">
                        <Clock className={`w-4 h-4 ${
                          daysRemaining <= 7
                            ? "text-[#ef4444]"
                            : daysRemaining <= 30
                            ? "text-[#ff8c42]"
                            : "text-[#10b981]"
                        }`} />
                        <span className={`text-sm font-semibold ${
                          daysRemaining <= 7
                            ? "text-[#ef4444]"
                            : daysRemaining <= 30
                            ? "text-[#ff8c42]"
                            : "text-[#10b981]"
                        }`}>
                          {daysRemaining > 0
                            ? `${daysRemaining} ${daysRemaining === 1 ? 'dia' : 'dias'}`
                            : 'Último dia'}
                        </span>
                      </div>
                    </div>
                  )}

                  {announcement.status === "Aberto" && (
                    <button className="mt-2 px-4 py-2 bg-[#4a9eff]/20 text-[#4a9eff] rounded-lg hover:bg-[#4a9eff]/30 transition-colors text-sm font-medium border border-[#4a9eff]/30">
                      Submeter Proposta
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredAnnouncements.length === 0 && (
        <div className="text-center py-12 bg-[#0d1f30] rounded-2xl border border-[#3d4f62]/30">
          <Megaphone className="w-16 h-16 text-[#3d4f62] mx-auto mb-4" />
          <p className="text-[#8b96a5]">Nenhum edital encontrado</p>
        </div>
      )}
    </div>
  );
}
