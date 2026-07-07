import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { Groups } from "./pages/Groups";
import { GroupParticipants } from "./pages/GroupParticipants";
import { Participants } from "./pages/Participants";
import { Resources } from "./pages/Resources";
import { ResourceRequests } from "./pages/ResourceRequests";
import { Materials } from "./pages/Materials";
import { Projects } from "./pages/Projects";
import { Activities } from "./pages/Activities";
import { Announcements } from "./pages/Announcements";
import { Events } from "./pages/Events";
import { Calendar } from "./pages/Calendar";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "grupos", Component: Groups },
      { path: "grupos/:groupId/participantes", Component: GroupParticipants },
      { path: "participantes", Component: Participants },
      { path: "recursos", Component: Resources },
      { path: "solicitacoes", Component: ResourceRequests },
      { path: "materiais", Component: Materials },
      { path: "projetos", Component: Projects },
      { path: "atividades", Component: Activities },
      { path: "editais", Component: Announcements },
      { path: "eventos", Component: Events },
      { path: "calendario", Component: Calendar },
    ],
  },
]);
