
// navigation.js

// Theme Initialization (Run immediately to avoid Flash of Unstyled Content)
(function() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-theme');
    }
    // Font size initialization
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) {
        document.documentElement.style.fontSize = savedFontSize + 'px';
    }
})();

    // Force load interpretations.js
    const s = document.createElement("script"); s.src = "interpretations.js"; document.head.appendChild(s);

    // Inject modal, general, and dark mode styles
    const style = document.createElement('style');
    style.textContent = `
        /* Modal Styles */
        .hint-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(15, 23, 42, 0.65);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.2s ease;
        }
        .hint-modal-overlay.active {
            opacity: 1;
            pointer-events: auto;
        }
        .hint-modal-content {
            background: rgba(30, 41, 59, 0.95);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 16px;
            padding: 24px 28px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            color: #f8fafc;
            max-width: 600px;
            width: 90%;
            max-height: 85vh;
            overflow-y: auto;
            transform: scale(0.95);
            transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
            font-family: system-ui, -apple-system, sans-serif;
        }
        .hint-modal-overlay.active .hint-modal-content {
            transform: scale(1);
        }
        .hint-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding-bottom: 12px;
            margin-bottom: 16px;
        }
        .hint-modal-title {
            font-size: 1.3rem;
            font-weight: 700;
            color: #38bdf8;
            margin: 0;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .hint-modal-close {
            background: transparent;
            border: none;
            color: #94a3b8;
            font-size: 1.5rem;
            cursor: pointer;
            line-height: 1;
            transition: color 0.2s;
            padding: 0;
            width: 32px;
            height: 32px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
        }
        .hint-modal-close:hover {
            color: #f1f5f9;
            background: rgba(255, 255, 255, 0.1);
        }
        .hint-modal-body {
            font-size: 0.95rem;
            line-height: 1.6;
        }
        .hint-modal-section-title {
            color: #f1f5f9;
            margin-top: 16px;
            margin-bottom: 6px;
            font-weight: 600;
            font-size: 1.05rem;
        }
        .hint-modal-text {
            margin-bottom: 14px;
            color: #cbd5e1;
        }
        .hint-modal-text:last-child {
            margin-bottom: 0;
        }
        .hint-keyboard-tip {
            display: inline-block;
            margin-top: 15px;
            padding: 4px 10px;
            background: rgba(56, 189, 248, 0.1);
            border: 1px solid rgba(56, 189, 248, 0.2);
            border-radius: 6px;
            font-size: 0.8rem;
            color: #38bdf8;
        }

        /* --- Dark Mode Styles --- */
        body.dark-theme {
            background-color: #0f172a !important;
            color: #f1f5f9 !important;
        }
        body.dark-theme .q-card {
            background-color: #1e293b !important;
            color: #f1f5f9 !important;
            border-color: rgba(255, 255, 255, 0.1) !important;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.3) !important;
        }
        body.dark-theme .c-card {
            background-color: #1e293b !important;
            color: #e2e8f0 !important;
            border-color: rgba(255, 255, 255, 0.1) !important;
        }
        body.dark-theme .c-date {
            color: #94a3b8 !important;
        }
        body.dark-theme .c-badge {
            background: #334155 !important;
            border-color: #475569 !important;
            color: #cbd5e1 !important;
        }
        body.dark-theme .c-upvotes {
            color: #38bdf8 !important;
        }
        body.dark-theme .correct-answer-box {
            background-color: #1e293b !important;
            color: #38bdf8 !important;
        }
        body.dark-theme .bg-light {
            background-color: #1e293b !important;
            color: #f1f5f9 !important;
        }
        body.dark-theme .question-answer {
            background-color: #1e293b !important;
            color: #cbd5e1 !important;
        }
        body.dark-theme h1, body.dark-theme h2, body.dark-theme h3 {
            color: #f1f5f9 !important;
        }
        body.dark-theme .q-id {
            color: #38bdf8 !important;
        }
        body.dark-theme .q-item {
            background-color: #1e293b !important;
            color: #cbd5e1 !important;
            border-color: rgba(255, 255, 255, 0.08) !important;
        }
        body.dark-theme .q-item:hover {
            background-color: #334155 !important;
            color: #f1f5f9 !important;
        }
        body.dark-theme .multi-choice-item {
            color: #cbd5e1 !important;
        }
        body.dark-theme .btn-outline-primary {
            color: #38bdf8 !important;
            border-color: #38bdf8 !important;
        }
        body.dark-theme .btn-outline-primary:hover {
            background-color: #38bdf8 !important;
            color: #0f172a !important;
        }
        body.dark-theme .btn-outline-secondary {
            color: #cbd5e1 !important;
            border-color: #475569 !important;
        }
        body.dark-theme .btn-outline-secondary:hover {
            background-color: #475569 !important;
            color: #f1f5f9 !important;
        }
        body.dark-theme .ai-analysis-container {
            background-color: #1e293b !important;
            color: #e2e8f0 !important;
            border-left: 5px solid #38bdf8 !important;
        }
        body.dark-theme pre {
            background-color: #0b1020 !important;
            color: #e6edf3 !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
        }
        body.dark-theme .text-dark {
            color: #f1f5f9 !important;
        }
        body.dark-theme .text-muted {
            color: #94a3b8 !important;
        }
        body.dark-theme .card-text {
            color: #e2e8f0 !important;
        }
        body.dark-theme .correct-answer {
            color: #10b981 !important;
            font-weight: bold;
        }
        
        /* Floating Toggle Button Style */
        .theme-toggle-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            min-width: 48px;
            height: 48px;
            border-radius: 24px;
            border: 1px solid rgba(0,0,0,0.1);
            background: #fff;
            box-shadow: 0 4px 10px rgba(0,0,0,0.15);
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.1rem;
            z-index: 9999;
            transition: all 0.2s ease;
            user-select: none;
            padding: 0 15px;
            font-weight: 600;
            color: #333;
        }
        .theme-toggle-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 14px rgba(0,0,0,0.2);
        }
        body.dark-theme .theme-toggle-btn {
            background: #1e293b;
            border: 1px solid rgba(255,255,255,0.15);
            box-shadow: 0 4px 12px rgba(0,0,0,0.4);
            color: #f1f5f9;
        }
        
        /* Nav integration */
        .q-nav .theme-toggle-nav, .q-nav .font-size-btn {
            margin: 0 5px;
        }
    `;
    document.head.appendChild(style);

    // Create Modal Element
    const modalHtml = `
        <div id="hint-modal" class="hint-modal-overlay">
            <div class="hint-modal-content">
                <div class="hint-modal-header">
                    <h3 class="hint-modal-title">💡 Interpretacja pytania</h3>
                    <button class="hint-modal-close" id="hint-modal-close-btn">&times;</button>
                </div>
                <div class="hint-modal-body">
                    <div id="hint-modal-body-content">Ładowanie...</div>
                </div>
            </div>
        </div>
    `;
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = modalHtml.trim();
    document.body.appendChild(tempDiv.firstChild);

    // Create and Append Theme Toggle Buttons
    function createToggleBtn(isNav = false) {
        const btn = document.createElement('button');
        btn.className = isNav ? 'btn btn-outline-secondary theme-toggle-nav' : 'theme-toggle-btn';
        btn.setAttribute('title', 'Przełącz tryb (skrót: T)');
        
        function updateLabel() {
            const isDark = document.body.classList.contains('dark-theme');
            if (isNav) {
                btn.innerHTML = isDark ? '☀️ Jasny' : '🌙 Ciemny';
            } else {
                btn.innerHTML = isDark ? '☀️' : '🌙';
            }
        }
        
        btn.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            const isDarkNow = document.body.classList.contains('dark-theme');
            localStorage.setItem('theme', isDarkNow ? 'dark' : 'light');
            document.querySelectorAll('.theme-toggle-btn, .theme-toggle-nav').forEach(b => {
                const isBNav = b.classList.contains('theme-toggle-nav');
                b.innerHTML = isDarkNow ? (isBNav ? '☀️ Jasny' : '☀️') : (isBNav ? '🌙 Ciemny' : '🌙');
            });
        });
        
        updateLabel();
        return btn;
    }
    
    // Add to Float
    const floatingBtn = createToggleBtn(false);
    document.body.appendChild(floatingBtn);

    // Font size controls
    function createFontSizeControls() {
        const controls = document.createElement('span');
        
        function createBtn(label, delta) {
            const btn = document.createElement('button');
            btn.className = 'btn btn-outline-secondary font-size-btn';
            btn.textContent = label;
            btn.addEventListener('click', function() {
                let size = parseInt(localStorage.getItem('fontSize')) || 16;
                if (delta === 0) size = 16;
                else size += delta;
                
                size = Math.max(10, Math.min(30, size));
                document.documentElement.style.fontSize = size + 'px';
                localStorage.setItem('fontSize', size);
            });
            return btn;
        }
        
        controls.appendChild(createBtn('A-', -2));
        controls.appendChild(createBtn('A+', 2));
        return controls;
    }

    // Add to Navigation Bar if exists
    const nav = document.querySelector('.q-nav');
    if (nav) {
        const fsControls = createFontSizeControls();
        
        // Insert before the last link (usually "Następne")
        const links = nav.querySelectorAll('a');
        if (links.length > 0) {
            links[links.length - 1].before(fsControls);
        } else {
            nav.appendChild(fsControls);
        }
    } else {
        // Fallback for index.html - add near the top header
        const header = document.querySelector('.q-list h2');
        if (header) {
            const fsControls = createFontSizeControls();
            header.after(fsControls);
        }
    }


    // Modal helpers
    window.showQuestionHint = function() {
        const modal = document.getElementById('hint-modal');
        if (!modal) return;
        const content = document.getElementById('hint-modal-body-content');
        
        let qNum = 1;
        const path = window.location.pathname;
        const match = path.match(/q_(\d+)\.html/);
        if (match) {
            qNum = parseInt(match[1], 10);
        } else {
            const h2 = document.querySelector('h2');
            if (h2) {
                const h2Match = h2.textContent.match(/Question\s+(\d+)/);
                if (h2Match) qNum = parseInt(h2Match[1], 10);
            }
        }

        let hintHtml = '';
        if (window.questionInterpretations && window.questionInterpretations[qNum]) {
            const item = window.questionInterpretations[qNum];
            // Try to get question text from HTML if missing in interpretations.js
            const questionEl = document.querySelector('.card-text.text-muted');
            const questionText = item.q || (questionEl ? questionEl.textContent : "Brak pytania");
            
            hintHtml = `
                <div class="hint-modal-section-title" style="color: #f43f5e; font-size: 1.1rem; margin-top: 0;">Pytanie po polsku:</div>
                <div class="hint-modal-text" style="font-style: italic; color: #f1f5f9; background: rgba(0,0,0,0.25); padding: 12px; border-radius: 8px; border-left: 4px solid #f43f5e; margin-bottom: 16px;">${questionText}</div>
                <div class="hint-modal-section-title">O co właściwie chodzi w tym pytaniu?</div>
                <div class="hint-modal-text">${item.about || 'Brak opisu'}</div>
                <div class="hint-modal-section-title">Jak je interpretować? (Klucz / Pułapka)</div>
                <div class="hint-modal-text">${item.interpret || 'Brak interpretacji'}</div>
                <div class="hint-keyboard-tip">Naciśnij <code>Esc</code> lub <code>h</code> aby zamknąć</div>
            `;
        } else {
            hintHtml = `
                <div class="hint-modal-text">Polski opis i interpretacja dla pytania <strong>#${qNum}</strong> nie zostały jeszcze załadowane lub ten batch nie jest zainstalowany.</div>
                <div class="hint-keyboard-tip">Naciśnij <code>Esc</code> lub <code>h</code> aby zamknąć</div>
            `;
        }
        
        content.innerHTML = hintHtml;
        modal.classList.add('active');
    };

    window.hideQuestionHint = function() {
        const modal = document.getElementById('hint-modal');
        if (modal) modal.classList.remove('active');
    };

    // Event listeners for close
    const closeBtn = document.getElementById('hint-modal-close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', window.hideQuestionHint);
    }
    const modalEl = document.getElementById('hint-modal');
    if (modalEl) {
        modalEl.addEventListener('click', function(e) {
            if (e.target === this) window.hideQuestionHint();
        });
    }
})();

