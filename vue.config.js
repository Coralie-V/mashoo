module.exports = {
    devServer: {
        host: "0.0.0.0",
        https: false,
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/scss/vars.scss";
                    @import "@/scss/style.scss";
                    @import "@/scss/footer.scss";
                    @import "@/scss/reset.scss";
                    `,
            }
        }
    }
}