import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('http://127.0.0.1:9080/goals');

    await expect(page).toHaveTitle(/Goals-Profile/);
});
