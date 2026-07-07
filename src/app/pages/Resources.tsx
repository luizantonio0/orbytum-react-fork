import { Hexagon, Plus, TrendingUp, TrendingDown, DollarSign } from "lucide-react";

export function Resources() {
  const resources = [
    {
      id: 1,
      group: "IA e Machine Learning",
      allocated: 45000,
      spent: 32500,
      remaining: 12500,
      category: "Equipamentos",
      date: "2024-01-15"
    },
    {
      id: 2,
      group: "Computação Quântica",
      allocated: 67000,
      spent: 28000,
      remaining: 39000,
      category: "Pesquisa",
      date: "2024-02-01"
    },
    {
      id: 3,
      group: "Segurança Cibernética",
      allocated: 38000,
      spent: 35200,
      remaining: 2800,
      category: "Software",
      date: "2023-11-20"
    },
    {
      id: 4,
      group: "Blockchain e Criptomoedas",
      allocated: 52000,
      spent: 8500,
      remaining: 43500,
      category: "Infraestrutura",
      date: "2024-03-10"
    },
  ];

  const totalAllocated = resources.reduce((acc, r) => acc + r.allocated, 0);
  const totalSpent = resources.reduce((acc, r) => acc + r.spent, 0);
  const totalRemaining = resources.reduce((acc, r) => acc + r.remaining, 0);

  return (
    <div className="h-full overflow-auto p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-white mb-2">Recursos Financeiros</h1>
        <p className="text-[#8b96a5]">Acompanhe a alocação e utilização de recursos</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-[#0d1f30] rounded-2xl p-6 border border-[#3d4f62]/30 shadow-[6px_6px_16px_#050c14,-6px_-6px_16px_#0f2638]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4a9eff] to-[#2e7dd4] flex items-center justify-center shadow-lg">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-[#8b96a5] text-sm">Total Alocado</p>
              <h3 className="text-white text-xl font-bold">
                R$ {(totalAllocated / 1000).toFixed(0)}k
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs text-[#8b96a5]">
            <span>4 grupos ativos</span>
          </div>
        </div>

        <div className="bg-[#0d1f30] rounded-2xl p-6 border border-[#3d4f62]/30 shadow-[6px_6px_16px_#050c14,-6px_-6px_16px_#0f2638]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff8c42] to-[#f94c10] flex items-center justify-center shadow-lg">
              <TrendingDown className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-[#8b96a5] text-sm">Total Utilizado</p>
              <h3 className="text-white text-xl font-bold">
                R$ {(totalSpent / 1000).toFixed(0)}k
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs text-[#ff8c42]">
            <span>{((totalSpent / totalAllocated) * 100).toFixed(1)}% do orçamento</span>
          </div>
        </div>

        <div className="bg-[#0d1f30] rounded-2xl p-6 border border-[#3d4f62]/30 shadow-[6px_6px_16px_#050c14,-6px_-6px_16px_#0f2638]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-[#8b96a5] text-sm">Saldo Disponível</p>
              <h3 className="text-white text-xl font-bold">
                R$ {(totalRemaining / 1000).toFixed(0)}k
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs text-[#10b981]">
            <span>{((totalRemaining / totalAllocated) * 100).toFixed(1)}% disponível</span>
          </div>
        </div>
      </div>

      {/* Resources Table */}
      <div className="bg-[#0d1f30] rounded-2xl border border-[#3d4f62]/30 shadow-[6px_6px_16px_#050c14,-6px_-6px_16px_#0f2638] overflow-hidden">
        <div className="p-6 border-b border-[#3d4f62]/30 flex items-center justify-between">
          <h2 className="text-white">Alocação por Grupo</h2>
          <button className="px-4 py-2 bg-gradient-to-r from-[#ff8c42] to-[#f94c10] text-white rounded-lg shadow-[0_4px_12px_rgba(255,140,66,0.3)] hover:shadow-[0_6px_16px_rgba(255,140,66,0.5)] transition-all duration-300 flex items-center gap-2 text-sm font-medium">
            <Plus className="w-4 h-4" />
            <span>Nova Alocação</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#3d4f62]/30">
                <th className="text-left px-6 py-4 text-sm font-medium text-[#8b96a5]">Grupo</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-[#8b96a5]">Categoria</th>
                <th className="text-right px-6 py-4 text-sm font-medium text-[#8b96a5]">Alocado</th>
                <th className="text-right px-6 py-4 text-sm font-medium text-[#8b96a5]">Utilizado</th>
                <th className="text-right px-6 py-4 text-sm font-medium text-[#8b96a5]">Saldo</th>
                <th className="text-center px-6 py-4 text-sm font-medium text-[#8b96a5]">Utilização</th>
              </tr>
            </thead>
            <tbody>
              {resources.map((resource, index) => {
                const utilizationPercent = (resource.spent / resource.allocated) * 100;
                
                return (
                  <tr 
                    key={resource.id}
                    className={`border-b border-[#3d4f62]/30 hover:bg-[#0a1929]/50 transition-colors ${
                      index === resources.length - 1 ? 'border-b-0' : ''
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff8c42] to-[#f94c10] flex items-center justify-center shadow-lg">
                          <Hexagon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-white font-medium">{resource.group}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#4a9eff]/20 text-[#4a9eff]">
                        {resource.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right text-white">
                      R$ {resource.allocated.toLocaleString('pt-BR')}
                    </td>
                    <td className="px-6 py-4 text-right text-[#ff8c42]">
                      R$ {resource.spent.toLocaleString('pt-BR')}
                    </td>
                    <td className="px-6 py-4 text-right text-[#10b981]">
                      R$ {resource.remaining.toLocaleString('pt-BR')}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-full max-w-[120px] h-2 bg-[#0a1929] rounded-full overflow-hidden shadow-[inset_2px_2px_4px_#050c14]">
                          <div 
                            className={`h-full rounded-full transition-all duration-300 ${
                              utilizationPercent > 80 
                                ? 'bg-gradient-to-r from-[#ff8c42] to-[#f94c10]' 
                                : 'bg-gradient-to-r from-[#10b981] to-[#059669]'
                            }`}
                            style={{ width: `${utilizationPercent}%` }}
                          />
                        </div>
                        <span className="text-xs text-[#8b96a5]">
                          {utilizationPercent.toFixed(1)}%
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
