import denoKvAdmin from "./kv-admin.ts";
import { HandlerContext, Plugin } from "$fresh/server.ts";
import "https://deno.land/std@0.201.0/dotenv/load.ts";

export const kvAdmin = Deno.env.get("DENO_DEPLOYMENT_ID") ? {} : {
  name: "kv-admin",
  routes: [
    {
      path: "/kv-admin",
      handler: (
        req: Request,
        _ctx: HandlerContext,
      ): Promise<Response> => {
        return denoKvAdmin(req, "/kv-admin");
      },
    },
    {
      path: "/kv-admin/[rest]",
      handler: (
        req: Request,
        _ctx: HandlerContext,
      ): Promise<Response> => {
        return denoKvAdmin(req, "/kv-admin");
      },
    },
  ],
} as Plugin;
