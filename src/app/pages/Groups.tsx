import { Users, Plus, Search, MoreVertical, Shield, Calendar, UserCheck } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

export function Groups() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const groups = [
    {
      id: 1,
      name: "Inteligência Artificial e Machine Learning",
      supervisor: "Dr. Carlos Silva",
      participants: 8,
      budget: "R$ 45.000",
      status: "Ativo",
      projects: 5,
      startDate: "2024-01-15"
    },
    {
      id: 2,
      name: "Computação Quântica",
      supervisor: "Dra. Ana Paula Santos",
      participants: 5,
      budget: "R$ 67.000",
      status: "Ativo",
      projects: 3,
      startDate: "2024-02-01"
    },
    {
      id: 3,
      name: "Segurança Cibernética",
      supervisor: "Dr. Roberto Mendes",
      participants: 12,
      budget: "R$ 38.000",
      status: "Ativo",
      projects: 8,
      startDate: "2023-11-20"
    },
    {
      id: 4,
      name: "Blockchain e Criptomoedas",
      supervisor: "Dra. Juliana Costa",
      participants: 6,
      budget: "R$ 52.000",
      status: "Em Planejamento",
      projects: 2,
      startDate: "2024-03-10"
    },
  ];

  const filteredGroups = groups.filter(group =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    group.supervisor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-full overflow-auto p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-white mb-2">Grupos de Pesquisa</h1>
        <p className="text-[#8b96a5]">Gerencie os grupos de pesquisa e suas configurações</p>
      </div>

      {/* Actions Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8b96a5]" />
          <input
            type="text"
            placeholder="Buscar grupos ou supervisores..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-[#0d1f30] rounded-xl border border-[#3d4f62]/30 text-white placeholder-[#8b96a5] shadow-[inset_2px_2px_4px_#050c14] focus:outline-none focus:border-[#ff8c42]/50"
          />
        </div>

        {/* New Group Button */}
        <button className="px-6 py-3 bg-gradient-to-r from-[#ff8c42] to-[#f94c10] text-white rounded-xl shadow-[0_4px_12px_rgba(255,140,66,0.3)] hover:shadow-[0_6px_16px_rgba(255,140,66,0.5)] transition-all duration-300 flex items-center gap-2 font-medium">
          <Plus className="w-5 h-5" />
          <span>Novo Grupo</span>
        </button>
      </div>

      {/* Groups Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredGroups.map((group) => (
          <div
            key={group.id}
            className="bg-[#0d1f30] rounded-2xl p-6 border border-[#3d4f62]/30 shadow-[6px_6px_16px_#050c14,-6px_-6px_16px_#0f2638] hover:shadow-[inset_2px_2px_6px_#050c14,inset_-2px_-2px_6px_#0f2638] transition-all duration-300 group"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff8c42] to-[#f94c10] flex items-center justify-center shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-1">{group.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-[#8b96a5]">
                    <Shield className="w-4 h-4" />
                    <span>{group.supervisor}</span>
                  </div>
                </div>
              </div>
              <button className="p-2 hover:bg-[#3d4f62]/20 rounded-lg transition-colors">
                <MoreVertical className="w-5 h-5 text-[#8b96a5]" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <div className="text-[#ff8c42] font-semibold">{group.participants}</div>
                <div className="text-xs text-[#8b96a5]">Participantes</div>
              </div>
              <div className="text-center">
                <div className="text-[#ff8c42] font-semibold">{group.projects}</div>
                <div className="text-xs text-[#8b96a5]">Projetos</div>
              </div>
              <div className="text-center">
                <div className="text-[#ff8c42] font-semibold">{group.budget}</div>
                <div className="text-xs text-[#8b96a5]">Orçamento</div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-[#3d4f62]/30">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-xs text-[#8b96a5]">
                  <Calendar className="w-4 h-4" />
                  <span>Início: {new Date(group.startDate).toLocaleDateString('pt-BR')}</span>
                </div>
                <button
                  onClick={() => navigate(`/grupos/${group.id}/participantes`)}
                  className="flex items-center gap-2 text-xs text-[#4a9eff] hover:text-[#ff8c42] transition-colors"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>Gerenciar Participantes</span>
                </button>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                group.status === "Ativo"
                  ? "bg-[#10b981]/20 text-[#10b981]"
                  : "bg-[#ff8c42]/20 text-[#ff8c42]"
              }`}>
                {group.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
