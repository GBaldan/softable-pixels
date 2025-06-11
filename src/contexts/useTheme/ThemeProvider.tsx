'use client'
// External Libraries
import type React from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
// import { useGlobals } from 'storybook/manager-api'
// import { addons } from 'storybook/preview-api'
// import { FORCE_RE_RENDER } from 'storybook/internal/core-events'

// Utils
import { applyThemeClass, getSystemTheme } from './ThemeProvider.utils'

// Types
import type { Theme } from './ThemeProvider.types'

type ThemeContextType = {
	theme: Theme
	resolvedTheme: Omit<Theme, 'system'>
	toggleTheme: () => void
	setTheme: (t: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

const THEME_KEY = 'theme'

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	// States
	const [theme, setThemeState] = useState<Theme>('system')
	const [resolvedTheme, setResolvedTheme] =
		useState<Omit<Theme, 'system'>>(getSystemTheme)

	// Hooks
	// const [globals, updateGlobals] = useGlobals()

	useEffect(() => {
		const stored = localStorage.getItem(THEME_KEY) as Theme | null
		const initial = stored ?? 'system'

		setTheme(initial)
	}, [])

	useEffect(() => {
		const listener = (e: MediaQueryListEvent) => {
			if (theme === 'system') {
				const sysTheme = e.matches ? 'dark' : 'light'
				setTheme(sysTheme)
			}
		}

		const mql = window.matchMedia('(prefers-color-scheme: dark)')
		mql.addEventListener('change', listener)

		return () => mql.removeEventListener('change', listener)
	}, [theme])

	// useEffect(() => {
	// 	const newTheme = globals.theme ?? 'system'
	// 	setTheme(newTheme)
	// }, [globals])

	// Functions
	function setTheme(newTheme: Theme) {
		localStorage.setItem(THEME_KEY, newTheme)
		setThemeState(newTheme)

		const final = newTheme === 'system' ? getSystemTheme() : newTheme
		applyThemeClass(final)
		setResolvedTheme(final)

		// updateGlobals({ theme: final })
		// addons.getChannel().emit(FORCE_RE_RENDER)
	}

	function toggleTheme() {
		const next =
			theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'

		setTheme(next)
	}

	return (
		<ThemeContext.Provider
			value={{ theme, setTheme, toggleTheme, resolvedTheme }}
		>
			{children}
		</ThemeContext.Provider>
	)
}

function useTheme(): ThemeContextType {
	const context = useContext(ThemeContext)

	if (!context) throw new Error('useTheme must be used within ThemeProvider')
	return context
}

export { useTheme, ThemeProvider }
