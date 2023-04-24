'use strict';

async function closeLogin(): Promise<void> {
    try {
        window.location.assign('/landing');
    } catch (error: unknown) {
        console.error(`There has been an Close Login ERROR: ${await error}`);
    }
    return;
}

async function submitUser(): Promise<void> {
    // try {
    // new window.SubmitEvent('input', { bubbles: true });
    window.location.href = `/login_modal`;
    // } catch (error: unknown) {
    //     console.error(`There has been an Submit User ERROR: ${await error}`);
    // }
    return;
}

const closeButton = document.getElementById('close-modal') as HTMLButtonElement;
const submitButton = document.getElementById(
    'login-modal-submit'
) as HTMLInputElement;

closeButton.addEventListener('click', (event: MouseEvent): void => {
    event.preventDefault();
    closeLogin();
    event.stopPropagation();
});

submitButton.addEventListener('click', (event: MouseEvent): void => {
    // event.preventDefault();
    submitUser();
    // event.stopPropagation();
    console.log(`Submit Button Clicked: ${event}`);
});
