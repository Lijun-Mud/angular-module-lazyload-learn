import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
//import {CounterModule} from "./components/counter/counter.module";

const appRoutes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "counter", loadChildren:"./components/counter/counter.module#CounterModule"},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);