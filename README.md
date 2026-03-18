# webmcp-agent

A skill for guiding AI Agents to interact with WebMCP web pages.

## Skill Description

This repository contains the `webmcp-agent` skill, which helps AI agents understand and use the WebMCP standard to interact with web pages through `navigator.modelContext`.

For detailed usage instructions, please refer to [SKILL.md](./SKILL.md).

## Maintenance

### Update Resources Documentation

This project includes a script to update the resources documentation.

To run the script:

```bash
pnpm update-resources-docs
```

Or directly using the source file:

```bash
tsx scripts/update-resources-docs.ts
```

## Usage

```bash
claude

❯ 调用 chrome-devtools mcp 进入 https://webmcp.sh/dashboard, 通过 webmcp-agent 获取所有的路由

⏺ 我来帮你使用 chrome-devtools 进入 WebMCP 页面并获取路由信息。

  首先，让我打开浏览器并导航到该页面：

⏺ chrome-devtools - new_page (MCP)(url: "https://webmcp.sh/dashboard")
  ⎿  ## Pages
     1: about:blank
     2: https://webmcp.sh/dashboard [selected]

⏺ 页面已成功打开。现在让我使用 webmcp-agent skill 来获取所有的路由信息：

⏺ Skill(webmcp-agent)
  ⎿  Successfully loaded skill

⏺ 现在让我执行 WebMCP 的 listTools 脚本来获取所有可用的工具/路由：

⏺ chrome-devtools - evaluate_script (MCP)(function: "() => {\n  // 检查 WebMCP 是否可用\n  if (!navigator.modelContextTesting || typeof
                                          navigator.modelContextTesting.listTools !== 'function') {\n    return {\n      error: 'WebMCP
                                          API not available on this page',\n      available: false\n    };\n  }\n  \n  // 调用
                                         listTools 获取所有工具\n  const tools = navigator.modelContextTesting.listTools();\n  return
                                         {\n    available: true,\n    count: tools.length,\n    tools: tools\n  };\n}")
  ⎿  Running…

⏺ chrome-devtools - evaluate_script (MCP)(function: "() => {\n  const result =
                                         navigator.modelContextTesting.executeTool('list_all_routes', '{}');\n  return result;\n}")
  ⎿  Script ran on page and returned:
     ```json
     "{\"content\":[{\"type\":\"text\",\"text\":\"=== WEBMCP APPLICATION NAVIGATION ===\\n\\nABOUT THIS APP\\n──────────────\\nWeb
     … +29 lines (ctrl+o to expand)

