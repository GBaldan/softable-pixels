import type { JSX } from 'react'
import type { TypographyVariant } from './Typography.types'

export const typographyVariants: Record<TypographyVariant, string> = {
	h1: 'text-5xl font-bold leading-tight',
	h2: 'text-4xl font-semibold leading-snug',
	h3: 'text-3xl font-semibold',
	h4: 'text-2xl font-medium',
	h5: 'text-xl font-medium',
	b1: 'text-base',
	b2: 'text-sm',
	b3: 'text-xs',
	caption: 'text-[0.75rem] text-gray-500',
	legal: 'text-[0.65rem] text-gray-400 uppercase tracking-wide'
}

export const variantToElement: Record<
	TypographyVariant,
	keyof JSX.IntrinsicElements
> = {
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	h4: 'h4',
	h5: 'h5',
	b1: 'p',
	b2: 'p',
	b3: 'p',
	caption: 'span',
	legal: 'span'
}
