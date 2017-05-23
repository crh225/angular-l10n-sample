import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { LocalizationModule } from 'angular-l10n';
const sharedModules: any[] = [
    HttpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    LocalizationModule
];

@NgModule({
    imports: sharedModules,
    exports: sharedModules
})

export class SharedModule { 
    static forRoot(): ModuleWithProviders{ 
        return {
            ngModule: SharedModule,
            providers: [
            ]
        }
    }
 }
