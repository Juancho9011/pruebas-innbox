import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {

    it('Iniciar sesión con credenciales por bien aceptar servicio rol mesero', async () => {    

        await driver.pause(2000);

        const InputEmail = await $('id=InputEmail')
        const InputPass = await $('id=InputPass')
     
        InputEmail.addValue("cprieto@abc.com")//prueba@prueba.com        
        InputPass.addValue("1234567")
        const buttonIniciarSesion = await $("id=btnIniciar")
        buttonIniciarSesion.click()

        //await driver.pause(8000);
        const irAceptados =await $('id=irAceptados')
        irAceptados.click()

        await driver.pause(10000);

        await driver.pause(8000);
        const regresarAlHomre =await $('id=regresarAlHomre')
        regresarAlHomre.click()

        await driver.pause(2000); 
        const mostrarCom =await $('id=mostrarCom')
        mostrarCom.click()
        
        await driver.pause(2000);

         const btnAceptar =await $('id=btnAceptar')
         btnAceptar.click(); 
         
         await driver.pause(2000);

         
         irAceptados.click()
         await driver.pause(4000);
        
         //mostrarCom.click()              

        /*await driver.pause(2000);

        const btnRechazar =await $('id=btnRechazar')
        btnRechazar.click();   
             

        await driver.pause(2000);  */
    
   
    })
}) 
 


