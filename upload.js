import GhostAdminAPI from "@tryghost/admin-api";
import { admin_api_key, url, version } from "./env.js";

const api = new GhostAdminAPI({ url, key: admin_api_key, version });

const result = await api.themes.upload({
  file: "./dist/wenke-studio.zip",
});

console.log(result);
