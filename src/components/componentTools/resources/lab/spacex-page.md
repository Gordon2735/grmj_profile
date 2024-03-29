/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import { SpacexPageTemplate } from './spacex-page_template.js';
import { spacexPage_sharedHTML } from './spacex-page_sharedHTML.js';
import { spacexPage_sharedStyles } from './spacex-page_sharedStyles.js';
import RegisterComponent, {
    setAttributes
} from '../componentTools/components_services.js'; // setAttributes
import spacex_url from './spacexAPI.js';

export class SpacexPage extends SpacexPageTemplate {
    override activateShadowDOM: boolean;
    spacex_url: string;

    override get template(): string {
        return /*html*/ `
            
            ${spacexPage_sharedHTML.spacex}
            <style>${spacexPage_sharedStyles.spacex}</style>
            <style>${spacexPage_sharedStyles.spacexData}</style>

        `;
    }

    constructor() {
        super();

        this.activateShadowDOM = false;

        this.spacex_url = spacex_url;
    }

    override connectedCallback(): void {
        super.connectedCallback();

        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const thiz = this;

        async function getTime(): Promise<void> {
            try {
                const response: Response = await fetch(
                    'https://worldtimeapi.org/api/timezone/America/New_York'
                );
                const data: any = await response.json();
                console.info('Data:', data);
                const { datetime } = data;
                const time: string = datetime.split('T')[1].split('.')[0];
                const date: string = datetime.split('T')[0];
                const timeContainer: HTMLElement | undefined | null =
                    document.getElementById('time');
                const dateContainer: HTMLElement | null =
                    document.getElementById('date');
                timeContainer?.setAttribute('data-set-time', `${time}`);
                dateContainer?.setAttribute('data-set-date', `${date}`);
                timeContainer?.insertAdjacentHTML(
                    'afterbegin',
                    `Time: ${time}`
                );
                dateContainer?.insertAdjacentHTML(
                    'afterbegin',
                    `Date: ${date}`
                );
            } catch (error: unknown) {
                console.error(
                    `%c ERROR: ${error}`,
                    `color: red; font-weight: bold;`
                );
            }
            // setTimeout(() => {
            //     getTime();
            // }, 1000);
        }
        getTime();

        async function getSpaceXData(api: string): Promise<void> {
            try {
                const response: Response = await fetch(`${api}`);
                const data: any = await response.json();
                console.info('Data:', data);
                createLaunchList(data);
            } catch (error: unknown) {
                console.error(
                    `%c ERROR: ${error}`,
                    `color: red; font-weight: bold;`
                );
            }
        }

        async function createLaunchList(launchData: any): Promise<void> {
            try {
                const launchListContainer: HTMLElement | null =
                    document.getElementById('main');

                launchData.map((launch: any) => {
                    const launchListItems: HTMLElement =
                        document.createElement('section');
                    setAttributes(launchListItems, {
                        id: `launch-${launch.flight_number}`,
                        class: 'launch-list-item',
                        'data-set-launch': `${launch.name}`,
                        alt: 'Launch List Item'
                    });
                    launchListItems.innerHTML = `
                        <h3 class="block bordit">
                            ${launch.flight_number}&emsp;${launch.name}&emsp;${launch.success}
                        </h3>
                        <h3 class="block bordit">
                            YouTube: https://www.youtube.com/watch?v=${launch.links.youtube_id}&emsp;${launch.date_local}
                        </h3>
                    `;
                    launchListContainer?.appendChild(launchListItems);
                });
            } catch (error: unknown) {
                console.error(
                    `%c ERROR: ${error}`,
                    `color: red; font-weight: bold;`
                );
            }
        }

        async function init(): Promise<void> {
            await getSpaceXData(thiz.spacex_url);
        }
        init();
    }
}
RegisterComponent('spacex-page', SpacexPage);
