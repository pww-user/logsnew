export let mock_loginpeoplesoft = {
    submit: async function submit(params) {
        await this.go("settings");
    }, back: async function back(params) {
        await this.go("settings");
    }, home: async function home(params) {
        await this.go("Home");
    } };
