
import { createBrowserRouter } from "react-router-dom";
import { LoginScreen } from "./components/LoginScreen";
import {TechnicianLogin} from "./components/technician/TechnicianLogin";
import {HomeDashboard} from "./components/HomeDashboard";
import {TechnicianDashboard} from "./components/technician/TechnicianDashboard";
import {LiftDetails} from "./components/LiftDetails";
import {ServicesMaintenance} from "./components/ServicesMaintenance";
import { BillingPayments } from "./components/BillingPayments";
import {ComplaintsSupport} from "./components/ComplaintsSupport";
import {Notifications} from "./components/Notifications";
import {Profile} from "./components/Profile";
import {ChatSupport} from "./components/technician/ChatSupport";
import {EndDaySummary} from "./components/technician/EndDaySummary";
import {IssueReport} from "./components/technician/IssueReport";
import {MaterialRequest} from "./components/technician/MaterialRequest";
import {SetAvailability} from "./components/technician/SetAvailability";
import {StageProgress} from "./components/technician/StageProgress";
import {TaskDetails} from "./components/technician/TaskDetails";
import {TaskList} from "./components/technician/TaskList";
import App from "./App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <LoginScreen />,
            },
            {
                path: "/technician-login",
                element: <TechnicianLogin />,
            },
            {
                path: "/home",
                element: <HomeDashboard />,
            },
            {
                path: "/technician-dashboard",
                element: <TechnicianDashboard />,
            },
            {
                path: "/lift-details",
                element: <LiftDetails />,
            },
            {
                path: "/services-maintenance",
                element: <ServicesMaintenance />,
            },
            {
                path: "/billing-payments",
                element: <BillingPayments />,
            },
            {
                path: "/complaints-support",
                element: <ComplaintsSupport />,
            },
            {
                path: "/notifications",
                element: <Notifications />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/technician/chat-support",
                element: <ChatSupport />,
            },
            {
                path: "/technician/end-day-summary",
                element: <EndDaySummary />,
            },
            {
                path: "/technician/issue-report",
                element: <IssueReport />,
            },
            {
                path: "/technician/material-request",
                element: <MaterialRequest />,
            },
            {
                path: "/technician/set-availability",
                element: <SetAvailability />,
            },
            {
                path: "/technician/stage-progress",
                element: <StageProgress />,
            },
            {
                path: "/technician/task-details",
                element: <TaskDetails />,
            },
            {
                path: "/technician/task-list",
                element: <TaskList />,
            },
        ]
    }
]);
