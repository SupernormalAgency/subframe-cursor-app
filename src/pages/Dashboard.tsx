"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { FeatherPlus } from "@subframe/core";
import { DropdownMenu } from "@/ui/components/DropdownMenu";
import { FeatherEye } from "@subframe/core";
import * as SubframeCore from "@subframe/core";
import { IconButton } from "@/ui/components/IconButton";
import { FeatherList } from "@subframe/core";
import { Tabs } from "@/ui/components/Tabs";
import { IconWithBackground } from "@/ui/components/IconWithBackground";
import { FeatherCheckCircle2 } from "@subframe/core";
import { Avatar } from "@/ui/components/Avatar";
import { Badge } from "@/ui/components/Badge";
import { FeatherMessageSquare } from "@subframe/core";
import { FeatherAlertTriangle } from "@subframe/core";
import { FeatherClock } from "@subframe/core";
import { FeatherLayout } from "@subframe/core";
import { FeatherExternalLink } from "@subframe/core";

function Dashboard() {
  return (
    <div className="container max-w-none flex h-full w-full flex-col items-start gap-6 bg-default-background py-12 overflow-auto">
      <div className="flex w-full items-start gap-6">
        <span className="grow shrink-0 basis-0 text-heading-2 font-heading-2 text-default-font">
          Project Dashboard
        </span>
        <Button
          icon={<FeatherPlus />}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
        >
          New Ticket
        </Button>
      </div>
      <div className="flex w-full flex-wrap items-start rounded-md border border-solid border-neutral-border bg-default-background">
        <div className="flex grow shrink-0 basis-0 flex-col items-start justify-center gap-2 px-8 py-8">
          <div className="flex w-full items-center justify-between">
            <span className="text-caption-bold font-caption-bold text-subtext-color">
              Active Projects
            </span>
            <SubframeCore.DropdownMenu.Root>
              <SubframeCore.DropdownMenu.Trigger asChild={true}>
                <IconButton
                  size="small"
                  icon={<FeatherEye />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
              </SubframeCore.DropdownMenu.Trigger>
              <SubframeCore.DropdownMenu.Portal>
                <SubframeCore.DropdownMenu.Content
                  side="bottom"
                  align="end"
                  sideOffset={4}
                  asChild={true}
                >
                  <DropdownMenu>
                    <DropdownMenu.DropdownItem icon={<FeatherEye />}>
                      View All Projects
                    </DropdownMenu.DropdownItem>
                  </DropdownMenu>
                </SubframeCore.DropdownMenu.Content>
              </SubframeCore.DropdownMenu.Portal>
            </SubframeCore.DropdownMenu.Root>
          </div>
          <span className="text-heading-3 font-heading-3 text-default-font">
            3
          </span>
        </div>
        <div className="flex grow shrink-0 basis-0 flex-col items-start justify-center gap-2 px-8 py-8">
          <div className="flex w-full items-center justify-between">
            <span className="text-caption-bold font-caption-bold text-subtext-color">
              Open Tickets
            </span>
            <SubframeCore.DropdownMenu.Root>
              <SubframeCore.DropdownMenu.Trigger asChild={true}>
                <IconButton
                  size="small"
                  icon={<FeatherEye />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
              </SubframeCore.DropdownMenu.Trigger>
              <SubframeCore.DropdownMenu.Portal>
                <SubframeCore.DropdownMenu.Content
                  side="bottom"
                  align="end"
                  sideOffset={4}
                  asChild={true}
                >
                  <DropdownMenu>
                    <DropdownMenu.DropdownItem icon={<FeatherList />}>
                      View All Tickets
                    </DropdownMenu.DropdownItem>
                  </DropdownMenu>
                </SubframeCore.DropdownMenu.Content>
              </SubframeCore.DropdownMenu.Portal>
            </SubframeCore.DropdownMenu.Root>
          </div>
          <span className="text-heading-3 font-heading-3 text-default-font">
            12
          </span>
        </div>
        <div className="flex grow shrink-0 basis-0 flex-col items-start justify-center gap-2 px-8 py-8">
          <span className="text-caption-bold font-caption-bold text-subtext-color">
            Average Response Time
          </span>
          <span className="text-heading-3 font-heading-3 text-default-font">
            2.5 hours
          </span>
        </div>
      </div>
      <div className="flex w-full items-start gap-6">
        <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6">
          <div className="flex w-full flex-col items-start gap-4">
            <Tabs>
              <Tabs.Item active={true}>All Activity</Tabs.Item>
              <Tabs.Item>Tickets</Tabs.Item>
              <Tabs.Item>Updates</Tabs.Item>
            </Tabs>
          </div>
          <div className="flex w-full flex-col items-start">
            <div className="flex w-full items-start gap-6">
              <div className="flex flex-col items-center gap-2 self-stretch">
                <IconWithBackground
                  variant="success"
                  size="small"
                  icon={<FeatherCheckCircle2 />}
                  square={true}
                />
                <div className="flex w-px grow shrink-0 basis-0 flex-col items-center gap-2 bg-neutral-border" />
              </div>
              <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 pb-6">
                <div className="flex w-full items-center gap-2">
                  <Avatar
                    size="small"
                    image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  >
                    T
                  </Avatar>
                  <span className="text-body-bold font-body-bold text-default-font">
                    Homepage redesign ticket resolved
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    10 mins ago
                  </span>
                </div>
                <Badge variant="success">Completed</Badge>
              </div>
            </div>
            <div className="flex w-full items-start gap-6">
              <div className="flex flex-col items-center gap-2 self-stretch">
                <IconWithBackground
                  size="small"
                  icon={<FeatherMessageSquare />}
                  square={true}
                />
                <div className="flex w-px grow shrink-0 basis-0 flex-col items-center gap-2 bg-neutral-border" />
              </div>
              <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 pb-6">
                <div className="flex w-full items-center gap-2">
                  <Avatar
                    size="small"
                    image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  >
                    S
                  </Avatar>
                  <span className="text-body-bold font-body-bold text-default-font">
                    New comment on API integration
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    1 hour ago
                  </span>
                </div>
                <span className="text-body font-body text-subtext-color">
                  &quot;Please review the updated endpoint
                  documentation...&quot;
                </span>
              </div>
            </div>
            <div className="flex w-full items-start gap-6">
              <div className="flex flex-col items-center gap-2 self-stretch">
                <IconWithBackground
                  variant="warning"
                  size="small"
                  icon={<FeatherAlertTriangle />}
                  square={true}
                />
                <div className="flex w-px grow shrink-0 basis-0 flex-col items-center gap-2 bg-neutral-border" />
              </div>
              <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 pb-6">
                <div className="flex w-full items-center gap-2">
                  <Avatar
                    size="small"
                    image="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  >
                    M
                  </Avatar>
                  <span className="text-body-bold font-body-bold text-default-font">
                    High priority ticket created
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    2 hours ago
                  </span>
                </div>
                <Badge variant="warning">High Priority</Badge>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-border" />
        <div className="flex w-96 flex-none flex-col items-start gap-6">
          <div className="flex w-full flex-col items-start gap-4">
            <span className="text-heading-3 font-heading-3 text-default-font">
              Upcoming Deadlines
            </span>
            <div className="flex w-full flex-col items-start gap-4">
              <div className="flex w-full items-center gap-4 rounded-md bg-neutral-50 px-4 py-4">
                <IconWithBackground
                  variant="warning"
                  icon={<FeatherClock />}
                />
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                  <span className="text-body-bold font-body-bold text-default-font">
                    E-commerce Launch
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    Due in 2 days
                  </span>
                </div>
              </div>
              <div className="flex w-full items-center gap-4 rounded-md bg-neutral-50 px-4 py-4">
                <IconWithBackground icon={<FeatherLayout />} />
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Design Review
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    Due in 5 days
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <span className="text-heading-3 font-heading-3 text-default-font">
              Recent Tickets
            </span>
            <div className="flex w-full flex-col items-start gap-4">
              <div className="flex w-full items-center gap-4 rounded-md bg-neutral-50 px-4 py-4">
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Mobile Navigation Bug
                  </span>
                  <Badge variant="error">Bug</Badge>
                </div>
                <IconButton
                  size="small"
                  icon={<FeatherExternalLink />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
              </div>
              <div className="flex w-full items-center gap-4 rounded-md bg-neutral-50 px-4 py-4">
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Update Content
                  </span>
                  <Badge variant="neutral">Feature</Badge>
                </div>
                <IconButton
                  size="small"
                  icon={<FeatherExternalLink />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 