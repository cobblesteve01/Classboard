document.addEventListener('DOMContentLoaded', () => {
    const themeSelector = document.getElementById('theme-selector');

    const setTheme = (theme) => {
        const themeLink = document.getElementById('theme-style');
        if (!themeLink) {
            console.error("Theme link element not found!");
            return;
        }
        console.log(`Setting theme to: ${theme}`);
        themeLink.href = `/${theme}`; // Ensure this path points to the correct theme file
        document.cookie = `theme=${theme}; path=/; max-age=31536000`; // Store theme in a cookie
    };

    const getThemeFromCookie = () => {
        const match = document.cookie.match(/(^| )theme=([^;]+)/);
        return match ? match[2] : 'style.css'; // Default to light theme if no cookie found
    };

    const applyStoredTheme = () => {
        const storedTheme = getThemeFromCookie();
        console.log(`Applying stored theme: ${storedTheme}`);
        setTheme(storedTheme);
        if (themeSelector) {
            themeSelector.value = storedTheme;
        } else {
            console.warn("Theme selector element not found!");
        }
    };

    if (themeSelector) {
        themeSelector.addEventListener('change', (event) => {
            const selectedTheme = event.target.value;
            console.log(`Theme selected: ${selectedTheme}`);
            setTheme(selectedTheme);
        });
    } else {
        console.warn("Theme selector element not found during DOMContentLoaded!");
    }

    applyStoredTheme();
});
