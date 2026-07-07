import { Calendar as CalendarIcon, Plus, Search, MapPin, Clock, Users, CheckCircle } from "lucide-react";
import { useState } from "react";

export function Events() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const events = [
    {
      id: 1,
      name: "Seminário de Inteligência Artificial 2024",
      description: "Apresentação dos avanços recentes em Deep Learning e suas aplicações práticas em visão computacional e processamento de linguagem natural.",
      location: "Auditório Principal - Bloco A",
      date: "2024-05-25",
      time: "14:00",
      duration: "3 horas",
      attendees: 120,
      organizer: "Grupo IA e Machine Learning",
      status: "Próximo"
    },
    {
      id: 2,
      name: "Workshop de Computação Quântica",
      description: "Introdução prática aos conceitos de qubits, portas quânticas e algoritmos quânticos utilizando o framework Qiskit.",
      location: "Laboratório 203 - Bloco B",
      date: "2024-06-10",
      time: "09:00",
      duration: "6 horas",
      attendees: 30,
      organizer: "Grupo Computação Quântica",
      status: "Próximo"
    },
    {
      id: 3,
      name: "Hackathon de Segurança Cibernética",
      description: "Competição prática de ethical hacking com desafios de penetration testing, análise de vulnerabilidades e forense digital.",
      location: "Campus Virtual (Online)",
      date: "2024-05-20",
      time: "08:00",
      duration: "24 horas",
      attendees: 80,
      organizer: "Grupo Segurança Cibernética",
      status: "Em Andamento"
    },
    {
      id: 4,
      name: "Palestra: Blockchain e o Futuro das Finanças",
      description: "Discussão sobre DeFi, smart contracts e o impacto das tecnologias descentralizadas no sistema financeiro global.",
      location: "Sala de Conferências - Bloco C",
      date: "2024-04-15",
      time: "16:00",
      duration: "2 horas",
      attendees: 95,
      organizer: "Grupo Blockchain e Criptomoedas",
      status: "Encerrado"
    },
    {
      id: 5,
      name: "Defesa de Dissertação - Otimização de LLMs",
      description: "Apresentação da pesquisa sobre técnicas de compressão e otimização de Large Language Models para deployment em dispositivos edge.",
      location: "Sala 401 - Bloco D",
      date: "2024-06-05",
      time: "15:00",
      duration: "2 horas",
      attendees: 25,
      organizer: "Grupo IA e Machine Learning",
      status: "Próximo"
    },
    {
      id: 6,
      name: "Conferência Internacional de IA",
      description: "Participação na NeurIPS 2024 com apresentação de artigo sobre arquiteturas de deep learning para diagnóstico médico.",
      location: "Vancouver Convention Centre - Canadá",
      date: "2024-12-10",
      time: "10:00",
      duration: "5 dias",
      attendees: 8,
      organizer: "Grupo IA e Machine Learning",
      status: "Próximo"
    },
    {
      id: 7,
      name: "Minicurso: Introdução ao Desenvolvimento Web3",
      description: "Curso prático sobre desenvolvimento de DApps usando Solidity, Hardhat e React, incluindo criação de smart contracts e interfaces.",
      location: "Laboratório 105 - Bloco E",
      date: "2024-07-15",
      time: "13:00",
      duration: "16 horas (4 dias)",
      attendees: 40,
      organizer: "Grupo Blockchain e Criptomoedas",
      status: "Próximo"
    },
    {
      id: 8,
      name: "Reunião Mensal de Grupos de Pesquisa",
      description: "Encontro para alinhamento de atividades, apresentação de resultados parciais e discussão de recursos compartilhados.",
      location: "Sala de Reuniões - Bloco A",
      date: "2024-05-30",
      time: "10:00",
      duration: "2 horas",
      attendees: 45,
      organizer: "Coordenação Geral",
      status: "Próximo"
    },
    {
      id: 9,
      name: "Demonstração de Projetos de IC",
      description: "Apresentação pública dos projetos desenvolvidos pelos bolsistas de iniciação científica durante o semestre.",
      location: "Hall Central - Bloco A",
      date: "2024-04-28",
      time: "14:00",
      duration: "4 horas",
      attendees: 150,
      organizer: "Coordenação Geral",
      status: "Encerrado"
    },
    {
      id: 10,
      name: "Webinar: Tendências em Cibersegurança 2024",
      description: "Painel com especialistas discutindo ameaças emergentes, zero trust architecture e compliance com LGPD.",
      location: "Plataforma Zoom (Online)",
      date: "2024-06-20",
      time: "19:00",
      duration: "1,5 horas",
      attendees: 200,
      organizer: "Grupo Segurança Cibernética",
      status: "Próximo"
    },
  ];

  const filteredEvents = events.filter(e => {
    const matchesSearch = e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         e.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         e.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         e.organizer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || e.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: events.length,
    upcoming: events.filter(e => e.status === "Próximo").length,
    ongoing: events.filter(e => e.status === "Em Andamento").length,
    completed: events.filter(e => e.status === "Encerrado").length,
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Próximo": return "bg-[#4a9eff]/20 text-[#4a9eff]";
      case "Em Andamento": return "bg-[#ff8c42]/20 text-[#ff8c42]";
      case "Encerrado": return "bg-[#8b96a5]/20 text-[#8b96a5]";
      default: return "bg-[#8b96a5]/20 text-[#8b96a5]";
    }
  };

  const getDaysUntil = (date: string, status: string) => {
    if (status === "Encerrado") return null;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const eventDate = new Date(date);
    eventDate.setHours(0, 0, 0, 0);
    const diffTime = eventDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="h-full overflow-auto p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-white mb-2">Eventos</h1>
        <p className="text-[#8b96a5]">Gerencie palestras, workshops e eventos científicos</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-[#0d1f30] rounded-xl p-4 border border-[#3d4f62]/30 shadow-[4px_4px_12px_#050c14,-4px_-4px_12px_#0f2638]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#8b96a5] text-sm">Total</span>
            <CalendarIcon className="w-5 h-5 text-[#4a9eff]" />
          </div>
          <div className="text-white text-2xl font-bold">{stats.total}</div>
        </div>

        <div className="bg-[#0d1f30] rounded-xl p-4 border border-[#3d4f62]/30 shadow-[4px_4px_12px_#050c14,-4px_-4px_12px_#0f2638]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#8b96a5] text-sm">Próximos</span>
            <Clock className="w-5 h-5 text-[#4a9eff]" />
          </div>
          <div className="text-white text-2xl font-bold">{stats.upcoming}</div>
        </div>

        <div className="bg-[#0d1f30] rounded-xl p-4 border border-[#3d4f62]/30 shadow-[4px_4px_12px_#050c14,-4px_-4px_12px_#0f2638]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#8b96a5] text-sm">Em Andamento</span>
            <Clock className="w-5 h-5 text-[#ff8c42]" />
          </div>
          <div className="text-white text-2xl font-bold">{stats.ongoing}</div>
        </div>

        <div className="bg-[#0d1f30] rounded-xl p-4 border border-[#3d4f62]/30 shadow-[4px_4px_12px_#050c14,-4px_-4px_12px_#0f2638]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#8b96a5] text-sm">Encerrados</span>
            <CheckCircle className="w-5 h-5 text-[#10b981]" />
          </div>
          <div className="text-white text-2xl font-bold">{stats.completed}</div>
        </div>
      </div>

      {/* Actions Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8b96a5]" />
          <input
            type="text"
            placeholder="Buscar eventos..."
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
          <option value="Próximo">Próximos</option>
          <option value="Em Andamento">Em Andamento</option>
          <option value="Encerrado">Encerrados</option>
        </select>

        {/* New Event Button */}
        <button className="px-6 py-3 bg-gradient-to-r from-[#ff8c42] to-[#f94c10] text-white rounded-xl shadow-[0_4px_12px_rgba(255,140,66,0.3)] hover:shadow-[0_6px_16px_rgba(255,140,66,0.5)] transition-all duration-300 flex items-center gap-2 font-medium">
          <Plus className="w-5 h-5" />
          <span>Novo Evento</span>
        </button>
      </div>

      {/* Events List */}
      <div className="space-y-4">
        {filteredEvents.map((event) => {
          const daysUntil = getDaysUntil(event.date, event.status);

          return (
            <div
              key={event.id}
              className={`bg-[#0d1f30] rounded-2xl p-6 border border-[#3d4f62]/30 shadow-[6px_6px_16px_#050c14,-6px_-6px_16px_#0f2638] hover:shadow-[inset_2px_2px_6px_#050c14,inset_-2px_-2px_6px_#0f2638] transition-all duration-300 ${
                event.status === "Encerrado" ? "opacity-70" : ""
              }`}
            >
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Event Info */}
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#ff8c42] to-[#f94c10] shadow-lg flex-shrink-0">
                      <CalendarIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-white font-semibold">{event.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                          {event.status}
                        </span>
                      </div>
                      <p className="text-sm text-[#8b96a5] mb-3">{event.description}</p>

                      {/* Event Details Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-[#4a9eff] mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-xs text-[#8b96a5] block">Localização</span>
                            <span className="text-sm text-white">{event.location}</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <Clock className="w-4 h-4 text-[#4a9eff] mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-xs text-[#8b96a5] block">Horário e Duração</span>
                            <span className="text-sm text-white">{event.time} - {event.duration}</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <Users className="w-4 h-4 text-[#4a9eff] mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-xs text-[#8b96a5] block">Participantes</span>
                            <span className="text-sm text-white">{event.attendees} pessoas</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <Users className="w-4 h-4 text-[#4a9eff] mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-xs text-[#8b96a5] block">Organizador</span>
                            <span className="text-sm text-white">{event.organizer}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Meta */}
                <div className="flex flex-col items-start lg:items-end gap-3 lg:min-w-[200px]">
                  <div className="bg-[#0a1929] rounded-lg px-4 py-3 border border-[#3d4f62]/30 text-center lg:min-w-[180px]">
                    <div className="text-3xl font-bold text-[#ff8c42] mb-1">
                      {new Date(event.date).getDate()}
                    </div>
                    <div className="text-xs text-[#8b96a5] uppercase">
                      {new Date(event.date).toLocaleDateString('pt-BR', { month: 'short' })}
                    </div>
                    <div className="text-sm text-white mt-1">
                      {new Date(event.date).getFullYear()}
                    </div>
                  </div>

                  <div className="text-xs text-[#8b96a5] text-left lg:text-right">
                    {formatDate(event.date)}
                  </div>

                  {daysUntil !== null && daysUntil >= 0 && (
                    <div className={`px-3 py-2 rounded-lg ${
                      daysUntil === 0
                        ? "bg-[#ff8c42]/20 border border-[#ff8c42]/30"
                        : daysUntil <= 7
                        ? "bg-[#4a9eff]/20 border border-[#4a9eff]/30"
                        : "bg-[#10b981]/20 border border-[#10b981]/30"
                    }`}>
                      <div className="flex items-center gap-2">
                        <Clock className={`w-4 h-4 ${
                          daysUntil === 0
                            ? "text-[#ff8c42]"
                            : daysUntil <= 7
                            ? "text-[#4a9eff]"
                            : "text-[#10b981]"
                        }`} />
                        <span className={`text-sm font-semibold ${
                          daysUntil === 0
                            ? "text-[#ff8c42]"
                            : daysUntil <= 7
                            ? "text-[#4a9eff]"
                            : "text-[#10b981]"
                        }`}>
                          {daysUntil === 0
                            ? 'Hoje!'
                            : `em ${daysUntil} ${daysUntil === 1 ? 'dia' : 'dias'}`}
                        </span>
                      </div>
                    </div>
                  )}

                  {event.status === "Próximo" && (
                    <button className="mt-2 px-4 py-2 bg-[#4a9eff]/20 text-[#4a9eff] rounded-lg hover:bg-[#4a9eff]/30 transition-colors text-sm font-medium border border-[#4a9eff]/30">
                      Confirmar Presença
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredEvents.length === 0 && (
        <div className="text-center py-12 bg-[#0d1f30] rounded-2xl border border-[#3d4f62]/30">
          <CalendarIcon className="w-16 h-16 text-[#3d4f62] mx-auto mb-4" />
          <p className="text-[#8b96a5]">Nenhum evento encontrado</p>
        </div>
      )}
    </div>
  );
}
