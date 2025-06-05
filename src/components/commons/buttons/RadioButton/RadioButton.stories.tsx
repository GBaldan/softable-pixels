"use client";

// External Libraries
import React, { useState } from "react";

// Components
import { RadioButton } from "./RadioButton";

// Types
import { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const GroupExample: Story = {
  render: () => {
    const [selected, setSelected] = useState("option1");

    function handleChange(value: string) {
      setSelected(value);
    }

    return (
      <div className="flex flex-col gap-2 space-y-2">
        <RadioButton
          label="Option 1"
          name="example"
          value="option1"
          checked={selected === "option1"}
          onChange={handleChange}
        />

        <RadioButton
          label="Option 2"
          name="example"
          value="option2"
          checked={selected === "option2"}
          onChange={handleChange}
        />

        <RadioButton
          disabled
          label="Option 3 (Disabled)"
          name="example"
          value="option3"
          checked={selected === "option3"}
          onChange={handleChange}
        />

        <RadioButton
          name="example"
          value="option4"
          checked={selected === "option4"}
          onChange={handleChange}
        />
      </div>
    );
  },
};

export const Checked: Story = {
  args: {
    label: "Checked",
    name: "single",
    value: "checked",
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    name: "single",
    value: "disabled",
    disabled: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <RadioButton
        checked
        label="Small"
        name="size"
        value="small"
        size="small"
      />
      <RadioButton
        checked
        label="Medium"
        name="size"
        value="medium"
        size="medium"
      />
      <RadioButton
        checked
        label="Large"
        name="size"
        value="large"
        size="large"
      />
    </div>
  ),
};
