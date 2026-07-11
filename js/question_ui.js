function initProgressUI() {
    const questionId = window.location.pathname.split('/').pop().replace('.html', '');
    const status = window.GCPStatus.getStatus()[questionId] || { correct: false, review: false };

    // Inject into the explanation container
    const container = document.createElement('div');
    container.className = 'progress-ui mt-3 pt-3 border-top d-flex gap-4'; // Added gap-4 for more spacing
    container.innerHTML = `
        <label class="small text-muted" style="cursor: pointer; display: flex; align-items: center; gap: 8px;">
            <input type="checkbox" id="correct-check" ${status.correct ? 'checked' : ''} style="width: 18px; height: 18px; cursor: pointer;"> Poprawna
        </label>
        <label class="small text-muted" style="cursor: pointer; display: flex; align-items: center; gap: 8px;">
            <input type="checkbox" id="review-check" ${status.review ? 'checked' : ''} style="width: 18px; height: 18px; cursor: pointer;"> Powtórka
        </label>
    `;

    // Target the explanation container specifically using the new ID
    const explanationCard = document.getElementById('explanation-card');
    if (explanationCard) {
        explanationCard.appendChild(container);
    }

    document.getElementById('correct-check').addEventListener('change', (e) => {
        window.GCPStatus.saveStatus(questionId, { correct: e.target.checked });
    });
    document.getElementById('review-check').addEventListener('change', (e) => {
        window.GCPStatus.saveStatus(questionId, { review: e.target.checked });
    });
}

document.addEventListener('DOMContentLoaded', initProgressUI);