// 1. Toggling mechanism
document.body.addEventListener('click', function(e) {
    if (e.target.matches('.reveal-solution')) {
        e.preventDefault();
        const container = e.target.closest('.q-card');
        const mainContainer = container.closest('.q-page');
        const sections = mainContainer.querySelectorAll('.q-answer, .ai-analysis-container');
        
        sections.forEach(sec => {
            sec.classList.toggle('d-none');
        });
        
        e.target.textContent = sections[0].classList.contains('d-none') ? 'Show Suggested Answer' : 'Hide Suggested Answer';
    }
});

// Helper to find navigation links based on text content
function getNavLink(textPattern) {
    const links = document.querySelectorAll('.q-nav a');
    return Array.from(links).find(link => link.textContent.includes(textPattern));
}

// 2. Keyboard navigation & Shortcuts (Desktop)
document.addEventListener('keydown', function(e) {
    // Avoid triggering when focused on input fields
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
    }
    
    if (e.key === 'ArrowLeft') {
        const prev = getNavLink('Poprzednie');
        if (prev) prev.click();
    } else if (e.key === 'ArrowRight') {
        const next = getNavLink('Następne');
        if (next) next.click();
    } else if (e.key === ' ' || e.key === 'Spacebar' || e.key === 'Enter' || e.key.toLowerCase() === 'a' || e.key.toLowerCase() === 's') {
        // Shortcuts: Space, Enter, 'A', or 'S' keys to show/hide the Suggested Answer
        const btn = document.querySelector('.reveal-solution');
        if (btn) {
            e.preventDefault(); // Prevent scrolling when pressing Space
            btn.click();
        }
    } else if (e.key.toLowerCase() === 'h') {
        // Toggle hint modal
        const modal = document.getElementById('hint-modal');
        if (modal && modal.classList.contains('active')) {
            window.hideQuestionHint();
        } else {
            window.showQuestionHint();
        }
    } else if (e.key === 'Escape') {
        window.hideQuestionHint();
    } else if (e.key.toLowerCase() === 't') {
        // Toggle dark theme
        const toggleBtn = document.querySelector('.theme-toggle-nav') || document.querySelector('.theme-toggle-btn');
        if (toggleBtn) toggleBtn.click();
    }
});

