import { RouteDefinition } from "@solidjs/router";
import { lazy } from "solid-js";

export const RoutesArr: RouteDefinition[] = [
    {
        path: "/",
        component: lazy(() => import("./pages/")),
    }
]