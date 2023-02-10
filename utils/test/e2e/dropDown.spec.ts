import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('http://127.0.0.1:9080');

    // Expect the "section element" of the Drop Down menu to have an TESTID of 'dropdowntestid'.
    await page.getByTestId('dropdowntestid').getAttribute('ddsection');

    await expect(page).toHaveTitle(/Home-Profile/);
});
