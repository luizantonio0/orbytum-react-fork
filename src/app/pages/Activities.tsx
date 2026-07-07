import { ListTodo, Plus, Search, Calendar, FolderKanban, CheckCircle, Circle, Clock, AlertCircle } from "lucide-react";
import { useState } from "react";

export function Activities() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterProject, setFilterProject] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const projects = [
    { id: 1, name: "Desenvolvimento de Modelo de Deep Learning" },
    { id: 2, name: "Análise de Algoritmos Quânticos" },
    { id: 3, name: "Auditoria de Segurança em Redes" },
    { id: 4, name: "Implementação de Smart Contracts" },
  ];

  const activities = [
    {
      id: 1,
      name: "Coleta de Dataset de Imagens",
      description: "Realizar a coleta e curadoria de 10.000 imagens para treinamento do modelo de classificação",
      dueDate: "2024-04-15",
      projectId: 1,
      projectName: "Desenvolvimento de Modelo de Deep Learning",
      status: "Em Andamento",
      completedDate: null
    },
    {
      id: 2,
      name: "Implementação da Arquitetura CNN",
      description: "Desenvolver a arquitetura da rede neural convolucional baseada em ResNet",
      dueDate: "2024-04-20",
      projectId: 1,
      projectName: "Desenvolvimento de Modelo de Deep Learning",
      status: "Pendente",
      completedDate: null
    },
    {
      id: 3,
      name: "Treinamento do Modelo",
      description: "Treinar o modelo com os hiperparâmetros definidos e validar accuracy mínima de 85%",
      dueDate: "2024-04-30",
      projectId: 1,
      projectName: "Desenvolvimento de Modelo de Deep Learning",
      status: "Pendente",
      completedDate: null
    },
    {
      id: 4,
      name: "Revisão Bibliográfica sobre Qubits",
      description: "Compilar e analisar papers recentes sobre implementações de qubits topológicos",
      dueDate: "2024-04-12",
      projectId: 2,
      projectName: "Análise de Algoritmos Quânticos",
      status: "Concluída",
      completedDate: "2024-04-10"
    },
    {
      id: 5,
      name: "Simulação de Algoritmo de Shor",
      description: "Implementar simulação do algoritmo de Shor para fatoração de números primos",
      dueDate: "2024-05-01",
      projectId: 2,
      projectName: "Análise de Algoritmos Quânticos",
      status: "Em Andamento",
      completedDate: null
    },
    {
      id: 6,
      name: "Análise de Complexidade",
      description: "Comparar complexidade temporal e espacial com algoritmos clássicos equivalentes",
      dueDate: "2024-05-15",
      projectId: 2,
      projectName: "Análise de Algoritmos Quânticos",
      status: "Pendente",
      completedDate: null
    },
    {
      id: 7,
      name: "Scan de Vulnerabilidades",
      description: "Executar scan automatizado em todos os servidores da infraestrutura de rede",
      dueDate: "2024-04-08",
      projectId: 3,
      projectName: "Auditoria de Segurança em Redes",
      status: "Atrasada",
      completedDate: null
    },
    {
      id: 8,
      name: "Análise de Logs de Segurança",
      description: "Revisar logs dos últimos 3 meses identificando padrões suspeitos",
      dueDate: "2024-04-18",
      projectId: 3,
      projectName: "Auditoria de Segurança em Redes",
      status: "Em Andamento",
      completedDate: null
    },
    {
      id: 9,
      name: "Relatório de Recomendações",
      description: "Elaborar relatório técnico com recomendações de melhorias de segurança",
      dueDate: "2024-04-25",
      projectId: 3,
      projectName: "Auditoria de Segurança em Redes",
      status: "Pendente",
      completedDate: null
    },
    {
      id: 10,
      name: "Deploy do Contrato ERC-721",
      description: "Realizar deploy e verificação do contrato de NFT na testnet Sepolia",
      dueDate: "2024-03-25",
      projectId: 4,
      projectName: "Implementação de Smart Contracts",
      status: "Concluída",
      completedDate: "2024-03-24"
    },
    {
      id: 11,
      name: "Testes de Integração",
      description: "Executar suite completa de testes incluindo edge cases e security tests",
      dueDate: "2024-03-28",
      projectId: 4,
      projectName: "Implementação de Smart Contracts",
      status: "Concluída",
      completedDate: "2024-03-27"
    },
  ];

  const filteredActivities = activities.filter(a => {
    const matchesSearch = a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         a.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         a.projectName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProject = filterProject === "all" || a.projectId === parseInt(filterProject);
    const matchesStatus = filterStatus === "all" || a.status === filterStatus;
    return matchesSearch && matchesProject && matchesStatus;
  });

  const stats = {
    total: activities.length,
    pending: activities.filter(a => a.status === "Pendente").length,
    inProgress: activities.filter(a => a.status === "Em Andamento").length,
    completed: activities.filter(a => a.status === "Concluída").length,
    delayed: activities.filter(a => a.status === "Atrasada").length,
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

  const isOverdue = (dueDate: string, status: string) => {
    if (status === "Concluída") return false;
    return new Date(dueDate) < new Date();
  };

  return (
    <div className="h-full overflow-auto p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-white mb-2">Atividades</h1>
        <p className="text-[#8b96a5]">Gerencie as atividades dos projetos em andamento</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <div className="bg-[#0d1f30] rounded-xl p-4 border border-[#3d4f62]/30 shadow-[4px_4px_12px_#050c14,-4px_-4px_12px_#0f2638]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#8b96a5] text-sm">Total</span>
            <ListTodo className="w-5 h-5 text-[#4a9eff]" />
          </div>
          <div className="text-white text-2xl font-bold">{stats.total}</div>
        </div>

        <div className="bg-[#0d1f30] rounded-xl p-4 border border-[#3d4f62]/30 shadow-[4px_4px_12px_#050c14,-4px_-4px_12px_#0f2638]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#8b96a5] text-sm">Pendentes</span>
            <Circle className="w-5 h-5 text-[#8b96a5]" />
          </div>
          <div className="text-white text-2xl font-bold">{stats.pending}</div>
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
            placeholder="Buscar atividades..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-[#0d1f30] rounded-xl border border-[#3d4f62]/30 text-white placeholder-[#8b96a5] shadow-[inset_2px_2px_4px_#050c14] focus:outline-none focus:border-[#ff8c42]/50"
          />
        </div>

        {/* Filter by Project */}
        <select
          value={filterProject}
          onChange={(e) => setFilterProject(e.target.value)}
          className="px-4 py-3 bg-[#0d1f30] rounded-xl border border-[#3d4f62]/30 text-white shadow-[inset_2px_2px_4px_#050c14] focus:outline-none focus:border-[#ff8c42]/50"
        >
          <option value="all">Todos os Projetos</option>
          {projects.map(project => (
            <option key={project.id} value={project.id}>{project.name}</option>
          ))}
        </select>

        {/* Filter by Status */}
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-3 bg-[#0d1f30] rounded-xl border border-[#3d4f62]/30 text-white shadow-[inset_2px_2px_4px_#050c14] focus:outline-none focus:border-[#ff8c42]/50"
        >
          <option value="all">Todos os Status</option>
          <option value="Pendente">Pendentes</option>
          <option value="Em Andamento">Em Andamento</option>
          <option value="Concluída">Concluídas</option>
          <option value="Atrasada">Atrasadas</option>
        </select>

        {/* New Activity Button */}
        <button className="px-6 py-3 bg-gradient-to-r from-[#ff8c42] to-[#f94c10] text-white rounded-xl shadow-[0_4px_12px_rgba(255,140,66,0.3)] hover:shadow-[0_6px_16px_rgba(255,140,66,0.5)] transition-all duration-300 flex items-center gap-2 font-medium">
          <Plus className="w-5 h-5" />
          <span>Nova Atividade</span>
        </button>
      </div>

      {/* Activities List */}
      <div className="space-y-4">
        {filteredActivities.map((activity) => (
          <div
            key={activity.id}
            className="bg-[#0d1f30] rounded-2xl p-6 border border-[#3d4f62]/30 shadow-[6px_6px_16px_#050c14,-6px_-6px_16px_#0f2638] hover:shadow-[inset_2px_2px_6px_#050c14,inset_-2px_-2px_6px_#0f2638] transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row lg:items-start gap-4">
              {/* Activity Info */}
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-3">
                  {getStatusIcon(activity.status)}
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-1">{activity.name}</h3>
                    <p className="text-sm text-[#8b96a5] mb-2">{activity.description}</p>
                    <div className="flex items-center gap-2">
                      <FolderKanban className="w-4 h-4 text-[#4a9eff]" />
                      <span className="text-xs text-[#8b96a5]">{activity.projectName}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Activity Meta */}
              <div className="flex flex-col items-start lg:items-end gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                  {activity.status}
                </span>

                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#8b96a5]" />
                  <div className="text-xs">
                    <span className="text-[#8b96a5]">Entrega: </span>
                    <span className={`font-medium ${
                      isOverdue(activity.dueDate, activity.status)
                        ? "text-[#ef4444]"
                        : "text-white"
                    }`}>
                      {new Date(activity.dueDate).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                </div>

                {activity.completedDate && (
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#10b981]" />
                    <div className="text-xs">
                      <span className="text-[#8b96a5]">Concluída em: </span>
                      <span className="text-[#10b981] font-medium">
                        {new Date(activity.completedDate).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredActivities.length === 0 && (
        <div className="text-center py-12 bg-[#0d1f30] rounded-2xl border border-[#3d4f62]/30">
          <ListTodo className="w-16 h-16 text-[#3d4f62] mx-auto mb-4" />
          <p className="text-[#8b96a5]">Nenhuma atividade encontrada</p>
        </div>
      )}
    </div>
  );
}
