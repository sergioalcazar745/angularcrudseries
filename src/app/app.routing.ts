import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ModificarPersonajeComponent } from "./components/modificar-personaje/modificar-personaje.component";
import { NuevoPersonajeComponent } from "./components/nuevo-personaje/nuevo-personaje.component";
import { PersonajesComponent } from "./components/personajes/personajes.component";
import { SerieComponent } from "./components/serie/serie.component";

const appRoutes: Routes = [
    {
        path: "", component: HomeComponent
    },

    {
        path: "nuevo", component: NuevoPersonajeComponent
    },

    {
        path: "modificar", component: ModificarPersonajeComponent
    },

    {
        path: "serie/:id", component: SerieComponent
    },

    {
        path: "personajes/:id", component: PersonajesComponent
    },
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)