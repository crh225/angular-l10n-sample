import { NgModule, APP_INITIALIZER, Injectable } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { I18nComponent } from './i18n/i18n.component';
import { ValidationComponent } from './validation/validation.component';

import { LocalizationModule, LocaleValidationModule, LocaleService, TranslationService } from 'angular-l10n';



// APP_INITIALIZER will execute the function when the app is initialized and delay what it provides.
@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule.forRoot(),
        LocalizationModule.forRoot(), // New instance of LocaleService & TranslationService.
        LocaleValidationModule.forRoot()
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        I18nComponent,
        ValidationComponent
    ],
    providers: [
        Title
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(locale: LocaleService, translation: TranslationService){
        locale.addConfiguration()
            .addLanguage('en', 'ltr')
            .addLanguage('it', 'ltr')
            .addLanguage('ar', 'rtl')
            .setCookieExpiration(30)
            .defineDefaultLocale('en', 'US')
            .defineCurrency('USD');
        locale.init();

        translation.addConfiguration()
            .addProvider('./src/assets/locale-')
            .addProvider('./src/assets/locale-list-')
            .addProvider('./src/assets/locale-position-');

        const promise: Promise<any> = new Promise((resolve: any) => {
            translation.translationChanged.subscribe(() => {
                resolve(true);
            });
        });


        translation.init();
    }
 }
