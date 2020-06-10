let isDark = (()=>{
    const a = localStorage.getItem("darkMode");
    return a ? "off" != a : matchMedia("(prefers-color-scheme: dark)").matches
}
)();
isDark && document.documentElement.classList.add("dark");
