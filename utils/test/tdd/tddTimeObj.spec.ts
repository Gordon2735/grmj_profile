import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('http://127.0.0.1:9080/spacex');
    await expect(page).toHaveTitle(/SpaceX-Profile/);

    const timeComponent = page.locator('#timeObject');
    await expect(timeComponent).toHaveAttribute(
        'data-set-options',
        'startup' || 'startup-shell'
    );
});

// page.locator('#timeObject');
// expect(page).toHaveProperty(
//     'data-set-options',
//     'startup' || 'startup-shell'
// );
