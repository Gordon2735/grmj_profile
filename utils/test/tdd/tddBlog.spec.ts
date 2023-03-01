import { test, expect, Locator } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('http://127.0.0.1:9080/blog');
    await expect(page).toHaveTitle(/Profile-Blog/);

    const blogComponent: Locator = page.locator('#profileBlog');
    await expect(blogComponent).toHaveAttribute('data-testid', 'blog-3');
});
