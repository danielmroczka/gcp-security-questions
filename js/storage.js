const GCPStatus = {
    STORAGE_KEY: 'gcp_status',

    getStatus() {
        return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '{}');
    },

    saveStatus(questionId, status) {
        const allStatus = this.getStatus();
        allStatus[questionId] = { ...allStatus[questionId], ...status };
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(allStatus));
    }
};

window.GCPStatus = GCPStatus;
