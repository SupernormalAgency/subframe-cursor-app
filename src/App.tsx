import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import TicketForm from "./pages/TicketForm";
import { Button } from "@/ui/components/Button";
import { FeatherHome } from "@subframe/core";
import { FeatherPlus } from "@subframe/core";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import { FeatherLifeBuoy } from "@subframe/core";
import { TextField } from "@/ui/components/TextField";
import { ToggleGroup } from "@/ui/components/ToggleGroup";
import { FeatherAlertCircle } from "@subframe/core";
import { FeatherEdit } from "@subframe/core";
import { FeatherLayers } from "@subframe/core";
import { FeatherPenTool } from "@subframe/core";
import { DateButton } from "@/ui/components/DateButton";
import { FeatherClock } from "@subframe/core";
import { FeatherZap } from "@subframe/core";
import { TextArea } from "@/ui/components/TextArea";
import { FeatherUploadCloud } from "@subframe/core";
import { FeatherSend } from "@subframe/core";
import { FeatherCheckCircle } from "@subframe/core";
import { FeatherCheck } from "@subframe/core";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'ticket-form'>('dashboard');

  return (
    <div className="min-h-screen bg-default-background">
      {/* Navigation Header */}
      <div className="border-b border-neutral-border bg-default-background px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-heading-2 font-heading-2 text-default-font">
              Subframe Cursor App
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant={currentPage === 'dashboard' ? 'brand-primary' : 'neutral-secondary'}
              icon={<FeatherHome />}
              onClick={() => setCurrentPage('dashboard')}
            >
              Dashboard
            </Button>
            <Button
              variant={currentPage === 'ticket-form' ? 'brand-primary' : 'neutral-secondary'}
              icon={<FeatherPlus />}
              onClick={() => setCurrentPage('ticket-form')}
            >
              New Ticket
            </Button>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="h-[calc(100vh-80px)]">
        {currentPage === 'dashboard' && <Dashboard />}
        {currentPage === 'ticket-form' && <TicketForm />}
      </div>
    </div>
  );
}
