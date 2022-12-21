import fetch from "node-fetch";
import createHttpsProxyAgent from "https-proxy-agent";
import {
  PROXY_HOST,
  PROXY_PASSWORD,
  PROXY_PORT,
  PROXY_USER,
} from "./constants";

const agent = createHttpsProxyAgent(
  `http://${PROXY_USER}:${PROXY_PASSWORD}@${PROXY_HOST}:${PROXY_PORT}`,
);

const response = await fetch("https://api.db-ip.com/v2/free/self", { agent });
const data = await response.json();

console.log(data);
