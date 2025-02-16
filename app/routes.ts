import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("broken_home", "routes/broken_home.tsx"),
  route("user_page", "routes/user_page.tsx"),
  route("unauthorized", "routes/unauthorized.tsx"),
  route("switch", "routes/switch.tsx")
] satisfies RouteConfig;
