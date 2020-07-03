import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { NeocuSharedModule } from 'app/shared/shared.module';
import { NeocuCoreModule } from 'app/core/core.module';
import { NeocuAppRoutingModule } from './app-routing.module';
import { NeocuHomeModule } from './home/home.module';
import { NeocuEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    NeocuSharedModule,
    NeocuCoreModule,
    NeocuHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    NeocuEntityModule,
    NeocuAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class NeocuAppModule {}
