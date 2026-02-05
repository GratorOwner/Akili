import { MCPServer } from "@modelcontextprotocol/sdk/server";
import { searchBlackOwned } from "./tools/search.js";

export function runServer() {
  const server = new MCPServer({
    name: "akili-mcp",
    version: "0.1.0"
  });

  server.tool(
    "search_black_owned",
    {
      description: "Search for Black-owned businesses",
      inputSchema: {
        type: "object",
        properties: {
          location: { type: "string" },
          radius_km: { type: "number" }
        },
        required: ["location"]
      }
    },
    async ({ location, radius_km = 5 }) => {
      return await searchBlackOwned(location, radius_km);
    }
  );

  server.start();
}