// 2.5 Add Copy Button
(function() {
    const nav = document.querySelector('.q-nav');
    if (!nav) return;

    const indexLink = Array.from(nav.querySelectorAll('a')).find(a => a.getAttribute('href') === 'index.html');
    if (!indexLink) return;

    const copyBtn = document.createElement('button');
    copyBtn.className = 'btn btn-outline-secondary';
    copyBtn.textContent = '📋 Kopiuj';
    copyBtn.style.marginLeft = '10px';
    
    copyBtn.addEventListener('click', function() {
        // Explicitly target the card containing the question
        const questionCard = document.querySelector('.q-card:not(.q-answer)');
        if (!questionCard) return;
        
        const questionBody = questionCard.querySelector('.question-body');
        if (!questionBody) return;
        
        const questionText = questionBody.querySelector('.card-text').textContent.trim();
        const choices = Array.from(questionBody.querySelectorAll('.multi-choice-item'))
            .map(item => item.textContent.trim())
            .join('\n');
        
        const textToCopy = `${questionText}\n\n${choices}`;
        
        navigator.clipboard.writeText(textToCopy).then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = '✅ Skopiowano!';
            setTimeout(() => copyBtn.textContent = originalText, 2000);
        }).catch(err => {
            console.error('Błąd kopiowania: ', err);
            copyBtn.textContent = '❌ Błąd';
            setTimeout(() => copyBtn.textContent = '📋 Kopiuj', 2000);
        });
    });

    indexLink.after(copyBtn);
})();

// 3. Swipe navigation (Mobile - Swipe Left/Right)
document.body.style.touchAction = 'pan-y';

let pointerStartX = 0;
let pointerEndX = 0;
const minSwipeDistance = 50;

document.addEventListener('pointerdown', e => {
    if (e.pointerType !== 'touch') return;
    pointerStartX = e.clientX;
}, { passive: true });

document.addEventListener('pointerup', e => {
    if (e.pointerType !== 'touch') return;
    pointerEndX = e.clientX;
    handleSwipe();
}, { passive: true });

document.addEventListener('pointercancel', e => {
    if (e.pointerType !== 'touch') return;
    pointerStartX = 0;
    pointerEndX = 0;
}, { passive: true });

function handleSwipe() {
    const swipeDistance = pointerEndX - pointerStartX;
    
    pointerStartX = 0;
    pointerEndX = 0;

    if (Math.abs(swipeDistance) < minSwipeDistance) return;

    if (swipeDistance < 0) { // Swipe Left (Next Question)
        const next = getNavLink('Następne');
        if (next) next.click();
    } else { // Swipe Right (Previous Question)
        const prev = getNavLink('Poprzednie');
        if (prev) prev.click();
    }
}
