import { FileText, Plus, Search, DollarSign, Laptop, Cpu, CheckCircle, XCircle, Clock, AlertCircle } from "lucide-react";
import { useState } from "react";

export function ResourceRequests() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const requests = [
    {
      id: 1,
      title: "Verba para Participação em Conferência",
      type: "Financeiro",
      description: "Solicitação de recursos para inscrição e passagens para a NeurIPS 2024 em Vancouver",
      amount: "R$ 12.500,00",
      quantity: null,
      requestedBy: "João Pedro Oliveira",
      group: "IA e Machine Learning",
      project: "Desenvolvimento de Modelo de Deep Learning",
      status: "Em Análise",
      requestDate: "2024-04-01",
      responseDate: null,
      justification: "Apresentação de artigo aceito sobre arquiteturas de deep learning para classificação de imagens médicas"
    },
    {
      id: 2,
      title: "Estação de Trabalho GPU",
      type: "Equipamento",
      description: "Workstation com GPU NVIDIA RTX 4090 para treinamento de modelos",
      amount: "R$ 28.000,00",
      quantity: "1 unidade",
      requestedBy: "Ana Carolina Lima",
      group: "IA e Machine Learning",
      project: "Otimização de Modelos de Linguagem",
      status: "Aprovada",
      requestDate: "2024-03-15",
      responseDate: "2024-03-20",
      justification: "Necessário para acelerar treinamento de LLMs, reduzindo tempo de iteração de 48h para 6h"
    },
    {
      id: 3,
      title: "Componentes para Prototipagem",
      type: "Material",
      description: "Kit de componentes eletrônicos: microcontroladores, sensores e atuadores",
      amount: "R$ 3.200,00",
      quantity: "1 kit completo",
      requestedBy: "Rafael Henrique Souza",
      group: "Blockchain e Criptomoedas",
      project: "Implementação de Smart Contracts",
      status: "Aprovada",
      requestDate: "2024-03-25",
      responseDate: "2024-03-28",
      justification: "Desenvolvimento de hardware wallet para demonstração prática do projeto"
    },
    {
      id: 4,
      title: "Licença Anual Qiskit Premium",
      type: "Financeiro",
      description: "Licença de software para simulação quântica avançada",
      amount: "R$ 8.500,00",
      quantity: "1 licença",
      requestedBy: "Maria Eduarda Santos",
      group: "Computação Quântica",
      project: "Análise de Algoritmos Quânticos",
      status: "Pendente",
      requestDate: "2024-04-05",
      responseDate: null,
      justification: "Necessário para simulação de circuitos quânticos com mais de 30 qubits"
    },
    {
      id: 5,
      title: "Notebooks para Laboratório",
      type: "Equipamento",
      description: "3 notebooks Dell Precision 5570 para equipe de pesquisadores",
      amount: "R$ 45.000,00",
      quantity: "3 unidades",
      requestedBy: "Lucas Ferreira Costa",
      group: "Segurança Cibernética",
      project: "Auditoria de Segurança em Redes",
      status: "Rejeitada",
      requestDate: "2024-03-10",
      responseDate: "2024-03-18",
      justification: "Equipamentos atuais insuficientes para executar ferramentas de pentesting modernas"
    },
    {
      id: 6,
      title: "Servidor de Testes",
      type: "Equipamento",
      description: "Servidor Dell PowerEdge para ambiente de testes isolado",
      amount: "R$ 22.000,00",
      quantity: "1 unidade",
      requestedBy: "Beatriz Almeida Rocha",
      group: "Segurança Cibernética",
      project: "Testes de Penetração",
      status: "Em Análise",
      requestDate: "2024-04-03",
      responseDate: null,
      justification: "Necessário para realizar testes destrutivos sem comprometer infraestrutura de produção"
    },
    {
      id: 7,
      title: "Kits de Desenvolvimento FPGA",
      type: "Material",
      description: "Placas FPGA Xilinx Artix-7 para implementação de circuitos",
      amount: "R$ 6.800,00",
      quantity: "2 unidades",
      requestedBy: "Maria Eduarda Santos",
      group: "Computação Quântica",
      project: "Análise de Algoritmos Quânticos",
      status: "Pendente",
      requestDate: "2024-04-06",
      responseDate: null,
      justification: "Implementação de simuladores quânticos em hardware reconfigurável"
    },
    {
      id: 8,
      title: "Bolsas de Iniciação Científica",
      type: "Financeiro",
      description: "Recursos para 2 bolsas de IC por 12 meses",
      amount: "R$ 9.600,00",
      quantity: "2 bolsas",
      requestedBy: "Dr. Carlos Silva",
      group: "IA e Machine Learning",
      project: null,
      status: "Aprovada",
      requestDate: "2024-02-20",
      responseDate: "2024-03-01",
      justification: "Expansão da equipe para suportar 3 projetos simultâneos em andamento"
    },
  ];

  const filteredRequests = requests.filter(r => {
    const matchesSearch = r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         r.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         r.requestedBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         r.group.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || r.type === filterType;
    const matchesStatus = filterStatus === "all" || r.status === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  const stats = {
    total: requests.length,
    pending: requests.filter(r => r.status === "Pendente").length,
    inAnalysis: requests.filter(r => r.status === "Em Análise").length,
    approved: requests.filter(r => r.status === "Aprovada").length,
    rejected: requests.filter(r => r.status === "Rejeitada").length,
    totalAmount: requests
      .filter(r => r.status === "Aprovada")
      .reduce((sum, r) => {
        const value = parseFloat(r.amount.replace(/[^\d,]/g, '').replace(',', '.'));
        return sum + value;
      }, 0)
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Financeiro": return <DollarSign className="w-5 h-5" />;
      case "Equipamento": return <Laptop className="w-5 h-5" />;
      case "Material": return <Cpu className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Financeiro": return "bg-[#10b981]/20 text-[#10b981]";
      case "Equipamento": return "bg-[#4a9eff]/20 text-[#4a9eff]";
      case "Material": return "bg-[#7c3aed]/20 text-[#7c3aed]";
      default: return "bg-[#8b96a5]/20 text-[#8b96a5]";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Aprovada": return <CheckCircle className="w-5 h-5 text-[#10b981]" />;
      case "Rejeitada": return <XCircle className="w-5 h-5 text-[#ef4444]" />;
      case "Em Análise": return <Clock className="w-5 h-5 text-[#ff8c42]" />;
      default: return <AlertCircle className="w-5 h-5 text-[#8b96a5]" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Aprovada": return "bg-[#10b981]/20 text-[#10b981]";
      case "Rejeitada": return "bg-[#ef4444]/20 text-[#ef4444]";
      case "Em Análise": return "bg-[#ff8c42]/20 text-[#ff8c42]";
      default: return "bg-[#8b96a5]/20 text-[#8b96a5]";
    }
  };

  return (
    <div className="h-full overflow-auto p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-white mb-2">Solicitações de Recursos</h1>
        <p className="text-[#8b96a5]">Gerencie solicitações de verbas, equipamentos e materiais</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        <div className="bg-[#0d1f30] rounded-xl p-4 border border-[#3d4f62]/30 shadow-[4px_4px_12px_#050c14,-4px_-4px_12px_#0f2638]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#8b96a5] text-sm">Total</span>
            <FileText className="w-5 h-5 text-[#4a9eff]" />
          </div>
          <div className="text-white text-2xl font-bold">{stats.total}</div>
        </div>

        <div className="bg-[#0d1f30] rounded-xl p-4 border border-[#3d4f62]/30 shadow-[4px_4px_12px_#050c14,-4px_-4px_12px_#0f2638]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#8b96a5] text-sm">Pendentes</span>
            <AlertCircle className="w-5 h-5 text-[#8b96a5]" />
          </div>
          <div className="text-white text-2xl font-bold">{stats.pending}</div>
        </div>

        <div className="bg-[#0d1f30] rounded-xl p-4 border border-[#3d4f62]/30 shadow-[4px_4px_12px_#050c14,-4px_-4px_12px_#0f2638]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#8b96a5] text-sm">Em Análise</span>
            <Clock className="w-5 h-5 text-[#ff8c42]" />
          </div>
          <div className="text-white text-2xl font-bold">{stats.inAnalysis}</div>
        </div>

        <div className="bg-[#0d1f30] rounded-xl p-4 border border-[#3d4f62]/30 shadow-[4px_4px_12px_#050c14,-4px_-4px_12px_#0f2638]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#8b96a5] text-sm">Aprovadas</span>
            <CheckCircle className="w-5 h-5 text-[#10b981]" />
          </div>
          <div className="text-white text-2xl font-bold">{stats.approved}</div>
        </div>

        <div className="bg-[#0d1f30] rounded-xl p-4 border border-[#3d4f62]/30 shadow-[4px_4px_12px_#050c14,-4px_-4px_12px_#0f2638]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#8b96a5] text-sm">Rejeitadas</span>
            <XCircle className="w-5 h-5 text-[#ef4444]" />
          </div>
          <div className="text-white text-2xl font-bold">{stats.rejected}</div>
        </div>

        <div className="bg-[#0d1f30] rounded-xl p-4 border border-[#3d4f62]/30 shadow-[4px_4px_12px_#050c14,-4px_-4px_12px_#0f2638]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#8b96a5] text-sm">Aprovado</span>
            <DollarSign className="w-5 h-5 text-[#10b981]" />
          </div>
          <div className="text-white text-lg font-bold">
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(stats.totalAmount)}
          </div>
        </div>
      </div>

      {/* Actions Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8b96a5]" />
          <input
            type="text"
            placeholder="Buscar solicitações..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-[#0d1f30] rounded-xl border border-[#3d4f62]/30 text-white placeholder-[#8b96a5] shadow-[inset_2px_2px_4px_#050c14] focus:outline-none focus:border-[#ff8c42]/50"
          />
        </div>

        {/* Filter by Type */}
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-4 py-3 bg-[#0d1f30] rounded-xl border border-[#3d4f62]/30 text-white shadow-[inset_2px_2px_4px_#050c14] focus:outline-none focus:border-[#ff8c42]/50"
        >
          <option value="all">Todos os Tipos</option>
          <option value="Financeiro">Financeiro</option>
          <option value="Equipamento">Equipamento</option>
          <option value="Material">Material</option>
        </select>

        {/* Filter by Status */}
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-3 bg-[#0d1f30] rounded-xl border border-[#3d4f62]/30 text-white shadow-[inset_2px_2px_4px_#050c14] focus:outline-none focus:border-[#ff8c42]/50"
        >
          <option value="all">Todos os Status</option>
          <option value="Pendente">Pendentes</option>
          <option value="Em Análise">Em Análise</option>
          <option value="Aprovada">Aprovadas</option>
          <option value="Rejeitada">Rejeitadas</option>
        </select>

        {/* New Request Button */}
        <button className="px-6 py-3 bg-gradient-to-r from-[#ff8c42] to-[#f94c10] text-white rounded-xl shadow-[0_4px_12px_rgba(255,140,66,0.3)] hover:shadow-[0_6px_16px_rgba(255,140,66,0.5)] transition-all duration-300 flex items-center gap-2 font-medium">
          <Plus className="w-5 h-5" />
          <span>Nova Solicitação</span>
        </button>
      </div>

      {/* Requests List */}
      <div className="space-y-4">
        {filteredRequests.map((request) => (
          <div
            key={request.id}
            className="bg-[#0d1f30] rounded-2xl p-6 border border-[#3d4f62]/30 shadow-[6px_6px_16px_#050c14,-6px_-6px_16px_#0f2638] hover:shadow-[inset_2px_2px_6px_#050c14,inset_-2px_-2px_6px_#0f2638] transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Request Info */}
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-3">
                  <div className={`p-3 rounded-xl ${getTypeColor(request.type)}`}>
                    {getTypeIcon(request.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-white font-semibold">{request.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(request.type)}`}>
                        {request.type}
                      </span>
                    </div>
                    <p className="text-sm text-[#8b96a5] mb-3">{request.description}</p>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                      <div>
                        <span className="text-xs text-[#8b96a5]">Solicitante</span>
                        <p className="text-sm text-white">{request.requestedBy}</p>
                      </div>
                      <div>
                        <span className="text-xs text-[#8b96a5]">Grupo</span>
                        <p className="text-sm text-white">{request.group}</p>
                      </div>
                      <div>
                        <span className="text-xs text-[#8b96a5]">Valor</span>
                        <p className="text-sm text-[#ff8c42] font-semibold">{request.amount}</p>
                      </div>
                      {request.quantity && (
                        <div>
                          <span className="text-xs text-[#8b96a5]">Quantidade</span>
                          <p className="text-sm text-white">{request.quantity}</p>
                        </div>
                      )}
                    </div>

                    {/* Justification */}
                    <div className="bg-[#0a1929] rounded-lg p-3 border border-[#3d4f62]/30">
                      <span className="text-xs text-[#8b96a5] block mb-1">Justificativa</span>
                      <p className="text-sm text-white">{request.justification}</p>
                    </div>

                    {request.project && (
                      <div className="mt-2 text-xs text-[#8b96a5]">
                        Projeto: <span className="text-[#4a9eff]">{request.project}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Request Meta */}
              <div className="flex flex-col items-start lg:items-end gap-3 lg:min-w-[180px]">
                <div className={`flex items-center gap-2 px-3 py-2 rounded-full ${getStatusColor(request.status)}`}>
                  {getStatusIcon(request.status)}
                  <span className="text-sm font-medium">{request.status}</span>
                </div>

                <div className="text-xs text-[#8b96a5]">
                  Solicitado em:<br />
                  <span className="text-white font-medium">
                    {new Date(request.requestDate).toLocaleDateString('pt-BR')}
                  </span>
                </div>

                {request.responseDate && (
                  <div className="text-xs text-[#8b96a5]">
                    Respondido em:<br />
                    <span className="text-white font-medium">
                      {new Date(request.responseDate).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                )}

                {(request.status === "Pendente" || request.status === "Em Análise") && (
                  <div className="flex gap-2 mt-2">
                    <button className="px-4 py-2 bg-[#10b981]/20 text-[#10b981] rounded-lg hover:bg-[#10b981]/30 transition-colors text-xs font-medium">
                      Aprovar
                    </button>
                    <button className="px-4 py-2 bg-[#ef4444]/20 text-[#ef4444] rounded-lg hover:bg-[#ef4444]/30 transition-colors text-xs font-medium">
                      Rejeitar
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredRequests.length === 0 && (
        <div className="text-center py-12 bg-[#0d1f30] rounded-2xl border border-[#3d4f62]/30">
          <FileText className="w-16 h-16 text-[#3d4f62] mx-auto mb-4" />
          <p className="text-[#8b96a5]">Nenhuma solicitação encontrada</p>
        </div>
      )}
    </div>
  );
}
