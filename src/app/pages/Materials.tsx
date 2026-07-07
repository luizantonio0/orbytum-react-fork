import { Box, Plus, Search, Package, AlertCircle } from "lucide-react";
import { useState } from "react";

export function Materials() {
  const [searchTerm, setSearchTerm] = useState("");

  const materials = [
    {
      id: 1,
      name: "Servidor GPU NVIDIA A100",
      group: "IA e Machine Learning",
      quantity: 2,
      status: "Disponível",
      location: "Laboratório 3A",
      category: "Computação",
      acquisitionDate: "2024-01-20"
    },
    {
      id: 2,
      name: "Computador Quântico IBM",
      group: "Computação Quântica",
      quantity: 1,
      status: "Em Uso",
      location: "Laboratório Especial",
      category: "Equipamento Especializado",
      acquisitionDate: "2024-02-05"
    },
    {
      id: 3,
      name: "Kit Desenvolvimento Arduino",
      group: "Segurança Cibernética",
      quantity: 15,
      status: "Disponível",
      location: "Almoxarifado B",
      category: "Eletrônica",
      acquisitionDate: "2023-12-10"
    },
    {
      id: 4,
      name: "Raspberry Pi 5",
      group: "Blockchain e Criptomoedas",
      quantity: 10,
      status: "Em Uso",
      location: "Laboratório 2B",
      category: "Computação",
      acquisitionDate: "2024-03-15"
    },
    {
      id: 5,
      name: "Osciloscópio Digital",
      group: "Segurança Cibernética",
      quantity: 3,
      status: "Manutenção",
      location: "Manutenção",
      category: "Equipamento de Teste",
      acquisitionDate: "2023-11-25"
    },
    {
      id: 6,
      name: "Licenças MATLAB",
      group: "IA e Machine Learning",
      quantity: 20,
      status: "Disponível",
      location: "Software Virtual",
      category: "Software",
      acquisitionDate: "2024-01-10"
    },
  ];

  const filteredMaterials = materials.filter(m =>
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.group.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = {
    total: materials.length,
    available: materials.filter(m => m.status === "Disponível").length,
    inUse: materials.filter(m => m.status === "Em Uso").length,
    maintenance: materials.filter(m => m.status === "Manutenção").length,
  };

  return (
    <div className="h-full overflow-auto p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-white mb-2">Materiais e Equipamentos</h1>
        <p className="text-[#8b96a5]">Gerencie o inventário de materiais dos grupos</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-[#0d1f30] rounded-xl p-4 border border-[#3d4f62]/30 shadow-[4px_4px_12px_#050c14,-4px_-4px_12px_#0f2638]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#8b96a5] text-sm">Total</span>
            <Package className="w-5 h-5 text-[#4a9eff]" />
          </div>
          <div className="text-white text-2xl font-bold">{stats.total}</div>
        </div>

        <div className="bg-[#0d1f30] rounded-xl p-4 border border-[#3d4f62]/30 shadow-[4px_4px_12px_#050c14,-4px_-4px_12px_#0f2638]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#8b96a5] text-sm">Disponível</span>
            <Box className="w-5 h-5 text-[#10b981]" />
          </div>
          <div className="text-white text-2xl font-bold">{stats.available}</div>
        </div>

        <div className="bg-[#0d1f30] rounded-xl p-4 border border-[#3d4f62]/30 shadow-[4px_4px_12px_#050c14,-4px_-4px_12px_#0f2638]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#8b96a5] text-sm">Em Uso</span>
            <Box className="w-5 h-5 text-[#ff8c42]" />
          </div>
          <div className="text-white text-2xl font-bold">{stats.inUse}</div>
        </div>

        <div className="bg-[#0d1f30] rounded-xl p-4 border border-[#3d4f62]/30 shadow-[4px_4px_12px_#050c14,-4px_-4px_12px_#0f2638]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#8b96a5] text-sm">Manutenção</span>
            <AlertCircle className="w-5 h-5 text-[#f59e0b]" />
          </div>
          <div className="text-white text-2xl font-bold">{stats.maintenance}</div>
        </div>
      </div>

      {/* Actions Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8b96a5]" />
          <input
            type="text"
            placeholder="Buscar materiais, grupos ou categorias..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-[#0d1f30] rounded-xl border border-[#3d4f62]/30 text-white placeholder-[#8b96a5] shadow-[inset_2px_2px_4px_#050c14] focus:outline-none focus:border-[#ff8c42]/50"
          />
        </div>

        {/* New Material Button */}
        <button className="px-6 py-3 bg-gradient-to-r from-[#ff8c42] to-[#f94c10] text-white rounded-xl shadow-[0_4px_12px_rgba(255,140,66,0.3)] hover:shadow-[0_6px_16px_rgba(255,140,66,0.5)] transition-all duration-300 flex items-center gap-2 font-medium">
          <Plus className="w-5 h-5" />
          <span>Novo Material</span>
        </button>
      </div>

      {/* Materials Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredMaterials.map((material) => (
          <div
            key={material.id}
            className="bg-[#0d1f30] rounded-2xl p-6 border border-[#3d4f62]/30 shadow-[6px_6px_16px_#050c14,-6px_-6px_16px_#0f2638] hover:shadow-[inset_2px_2px_6px_#050c14,inset_-2px_-2px_6px_#0f2638] transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff8c42] to-[#f94c10] flex items-center justify-center shadow-lg flex-shrink-0">
                <Box className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold mb-1 truncate">{material.name}</h3>
                <p className="text-sm text-[#8b96a5] truncate">{material.group}</p>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#8b96a5]">Categoria</span>
                <span className="text-sm text-white">{material.category}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#8b96a5]">Quantidade</span>
                <span className="text-sm font-semibold text-[#ff8c42]">{material.quantity} un.</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#8b96a5]">Localização</span>
                <span className="text-sm text-white truncate ml-2">{material.location}</span>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-[#3d4f62]/30">
              <span className="text-xs text-[#8b96a5]">
                Adq: {new Date(material.acquisitionDate).toLocaleDateString('pt-BR')}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                material.status === "Disponível" 
                  ? "bg-[#10b981]/20 text-[#10b981]" 
                  : material.status === "Em Uso"
                  ? "bg-[#ff8c42]/20 text-[#ff8c42]"
                  : "bg-[#f59e0b]/20 text-[#f59e0b]"
              }`}>
                {material.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredMaterials.length === 0 && (
        <div className="text-center py-12 bg-[#0d1f30] rounded-2xl border border-[#3d4f62]/30">
          <Box className="w-16 h-16 text-[#3d4f62] mx-auto mb-4" />
          <p className="text-[#8b96a5]">Nenhum material encontrado</p>
        </div>
      )}
    </div>
  );
}
