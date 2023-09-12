import denoKvAdmin from "https://deno.land/x/deno_kv_admin@0.0.6/mod.ts";
import { HandlerContext, Plugin } from "$fresh/server.ts";

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
  ],
} as Plugin;
