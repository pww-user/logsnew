export let mock_Login = {
    submit: async function submit(params) {
        await this.go("Home");
    }
};
