import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^that the user is on the system login page$/, async () => {
        await browser.get("http://localhost:4200/login");
    });

    When(/^the user fills the "([^\"]*)" with "([^\"]*)"$/, async (field, content) => {
        await element(by.name(<string> field)).clear();
        await element(by.name(<string> field)).sendKeys(<string> content);
    });

    When(/^the user clicks in submit$/, async () => {
        await element(by.id("submit-login")).click();
    })


    Then(/^the login is completed and the user is redirected to the home page$/, async() => {
        await browser.get("http://localhost:4200/profile");

    })

    Then(/^eu vejo uma mensagem de que o cadastro foi feito com sucesso$/, async() => {
        await element(by.className("success_popup")).isDisplayed();
    })

    Then(/^the login is not completed and an error message appears on the screen, informing us that it was not possible to find any account with the data entered$/, async () =>{
        await element(by.className("alert-invalid")).isDisplayed();
    })
    
    Then(/^the login is not completed and an error message appears on the screen, informing us that all fields need to be filled$/, async ()=>{
        await element(by.className("alert-fields")).isDisplayed();
    })

    Given(/^the password "([^\"]*)" is registered$/, async (password) =>{
        
    })

    Given(/^the email "([^\"]*)" is registered$/, async (email) =>{
        
    });

    Given(/^the email "([^\"]*)" is not registered$/, async (cnpj) =>{
        
    });



})