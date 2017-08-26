import { ModuleWithProviders } from "@angular/core";
import { RouterModule } from "@angular/router";
import {HomeComponent} from "./home.component";

export const homeRoutes: ModuleWithProviders = RouterModule.forChild([
    {path:"home",component:HomeComponent}
])