import { ProfileFooterTemplate } from './profile-footer_template.js';
import { profileFooter_sharedHTML } from './profile-footer_sharedHTML.js';
import { profileFooter_sharedStyles } from './profile-footer_sharedStyles.js';
import RegisterComponent from '../componentTools/components_services.js';

export class ProfileFooter extends ProfileFooterTemplate {
	override noShadow: boolean = true;

	constructor() {
		super();

		this.noShadow = true;
	}
	override connectedCallback(): void {
		super.connectedCallback();
	}
	override get template() {
		return /*html*/ `        
	
			${profileFooter_sharedHTML.footer}
			<style>${profileFooter_sharedStyles.footer}</style>
			<style>${profileFooter_sharedStyles.footerMod}</style>
		
        `;
	}
}
RegisterComponent('profile-footer', ProfileFooter);
