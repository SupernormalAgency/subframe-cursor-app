"use client";

import React, { useState } from "react";
import { Badge } from "@/ui/components/Badge";
import { ToggleGroup } from "@/ui/components/ToggleGroup";
import { TextField } from "@/ui/components/TextField";
import { Checkbox } from "@/ui/components/Checkbox";
import { LinkButton } from "@/ui/components/LinkButton";
import { Button } from "@/ui/components/Button";

function ClientPortalAccess() {
  const [formType, setFormType] = useState<'login' | 'signup'>('login');

  return (
    <div className="flex w-full items-start h-screen">
      <div className="flex grow shrink-0 basis-0 items-center justify-center self-stretch bg-brand-600 px-24 py-24">
        <div className="flex max-w-[448px] grow shrink-0 basis-0 flex-col items-start gap-6">
          <img
            className="h-8 flex-none object-cover"
            src="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/y2rsnhq3mex4auk54aye.png"
          />
          <div className="flex flex-col items-start gap-4">
            <span className="text-heading-1 font-heading-1 text-black">
              Welcome to DevPortal
            </span>
            <span className="text-heading-2 font-heading-2 text-black">
              Track your web development projects and submit support tickets all
              in one place.
            </span>
          </div>
          <div className="flex w-full flex-wrap items-center gap-2">
            <Badge variant="neutral">Real-time Updates</Badge>
            <Badge variant="neutral">Priority Support</Badge>
            <Badge variant="neutral">Project Tracking</Badge>
          </div>
          <img
            className="h-64 w-full flex-none rounded-lg object-cover"
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
          />
        </div>
      </div>
      <div className="flex grow shrink-0 basis-0 items-center justify-center self-stretch bg-default-background px-24 py-24">
        <div className="flex max-w-[384px] grow shrink-0 basis-0 flex-col items-start gap-12">
          <ToggleGroup value={formType} onValueChange={(value: string) => {
            if (value === 'c1abb458') setFormType('login');
            if (value === 'c1d87319') setFormType('signup');
          }}>
            <ToggleGroup.Item icon={null} value="c1abb458">
              Login
            </ToggleGroup.Item>
            <ToggleGroup.Item icon={null} value="c1d87319">
              Sign Up
            </ToggleGroup.Item>
          </ToggleGroup>
          {formType === 'login' && (
            <div className="flex w-full flex-col items-start gap-6">
              <TextField
                className="h-auto w-full flex-none"
                label="Email"
                helpText=""
              >
                <TextField.Input
                  placeholder="email@company.com"
                  value=""
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
                />
              </TextField>
              <TextField
                className="h-auto w-full flex-none"
                label="Password"
                helpText=""
              >
                <TextField.Input
                  placeholder="Enter your password"
                  value=""
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
                />
              </TextField>
              <div className="flex w-full items-center justify-between">
                <Checkbox
                  label="Remember me"
                  checked={false}
                  onCheckedChange={(checked: boolean) => {}}
                />
                <LinkButton
                  variant="brand"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Forgot password?
                </LinkButton>
              </div>
              <Button
                className="h-8 w-full flex-none"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Continue
              </Button>
            </div>
          )}
          {formType === 'signup' && (
            <div className="flex w-full flex-col items-start gap-6">
              <TextField
                className="h-auto w-full flex-none"
                label="First Name"
                helpText=""
              >
                <TextField.Input
                  placeholder="Enter your first name"
                  value=""
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
                />
              </TextField>
              <TextField
                className="h-auto w-full flex-none"
                label="Last Name"
                helpText=""
              >
                <TextField.Input
                  placeholder="Enter your last name"
                  value=""
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
                />
              </TextField>
              <TextField
                className="h-auto w-full flex-none"
                label="Company"
                helpText=""
              >
                <TextField.Input
                  placeholder="Enter your company name"
                  value=""
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
                />
              </TextField>
              <TextField
                className="h-auto w-full flex-none"
                label="Email"
                helpText=""
              >
                <TextField.Input
                  placeholder="email@company.com"
                  value=""
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
                />
              </TextField>
              <TextField
                className="h-auto w-full flex-none"
                label="Password"
                helpText=""
              >
                <TextField.Input
                  placeholder="Create a strong password"
                  value=""
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
                />
              </TextField>
              <div className="flex w-full items-center justify-between">
                <Checkbox
                  label="I agree to the Terms of Service"
                  checked={false}
                  onCheckedChange={(checked: boolean) => {}}
                />
              </div>
              <Button
                className="h-8 w-full flex-none"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Create Account
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ClientPortalAccess; 