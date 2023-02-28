/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import { SpacexPageTemplate } from './spacex-page_template.js';
import { spacexPage_sharedHTML } from './spacex-page_sharedHTML.js';
import { spacexPage_sharedStyles } from './spacex-page_sharedStyles.js';
import RegisterComponent, {
    setAttributes
} from '../componentTools/components_services.js'; // setAttributes
import spacex_url from './spacexAPI.js';
import dateTimeObject from '../componentTools/dateTimeObject.js';

export class SpacexPage extends SpacexPageTemplate {
    override activateShadowDOM: boolean;
    spacex_url: string;
    nowDate: dateTimeObject;

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

        this.nowDate = new dateTimeObject();
    }
    override connectedCallback(): void {
        super.connectedCallback();

        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const thiz = this;

        async function getTime(): Promise<void> {
            try {
                const timeContainer: HTMLElement | undefined | null =
                    document.getElementById('time');
                const dateContainer: HTMLElement | null =
                    document.getElementById('date');

                timeContainer?.insertAdjacentHTML(
                    'afterbegin',
                    `${thiz.nowDate.getNowTime('')}`
                );
                dateContainer?.insertAdjacentHTML(
                    'afterbegin',
                    `${thiz.nowDate.getDayOfWeek(
                        ''
                    )} ${thiz.nowDate.getDayOfMonth(
                        ''
                    )}, ${thiz.nowDate.getMonthOfYear(
                        ''
                    )}, ${thiz.nowDate.getYear('')} `
                );
                return;
            } catch (error: unknown) {
                console.error(
                    `%c ERROR: ${error}`,
                    `color: red; font-weight: bold;`
                );
                return;
            }
        }
        getTime();

        async function getSpaceXData(api: string): Promise<void> {
            try {
                const response: Response = await fetch(`${api}`);
                const data: any = await response.json();
                console.info('Data:', data);
                createLaunchList(data);
                return;
            } catch (error: unknown) {
                console.error(
                    `%c ERROR: ${error}`,
                    `color: red; font-weight: bold;`
                );
                return;
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
                return;
            } catch (error: unknown) {
                console.error(
                    `%c ERROR: ${error}`,
                    `color: red; font-weight: bold;`
                );
                return;
            }
        }

        async function init(): Promise<void> {
            try {
                await getSpaceXData(thiz.spacex_url);
                return;
            } catch (error: unknown) {
                console.error(
                    `%c The Initializing Function "init()" had an ERROR: ${error}`,
                    `color: red; font-weight: bold;`
                );
                return;
            }
        }
        init();
    }
}
RegisterComponent('spacex-page', SpacexPage);

// \"node dist/src/server.js\"

// "dev": "cross-env NODE_ENV=development && tsc-watch --onSuccess node \"node dist/src/server.js\"",
