"use client";

// External Libraries
import { useState } from "react";

// Components
import { Switch } from "./Switch";

// Types
import { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => {
    const [active, setActive] = useState(false);
    return <Switch active={active} onClick={() => setActive(!active)} />;
  },
};

export const Active: Story = {
  args: {
    active: true,
  },
};

export const Disabled: Story = {
  args: {
    active: false,
    disabled: true,
  },
};

export const ActiveDisabled: Story = {
  args: {
    active: true,
    disabled: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch size="small" />
      <Switch size="medium" />
      <Switch size="large" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch color="red" />
      <Switch color="green" />
      <Switch color="blue" />
      <Switch color="yellow" />
    </div>
  ),
};
