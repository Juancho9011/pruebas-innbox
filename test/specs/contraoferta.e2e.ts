
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {

    it.skip('COferta', async () => {    

        await driver.pause(2000);

        const InputEmail = await $('id=InputEmail')
        const InputPass = await $('id=InputPass')
     
        InputEmail.addValue("prueba@prueba.com")        
        InputPass.addValue("1234567")
        const buttonIniciarSesion = await $("id=btnIniciar")
        buttonIniciarSesion.click()

        await driver.pause(2000);


        const ver =await $('id=mostrarCom')
        ver.click()
        
        await driver.pause(2000);
        const valorContraoferta = await $('id=valorContraoferta')
        valorContraoferta.addValue("100000")    
        
        await driver.pause(2000);  

        const btnContraoferta =await $('id=btnContraoferta')
        btnContraoferta.click();  


        await driver.pause(2000);      
    
   
    })
}) 
 


