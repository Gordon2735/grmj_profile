import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('http://127.0.0.1:9080/cover_letter');

    await expect(page).toHaveTitle(/Cover-Letter-Profile/);
});
