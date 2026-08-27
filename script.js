(function(){
  const root = document.documentElement;
  const stored = null; // no localStorage per artifact constraints — session-only toggle
  let theme = 'dark';

  function applyTheme(t){
    theme = t;
    root.setAttribute('data-theme', t);
  }

  window.toggleTheme = function(){
    applyTheme(theme === 'dark' ? 'light' : 'dark');
  };

  applyTheme('dark');
})();