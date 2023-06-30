'use strict';

const iFrameViewer = document.getElementById(
    'iFrameViewer'
) as HTMLIFrameElement;
// const iFrameViewerDoc = iFrameViewer.contentWindow;

window.addEventListener('message', async (event: MessageEvent<unknown>) => {
    if ((await event.data) === 'back') {
        iFrameViewer.contentWindow?.history.back();
    } else if ((await event.data) === 'forward') {
        iFrameViewer.contentWindow?.history.forward();
    }
});
