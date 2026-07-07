import { useParams, useNavigate } from "react-router";
import { ArrowLeft, Plus, Search, UserCheck, Shield, Edit, Trash2, Crown, User, Users } from "lucide-react";
import { useState } from "react";

export function GroupParticipants() {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("all");

  // Mock data - seria buscado via API usando groupId
  const groupInfo = {
    id: groupId,
    name: "Inteligência Artificial e Machine Learning",
    supervisor: "Dr. Carlos Silva"
  };

  const participants = [
    {
      id: 1,
      name: "Dr. Carlos Silva",
      email: "carlos.silva@universidade.edu.br",
      role: "Supervisor",
      joinDate: "2024-01-15",
      status: "Ativo",
      permissions: ["Gerenciar Grupo", "Aprovar Projetos", "Gerenciar Orçamento", "Gerenciar Membros"]
    },
    {
      id: 2,
      name: "João Pedro Oliveira",
      email: "joao.oliveira@universidade.edu.br",
      role: "Coordenador",
      joinDate: "2024-01-20",
      status: "Ativo",
      permissions: ["Criar Projetos", "Editar Materiais", "Visualizar Orçamento"]
    },
    {
      id: 3,
      name: "Ana Carolina Lima",
      email: "ana.lima@universidade.edu.br",
      role: "Pesquisador",
      joinDate: "2024-02-01",
      status: "Ativo",
      permissions: ["Criar Projetos", "Editar Materiais"]
    },
    {
      id: 4,
      name: "Rafael Santos Costa",
      email: "rafael.costa@universidade.edu.br",
      role: "Pesquisador",
      joinDate: "2024-02-10",
      status: "Ativo",
      permissions: ["Criar Projetos", "Editar Materiais"]
    },
    {
      id: 5,
      name: "Beatriz Almeida Rocha",
      email: "beatriz.rocha@universidade.edu.br",
      role: "Colaborador",
      joinDate: "2024-03-01",
      status: "Ativo",
      permissions: ["Visualizar Projetos", "Comentar"]
    },
    {
      id: 6,
      name: "Lucas Ferreira Silva",
      email: "lucas.silva@universidade.edu.br",
      role: "Colaborador",
      joinDate: "2024-03-05",
      status: "Ativo",
      permissions: ["Visualizar Projetos", "Comentar"]
    },
    {
      id: 7,
      name: "Marina Souza Santos",
      email: "marina.santos@universidade.edu.br",
      role: "Aluno",
      joinDate: "2024-03-15",
      status: "Ativo",
      permissions: ["Visualizar Projetos"]
    },
    {
      id: 8,
      name: "Felipe Rodrigues Lima",
      email: "felipe.lima@universidade.edu.br",
      role: "Aluno",
      joinDate: "2024-03-15",
      status: "Inativo",
      permissions: ["Visualizar Projetos"]
    },
  ];

  const filteredParticipants = participants.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         p.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterRole === "all" || p.role === filterRole;
    return matchesSearch && matchesFilter;
  });

  const stats = {
    total: participants.filter(p => p.status === "Ativo").length,
    supervisor: participants.filter(p => p.role === "Supervisor").length,
    coordinators: participants.filter(p => p.role === "Coordenador").length,
    researchers: participants.filter(p => p.role === "Pesquisador").length,
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "Supervisor": return <Crown className="w-5 h-5" />;
      case "Coordenador": return <Shield className="w-5 h-5" />;
      case "Pesquisador": return <UserCheck className="w-5 h-5" />;
      default: return <User className="w-5 h-5" />;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Supervisor": return "bg-gradient-to-r from-[#ff8c42] to-[#f94c10] text-white";
      case "Coordenador": return "bg-[#7c3aed]/20 text-[#7c3aed]";
      case "Pesquisador": return "bg-[#4a9eff]/20 text-[#4a9eff]";
      case "Colaborador": return "bg-[#10b981]/20 text-[#10b981]";
      default: return "bg-[#8b96a5]/20 text-[#8b96a5]";
    }
  };

  return (
    <div className="h-full overflow-auto p-6">
      {/* Header with Back Button */}
      <div className="mb-6">
        <button
          onClick={() => navigate("/grupos")}
          className="flex items-center gap-2 text-[#8b96a5] hover:text-[#ff8c42] transition-colors mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Voltar para Grupos</span>
        </button>
        <div className="flex items-center gap-4 mb-2">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff8c42] to-[#f94c10] flex items-center justify-center shadow-lg">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-white">{groupInfo.name}</h1>
            <p className="text-[#8b96a5]">Gerenciar participantes e permissões</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-[#0d1f30] rounded-xl p-4 border border-[#3d4f62]/30 shadow-[4px_4px_12px_#050c14,-4px_-4px_12px_#0f2638]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#8b96a5] text-sm">Total Ativos</span>
            <Users className="w-5 h-5 text-[#4a9eff]" />
          </div>
          <div className="text-white text-2xl font-bold">{stats.total}</div>
        </div>

        <div className="bg-[#0d1f30] rounded-xl p-4 border border-[#3d4f62]/30 shadow-[4px_4px_12px_#050c14,-4px_-4px_12px_#0f2638]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#8b96a5] text-sm">Supervisor</span>
            <Crown className="w-5 h-5 text-[#ff8c42]" />
          </div>
          <div className="text-white text-2xl font-bold">{stats.supervisor}</div>
        </div>

        <div className="bg-[#0d1f30] rounded-xl p-4 border border-[#3d4f62]/30 shadow-[4px_4px_12px_#050c14,-4px_-4px_12px_#0f2638]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#8b96a5] text-sm">Coordenadores</span>
            <Shield className="w-5 h-5 text-[#7c3aed]" />
          </div>
          <div className="text-white text-2xl font-bold">{stats.coordinators}</div>
        </div>

        <div className="bg-[#0d1f30] rounded-xl p-4 border border-[#3d4f62]/30 shadow-[4px_4px_12px_#050c14,-4px_-4px_12px_#0f2638]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#8b96a5] text-sm">Pesquisadores</span>
            <UserCheck className="w-5 h-5 text-[#4a9eff]" />
          </div>
          <div className="text-white text-2xl font-bold">{stats.researchers}</div>
        </div>
      </div>

      {/* Actions Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8b96a5]" />
          <input
            type="text"
            placeholder="Buscar participantes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-[#0d1f30] rounded-xl border border-[#3d4f62]/30 text-white placeholder-[#8b96a5] shadow-[inset_2px_2px_4px_#050c14] focus:outline-none focus:border-[#ff8c42]/50"
          />
        </div>

        {/* Filter */}
        <select
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
          className="px-4 py-3 bg-[#0d1f30] rounded-xl border border-[#3d4f62]/30 text-white shadow-[inset_2px_2px_4px_#050c14] focus:outline-none focus:border-[#ff8c42]/50"
        >
          <option value="all">Todas as Funções</option>
          <option value="Supervisor">Supervisor</option>
          <option value="Coordenador">Coordenador</option>
          <option value="Pesquisador">Pesquisador</option>
          <option value="Colaborador">Colaborador</option>
          <option value="Aluno">Aluno</option>
        </select>

        {/* Add Participant Button */}
        <button className="px-6 py-3 bg-gradient-to-r from-[#ff8c42] to-[#f94c10] text-white rounded-xl shadow-[0_4px_12px_rgba(255,140,66,0.3)] hover:shadow-[0_6px_16px_rgba(255,140,66,0.5)] transition-all duration-300 flex items-center gap-2 font-medium">
          <Plus className="w-5 h-5" />
          <span>Adicionar Participante</span>
        </button>
      </div>

      {/* Participants List */}
      <div className="space-y-4">
        {filteredParticipants.map((participant) => (
          <div
            key={participant.id}
            className={`bg-[#0d1f30] rounded-2xl p-6 border border-[#3d4f62]/30 shadow-[6px_6px_16px_#050c14,-6px_-6px_16px_#0f2638] hover:shadow-[inset_2px_2px_6px_#050c14,inset_-2px_-2px_6px_#0f2638] transition-all duration-300 ${
              participant.status === "Inativo" ? "opacity-60" : ""
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              {/* Participant Info */}
              <div className="flex-1">
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${getRoleColor(participant.role)} flex items-center justify-center font-bold text-lg shadow-lg`}>
                    {participant.role === "Supervisor" ? (
                      getRoleIcon(participant.role)
                    ) : (
                      participant.name.charAt(0)
                    )}
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-white font-semibold">{participant.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getRoleColor(participant.role)}`}>
                        {getRoleIcon(participant.role)}
                        {participant.role}
                      </span>
                      {participant.status === "Inativo" && (
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#8b96a5]/20 text-[#8b96a5]">
                          Inativo
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[#8b96a5] mb-3">{participant.email}</p>

                    {/* Permissions */}
                    <div className="flex flex-wrap gap-2">
                      {participant.permissions.map((permission, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-[#0a1929] rounded-lg text-xs text-[#8b96a5] border border-[#3d4f62]/30"
                        >
                          {permission}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 lg:flex-col">
                <div className="text-xs text-[#8b96a5] mb-2">
                  Desde {new Date(participant.joinDate).toLocaleDateString('pt-BR')}
                </div>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg bg-[#0a1929] hover:bg-[#3d4f62]/20 transition-colors border border-[#3d4f62]/30">
                    <Edit className="w-4 h-4 text-[#4a9eff]" />
                  </button>
                  {participant.role !== "Supervisor" && (
                    <button className="p-2 rounded-lg bg-[#0a1929] hover:bg-[#3d4f62]/20 transition-colors border border-[#3d4f62]/30">
                      <Trash2 className="w-4 h-4 text-[#ef4444]" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredParticipants.length === 0 && (
        <div className="text-center py-12 bg-[#0d1f30] rounded-2xl border border-[#3d4f62]/30">
          <UserCheck className="w-16 h-16 text-[#3d4f62] mx-auto mb-4" />
          <p className="text-[#8b96a5]">Nenhum participante encontrado</p>
        </div>
      )}

      {/* Role Legend */}
      <div className="mt-8 bg-[#0d1f30] rounded-2xl p-6 border border-[#3d4f62]/30 shadow-[6px_6px_16px_#050c14,-6px_-6px_16px_#0f2638]">
        <h3 className="text-white mb-4">Funções e Permissões</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Crown className="w-4 h-4 text-[#ff8c42]" />
              <span className="text-white text-sm font-medium">Supervisor</span>
            </div>
            <p className="text-xs text-[#8b96a5]">Controle total do grupo, orçamento e membros</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-[#7c3aed]" />
              <span className="text-white text-sm font-medium">Coordenador</span>
            </div>
            <p className="text-xs text-[#8b96a5]">Gerencia projetos e materiais, visualiza orçamento</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <UserCheck className="w-4 h-4 text-[#4a9eff]" />
              <span className="text-white text-sm font-medium">Pesquisador</span>
            </div>
            <p className="text-xs text-[#8b96a5]">Cria projetos e edita materiais</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <User className="w-4 h-4 text-[#10b981]" />
              <span className="text-white text-sm font-medium">Colaborador/Aluno</span>
            </div>
            <p className="text-xs text-[#8b96a5]">Visualiza e comenta em projetos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
