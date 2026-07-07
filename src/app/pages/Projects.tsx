import { FolderKanban, Plus, Search, Clock, CheckCircle, AlertCircle, Circle } from "lucide-react";
import { useState } from "react";

export function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Desenvolvimento de Modelo de Deep Learning",
      group: "IA e Machine Learning",
      responsible: "João Pedro Oliveira",
      status: "Em Andamento",
      priority: "Alta",
      startDate: "2024-03-01",
      endDate: "2024-04-30",
      progress: 65
    },
    {
      id: 2,
      title: "Análise de Algoritmos Quânticos",
      group: "Computação Quântica",
      responsible: "Maria Eduarda Santos",
      status: "Planejada",
      priority: "Média",
      startDate: "2024-04-10",
      endDate: "2024-06-15",
      progress: 0
    },
    {
      id: 3,
      title: "Auditoria de Segurança em Redes",
      group: "Segurança Cibernética",
      responsible: "Lucas Ferreira Costa",
      status: "Em Andamento",
      priority: "Alta",
      startDate: "2024-02-15",
      endDate: "2024-04-15",
      progress: 80
    },
    {
      id: 4,
      title: "Implementação de Smart Contracts",
      group: "Blockchain e Criptomoedas",
      responsible: "Rafael Henrique Souza",
      status: "Concluída",
      priority: "Média",
      startDate: "2024-01-10",
      endDate: "2024-03-10",
      progress: 100
    },
    {
      id: 5,
      title: "Otimização de Modelos de Linguagem",
      group: "IA e Machine Learning",
      responsible: "Ana Carolina Lima",
      status: "Em Andamento",
      priority: "Alta",
      startDate: "2024-03-15",
      endDate: "2024-05-20",
      progress: 45
    },
    {
      id: 6,
      title: "Testes de Penetração",
      group: "Segurança Cibernética",
      responsible: "Beatriz Almeida Rocha",
      status: "Atrasada",
      priority: "Alta",
      startDate: "2024-02-01",
      endDate: "2024-03-30",
      progress: 55
    },
  ];

  const filteredProjects = projects.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         p.group.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         p.responsible.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || p.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const stats = {
    total: projects.length,
    inProgress: projects.filter(p => p.status === "Em Andamento").length,
    completed: projects.filter(p => p.status === "Concluída").length,
    delayed: projects.filter(p => p.status === "Atrasada").length,
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Concluída": return <CheckCircle className="w-5 h-5 text-[#10b981]" />;
      case "Em Andamento": return <Clock className="w-5 h-5 text-[#ff8c42]" />;
      case "Atrasada": return <AlertCircle className="w-5 h-5 text-[#ef4444]" />;
      default: return <Circle className="w-5 h-5 text-[#8b96a5]" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Concluída": return "bg-[#10b981]/20 text-[#10b981]";
      case "Em Andamento": return "bg-[#ff8c42]/20 text-[#ff8c42]";
      case "Atrasada": return "bg-[#ef4444]/20 text-[#ef4444]";
      default: return "bg-[#8b96a5]/20 text-[#8b96a5]";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Alta": return "bg-[#ef4444]/20 text-[#ef4444]";
      case "Média": return "bg-[#f59e0b]/20 text-[#f59e0b]";
      default: return "bg-[#10b981]/20 text-[#10b981]";
    }
  };

  return (
    <div className="h-full overflow-auto p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-white mb-2">Projetos</h1>
        <p className="text-[#8b96a5]">Acompanhe o progresso dos projetos dos grupos</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-[#0d1f30] rounded-xl p-4 border border-[#3d4f62]/30 shadow-[4px_4px_12px_#050c14,-4px_-4px_12px_#0f2638]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#8b96a5] text-sm">Total</span>
            <FolderKanban className="w-5 h-5 text-[#4a9eff]" />
          </div>
          <div className="text-white text-2xl font-bold">{stats.total}</div>
        </div>

        <div className="bg-[#0d1f30] rounded-xl p-4 border border-[#3d4f62]/30 shadow-[4px_4px_12px_#050c14,-4px_-4px_12px_#0f2638]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#8b96a5] text-sm">Em Andamento</span>
            <Clock className="w-5 h-5 text-[#ff8c42]" />
          </div>
          <div className="text-white text-2xl font-bold">{stats.inProgress}</div>
        </div>

        <div className="bg-[#0d1f30] rounded-xl p-4 border border-[#3d4f62]/30 shadow-[4px_4px_12px_#050c14,-4px_-4px_12px_#0f2638]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#8b96a5] text-sm">Concluídas</span>
            <CheckCircle className="w-5 h-5 text-[#10b981]" />
          </div>
          <div className="text-white text-2xl font-bold">{stats.completed}</div>
        </div>

        <div className="bg-[#0d1f30] rounded-xl p-4 border border-[#3d4f62]/30 shadow-[4px_4px_12px_#050c14,-4px_-4px_12px_#0f2638]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#8b96a5] text-sm">Atrasadas</span>
            <AlertCircle className="w-5 h-5 text-[#ef4444]" />
          </div>
          <div className="text-white text-2xl font-bold">{stats.delayed}</div>
        </div>
      </div>

      {/* Actions Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8b96a5]" />
          <input
            type="text"
            placeholder="Buscar projetos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-[#0d1f30] rounded-xl border border-[#3d4f62]/30 text-white placeholder-[#8b96a5] shadow-[inset_2px_2px_4px_#050c14] focus:outline-none focus:border-[#ff8c42]/50"
          />
        </div>

        {/* Filter */}
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-3 bg-[#0d1f30] rounded-xl border border-[#3d4f62]/30 text-white shadow-[inset_2px_2px_4px_#050c14] focus:outline-none focus:border-[#ff8c42]/50"
        >
          <option value="all">Todos os Status</option>
          <option value="Em Andamento">Em Andamento</option>
          <option value="Planejada">Planejadas</option>
          <option value="Concluída">Concluídas</option>
          <option value="Atrasada">Atrasadas</option>
        </select>

        {/* New Project Button */}
        <button className="px-6 py-3 bg-gradient-to-r from-[#ff8c42] to-[#f94c10] text-white rounded-xl shadow-[0_4px_12px_rgba(255,140,66,0.3)] hover:shadow-[0_6px_16px_rgba(255,140,66,0.5)] transition-all duration-300 flex items-center gap-2 font-medium">
          <Plus className="w-5 h-5" />
          <span>Novo Projeto</span>
        </button>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-[#0d1f30] rounded-2xl p-6 border border-[#3d4f62]/30 shadow-[6px_6px_16px_#050c14,-6px_-6px_16px_#0f2638] hover:shadow-[inset_2px_2px_6px_#050c14,inset_-2px_-2px_6px_#0f2638] transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              {/* Project Info */}
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-3">
                  {getStatusIcon(project.status)}
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-1">{project.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-[#8b96a5]">
                      <span>{project.group}</span>
                      <span>•</span>
                      <span>{project.responsible}</span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[#8b96a5]">Progresso</span>
                    <span className="text-xs text-[#ff8c42] font-semibold">{project.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-[#0a1929] rounded-full overflow-hidden shadow-[inset_2px_2px_4px_#050c14]">
                    <div
                      className="h-full bg-gradient-to-r from-[#ff8c42] to-[#f94c10] rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Project Meta */}
              <div className="flex flex-wrap lg:flex-col items-start gap-3 lg:items-end">
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
                    {project.priority}
                  </span>
                </div>
                <div className="text-xs text-[#8b96a5]">
                  {new Date(project.startDate).toLocaleDateString('pt-BR')} - {new Date(project.endDate).toLocaleDateString('pt-BR')}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12 bg-[#0d1f30] rounded-2xl border border-[#3d4f62]/30">
          <FolderKanban className="w-16 h-16 text-[#3d4f62] mx-auto mb-4" />
          <p className="text-[#8b96a5]">Nenhum projeto encontrado</p>
        </div>
      )}
    </div>
  );
}
