import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';

import {
    TranslationService,
    IntlAPI,
    Collator,
    Language,
    DefaultLocale,
    Currency
} from 'angular-l10n';

@Component({
    selector: 'test',
    template: 'This Should translate: {{ Accountant | translate:lang }}',
    viewProviders: [Collator]
})
export class TestComponent implements OnInit, OnDestroy {

    @Language() lang: string;
    @DefaultLocale() defaultLocale: string;
    @Currency() currency: string;


    constructor(public translation: TranslationService, private collator: Collator) { }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }


}
