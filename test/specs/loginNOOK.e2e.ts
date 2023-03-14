import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {

    it('Iniciar sesión con credenciales por mal', async () => {   
        await driver.pause(5000);

        const InputEmail = await $('id=InputEmail')
        const InputPass = await $('id=InputPass')
     
        InputEmail.addValue("pruebaa@prueba.com")        
        InputPass.addValue("12345677656")
        const buttonIniciarSesion = await $("id=btnIniciar")
        buttonIniciarSesion.click()

        await driver.pause(5000);
    
    })


})