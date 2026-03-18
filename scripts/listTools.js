/**
 * List all available WebMCP tools
 * @returns {Array<{description: string, name: string, inputSchema: string}> | Error} Array of tools
 */
function listTools() {
  if (!navigator.modelContextTesting || !navigator.modelContext) {
    throw new Error('WebMCP tools not available')
  }
  return navigator.modelContextTesting.listTools()
}

listTools()