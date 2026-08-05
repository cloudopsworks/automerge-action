import { update } from "../lib/update.js";
import { createConfig } from "../lib/common.js";
import { pullRequest } from "./common.js";

test("update will only run when the label matches", async () => {
  const pr = pullRequest();
  const config = createConfig({ UPDATE_LABELS: "none" });
  expect(await update({ config }, pr)).toEqual(false);
});
