import { Routes } from '@angular/router';
import { WhoAreComponent } from './who-are/who-are.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductsComponent } from './products/products.component';
import { TermsComponent } from './terms/terms.component';
import { ServicesComponent } from './services/services.component';
import { CorporativeAccessComponent } from './corporative-access/corporative-access.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'about', component: WhoAreComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'terms-conditions', component: TermsComponent },
  { path: 'corporative-access', component: CorporativeAccessComponent },
  { path: '**', component: NotFoundComponent },
];
