import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { Demo1SharedModule } from 'app/shared';
import {
  BlogComponent,
  BlogDetailComponent,
  BlogUpdateComponent,
  BlogDeletePopupComponent,
  BlogDeleteDialogComponent,
  blogRoute,
  blogPopupRoute
} from './';

const ENTITY_STATES = [...blogRoute, ...blogPopupRoute];

@NgModule({
  imports: [Demo1SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [BlogComponent, BlogDetailComponent, BlogUpdateComponent, BlogDeleteDialogComponent, BlogDeletePopupComponent],
  entryComponents: [BlogComponent, BlogUpdateComponent, BlogDeleteDialogComponent, BlogDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Demo1BlogModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
