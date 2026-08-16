import { expect, test } from "@playwright/test";

test("A1 foundation renders and opens the sample lesson", async ({ page }) => {
  await page.goto("/a1");

  await expect(
    page.getByRole("heading", { level: 1, name: "German A1" }),
  ).toBeVisible();

  await page
    .getByRole("link", { name: /The German Sentence Engine/i })
    .click();

  await expect(
    page.getByRole("heading", { level: 1, name: "Verb auf Position 2" }),
  ).toBeVisible();

  await expect(page.getByText("Position 1 + finite Verb + ...")).toBeVisible();
});
