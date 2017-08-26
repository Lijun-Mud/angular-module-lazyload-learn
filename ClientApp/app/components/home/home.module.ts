import { NgModule } from "@angular/core";

import { HomeComponent } from "./home.component";
import { HelloService } from "./hello.service";
import { homeRoutes } from "./home.routes";

@NgModule({
    declarations: [HomeComponent],
    imports:[homeRoutes],
    providers: [HelloService],
    exports:[HomeComponent]
})

export class HomeModule {
    
}