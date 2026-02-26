// js/main.js - versão limpa

// Observer para animação de seções
(function() {
    const sections = document.querySelectorAll('.js-observe');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.18 });

    sections.forEach(s => observer.observe(s));
})();

// FAQ - toggle
(function() {
    document.querySelectorAll('.faq-item').forEach(item => {
        const q = item.querySelector('.faq-question');
        q.addEventListener('click', () => {
            item.classList.toggle('open');
        });
    });
})();

// Rotação de versículos
(function() {
    const verses = [
        "“Deixai vir a mim os pequeninos.” — Marcos 10:14",
        "“O Senhor é meu pastor e nada me faltará.” — Salmo 23",
        "“Bem-aventurados os misericordiosos.” — Mateus 5:7",
        "“O amor jamais acaba.” — 1 Coríntios 13:8"
    ];
    const verseEl = document.getElementById('hero-verse');
    if (verseEl) {
        let idx = 0;

        const parts0 = verses[0].split(' — ');
        verseEl.innerHTML = parts0.length === 2 ? parts0[0] + '<br><strong>' + parts0[1] + '</strong>' : verses[0];

        setInterval(() => {
            verseEl.style.opacity = 0;
            setTimeout(() => {
                idx = (idx + 1) % verses.length;
                const parts = verses[idx].split(' — ');
                if (parts.length === 2) {
                    verseEl.innerHTML = parts[0] + '<br><strong>' + parts[1] + '</strong>';
                } else {
                    verseEl.textContent = verses[idx];
                }
                verseEl.style.opacity = 1;
            }, 380);
        }, 5000);
    }
})();