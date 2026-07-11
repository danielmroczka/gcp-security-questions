function initIndexFiltering() {
    const allStatus = window.GCPStatus.getStatus();
    
    // Add indicators
    document.querySelectorAll('.q-item').forEach(item => {
        const id = item.getAttribute('href').replace('.html', '');
        const status = allStatus[id];
        if (status) {
            if (status.correct) item.classList.add('status-correct');
            if (status.review) item.classList.add('status-review');
        }
    });

    // Add filter buttons
    const filterContainer = document.createElement('div');
    filterContainer.className = 'mb-4';
    filterContainer.innerHTML = `
        <button class="btn btn-outline-secondary" onclick="filterQuestions('all')">Wszystkie</button>
        <button class="btn btn-outline-success" onclick="filterQuestions('correct')">Poprawne</button>
        <button class="btn btn-outline-warning" onclick="filterQuestions('review')">Do powtórki</button>
        <button class="btn btn-outline-danger" onclick="filterQuestions('incorrect')">Błędne</button>
    `;
    document.querySelector('.q-list').prepend(filterContainer);
}

window.filterQuestions = (type) => {
    document.querySelectorAll('.q-item').forEach(item => {
        if (type === 'all') item.style.display = 'block';
        else if (type === 'correct') item.style.display = item.classList.contains('status-correct') ? 'block' : 'none';
        else if (type === 'review') item.style.display = item.classList.contains('status-review') ? 'block' : 'none';
        else if (type === 'incorrect') {
            // "Błędne" means not correct and not review, or just not correct?
            // Assuming "Incorrect" means marked as "Incorrect" in status, but status only has correct/review.
            // I need to implement a new "incorrect" status or derive it.
            // Based on user request, I will treat "Błędne" as "marked as not correct".
            // Since there is no "incorrect" checkbox, I will assume it means status is NOT correct.
            item.style.display = !item.classList.contains('status-correct') ? 'block' : 'none';
        }
    });
};

document.addEventListener('DOMContentLoaded', initIndexFiltering);