⏺ 📋 WebMCP 所有路由列表

  WebMCP 是一个内存和知识管理系统，具有以下路由：

  🏠 主要路由

  ┌─────────────────────┬──────────┬──────────────────────────────┐
  │        路由         │   描述   │             功能             │
  ├─────────────────────┼──────────┼──────────────────────────────┤
  │ /                   │ 首页     │ WebMCP 演示概览和文档        │
  ├─────────────────────┼──────────┼──────────────────────────────┤
  │ /dashboard          │ 仪表盘   │ 内存概览、统计图表和快速访问 │
  ├─────────────────────┼──────────┼──────────────────────────────┤
  │ /entities           │ 实体页面 │ 浏览和管理所有内存实体       │
  ├─────────────────────┼──────────┼──────────────────────────────┤
  │ /entities/$entityId │ 实体详情 │ 查看和编辑特定实体           │
  ├─────────────────────┼──────────┼──────────────────────────────┤
  │ /graph              │ 知识图谱 │ 可视化实体关系               │
  ├─────────────────────┼──────────┼──────────────────────────────┤
  │ /memory-blocks      │ 内存块   │ 管理始终在上下文的核心内存   │
  ├─────────────────────┼──────────┼──────────────────────────────┤
  │ /sql-repl           │ SQL REPL │ 执行直接数据库查询           │
  ├─────────────────────┼──────────┼──────────────────────────────┤
  │ /sql-execution-log  │ SQL 日志 │ 查看查询执行历史             │
  ├─────────────────────┼──────────┼──────────────────────────────┤
  │ /about              │ 关于页面 │ 技术栈和架构信息             │
  ├─────────────────────┼──────────┼──────────────────────────────┤
  │ /showcase           │ 展示页面 │ UI 组件演示                  │
  └─────────────────────┴──────────┴──────────────────────────────┘

  🔧 详细功能

  📊 Dashboard (/dashboard)
  - 查看内存块和实体计数
  - 按类别和层级查看令牌使用图表
  - 浏览数据库更改审计日志
  - 快速创建内存块和实体

  📝 Entities (/entities)
  - 在可搜索表格中查看所有实体
  - 按类别筛选（事实、偏好、技能、人员、项目、目标）
  - 创建、编辑和删除实体
  - 按名称或描述搜索实体

  🕸️  Knowledge Graph (/graph)
  - 以交互式 2D 或 3D 图形查看实体
  - 探索实体之间的连接
  - 运行视觉效果（相机漫游、粒子爆发）
  - 直接执行 SQL 查询

  💾 Memory Blocks (/memory-blocks)
  - 在表格中查看所有内存块
  - 创建新内存块
  - 编辑块内容、标签和优先级
  - 按块类型筛选（user_profile、agent_persona、current_goals、context）

  🗄️  SQL REPL (/sql-repl)
  - 对浏览器内数据库运行 SQL 查询
  - 探索数据库架构和表
  - 查看格式化的查询结果

  🚀 导航示例

  // 导航到实体页面
  { "to": "/entities" }

  // 查看特定实体
  { "to": "/entities/$entityId", "params": { "entityId": "abc-123" } }

  // 打开知识图谱
  { "to": "/graph" }

  // 管理内存块
  { "to": "/memory-blocks" }

  这个应用使用了 TanStack Router 进行路由管理，当你导航到不同路由时，会自动激活相应的上下文相关工具。
```

# Refer
- <a href="https://blog.xiaban.run/posts/2026/chrome-webmcp/" target="_blank">WebMCP 时代已至 - Chrome WebMCP 使用指南</a>
- <a href="https://github.com/webmachinelearning/webmcp" target="_blank">webmachinelearning/webmcp</a>
- <a href="https://developer.chrome.com/blog/webmcp-epp?hl=zh-cn" target="_blank">WebMCP 现已推出抢先预览版</a>
- <a href="https://www.youtube.com/watch?v=fgHRJzjSLP8" target="_blank">I Built a Website That AI Agents Can Control (WebMCP Deep Dive)</a>
- <a href="https://skills.sh/pillarhq/pillar-skills/webmcp" target="_blank">webmcp - skills.sh</a>
- <a href="https://github.com/ChromeDevTools/chrome-devtools-mcp" target="_blank">chrome-devtools-mcp</a>
- <a href="https://blog.xiaban.run/posts/2025/chrome-devtools-mcp-demo/" target="_blank">chrome-devtools-mcp-demo</a>
- <a href="https://docs.mcp-b.ai/explanation/webmcp/standard-api#navigator-modelcontexttesting" target="_blank">navigator.modelContextTesting</a>
- <a href="https://docs.mcp-b.ai/explanation/webmcp/standard-api" target="_blank">mcp-b 的文档</a>
- <a href="https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/docs/tool-reference.md#take_snapshot" target="_blank">chrome-devtools-mcp 的 take_snapshot API</a>
- <a href="https://www.npmjs.com/package/@mcp-b/webmcp-polyfill" target="_blank">@mcp-b/webmcp-polyfill</a>
- <a href="https://docs.mcp-b.ai/" target="_blank">mcp-b</a>
- <a href="https://docs.mcp-b.ai/packages/webmcp-polyfill/reference" target="_blank">@mcp-b/webmcp-polyfill</a>
- <a href="https://docs.mcp-b.ai/explanation/native-vs-polyfill-vs-global" target="_blank">原生 API vs Polyfill vs mcp-b 全局运行时</a>
- <a href="https://chromewebstore.google.com/detail/model-context-tool-inspec/gbpdfapgefenggkahomfgkhfehlcenpd" target="_blank">Model Context Tool Inspector</a>
- <a href="https://webmcp.sh/dashboard" target="_blank">webmcp.sh</a>