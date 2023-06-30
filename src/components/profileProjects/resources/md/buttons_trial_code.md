        const buttonHandler = (): void => {
            try {
                const navContainer = document.getElementById(
                    'projectViewerNav'
                ) as HTMLElement;

                const grabButtons = navContainer?.querySelectorAll(
                    '.btn-viewer'
                ) as NodeListOf<HTMLButtonElement>;

                async function getBackURLs(): UrlArray {
                    const backUrlsString = localStorage.getItem('backUrls');
                    return (await backUrlsString)
                        ? JSON.parse(backUrlsString)
                        : [];
                }

                async function setBackUrls(backUrls: UrlArray): void {
                    await localStorage.setItem(
                        'backUrls',
                        JSON.stringify(backUrls)
                    );
                }

                grabButtons?.forEach((button: HTMLButtonElement) => {
                    if (navContainer?.contains(button) !== false) {
                        const grabBackNavButton = navContainer?.querySelector(
                            '.back-button'
                        ) as HTMLButtonElement;

                        const grabForwardNavButton =
                            navContainer?.querySelector(
                                '.forward-button'
                            ) as HTMLButtonElement;

                        const grabSaveStorageButton =
                            navContainer?.querySelector(
                                '.save-storage-button'
                            ) as HTMLButtonElement;

                        window.addEventListener(
                            'DOMContentLoaded',
                            () => {

                                if (localStorage.getItem('backPages')) {
                                    const backPages: string[] = JSON.parse(
                                        localStorage.getItem('backPages') ?? ''
                                    );
                                    const lastPage: string | undefined =
                                        backPages.pop();

                                    if (lastPage) {
                                        const iFrameView =
                                            document.getElementById(
                                                'projectViewer'
                                            ) as HTMLIFrameElement;
                                        iFrameView.setAttribute(
                                            'src',
                                            lastPage
                                        );
                                        localStorage.setItem(
                                            'backPages',
                                            JSON.stringify(backPages)
                                        );
                                    }
                                }
                            }
                        );

                        grabBackNavButton?.addEventListener('click', () => {
                            try {
                                const iFrameSRC =
                                    this.iFrameViewer.getAttribute(
                                        'src'
                                    ) as string;
                                // this.iFrameViewer?.src;

                                if (localStorage.getItem('backPages')) {
                                    const backPages: string[] = JSON.parse(
                                        localStorage.getItem('backPages') ?? ''
                                    );

                                    if (iFrameSRC) {
                                        backPages.push(iFrameSRC);
                                    }
                                    localStorage.setItem(
                                        'backPages',
                                        JSON.stringify(backPages)
                                    );

                                    const viewerContent =
                                        this.iFrameViewer.contentWindow;

                                    viewerContent?.history.back();
                                } else {
                                    localStorage.setItem(
                                        'backPages',
                                        JSON.stringify(
                                            [iFrameSRC].filter(Boolean)
                                        )
                                    );
                                    // const getValue = this
                                    //     .profileProjectComponent?.dataset
                                    //     .value as string;
                                    // assignSrcToIFrameViewer(getValue);
                                }
                            } catch (error: unknown) {
                                console.error(
                                    `There was an ERROR in the back button event listener: ${error}`
                                );
                                return;
                            }
                        });

                        grabForwardNavButton?.addEventListener(
                            'click',
                            (event: MouseEvent) => {
                                try {
                                    // event.preventDefault();

                                    if (localStorage?.getItem('backPages')) {
                                        const backPages: string[] = JSON.parse(
                                            localStorage.getItem('backPages') ??
                                                ''
                                        );
                                        if (backPages.length > 0) {
                                            const nextURL: string | undefined =
                                                backPages.pop();
                                            if (nextURL) {
                                                this.iFrameViewer.setAttribute(
                                                    'src',
                                                    nextURL
                                                );
                                                localStorage.setItem(
                                                    'backPages',
                                                    JSON.stringify(backPages)
                                                );
                                                const viewerContent =
                                                    this.iFrameViewer
                                                        .contentWindow;
                                                viewerContent?.history.forward();
                                            } else {
                                                console.error(
                                                    'NO NEXT URL FOUND'
                                                );
                                                return;
                                            }
                                            return;
                                        }
                                        return;
                                    }
                                    event.stopPropagation();

                                    return;
                                } catch (error: unknown) {
                                    console.error(
                                        `There was an ERROR in the forward button event listener: ${error}`
                                    );
                                    return;
                                }
                            }
                        );

                        grabSaveStorageButton?.addEventListener(
                            'click',
                            (event: MouseEvent) => {
                                try {
                                    let userPreference: string | null;
                                    // event.preventDefault();

                                    if (
                                        this.savedStorageState
                                            .storage_state_saved !== true
                                    ) {
                                        if (
                                            confirm(
                                                'Are you sure you want to save your progress?'
                                            ) === true
                                        ) {
                                            userPreference = `Your progress in the Projects Viewer has been saved!`;

                                            this.savedStorageState.storage_state_saved =
                                                true;
                                        } else {
                                            userPreference = `Your saved progress in the Projects Viewer has been deleted!`;
                                            this.savedStorageState.storage_state_saved =
                                                false;
                                            localStorage.clear();
                                            console.info(userPreference);
                                        }
                                    } else {
                                        this.savedStorageState.storage_state_saved =
                                            false;
                                        localStorage.clear();
                                    }
                                    return console.info(this.savedStorageState);
                                } catch (error: unknown) {
                                    console.error(
                                        `There was an ERROR in the saveStorageButton event listener: ${error}`
                                    );
                                    return;
                                }
                                event.stopPropagation();
                            }
                        );
                    } else {
                        console.error('NO BUTTON FOUND');
                        return;
                    }
                });
            } catch (error: unknown) {
                console.error(
                    `There was an ERROR in the buttonHandler()
                ASYNCHRONOUS ARROW FUNCTION: ${error}`
                );
                return;
            }
            return;



            :::::::::::::::::::::::


                    const buttonHandler = async (): Promise<void> => {
            try {
                const navContainer = document.getElementById(
                    'projectViewerNav'
                ) as HTMLElement;

                const grabButtons = navContainer?.querySelectorAll(
                    '.btn-viewer'
                ) as NodeListOf<HTMLButtonElement>;

                const iFrameElement = document.getElementById(
                    'projectViewer'
                ) as HTMLIFrameElement;

                const backURLs: Promise<UrlArray> = getBackURLs();

                if ((await backURLs).length > 0) {
                    const lastURL = (await backURLs).pop();

                    switch (lastURL) {
                        case 'http://127.0.0.1:9080/src/components/profileProjects/resources/projectApps/synth/page_0.html':
                            assignSrcToIFrameViewer('0');
                            break;
                        case 'http://127.0.0.1:9080/src/components/profileProjects/resources/projectApps/teamWebelisticsBlog/page_1.html':
                            assignSrcToIFrameViewer('1');
                            break;
                        case 'http://127.0.0.1:9080/src/components/profileProjects/resources/projectApps/todoApp/page_2.html':
                            assignSrcToIFrameViewer('2');
                            break;
                        case 'http://127.0.0.1:9080/src/components/profileProjects/resources/projectApps/synth/page_3.html':
                            assignSrcToIFrameViewer('3');
                            break;
                        case 'http://127.0.0.1:9080/src/components/profileProjects/resources/projectApps/dogType/page_4.html':
                            assignSrcToIFrameViewer('4');
                            break;
                        default:
                            assignSrcToIFrameViewer('0');
                            break;
                    }

                    setBackURLs(await backURLs);
                    return;
                } else {
                    console.log('No back URLs');
                }

                grabButtons?.forEach((button: HTMLButtonElement) => {
                    if (navContainer?.contains(button) !== false) {
                        const grabBackNavButton = navContainer?.querySelector(
                            '.back-button'
                        ) as HTMLButtonElement;

                        const grabForwardNavButton =
                            navContainer?.querySelector(
                                '.forward-button'
                            ) as HTMLButtonElement;

                        const grabSaveStorageButton =
                            navContainer?.querySelector(
                                '.save-storage-button'
                            ) as HTMLButtonElement;

                        grabBackNavButton?.addEventListener(
                            'click',
                            async () => {
                                try {
                                    const iFrameSRC: string = iFrameElement.src;

                                    if (iFrameSRC) {
                                        (await backURLs).push(iFrameSRC);
                                        setBackURLs(await backURLs);
                                        // iFrameElement.contentWindow?.postMessage(
                                        //     'back',
                                        //     '*'
                                        // );
                                    }
                                } catch (error: unknown) {
                                    console.error(
                                        `There was an ERROR in the back button event listener: ${await error}`
                                    );
                                }
                            }
                        );

                        grabForwardNavButton?.addEventListener(
                            'click',
                            async () => {
                                try {
                                    if ((await backURLs).length > 0) {
                                        const nextURL = (await backURLs).pop();

                                        if (nextURL) {
                                            iFrameElement.src = nextURL;
                                            setBackURLs(await backURLs);
                                            iFrameElement.contentWindow?.postMessage(
                                                'forward',
                                                '*'
                                            );
                                        }
                                    }
                                } catch (error: unknown) {
                                    console.error(
                                        `There was an ERROR in the forward button event listener: ${error}`
                                    );
                                    return;
                                }
                            }
                        );

                        grabSaveStorageButton?.addEventListener(
                            'click',
                            (event: MouseEvent) => {
                                try {
                                    let userPreference: string | null;
                                    // event.preventDefault();

                                    if (
                                        this.savedStorageState
                                            .storage_state_saved !== true
                                    ) {
                                        if (
                                            confirm(
                                                'Are you sure you want to save your progress?'
                                            ) === true
                                        ) {
                                            userPreference = `Your progress in the Projects Viewer has been saved!`;

                                            this.savedStorageState.storage_state_saved =
                                                true;
                                        } else {
                                            userPreference = `Your saved progress in the Projects Viewer has been deleted!`;
                                            this.savedStorageState.storage_state_saved =
                                                false;
                                            localStorage.clear();
                                            console.info(userPreference);
                                        }
                                    } else {
                                        this.savedStorageState.storage_state_saved =
                                            false;
                                        localStorage.clear();
                                    }
                                    return console.info(this.savedStorageState);
                                } catch (error: unknown) {
                                    console.error(
                                        `There was an ERROR in the saveStorageButton event listener: ${error}`
                                    );
                                    return;
                                }
                                event.stopPropagation();
                            }
                        );
                    } else {
                        console.error('NO BUTTON FOUND');
                        return;
                    }
                });


      const processNavButtons = async (): Promise<void> => {
            try {
                const grabAllNavButtons = navContainer?.querySelectorAll(
                    '.btn-viewer'
                ) as NodeListOf<HTMLButtonElement>;
                const hasButtons: boolean = navContainer?.hasChildNodes();

                grabAllNavButtons !== null
                    ? grabAllNavButtons?.forEach(
                          async (button: HTMLButtonElement) => {
                              navContainer?.contains(button)
                                  ? button.remove()
                                  : (await createNavButtons(),
                                    console.info(
                                        `Apparently there are no buttons to remove even though
                                             the grabAllNavButtons() QUERY was deemed NULL || CHECKING Button Query Return: ${await button}`
                                    ));
                          }
                      )
                    : console.info(`${hasButtons} is the value of hasButtons`);

                const currentHistory: Promise<string> = //getHistory(''); //compose the argument...
                console.info(currentHistory);

                currentHistory === undefined && hasButtons !== true
                    ? await assignSrcToIFrameViewer(_newValue)
                    : await createNavButtons();
            } catch (error: unknown) {
                console.error(
                    `There was an ERROR in the removeOldButtons()
                        ASYNCHRONOUS ARROW FUNCTION: ${await error}`
                );
                return;
            }
            return;
        };

         grabButtons?.forEach(async (button: HTMLButtonElement) => {
                    if (navContainer?.contains(button)) {
                        const grabBackNavButton = navContainer?.querySelector(
                            '.back-button'
                        ) as HTMLButtonElement;

                        const grabForwardNavButton = navContainer.querySelector(
                            '.forward-button'
                        ) as HTMLButtonElement;

                        // const grabSaveStorageButton =
                        //     navContainer?.querySelector(
                        //         '.save-storage-button'
                        //     ) as HTMLButtonElement;

                        this.projectPageHistory = JSON.parse(
                            localStorage?.getItem(
                                'projectPageHistory'
                            ) as string
                        );

                        if (localStorage?.getItem('projectPageHistory')) {
                            localStorage?.setItem(
                                'projectPageHistory',
                                JSON.stringify([this.projectPageHistory])
                            );
                        } else {
                            const getValue: any = this.projectPagesValue;
                            this.projectPageHistory?.push(getValue);
                            localStorage?.setItem(
                                'projectPageHistory',
                                JSON.stringify(this.projectPageHistory)
                            );
                            return;
                        }

                        grabBackNavButton?.addEventListener(
                            'click',
                            async () => {
                                try {
                                } catch (error: unknown) {
                                    console.error(
                                        `There was an ERROR in the back button event listener: ${await error}`
                                    );
                                    return;
                                }
                            }
                        );

                        grabForwardNavButton?.addEventListener(
                            'click',
                            async () => {
                                try {
                                    if (localStorage?.getItem('backPages')) {
                                        const backPages: string[] =
                                            await JSON.parse(
                                                localStorage.getItem(
                                                    'backPages'
                                                ) ?? ''
                                            );
                                        if (backPages.length > 0) {
                                            const nextURL: string | undefined =
                                                backPages?.pop();
                                            console.log(nextURL);
                                            if (nextURL) {
                                                iFrameElement.src =
                                                    await nextURL;
                                                sectionB?.insertAdjacentElement(
                                                    'afterbegin',
                                                    iFrameElement
                                                );
                                                localStorage.setItem(
                                                    'backPages',
                                                    JSON.stringify(backPages)
                                                );
                                                // const viewerContent = await this
                                                //     .iFrameViewer.contentWindow;
                                                // viewerContent?.history.go(+1);
                                            } else {
                                                console.error(
                                                    'NO NEXT URL FOUND'
                                                );
                                                return;
                                            }
                                        }
                                    }
                                } catch (error: unknown) {
                                    console.error(
                                        `There was an ERROR in the forward button event listener: ${error}`
                                    );
                                    return;
                                }
                                return;
                            }
                        );

                        // grabSaveStorageButton?.addEventListener('click', () => {
                        //     try {
                        //         let userPreference: string | null;

                        //         if (
                        //             this.savedStorageState
                        //                 .storage_state_saved !== true
                        //         ) {
                        //             if (
                        //                 confirm(
                        //                     'Are you sure you want to save your progress?'
                        //                 ) === true
                        //             ) {
                        //                 userPreference = `Your progress in the Projects Viewer has been saved!`;

                        //                 this.savedStorageState.storage_state_saved =
                        //                     true;
                        //             } else {
                        //                 userPreference = `Your saved progress in the Projects Viewer has been deleted!`;
                        //                 this.savedStorageState.storage_state_saved =
                        //                     false;
                        //                 localStorage.clear();
                        //                 console.info(userPreference);
                        //             }
                        //         } else {
                        //             this.savedStorageState.storage_state_saved =
                        //                 false;
                        //             localStorage.clear();
                        //         }
                        //         return console.info(this.savedStorageState);
                        //     } catch (error: unknown) {
                        //         console.error(
                        //             `There was an ERROR in the saveStorageButton event listener: ${error}`
                        //         );
                        //         return;
                        //     }
                        // });
                    }
                });
