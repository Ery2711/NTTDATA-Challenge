class LoginPage {
    constructor(page) {
        this.page = page;
        this.usuario = page.locator('input#user-name');
        this.password = page.locator('input#password');
        this.botonLogin = page.locator('input#login-button');
        this.ingresoValido = page.locator('span[data-test="title"]');
        this.mensajeError = page.locator('h3[data-test="error"]');
    }

    async navegar(url) {
        await this.page.goto(url);
    }

    async ingresarUsuario(user) {
        await this.usuario.fill(user);
    }

    async ingresarPassword(pass) {
        await this.password.fill(pass);
    }

    async clickLogin() {
        await this.botonLogin.click();
    }

    async confirmarIngreso(){
        await this.ingresoValido.isVisible();
        const title = this.ingresoValido.innerText();
        return title;
    }

    async validarMensajeError(){
        await this.mensajeError.isVisible();
        const mensajeError = this.mensajeError.innerText();
        return mensajeError;
    }
}
module.exports = { LoginPage };