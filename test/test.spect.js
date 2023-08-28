"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var selenium_webdriver_1 = require("selenium-webdriver");
var mocha_1 = require("mocha");
var TESTING_BROWSER = 'chrome';
var crearDriver = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new selenium_webdriver_1.Builder().forBrowser(TESTING_BROWSER).build()];
    });
}); };
(0, mocha_1.describe)('Prueba de Login', function () {
    var driver;
    (0, mocha_1.before)(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, crearDriver()];
                case 1:
                    driver = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    (0, mocha_1.after)(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, driver.quit()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    // prueba login incorrecto
    (0, mocha_1.it)('debería iniciar sesión incorrectamente', function () { return __awaiter(void 0, void 0, void 0, function () {
        var usernameInput, passwordInput, loginButton;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, driver.get('http://localhost:4200/login')];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(300)];
                case 2:
                    _a.sent();
                    console.log("epico");
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.name('user'))];
                case 3:
                    usernameInput = _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.name('password'))];
                case 4:
                    passwordInput = _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('botonSesion'))];
                case 5:
                    loginButton = _a.sent();
                    return [4 /*yield*/, usernameInput.sendKeys('pepe1@gmail.com')];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, passwordInput.sendKeys('123456')];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, loginButton.click()];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.titleIs('Inicio Sesion'), 5000)];
                case 9:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    //prueba login correcto
    (0, mocha_1.it)('debería iniciar sesión correctamente', function () { return __awaiter(void 0, void 0, void 0, function () {
        var usernameInput, passwordInput, loginButton;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, driver.get('http://localhost:4200/login')];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(300)];
                case 2:
                    _a.sent();
                    console.log("epico");
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.name('user'))];
                case 3:
                    usernameInput = _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.name('password'))];
                case 4:
                    passwordInput = _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('botonSesion'))];
                case 5:
                    loginButton = _a.sent();
                    console.log(usernameInput);
                    return [4 /*yield*/, usernameInput.sendKeys('pepe@gmail.com')];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, passwordInput.sendKeys('123456')];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, loginButton.click()];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.titleIs('inicio'), 5000)];
                case 9:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
(0, mocha_1.describe)("Navegar", function () { return __awaiter(void 0, void 0, void 0, function () {
    var driver;
    return __generator(this, function (_a) {
        (0, mocha_1.before)(function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, crearDriver()];
                    case 1:
                        driver = _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        (0, mocha_1.after)(function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, driver.quit()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        // Prueba de navegabilidad
        (0, mocha_1.it)("Deberia navegar con la navbar", function () { return __awaiter(void 0, void 0, void 0, function () {
            var linkLogin, linkCarga, linkHome;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, driver.get('http://localhost:4200/')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, driver.sleep(150)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id("linkLogin"))];
                    case 3:
                        linkLogin = _a.sent();
                        return [4 /*yield*/, linkLogin.click()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, driver.sleep(150)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id("linkCarga"))];
                    case 6:
                        linkCarga = _a.sent();
                        return [4 /*yield*/, linkCarga.click()];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, driver.sleep(150)];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id("linkHome"))];
                    case 9:
                        linkHome = _a.sent();
                        return [4 /*yield*/, linkHome.click()];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.titleIs('inicio'), 5000)];
                    case 11:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); });
(0, mocha_1.describe)('Prueba de carga', function () {
    var driver;
    (0, mocha_1.before)(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, crearDriver()];
                case 1:
                    driver = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    (0, mocha_1.after)(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, driver.quit()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    //prueba cargar datos correctos
    (0, mocha_1.it)('debería cargar datos correctamente', function () { return __awaiter(void 0, void 0, void 0, function () {
        var usernameInput, passwordInput, loginButton, apellido, dni, nombre, boton, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, driver.get('http://localhost:4200/login')];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(300)];
                case 2:
                    _a.sent();
                    console.log("epico");
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.name('user'))];
                case 3:
                    usernameInput = _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.name('password'))];
                case 4:
                    passwordInput = _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('botonSesion'))];
                case 5:
                    loginButton = _a.sent();
                    console.log(usernameInput);
                    return [4 /*yield*/, usernameInput.sendKeys('pepe@gmail.com')];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, passwordInput.sendKeys('123456')];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, loginButton.click()];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, driver.get('http://localhost:4200/cargaDatos')];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(150)];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('inputApellido'))];
                case 11:
                    apellido = _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('inputDNI'))];
                case 12:
                    dni = _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('inputNombre'))];
                case 13:
                    nombre = _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('botonCarga'))];
                case 14:
                    boton = _a.sent();
                    return [4 /*yield*/, apellido.sendKeys('Messi')];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, dni.sendKeys('12345678')];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, nombre.sendKeys('Lionel')];
                case 17:
                    _a.sent();
                    return [4 /*yield*/, boton.click()];
                case 18:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(150)];
                case 19:
                    _a.sent();
                    console.log("a entrar");
                    _a.label = 20;
                case 20:
                    _a.trys.push([20, 22, , 23]);
                    console.log("entro");
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id("respuestaCarga"))];
                case 21:
                    _a.sent();
                    return [2 /*return*/];
                case 22:
                    e_1 = _a.sent();
                    console.log("error");
                    throw new Error('No se encontro el mensaje de respuesta');
                case 23: return [2 /*return*/];
            }
        });
    }); });
    //prueba cargar datos incorrectos
    (0, mocha_1.it)('debería cargar datos incorrectamente', function () { return __awaiter(void 0, void 0, void 0, function () {
        var usernameInput, passwordInput, loginButton, apellido, dni, nombre, boton, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, driver.get('http://localhost:4200/login')];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(300)];
                case 2:
                    _a.sent();
                    console.log("epico");
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.name('user'))];
                case 3:
                    usernameInput = _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.name('password'))];
                case 4:
                    passwordInput = _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('botonSesion'))];
                case 5:
                    loginButton = _a.sent();
                    console.log(usernameInput);
                    return [4 /*yield*/, usernameInput.sendKeys('pepe@gmail.com')];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, passwordInput.sendKeys('123456')];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, loginButton.click()];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, driver.get('http://localhost:4200/cargaDatos')];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(150)];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('inputApellido'))];
                case 11:
                    apellido = _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('inputDNI'))];
                case 12:
                    dni = _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('inputNombre'))];
                case 13:
                    nombre = _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('botonCarga'))];
                case 14:
                    boton = _a.sent();
                    return [4 /*yield*/, apellido.sendKeys('Cristiano')];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, dni.sendKeys('')];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, nombre.sendKeys('Ronaldo')];
                case 17:
                    _a.sent();
                    return [4 /*yield*/, boton.click()];
                case 18:
                    _a.sent();
                    console.log("a entrar");
                    _a.label = 19;
                case 19:
                    _a.trys.push([19, 21, , 22]);
                    console.log("entro");
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id("errorRespuesta"))];
                case 20:
                    _a.sent();
                    return [2 /*return*/];
                case 21:
                    e_2 = _a.sent();
                    console.log("error");
                    throw new Error('No se encontro el mensaje de error');
                case 22: return [2 /*return*/];
            }
        });
    }); });
});
