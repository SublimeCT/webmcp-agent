import { promises as fs } from 'fs'

/** mcp-b 的 WebMCP 标准 API 文档地址 */
const standardApiUrl = 'https://raw.githubusercontent.com/WebMCP-org/docs/5b3b7e21509fb3e972f3e4ad52e801794255fb7a/explanation/webmcp/standard-api.mdx';

/** 输出文件路径 */
const OUTPUT_FILE = './resources/standard-api.md';

function fetchStandardApi() {
  return fetch(standardApiUrl).then(res => res.text());
}

async function main() {
  const standardApi = await fetchStandardApi();
  await fs.writeFile(OUTPUT_FILE, standardApi);
  process.exit(0);
}

main()