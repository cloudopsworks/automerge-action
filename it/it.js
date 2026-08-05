import { Octokit } from "@octokit/rest";
import dotenv from "dotenv";

import { executeLocally } from "../lib/api.js";
import { createConfig } from "../lib/common.js";

async function main() {
  dotenv.config();

  const token = process.env.GITHUB_TOKEN;

  const octokit = new Octokit({
    baseUrl: "https://api.github.com",
    auth: `token ${token}`,
    userAgent: "pascalgn/automerge-action-it"
  });

  const config = createConfig({
    UPDATE_LABELS: "it-update",
    MERGE_LABELS: "it-merge",
    MERGE_REQUIRED_APPROVALS: "0",
    MERGE_REMOVE_LABELS: "it-merge",
    MERGE_RETRIES: "3",
    MERGE_RETRY_SLEEP: "2000",
    MERGE_ERROR_FAIL: "true"
  });

  const context = { token, octokit, config };

  await executeLocally(context, process.env.URL);
}

main().catch(e => {
  process.exitCode = 1;
  console.error(e);
});
