import { UserCheck, Plus, Search, Mail, Phone, MoreVertical, BookOpen } from "lucide-react";
import { useState } from "react";

export function Participants() {
  const [searchTerm, setSearchTerm] = useState("");

  const participants = [
    {
      id: 1,
      name: "João Pedro Oliveira",
      role: "Doutorando",
      group: "IA e Machine Learning",
      email: "joao.oliveira@universidade.br",
      phone: "(11) 98765-4321",
      status: "Ativo",
      avatar: "JP"
    },
    {
      id: 2,
      name: "Maria Eduarda Santos",
      role: "Mestranda",
      group: "Computação Quântica",
      email: "maria.santos@universidade.br",
      phone: "(21) 97654-3210",
      status: "Ativo",
      avatar: "MS"
    },
    {
      id: 3,
      name: "Lucas Ferreira Costa",
      role: "Doutorando",
      group: "Segurança Cibernética",
      email: "lucas.costa@universidade.br",
      phone: "(31) 96543-2109",
      status: "Ativo",
      avatar: "LC"
    },
    {
      id: 4,
      name: "Ana Carolina Lima",
      role: "Pós-Doutoranda",
      group: "IA e Machine Learning",
      email: "ana.lima@universidade.br",
      phone: "(41) 95432-1098",
      status: "Ativo",
      avatar: "AL"
    },
    {
      id: 5,
      name: "Rafael Henrique Souza",
      role: "Mestrando",
      group: "Blockchain e Criptomoedas",
      email: "rafael.souza@universidade.br",
      phone: "(51) 94321-0987",
      status: "Em Licença",
      avatar: "RS"
    },
    {
      id: 6,
      name: "Beatriz Almeida Rocha",
      role: "Doutoranda",
      group: "Segurança Cibernética",
      email: "beatriz.rocha@universidade.br",
      phone: "(61) 93210-9876",
      status: "Ativo",
      avatar: "BR"
    },
  ];

  const filteredParticipants = participants.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.group.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-full overflow-auto p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-white mb-2">Participantes</h1>
        <p className="text-[#8b96a5]">Gerencie os participantes dos grupos de pesquisa</p>
      </div>

      {/* Actions Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8b96a5]" />
          <input
            type="text"
            placeholder="Buscar por nome, grupo ou função..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-[#0d1f30] rounded-xl border border-[#3d4f62]/30 text-white placeholder-[#8b96a5] shadow-[inset_2px_2px_4px_#050c14] focus:outline-none focus:border-[#ff8c42]/50"
          />
        </div>

        {/* New Participant Button */}
        <button className="px-6 py-3 bg-gradient-to-r from-[#ff8c42] to-[#f94c10] text-white rounded-xl shadow-[0_4px_12px_rgba(255,140,66,0.3)] hover:shadow-[0_6px_16px_rgba(255,140,66,0.5)] transition-all duration-300 flex items-center gap-2 font-medium">
          <Plus className="w-5 h-5" />
          <span>Novo Participante</span>
        </button>
      </div>

      {/* Participants Table */}
      <div className="bg-[#0d1f30] rounded-2xl border border-[#3d4f62]/30 shadow-[6px_6px_16px_#050c14,-6px_-6px_16px_#0f2638] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#3d4f62]/30">
                <th className="text-left px-6 py-4 text-sm font-medium text-[#8b96a5]">Participante</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-[#8b96a5]">Função</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-[#8b96a5]">Grupo</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-[#8b96a5]">Contato</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-[#8b96a5]">Status</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-[#8b96a5]">Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredParticipants.map((participant, index) => (
                <tr 
                  key={participant.id}
                  className={`border-b border-[#3d4f62]/30 hover:bg-[#0a1929]/50 transition-colors ${
                    index === filteredParticipants.length - 1 ? 'border-b-0' : ''
                  }`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff8c42] to-[#f94c10] flex items-center justify-center shadow-lg">
                        <span className="text-white text-sm font-semibold">{participant.avatar}</span>
                      </div>
                      <div>
                        <div className="text-white font-medium">{participant.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-[#8b96a5]">
                      <BookOpen className="w-4 h-4" />
                      <span>{participant.role}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-[#8b96a5]">{participant.group}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-[#8b96a5]">
                        <Mail className="w-3 h-3" />
                        <span>{participant.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#8b96a5]">
                        <Phone className="w-3 h-3" />
                        <span>{participant.phone}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      participant.status === "Ativo" 
                        ? "bg-[#10b981]/20 text-[#10b981]" 
                        : "bg-[#ff8c42]/20 text-[#ff8c42]"
                    }`}>
                      {participant.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-2 hover:bg-[#3d4f62]/20 rounded-lg transition-colors">
                      <MoreVertical className="w-5 h-5 text-[#8b96a5]" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Empty State */}
      {filteredParticipants.length === 0 && (
        <div className="text-center py-12">
          <UserCheck className="w-16 h-16 text-[#3d4f62] mx-auto mb-4" />
          <p className="text-[#8b96a5]">Nenhum participante encontrado</p>
        </div>
      )}
    </div>
  );
}
