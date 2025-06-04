'use client'
// Components
import { Typography } from '@components/toolkit/Typography'

// Hooks
import { useTheme } from '@contexts/useTheme'

export default function Home() {
	// Hooks
	const { theme, toggleTheme } = useTheme()

	return (
		<div className="h-screen flex flex-col items-center justify-items-center gap-y-3 p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<div className="bg-yellow-100 dark:bg-green-200 p-2 rounded-lg">
				<button type="button" onClick={toggleTheme} className="cursor-pointer">
					toggle theme
				</button>
			</div>

			<Typography variant="b1">{theme}</Typography>
		</div>
	)
}
