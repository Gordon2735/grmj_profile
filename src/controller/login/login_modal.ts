'use strict';

async function closeLogin(): Promise<void> {
    try {
        window.location.href = '/landing';
    } catch (error: unknown) {
        console.error(`There has been an Close Login ERROR: ${error}`);
    }
    return;
}

async function submitUser(): Promise<void> {
    try {
        window.location.href = '/login_modal';
    } catch (error: unknown) {
        console.error(`There has been an Submit User ERROR: ${error}`);
    }
    return;
}

const closeButton = document.getElementById('close-modal') as HTMLButtonElement;
const submitButton = document.getElementById('submit') as HTMLButtonElement;

closeButton.addEventListener('click', (event: MouseEvent): void => {
    event.preventDefault();
    closeLogin();
    event.stopPropagation();
});

submitButton.addEventListener('click', (event: MouseEvent): void => {
    event.preventDefault();
    submitUser();
    event.stopPropagation();
});
