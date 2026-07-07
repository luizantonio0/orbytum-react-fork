import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useState } from "react";

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 3, 9)); // April 9, 2024

  const events = [
    {
      id: 1,
      title: "Reunião de Supervisores",
      date: "2024-04-10",
      time: "14:00",
      group: "Todos os Grupos",
      type: "Reunião"
    },
    {
      id: 2,
      title: "Apresentação de Resultados - IA",
      date: "2024-04-15",
      time: "10:00",
      group: "IA e Machine Learning",
      type: "Apresentação"
    },
    {
      id: 3,
      title: "Workshop de Blockchain",
      date: "2024-04-12",
      time: "15:30",
      group: "Blockchain e Criptomoedas",
      type: "Workshop"
    },
    {
      id: 4,
      title: "Defesa de Mestrado - Maria Santos",
      date: "2024-04-20",
      time: "09:00",
      group: "Computação Quântica",
      type: "Defesa"
    },
    {
      id: 5,
      title: "Auditoria de Segurança",
      date: "2024-04-18",
      time: "13:00",
      group: "Segurança Cibernética",
      type: "Atividade"
    },
  ];

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const hasEvent = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.some(event => event.date === dateStr);
  };

  const getEventsForDay = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.filter(event => event.date === dateStr);
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "Reunião": return "bg-[#4a9eff]/20 text-[#4a9eff] border-[#4a9eff]/30";
      case "Apresentação": return "bg-[#ff8c42]/20 text-[#ff8c42] border-[#ff8c42]/30";
      case "Workshop": return "bg-[#10b981]/20 text-[#10b981] border-[#10b981]/30";
      case "Defesa": return "bg-[#7c3aed]/20 text-[#7c3aed] border-[#7c3aed]/30";
      default: return "bg-[#8b96a5]/20 text-[#8b96a5] border-[#8b96a5]/30";
    }
  };

  return (
    <div className="h-full overflow-auto p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-white mb-2">Calendário</h1>
        <p className="text-[#8b96a5]">Visualize e gerencie os eventos dos grupos</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="xl:col-span-2">
          <div className="bg-[#0d1f30] rounded-2xl border border-[#3d4f62]/30 shadow-[6px_6px_16px_#050c14,-6px_-6px_16px_#0f2638] overflow-hidden">
            {/* Calendar Header */}
            <div className="p-6 border-b border-[#3d4f62]/30 flex items-center justify-between">
              <h2 className="text-white">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={previousMonth}
                  className="p-2 hover:bg-[#3d4f62]/20 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-[#8b96a5]" />
                </button>
                <button
                  onClick={nextMonth}
                  className="p-2 hover:bg-[#3d4f62]/20 rounded-lg transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-[#8b96a5]" />
                </button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="p-6">
              {/* Weekday Headers */}
              <div className="grid grid-cols-7 gap-2 mb-2">
                {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((day) => (
                  <div key={day} className="text-center text-sm text-[#8b96a5] font-medium py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-2">
                {/* Empty cells for days before month starts */}
                {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                  <div key={`empty-${i}`} className="aspect-square" />
                ))}

                {/* Actual days */}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const isToday = day === 9 && currentDate.getMonth() === 3; // April 9
                  const dayHasEvent = hasEvent(day);

                  return (
                    <div
                      key={day}
                      className={`aspect-square p-2 rounded-xl transition-all duration-200 cursor-pointer ${
                        isToday
                          ? "bg-gradient-to-br from-[#ff8c42] to-[#f94c10] text-white shadow-lg"
                          : dayHasEvent
                          ? "bg-[#0a1929] border border-[#ff8c42]/30 text-white hover:border-[#ff8c42]/50"
                          : "bg-[#0a1929] border border-[#3d4f62]/20 text-[#8b96a5] hover:border-[#3d4f62]/40"
                      }`}
                    >
                      <div className="flex flex-col h-full">
                        <span className={`text-sm font-medium ${isToday ? 'text-white' : ''}`}>
                          {day}
                        </span>
                        {dayHasEvent && !isToday && (
                          <div className="flex-1 flex items-end">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#ff8c42]" />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="xl:col-span-1">
          <div className="bg-[#0d1f30] rounded-2xl border border-[#3d4f62]/30 shadow-[6px_6px_16px_#050c14,-6px_-6px_16px_#0f2638] overflow-hidden">
            <div className="p-6 border-b border-[#3d4f62]/30 flex items-center justify-between">
              <h2 className="text-white">Próximos Eventos</h2>
              <button className="p-2 bg-gradient-to-r from-[#ff8c42] to-[#f94c10] text-white rounded-lg shadow-[0_4px_12px_rgba(255,140,66,0.3)] hover:shadow-[0_6px_16px_rgba(255,140,66,0.5)] transition-all duration-300">
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-4 max-h-[600px] overflow-y-auto">
              {events
                .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                .map((event) => (
                  <div
                    key={event.id}
                    className={`p-4 rounded-xl border transition-all duration-200 hover:shadow-md ${getEventTypeColor(event.type)}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#0a1929] flex flex-col items-center justify-center flex-shrink-0">
                        <span className="text-xs text-[#8b96a5]">
                          {new Date(event.date).toLocaleDateString('pt-BR', { month: 'short' }).toUpperCase()}
                        </span>
                        <span className="text-sm font-bold text-white">
                          {new Date(event.date).getDate()}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold mb-1 truncate">{event.title}</h4>
                        <p className="text-xs opacity-80 mb-2">{event.group}</p>
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="w-3 h-3 opacity-60" />
                          <span className="text-xs opacity-80">{event.time}</span>
                          <span className="px-2 py-0.5 rounded text-xs bg-[#0a1929]/50">
                            {event.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
