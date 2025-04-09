export default function ThemeToggle({ theme, toggleTheme }) {
    return (
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 p-2 bg-gray-200 dark:bg-gray-800 rounded-full shadow"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    );
}
  