/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

const closeSigninButton = document.getElementById(
    'signinClose-modal'
) as HTMLButtonElement;
const submitSigninButton = document.getElementById(
    'signinModal-submit'
) as HTMLInputElement;

closeSigninButton.addEventListener(
    'click',
    async (event: MouseEvent): Promise<void> => {
        event.preventDefault();
        await closeSignin();
        event.stopPropagation();
    }
);

submitSigninButton.addEventListener(
    'click',
    async (event: MouseEvent): Promise<void> => {
        // event.preventDefault();
        signinSubmitUser();
        // new SubmitEvent('input', {
        //     bubbles: true,
        //     composed: true
        // });
        console.log(`Event Listening: ${event}`);
    }
);

async function closeSignin(): Promise<void> {
    try {
        window.location.href = '/landing';
    } catch (error: unknown) {
        console.error(`There has been an Close Login ERROR: ${await error}`);
    }
    return;
}

async function signinSubmitUser(): Promise<void> {
    // try {
    window.location.href = '/signin_modal';
    console.log(`Signin Submit Button Clicked: ${window.location}`);
    // } catch (error: unknown) {
    //     console.error(
    //         `There has been a Signin Submit User ERROR: ${await error}`
    //     );
    // }
    return;
}

// async function inputEvent(submitEv: SubmitEvent): Promise<any> {
//     try {
//         if (submitEv) {
//             dispatchEvent(submitEv) === true
//                 ? signinSubmitUser()
//                 : // ? () => document.location.reload()
//                   submitEv.AT_TARGET && location.reload();
//         }
//         // submitEv.AT_TARGET && location.reload();
//         //     (() => {
//         //         console.log(`Signin Submit Button Clicked: ${submitEv}`);
//         //     });
//         //  j&& (await closeSignin());
//         // submitEv.target && (await signinSubmitUser());
//     } catch (error: unknown) {
//         console.error(
//             `There has been a Signin Input Event ERROR: ${await error}`
//         );
//     }
//     return;
// }
