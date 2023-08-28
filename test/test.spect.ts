import { WebDriver, Builder, Capabilities, By, until } from 'selenium-webdriver';
import { describe, it, before, after, beforeEach } from 'mocha';

const TESTING_BROWSER = 'chrome';

const crearDriver = async (): Promise<WebDriver> => {
  return new Builder().forBrowser( TESTING_BROWSER ).build();
};

describe('Prueba de Login', () => {
  let driver: WebDriver;

  before(async() => {
    driver = await crearDriver();
  })

  after(async () => {
    await driver.quit();
  });

  // prueba login incorrecto
  it('debería iniciar sesión incorrectamente', async () => {
    await driver.get('http://localhost:4200/login');
    await driver.sleep(300)
    console.log("epico")

    const usernameInput = await driver.findElement(By.name('user'));
    const passwordInput = await driver.findElement(By.name('password'));
    const loginButton = await driver.findElement(By.id('botonSesion'));

    await usernameInput.sendKeys('pepe1@gmail.com');
    await passwordInput.sendKeys('123456');
    await loginButton.click();
    
    await driver.wait(until.titleIs('Inicio Sesion'), 5000);
  });
    
  //prueba login correcto
  it('debería iniciar sesión correctamente', async () => {
    await driver.get('http://localhost:4200/login');
    await driver.sleep(300)
    console.log("epico")

    const usernameInput = await driver.findElement(By.name('user'));
    const passwordInput = await driver.findElement(By.name('password'));
    const loginButton = await driver.findElement(By.id('botonSesion'));

    console.log(usernameInput)

    await usernameInput.sendKeys('pepe@gmail.com');
    await passwordInput.sendKeys('123456');
    await loginButton.click();
    
    await driver.wait(until.titleIs('inicio'), 5000);
  });
});

describe("Navegar", async() => {
  let driver: WebDriver;

  before(async() => {
    driver = await crearDriver();
  })

  after(async () => {
    await driver.quit();
  });

  // Prueba de navegabilidad
  it("Deberia navegar con la navbar", async() => {
    await driver.get('http://localhost:4200/');
    await driver.sleep(150);
    
    const linkLogin = await driver.findElement(By.id("linkLogin"));
    await linkLogin.click();
    await driver.sleep(150);

    const linkCarga = await driver.findElement(By.id("linkCarga"));
    await linkCarga.click();
    await driver.sleep(150);

    const linkHome = await driver.findElement(By.id("linkHome"));
    await linkHome.click();

    await driver.wait(until.titleIs('inicio'), 5000);
  })
})

describe('Prueba de carga', () => {
  let driver: WebDriver;

  before(async() => {
    driver = await crearDriver();
  })

  after(async () => {
    await driver.quit();
  });
    
  //prueba cargar datos correctos
  it('debería cargar datos correctamente', async () => {
    await driver.get('http://localhost:4200/login');
    await driver.sleep(300)
    console.log("epico")

    const usernameInput = await driver.findElement(By.name('user'));
    const passwordInput = await driver.findElement(By.name('password'));
    const loginButton = await driver.findElement(By.id('botonSesion'));

    console.log(usernameInput)

    await usernameInput.sendKeys('pepe@gmail.com');
    await passwordInput.sendKeys('123456');
    await loginButton.click();

    await driver.get('http://localhost:4200/cargaDatos');
    await driver.sleep(150)

    const apellido = await driver.findElement(By.id('inputApellido'));
    const dni = await driver.findElement(By.id('inputDNI'));
    const nombre = await driver.findElement(By.id('inputNombre'));
    const boton = await driver.findElement(By.id('botonCarga'));

    await apellido.sendKeys('Messi');
    await dni.sendKeys('12345678');
    await nombre.sendKeys('Lionel');
    await boton.click();
    
    await driver.sleep(150)

    console.log("a entrar")

    try {
      console.log("entro")
      await driver.findElement(By.id("respuestaCarga"));
      
      return;
    }
    catch(e){
      console.log("error")
      throw new Error('No se encontro el mensaje de respuesta');
    }
  });

  //prueba cargar datos incorrectos
  it('debería cargar datos incorrectamente', async () => {
    await driver.get('http://localhost:4200/login');
    await driver.sleep(300)
    console.log("epico")

    const usernameInput = await driver.findElement(By.name('user'));
    const passwordInput = await driver.findElement(By.name('password'));
    const loginButton = await driver.findElement(By.id('botonSesion'));

    console.log(usernameInput)

    await usernameInput.sendKeys('pepe@gmail.com');
    await passwordInput.sendKeys('123456');
    await loginButton.click();

    await driver.get('http://localhost:4200/cargaDatos');
    await driver.sleep(150)

    const apellido = await driver.findElement(By.id('inputApellido'));
    const dni = await driver.findElement(By.id('inputDNI'));
    const nombre = await driver.findElement(By.id('inputNombre'));
    const boton = await driver.findElement(By.id('botonCarga'));

    await apellido.sendKeys('Cristiano');
    await dni.sendKeys('');
    await nombre.sendKeys('Ronaldo');
    await boton.click();

    console.log("a entrar")

    try {
      console.log("entro");
      await driver.findElement(By.id("errorRespuesta"));
      return;
    }
    catch(e){
      console.log("error")
      throw new Error('No se encontro el mensaje de error');
    }
  });
});