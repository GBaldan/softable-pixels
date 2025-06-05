import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Typography } from './Typography'

const meta = {
	component: Typography
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Title: Story = {
	args: {
		variant: 'h1',
		children: 'Softable Pixels'
	}
}
