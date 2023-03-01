import { profileBlog_sharedStyles } from '../../interfaces/interfaces';

const profileBlog_sharedStyles = {
    shell: ``,
    blog: ``
};

profileBlog_sharedStyles.shell = /*css*/ `

        .theme-light {
            --image-home: url('../../src/components/componentTools/resources/images/005___home-theme-light__BACKGROUND.jpg');
            --color-primary: var(--grmj-font-color-6);
            --color-secondary: #fbfbfe;
            --color-tertiary: var(--grmj-font-color-6);
            --color-accent: #fd6f53;
            --font-color: #000000;
            --button-background: hsla(0, 0%, 41%, 0.99);
            --button-background-hover: hsla(212, 62%, 49%, 0.99);
            --button-ff: Arial, Helvetica, sans-serif;
            --button-color: hsla(219, 97%, 73%, 0.99);
            --button-fs: 0.7em;
            --button-border: 0.1em ridge hsla(180, 25%, 25%, 0.99);; 
            --button-hover: hsla(0, 0%, 86%, 0.39);
            --button-filter: drop-shadow(0.1em 0.08rem 0.08rem rgba(0, 0, 0, 0.22));
        }    

        .theme-startup,
        .theme-dark {
            --image-home: url('../../src/components/componentTools/resources/images/000___home-theme-dark__BACKGROUND.png');
            --color-primary: var(--grmj-font-color-2);
            --color-secondary: #2a2c2d;
            --color-tertiary: var(--grmj-font-color-3);
            --color-accent: #12cdea;
            --font-color: #ffffff;
            --button-background: hsla(0, 0%, 41%, 0.99);
            --button-background-hover: hsla(212, 62%, 49%, 0.99);
            --button-ff: Arial, Helvetica, sans-serif;
            --button-color: hsla(0, 0%, 86%, 0.99);
            --button-fs: 0.7em;
            --button-border: 0.1em ridge hsla(180, 25%, 25%, 0.99);; 
            --button-hover: hsla(90, 100%, 50%, 0.99);
            --button-filter: drop-shadow(0.1em 0.08rem 0.08rem rgba(0, 0, 0, 0.22));
        }

        .drop-down-shell {
            margin: 0;
            padding: 0;
            position: sticky;
            top: 0em;
            width: 100%;
            height: 10vh;
            z-index: 1;
        }


`;

profileBlog_sharedStyles.blog = `


`;

export { profileBlog_sharedStyles };
