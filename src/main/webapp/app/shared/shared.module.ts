import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Demo1SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [Demo1SharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [Demo1SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Demo1SharedModule {
  static forRoot() {
    return {
      ngModule: Demo1SharedModule
    };
  }
}
