import { ModuleWithProviders } from "@angular/core";
import { RouterModule } from "@angular/router"

import {CounterComponent} from "./counter.component";

export const counterRoutes: ModuleWithProviders = RouterModule.forChild([
    { path: "counter", component: CounterComponent}
])