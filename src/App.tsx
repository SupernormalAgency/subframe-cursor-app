import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import TicketForm from "./pages/TicketForm";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'ticket-form'>('dashboard');

  const handleNavigate = (page: string) => {
    if (page === 'dashboard' || page === 'ticket-form') {
      setCurrentPage(page);
    }
  };

  return (
    <DefaultPageLayout 
      currentPage={currentPage} 
      onNavigate={handleNavigate}
    >
      {currentPage === 'dashboard' && <Dashboard />}
      {currentPage === 'ticket-form' && <TicketForm />}
    </DefaultPageLayout>
  );
}
