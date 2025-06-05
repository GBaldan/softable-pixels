import type { Theme } from './ThemeProvider.types'

export function getSystemTheme(): Theme {
	if (typeof window === 'undefined') return 'light'

	return window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light'
}

export function applyThemeClass(theme: Theme) {
	const root = document.documentElement
	root.classList.remove('light', 'dark')
	root.classList.add(theme)
}
