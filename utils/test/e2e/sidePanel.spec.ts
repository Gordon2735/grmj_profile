import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('http://127.0.0.1:9080');

    // Expect the "container" of the Slide out menu to have an ID of 'container'.
    await page.getByTestId('containertestid').getAttribute('slide-container');

    await expect(page).toHaveTitle(/Home-Profile/);
});
