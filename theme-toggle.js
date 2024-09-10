document.addEventListener('DOMContentLoaded', () => {
    const themeSelector = document.getElementById('theme-selector');

    const setTheme = (theme) => {
        const themeLink = document.getElementById('theme-style');
        const basePath = window.location.pathname.split('/').slice(0, -1).join('/'); // Dynamically set base path
        const fullPath = `${basePath}/${theme}`;
        console.log(`Setting theme to: ${fullPath}`);
        themeLink.href = fullPath; // Set the theme based on the relative path
        document.cookie = `theme=${theme}; path=/; max-age=31536000`; // Store theme in a cookie
    };

    const getThemeFromCookie = () => {
        const match = document.cookie.match(/(^| )theme=([^;]+)/);
        return match ? match[2] : 'style.css'; // Default to light theme if no cookie is found
    };

    const applyStoredTheme = () => {
        const storedTheme = getThemeFromCookie();
        console.log(`Applying stored theme: ${storedTheme}`);
        setTheme(storedTheme);
        if (themeSelector) {
            themeSelector.value = storedTheme;
        }
    };

    if (themeSelector) {
        themeSelector.addEventListener('change', (event) => {
            const selectedTheme = event.target.value;
            setTheme(selectedTheme);
        });
    }

    applyStoredTheme();
});