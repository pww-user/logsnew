export let mock_detailssap = {
    back: async function back(params) {
        await this.go("Home");
    },
    reject: async function reject(params) {
        await this.go("detailssap");
    },
    approve: async function approve(params) {
        await this.go("detailssap");
    }
};
