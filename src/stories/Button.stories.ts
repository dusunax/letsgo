import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Default 버튼",
  },
};

export const Primary: Story = {
  args: {
    primary: true,
    label: "Primary 버튼",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "큰 버튼",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    label: "그냥 버튼",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "작은 버튼",
  },
};
