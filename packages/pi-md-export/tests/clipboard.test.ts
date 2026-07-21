import assert from "node:assert/strict";
import test from "node:test";

import { copyToClipboard } from "../extensions/md.ts";

test("copyToClipboard preserves Unicode and line breaks", async () => {
  const expected = "Pi export\n日本語\nfinal line";
  let copied = "";

  await copyToClipboard(expected, {
    setText: async (text: string) => {
      copied = text;
    },
  });

  assert.equal(copied, expected);
});
