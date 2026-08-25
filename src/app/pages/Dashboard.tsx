import { SolarSystem } from "../components/SolarSystem";
import { Users, UserCheck, Hexagon, Box, FolderKanban, TrendingUp } from "lucide-react";

export function Dashboard() {
  const stats = [
    { label: "Grupos Ativos", value: "12", icon: Users, color: "from-[#ff8c42] to-[#f94c10]" },
    { label: "Participantes", value: "48", icon: UserCheck, color: "from-[#4a9eff] to-[#2e7dd4]" },
    { label: "Recursos Alocados", value: "R$ 284k", icon: Hexagon, color: "from-[#7c3aed] to-[#5b21b6]" },
    { label: "Projetos Ativos", value: "23", icon: FolderKanban, color: "from-[#10b981] to-[#059669]" },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Stats Grid
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-[#0d1f30] rounded-2xl p-6 shadow-[6px_6px_16px_#050c14,-6px_-6px_16px_#0f2638] border border-[#3d4f62]/30 hover:shadow-[inset_2px_2px_6px_#050c14,inset_-2px_-2px_6px_#0f2638] transition-all duration-300 group"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[#8b96a5] text-sm mb-2">{stat.label}</p>
                <h3 className="text-white text-2xl font-bold">{stat.value}</h3>
              </div>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-[#10b981]">
              <TrendingUp className="w-3 h-3" />
              <span>+12% este mês</span>
            </div>
          </div>
        ))}
      </div> */}

      {/* Solar System Visualization */}
      <div className="flex-1 min-h-0">
        <SolarSystem />
      </div>
    </div>
  );
}
