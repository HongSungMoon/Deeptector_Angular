import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { cctvComponent } from './app.cctv';
import { listComponent } from './app.listcomponent';
import { mainComponent } from './app.maincomponent';
import { productComponent } from './app.product';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { PagerService } from './index';

@NgModule({
	imports : [BrowserModule, routing, HttpModule],
	declarations : [AppComponent, cctvComponent, listComponent, mainComponent, productComponent],
	providers : [{ provide : LocationStrategy, useClass : HashLocationStrategy }, PagerService],
	bootstrap : [AppComponent]
})
export class AppModule {}
