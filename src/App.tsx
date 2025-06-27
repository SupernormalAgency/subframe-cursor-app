import React from "react";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import { Button } from "@/ui/components/Button";
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
  return (
    <DefaultPageLayout>
      <div className="container max-w-none flex h-full w-full flex-col items-start gap-8 bg-default-background py-12">
        <div className="flex w-full items-center justify-between">
          <span className="text-heading-1 font-heading-1 text-default-font">
            Submit a Ticket
          </span>
          <Button
            variant="neutral-secondary"
            icon={<FeatherLifeBuoy />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Help Center
          </Button>
        </div>
        <div className="flex w-full items-start gap-8">
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-8 py-8">
            <div className="flex w-full flex-col items-start gap-6">
              <TextField
                className="h-auto w-full flex-none"
                label="Title"
                helpText="Brief description of the issue"
              >
                <TextField.Input
                  placeholder="Enter ticket title"
                  value=""
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
                />
              </TextField>
              <div className="flex w-full flex-col items-start gap-2">
                <span className="text-body-bold font-body-bold text-default-font">
                  Ticket Type
                </span>
                <ToggleGroup value="" onValueChange={(value: string) => {}}>
                  <ToggleGroup.Item icon={<FeatherAlertCircle />} value="51057fb0">
                    Bug Fix
                  </ToggleGroup.Item>
                  <ToggleGroup.Item icon={<FeatherEdit />} value="8581860a">
                    Small Update
                  </ToggleGroup.Item>
                  <ToggleGroup.Item icon={<FeatherLayers />} value="f3d8c5b6">
                    Large Update
                  </ToggleGroup.Item>
                  <ToggleGroup.Item icon={<FeatherPenTool />} value="aff8a95f">
                    Design Request
                  </ToggleGroup.Item>
                </ToggleGroup>
              </div>
              <div className="flex w-full flex-col items-start gap-2">
                <span className="text-body-bold font-body-bold text-default-font">
                  Due Date
                </span>
                <DateButton />
              </div>
              <div className="flex w-full flex-col items-start gap-2">
                <span className="text-body-bold font-body-bold text-default-font">
                  Priority
                </span>
                <ToggleGroup value="" onValueChange={(value: string) => {}}>
                  <ToggleGroup.Item icon={<FeatherClock />} value="0e893afd">
                    Low
                  </ToggleGroup.Item>
                  <ToggleGroup.Item icon={<FeatherAlertCircle />} value="009fbc3d">
                    Medium
                  </ToggleGroup.Item>
                  <ToggleGroup.Item icon={<FeatherZap />} value="5031d775">
                    High
                  </ToggleGroup.Item>
                </ToggleGroup>
              </div>
              <TextArea
                className="h-auto w-full flex-none"
                label="Description"
                helpText="Please provide detailed information about your request"
              >
                <TextArea.Input
                  className="h-auto min-h-[192px] w-full flex-none"
                  placeholder="Describe your issue or request in detail..."
                  value=""
                  onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {}}
                />
              </TextArea>
              <TextField
                className="h-auto w-full flex-none"
                label="Related URL"
                helpText="If applicable, provide the URL where the issue occurs"
              >
                <TextField.Input
                  placeholder="https://"
                  value=""
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
                />
              </TextField>
              <div className="flex w-full flex-col items-start gap-4">
                <span className="text-body-bold font-body-bold text-default-font">
                  Supporting Files
                </span>
                <div className="flex w-full flex-col items-center justify-center gap-2 rounded-md border border-dashed border-brand-600 px-6 py-6">
                  <FeatherUploadCloud className="text-heading-1 font-heading-1 text-brand-700" />
                  <div className="flex flex-col items-center justify-center gap-1">
                    <span className="text-body font-body text-default-font text-center">
                      Drop files here or click to upload
                    </span>
                    <span className="text-caption font-caption text-subtext-color text-center">
                      PDF, PNG, JPG up to 10MB
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-end gap-2">
              <Button
                variant="neutral-secondary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Cancel
              </Button>
              <Button
                icon={<FeatherSend />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Submit Ticket
              </Button>
            </div>
          </div>
          <div className="flex w-80 flex-none flex-col items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-8 py-8">
            <div className="flex w-full flex-col items-start gap-2">
              <span className="text-heading-3 font-heading-3 text-default-font">
                Submission Guidelines
              </span>
              <span className="text-body font-body text-subtext-color">
                To help us resolve your issue quickly, please:
              </span>
            </div>
            <div className="flex w-full flex-col items-start gap-4">
              <div className="flex items-start gap-2">
                <FeatherCheckCircle className="text-body font-body text-brand-700" />
                <span className="text-body font-body text-default-font">
                  Be specific about the problem
                </span>
              </div>
              <div className="flex items-start gap-2">
                <FeatherCheckCircle className="text-body font-body text-brand-700" />
                <span className="text-body font-body text-default-font">
                  Include steps to reproduce
                </span>
              </div>
              <div className="flex items-start gap-2">
                <FeatherCheckCircle className="text-body font-body text-brand-700" />
                <span className="text-body font-body text-default-font">
                  Add screenshots if relevant
                </span>
              </div>
              <div className="flex items-start gap-2">
                <FeatherCheckCircle className="text-body font-body text-brand-700" />
                <span className="text-body font-body text-default-font">
                  Provide access details if needed
                </span>
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-2">
              <span className="text-heading-3 font-heading-3 text-default-font">
                Response Times
              </span>
              <div className="flex w-full flex-col items-start gap-4">
                <div className="flex items-start gap-2">
                  <FeatherZap className="text-body font-body text-warning-600" />
                  <span className="text-body font-body text-default-font">
                    High Priority: 2-4 hours
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <FeatherClock className="text-body font-body text-brand-700" />
                  <span className="text-body font-body text-default-font">
                    Medium Priority: 24 hours
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <FeatherCheck className="text-body font-body text-success-600" />
                  <span className="text-body font-body text-default-font">
                    Low Priority: 48 hours
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultPageLayout>
  );
}
