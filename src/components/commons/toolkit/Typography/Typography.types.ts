import type { PropsWithChildren, ElementType } from 'react'

/**
 * Allowed text alignment types
 */
export type TextAlign = 'left' | 'center' | 'right' | 'justify'

/**
 * Allowed typography variant types
 */
export type TypographyVariant =
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'b1'
	| 'b2'
	| 'b3'
	| 'caption'
	| 'legal'

/**
 * Typography component props
 */
export interface TypographyProps extends PropsWithChildren {
	variant: TypographyVariant
	as?: ElementType
	align?: TextAlign
	href?: string
	isLoading?: boolean
	placeholder?: string
	id?: string
	className?: string
}
