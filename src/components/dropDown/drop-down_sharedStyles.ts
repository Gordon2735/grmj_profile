'use strict';

import { dropDown_sharedStyles } from '../../interfaces/interfaces.js';

const dropDown_sharedStyles = {
    shell: ``,
    dropdown: ``,
    dynadrop: ``,
    home: ``,
    letter: ``,
    about: ``,
    projects: ``,
    history: ``,
    resume: ``,
    goals: ``,
    codeEx: ``,
    contact: ``,
    library: ``
};

dropDown_sharedStyles.shell = /*css*/ ` 
`;

dropDown_sharedStyles.dropdown = /*css*/ `
     /* dropDown_sharedStyles.dropdown  */
    .drop-down-shell {
        margin: 0em 0 2em 2em;
        position: absolute;
        display: inline-block;
        top: 0em;
        right: 2em;
        width: 600px;
        height: 185px;
    } 
    .drop-down {
        width: 575px;
        height: 155px;
    }
    .dd-section {
        margin: 3em 0 2em 2em;
        position: absolute;
        display: flex;
        width: 550px;
        height: 135px;
        background: var(--grmj-profile-background_8);
        border: var(--grmj-border-1);
        filter: var(--grmj-profile-box-shadow-2);
        justify-content: center;
        z-index: 50;
    }
    .dropdown {
        margin: 0em 0 2em 2em;
        position: sticky;
        top: 0em;
        width: 200px;
        height: 30px;
        display: inline-block;
        background: lightblue;
        border: 1px solid #aaa;
        box-shadow: 2px 2px 4px #999;
        border-radius: 5px;
        color: #333;
        line-height: 30px;
        user-select: none;
        cursor: pointer;
        font-size: 0.8em;
        font-family: Arial, Helvetica, sans-serif;
        
    }
    .dropdown_value {
        display: inline-block;
        padding-left: 5px;
    }
    .dropdown_arrow {
        position: absolute;
        right: 5px;
        top: 0px;
        color: black;
        font-size: 25px;
        transition: all 0.3s ease;
    }
    .dropdown_panel {
        position: absolute;
        background: transparent;
        width: calc(100% + 11px);
        z-index: 999;
        height: 203px;
        left: -1px;
        top: 28px;
        overflow: hidden;
        pointer-events: none;
    }
    .dropdown ::-webkit-scrollbar {
        width: 0.4em;
        background-color: hsla(0, 1%, 66%, 0.9);
    }
    .dropdown ::-webkit-scrollbar:hover {
        width: 0.5em;
        background-color: hsla(0, 1%, 34%, 0.9);
    }
    .dropdown ::-webkit-scrollbar-thumb {
        width: 0.5em;
        background-color: hsl(224, 42%, 40%);
        border-radius: 0.5em;
    }
    .dropdown ::-webkit-scrollbar-thumb:hover {
        background-color: hsla(224, 25%, 73%, 0.993);
    }
    .dropdown_items {
        position: absolute;
        pointer-events: all;
        top: 0px;
        width: calc(100% - 11px);
        max-height: 170px;
        background: lightgrey;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        box-shadow: 2px 2px 4px #999;
        overflow-y: auto;
        border: 1px solid #aaa;
        transform: translate(0px, -200px);
        transition: 0.3s all ease-out;
    }
    .dropdown_item {
        padding: 5px;
    }
    .dropdown_item:hover {
        background: #eee;
    }
`;

dropDown_sharedStyles.dynadrop = /*css*/ `
    /* dropDown_sharedStyles.dynadrop  */
    .drop-down-shell {
        margin: 0em 0 2em 2em;
        position: sticky;
        top: 0em;
        right: 2em;
    } 
    .dropdown {
        margin: 0em 0 2em 2em;
        position: sticky;
        top: 0em;
        width: 200px;
        height: 30px;
        display: inline-block;
        background: lightblue;
        border: 1px solid #aaa;
        box-shadow: 2px 2px 4px #999;
        border-radius: 5px;
        color: #333;
        line-height: 30px;
        user-select: none;
        cursor: pointer;
        font-size: 0.8em;
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing: var(--grmj-letter-spacing-1a);
    }
    .dropdown_value {
        display: inline-block;
        padding-left: 5px;
    }
    .dropdown_arrow {
        position: absolute;
        right: 5px;
        top: 0px;
        color: black;
        font-size: 25px;
        transition: all 0.3s ease;
    }
    .dropdown_panel {
        position: absolute;
        background: transparent;
        width: calc(100% + 11px);
        z-index: 999;
        height: 203px;
        left: -1px;
        top: 28px;
        overflow: hidden;
        pointer-events: none;
    }
    .dropdown ::-webkit-scrollbar {
        width: 0.4em;
        background-color: hsla(0, 1%, 66%, 0.9);
    }
    .dropdown ::-webkit-scrollbar:hover {
        width: 0.5em;
        background-color: hsla(0, 1%, 34%, 0.9);
    }
    .dropdown ::-webkit-scrollbar-thumb {
        width: 0.5em;
        background-color: hsl(224, 42%, 40%);
        border-radius: 0.5em;
    }
    .dropdown ::-webkit-scrollbar-thumb:hover {
        background-color: hsla(224, 25%, 73%, 0.993);
    }
    .dropdown_items {
        position: absolute;
        pointer-events: all;
        top: 0px;
        width: calc(100% - 11px);
        max-height: 170px;
        background: lightgrey;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        box-shadow: 2px 2px 4px #999;
        overflow-y: auto;
        border: 1px solid #aaa;
        transform: translate(0px, -200px);
        transition: 0.3s all ease-out;
    }
    .dropdown_item {
        padding: 5px;
    }
    .dropdown_item:hover {
        background: #eee;
    }
`;

dropDown_sharedStyles.home = /*css*/ `
    /* dropDown_sharedStyles.home  */

    .drop-down {
        top: 0;
    }    
    
    .dd-section {
        margin: 0em 0 0em 0em;
        position: sticky;
        width: 100%;
        height: 5vh;
        background: var(--grmj-profile-background_3);
        filter: var(--grmj-filter-dropShadow-4);
        justify-content: space-between;
        align-items: right;
        z-index: 50;
    }
    
    .dropdown {
        margin: 0.6em auto 0em 0.4em;
        width: 175px;
        height: 30px;
        display: inline-block;
        border-right: 2px ridge #aaa;
        border-left: 2px ridge #aaa;
        color: var(--grmj-font-color-5);
        line-height: 30px;
        user-select: none;
        cursor: pointer;
        font-size: 0.8em;
        font-family: Arial, Helvetica, sans-serif;
        justify-content: space-between;
        letter-spacing: var(--grmj-letter-spacing-1);
        text-align: center;
    }

    #dd1 {
        position: sticky;
        left: 65%;
    }

    #dd2 {
        position: sticky;
        left: 80%;
    }

    .dropdown_value {
        display: inline-block;
        padding-left: 5px;
    }
    .dropdown_arrow {
        position: absolute;
        right: 5px;
        top: 0px;
        color: black;
        font-size: 25px;
        transition: all 0.3s ease;
    }
    .dropdown_panel {
        position: absolute;
        background: transparent;
        width: calc(100% + 11px);
        z-index: 999;
        height: 203px;
        left: -1px;
        top: 28px;
        overflow: hidden;
        pointer-events: none;
    }
    .dropdown ::-webkit-scrollbar {
        width: 0.4em;
        background-color: hsla(0, 1%, 66%, 0.9);
        overflow: auto;
        z-index: 999;

    }
    .dropdown ::-webkit-scrollbar:hover {
        width: 0.85em;
        background-color: hsla(0, 1%, 34%, 0.9);
        z-index: 999;

    }
    .dropdown ::-webkit-scrollbar-thumb {
        width: 0.5em;
        background-color: hsl(224, 42%, 40%);
        border-radius: 0.5em;
        overflow: auto;
        z-index: 999;

    }
    .dropdown ::-webkit-scrollbar-thumb:hover {
        background-color: hsla(224, 25%, 73%, 0.993);
        width: 1.85em;
        scrollbar-width: 1.85em;
        z-index: 999;
    }
    .dropdown ::-webkit-scrollbar-thumb:active {
        background-color: hsla(224, 25%, 73%, 0.993);
        width: 1.85em;
        overflow: auto;
        z-index: 999;
    }

    .dropdown_items {
        position: absolute;
        pointer-events: all;
        top: 0px;
        width: calc(100% - 11px);
        max-height: 170px;
        background: var(--grmj-profile-background_10);
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        box-shadow: 2px 1px 4px hsla(0, 0%, 0%, 0.99);
        color: var(--grmj-font-color-5);
        overflow-y: auto;
        overflow-x: none;
        border: 1px solid #aaa;
        transform: translate(0px, -200px);
        transition: 0.3s all ease-out;
    }
    .dropdown_item {
        padding: 5px;
    }
    .dropdown_item:hover {
        background: var(--grmj-profile-background_9);
        color: var(--grmj-font-color-1);
    }
`;
dropDown_sharedStyles.letter = /*css*/ `
    /* dropDown_sharedStyles.letter  */
    .drop-down {
        top: 0;
    }    
    
    .dd-section {
        margin: 0em 0 0em 0em;
        position: sticky;
        width: 100%;
        height: 5vh;
        background: var(--grmj-profile-background_3);
        filter: var(--grmj-filter-dropShadow-4);
        justify-content: space-between;
        align-items: right;
        z-index: 50;
    }
    
    .dropdown {
        margin: 0.6em auto 0em 0.4em;
        width: 175px;
        height: 30px;
        display: inline-block;
        border-right: 2px ridge #aaa;
        border-left: 2px ridge #aaa;
        color: var(--grmj-font-color-5);
        line-height: 30px;
        user-select: none;
        cursor: pointer;
        font-size: 0.8em;
        font-family: Arial, Helvetica, sans-serif;
        justify-content: space-between;
        letter-spacing: var(--grmj-letter-spacing-1);
        text-align: center;
    }

    #dd1 {
        position: sticky;
        left: 65%;
    }

    #dd2 {
        position: sticky;
        left: 80%;
    }

    .dropdown_value {
        display: inline-block;
        padding-left: 5px;
    }
    .dropdown_arrow {
        position: absolute;
        right: 5px;
        top: 0px;
        color: black;
        font-size: 25px;
        transition: all 0.3s ease;
    }
    .dropdown_panel {
        position: absolute;
        background: transparent;
        width: calc(100% + 11px);
        z-index: 999;
        height: 203px;
        left: -1px;
        top: 28px;
        overflow: hidden;
        pointer-events: none;
    }
    .dropdown ::-webkit-scrollbar {
        width: 0.4em;
        background-color: hsla(0, 1%, 66%, 0.9);
        overflow: auto;
        z-index: 999;

    }
    .dropdown ::-webkit-scrollbar:hover {
        width: 0.85em;
        background-color: hsla(0, 1%, 34%, 0.9);
        z-index: 999;

    }
    .dropdown ::-webkit-scrollbar-thumb {
        width: 0.5em;
        background-color: hsl(224, 42%, 40%);
        border-radius: 0.5em;
        overflow: auto;
        z-index: 999;

    }
    .dropdown ::-webkit-scrollbar-thumb:hover {
        background-color: hsla(224, 25%, 73%, 0.993);
        width: 1.85em;
        scrollbar-width: 1.85em;
        z-index: 999;
    }
    .dropdown ::-webkit-scrollbar-thumb:active {
        background-color: hsla(224, 25%, 73%, 0.993);
        width: 1.85em;
        overflow: auto;
        z-index: 999;
    }

    .dropdown_items {
        position: absolute;
        pointer-events: all;
        top: 0px;
        width: calc(100% - 11px);
        max-height: 170px;
        background: var(--grmj-profile-background_10);
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        box-shadow: 2px 1px 4px hsla(0, 0%, 0%, 0.99);
        color: var(--grmj-font-color-5);
        overflow-y: auto;
        overflow-x: none;
        border: 1px solid #aaa;
        transform: translate(0px, -200px);
        transition: 0.3s all ease-out;
    }
    .dropdown_item {
        padding: 5px;
    }
    .dropdown_item:hover {
        background: var(--grmj-profile-background_9);
        color: var(--grmj-font-color-1);
    }
`;

dropDown_sharedStyles.about = /*css*/ `
     /* dropDown_sharedStyles.about  */
     .drop-down-shell {
        margin: 1.45em 0 2em 2em;
        position: absolute;
        top: 0em;
        left: 60%;
        width: 600px;
        height: 135px;
    }
    .drop-down {
        margin: 0;
        position: absolute;
        display: inline-block;
        width: 575px;
        height: 155px;
    }
    .dd-section {
        margin: 0em 0 0em 0em;
        position: absolute;
        display: inline-flex;
        width: 515px;
        height: 75px;
        background: var(--grmj-profile-background_8);
        border: var(--grmj-border-2);
        border-radius: 0.75em;
        filter: var(--grmj-filter-dropShadow-4);
        justify-content: center;
        align-items: center;
        z-index: 50;
    }
    
    .dropdown {
        margin: 0em auto 0em 0.8em;
        position: sticky;
        top: 0em;
        width: 200px;
        height: 30px;
        display: inline-block;
        background: var(--grmj-profile-background_9);
        border: 1px solid #aaa;
        box-shadow: 2px 1px 4px hsla(0, 0%, 0%, 0.59);        
        border-radius: 5px;
        color: var(--grmj-font-color-1);
        line-height: 30px;
        user-select: none;
        cursor: pointer;
        font-size: 0.8em;
        font-family: Arial, Helvetica, sans-serif;
        justify-content: space-between;
        letter-spacing: var(--grmj-letter-spacing-1);
    }
    .dropdown_value {
        display: inline-block;
        padding-left: 5px;
    }
    .dropdown_arrow {
        position: absolute;
        right: 5px;
        top: 0px;
        color: black;
        font-size: 25px;
        transition: all 0.3s ease;
    }
    .dropdown_panel {
        position: absolute;
        background: transparent;
        width: calc(100% + 11px);
        z-index: 999;
        height: 203px;
        left: -1px;
        top: 28px;
        overflow: hidden;
        pointer-events: none;
    }
    .dropdown ::-webkit-scrollbar {
        width: 0.4em;
        background-color: hsla(0, 1%, 66%, 0.9);
        overflow: auto;
        z-index: 999;

    }
    .dropdown ::-webkit-scrollbar:hover {
        width: 0.85em;
        background-color: hsla(0, 1%, 34%, 0.9);
        z-index: 999;

    }
    .dropdown ::-webkit-scrollbar-thumb {
        width: 0.5em;
        background-color: hsl(224, 42%, 40%);
        border-radius: 0.5em;
        overflow: auto;
        z-index: 999;

    }
    .dropdown ::-webkit-scrollbar-thumb:hover {
        background-color: hsla(224, 25%, 73%, 0.993);
        width: 1.85em;
        scrollbar-width: 1.85em;
        z-index: 999;
    }
    .dropdown ::-webkit-scrollbar-thumb:active {
        background-color: hsla(224, 25%, 73%, 0.993);
        width: 1.85em;
        overflow: auto;
        z-index: 999;
    }

    .dropdown_items {
        position: absolute;
        pointer-events: all;
        top: 0px;
        width: calc(100% - 11px);
        max-height: 170px;
        background: var(--grmj-profile-background_10);
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        box-shadow: 2px 1px 4px hsla(0, 0%, 0%, 0.99);
        color: var(--grmj-font-color-5);
        overflow-y: auto;
        overflow-x: none;
        border: 1px solid #aaa;
        transform: translate(0px, -200px);
        transition: 0.3s all ease-out;
    }
    .dropdown_item {
        padding: 5px;
    }
    .dropdown_item:hover {
        background: var(--grmj-profile-background_9);
        color: var(--grmj-font-color-1);
    }
`;

dropDown_sharedStyles.projects = /*css*/ `
     /* dropDown_sharedStyles.projects  */
     .drop-down-shell {
        margin: 1.45em 0 2em 2em;
        position: absolute;
        top: 0em;
        left: 60%;
        width: 600px;
        height: 135px;
    }
    .drop-down {
        margin: 0;
        position: absolute;
        display: inline-block;
        width: 575px;
        height: 155px;
    }
    .dd-section {
        margin: 0em 0 0em 0em;
        position: absolute;
        display: inline-flex;
        width: 515px;
        height: 75px;
        background: var(--grmj-profile-background_8);
        border: var(--grmj-border-2);
        border-radius: 0.75em;
        filter: var(--grmj-filter-dropShadow-4);
        justify-content: center;
        align-items: center;
        z-index: 50;
    }
    
    .dropdown {
        margin: 0em auto 0em 0.8em;
        position: sticky;
        top: 0em;
        width: 200px;
        height: 30px;
        display: inline-block;
        background: var(--grmj-profile-background_9);
        border: 1px solid #aaa;
        box-shadow: 2px 1px 4px hsla(0, 0%, 0%, 0.59);        
        border-radius: 5px;
        color: var(--grmj-font-color-1);
        line-height: 30px;
        user-select: none;
        cursor: pointer;
        font-size: 0.8em;
        font-family: Arial, Helvetica, sans-serif;
        justify-content: space-between;
        letter-spacing: var(--grmj-letter-spacing-1);
    }
    .dropdown_value {
        display: inline-block;
        padding-left: 5px;
    }
    .dropdown_arrow {
        position: absolute;
        right: 5px;
        top: 0px;
        color: black;
        font-size: 25px;
        transition: all 0.3s ease;
    }
    .dropdown_panel {
        position: absolute;
        background: transparent;
        width: calc(100% + 11px);
        z-index: 999;
        height: 203px;
        left: -1px;
        top: 28px;
        overflow: hidden;
        pointer-events: none;
    }
    .dropdown ::-webkit-scrollbar {
        width: 0.4em;
        background-color: hsla(0, 1%, 66%, 0.9);
        overflow: auto;
        z-index: 999;

    }
    .dropdown ::-webkit-scrollbar:hover {
        width: 0.85em;
        background-color: hsla(0, 1%, 34%, 0.9);
        z-index: 999;

    }
    .dropdown ::-webkit-scrollbar-thumb {
        width: 0.5em;
        background-color: hsl(224, 42%, 40%);
        border-radius: 0.5em;
        overflow: auto;
        z-index: 999;

    }
    .dropdown ::-webkit-scrollbar-thumb:hover {
        background-color: hsla(224, 25%, 73%, 0.993);
        width: 1.85em;
        scrollbar-width: 1.85em;
        z-index: 999;
    }
    .dropdown ::-webkit-scrollbar-thumb:active {
        background-color: hsla(224, 25%, 73%, 0.993);
        width: 1.85em;
        overflow: auto;
        z-index: 999;
    }

    .dropdown_items {
        position: absolute;
        pointer-events: all;
        top: 0px;
        width: calc(100% - 11px);
        max-height: 170px;
        background: var(--grmj-profile-background_10);
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        box-shadow: 2px 1px 4px hsla(0, 0%, 0%, 0.99);
        color: var(--grmj-font-color-5);
        overflow-y: auto;
        overflow-x: none;
        border: 1px solid #aaa;
        transform: translate(0px, -200px);
        transition: 0.3s all ease-out;
    }
    .dropdown_item {
        padding: 5px;
    }
    .dropdown_item:hover {
        background: var(--grmj-profile-background_9);
        color: var(--grmj-font-color-1);
    }
`;

dropDown_sharedStyles.history = /*css*/ `
     /* dropDown_sharedStyles.history  */
     .drop-down-shell {
        margin: 1.45em 0 2em 2em;
        position: absolute;
        top: 0em;
        left: 60%;
        width: 600px;
        height: 135px;
    }
    .drop-down {
        margin: 0;
        position: absolute;
        display: inline-block;
        width: 575px;
        height: 155px;
    }
    .dd-section {
        margin: 0em 0 0em 0em;
        position: absolute;
        display: inline-flex;
        width: 515px;
        height: 75px;
        background: var(--grmj-profile-background_8);
        border: var(--grmj-border-2);
        border-radius: 0.75em;
        filter: var(--grmj-filter-dropShadow-4);
        justify-content: center;
        align-items: center;
        z-index: 50;
    }
    
    .dropdown {
        margin: 0em auto 0em 0.8em;
        position: sticky;
        top: 0em;
        width: 200px;
        height: 30px;
        display: inline-block;
        background: var(--grmj-profile-background_9);
        border: 1px solid #aaa;
        box-shadow: 2px 1px 4px hsla(0, 0%, 0%, 0.59);        
        border-radius: 5px;
        color: var(--grmj-font-color-1);
        line-height: 30px;
        user-select: none;
        cursor: pointer;
        font-size: 0.8em;
        font-family: Arial, Helvetica, sans-serif;
        justify-content: space-between;
        letter-spacing: var(--grmj-letter-spacing-1);
    }
    .dropdown_value {
        display: inline-block;
        padding-left: 5px;
    }
    .dropdown_arrow {
        position: absolute;
        right: 5px;
        top: 0px;
        color: black;
        font-size: 25px;
        transition: all 0.3s ease;
    }
    .dropdown_panel {
        position: absolute;
        background: transparent;
        width: calc(100% + 11px);
        z-index: 999;
        height: 203px;
        left: -1px;
        top: 28px;
        overflow: hidden;
        pointer-events: none;
    }
    .dropdown ::-webkit-scrollbar {
        width: 0.4em;
        background-color: hsla(0, 1%, 66%, 0.9);
        overflow: auto;
        z-index: 999;

    }
    .dropdown ::-webkit-scrollbar:hover {
        width: 0.85em;
        background-color: hsla(0, 1%, 34%, 0.9);
        z-index: 999;

    }
    .dropdown ::-webkit-scrollbar-thumb {
        width: 0.5em;
        background-color: hsl(224, 42%, 40%);
        border-radius: 0.5em;
        overflow: auto;
        z-index: 999;

    }
    .dropdown ::-webkit-scrollbar-thumb:hover {
        background-color: hsla(224, 25%, 73%, 0.993);
        width: 1.85em;
        scrollbar-width: 1.85em;
        z-index: 999;
    }
    .dropdown ::-webkit-scrollbar-thumb:active {
        background-color: hsla(224, 25%, 73%, 0.993);
        width: 1.85em;
        overflow: auto;
        z-index: 999;
    }

    .dropdown_items {
        position: absolute;
        pointer-events: all;
        top: 0px;
        width: calc(100% - 11px);
        max-height: 170px;
        background: var(--grmj-profile-background_10);
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        box-shadow: 2px 1px 4px hsla(0, 0%, 0%, 0.99);
        color: var(--grmj-font-color-5);
        overflow-y: auto;
        overflow-x: none;
        border: 1px solid #aaa;
        transform: translate(0px, -200px);
        transition: 0.3s all ease-out;
    }
    .dropdown_item {
        padding: 5px;
    }
    .dropdown_item:hover {
        background: var(--grmj-profile-background_9);
        color: var(--grmj-font-color-1);
    }
`;

dropDown_sharedStyles.resume = /*css*/ `
     /* dropDown_sharedStyles.resume  */
     .drop-down-shell {
        margin: 1.45em 0 2em 2em;
        position: absolute;
        top: 0em;
        left: 60%;
        width: 600px;
        height: 135px;
    }
    .drop-down {
        margin: 0;
        position: absolute;
        display: inline-block;
        width: 575px;
        height: 155px;
    }
    .dd-section {
        margin: 0em 0 0em 0em;
        position: absolute;
        display: inline-flex;
        width: 515px;
        height: 75px;
        background: var(--grmj-profile-background_8);
        border: var(--grmj-border-2);
        border-radius: 0.75em;
        filter: var(--grmj-filter-dropShadow-4);
        justify-content: center;
        align-items: center;
        z-index: 50;
    }
    
    .dropdown {
        margin: 0em auto 0em 0.8em;
        position: sticky;
        top: 0em;
        width: 200px;
        height: 30px;
        display: inline-block;
        background: var(--grmj-profile-background_9);
        border: 1px solid #aaa;
        box-shadow: 2px 1px 4px hsla(0, 0%, 0%, 0.59);        
        border-radius: 5px;
        color: var(--grmj-font-color-1);
        line-height: 30px;
        user-select: none;
        cursor: pointer;
        font-size: 0.8em;
        font-family: Arial, Helvetica, sans-serif;
        justify-content: space-between;
        letter-spacing: var(--grmj-letter-spacing-1);
    }
    .dropdown_value {
        display: inline-block;
        padding-left: 5px;
    }
    .dropdown_arrow {
        position: absolute;
        right: 5px;
        top: 0px;
        color: black;
        font-size: 25px;
        transition: all 0.3s ease;
    }
    .dropdown_panel {
        position: absolute;
        background: transparent;
        width: calc(100% + 11px);
        z-index: 999;
        height: 203px;
        left: -1px;
        top: 28px;
        overflow: hidden;
        pointer-events: none;
    }
    .dropdown ::-webkit-scrollbar {
        width: 0.4em;
        background-color: hsla(0, 1%, 66%, 0.9);
        overflow: auto;
        z-index: 999;

    }
    .dropdown ::-webkit-scrollbar:hover {
        width: 0.85em;
        background-color: hsla(0, 1%, 34%, 0.9);
        z-index: 999;

    }
    .dropdown ::-webkit-scrollbar-thumb {
        width: 0.5em;
        background-color: hsl(224, 42%, 40%);
        border-radius: 0.5em;
        overflow: auto;
        z-index: 999;

    }
    .dropdown ::-webkit-scrollbar-thumb:hover {
        background-color: hsla(224, 25%, 73%, 0.993);
        width: 1.85em;
        scrollbar-width: 1.85em;
        z-index: 999;
    }
    .dropdown ::-webkit-scrollbar-thumb:active {
        background-color: hsla(224, 25%, 73%, 0.993);
        width: 1.85em;
        overflow: auto;
        z-index: 999;
    }

    .dropdown_items {
        position: absolute;
        pointer-events: all;
        top: 0px;
        width: calc(100% - 11px);
        max-height: 170px;
        background: var(--grmj-profile-background_10);
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        box-shadow: 2px 1px 4px hsla(0, 0%, 0%, 0.99);
        color: var(--grmj-font-color-5);
        overflow-y: auto;
        overflow-x: none;
        border: 1px solid #aaa;
        transform: translate(0px, -200px);
        transition: 0.3s all ease-out;
    }
    .dropdown_item {
        padding: 5px;
    }
    .dropdown_item:hover {
        background: var(--grmj-profile-background_9);
        color: var(--grmj-font-color-1);
    }
`;

dropDown_sharedStyles.codeEx = /*css*/ `
     /* dropDown_sharedStyles.codeEx  */
     .drop-down-shell {
        margin: 1.45em 0 2em 2em;
        position: absolute;
        top: 0em;
        left: 60%;
        width: 600px;
        height: 135px;
    }
    .drop-down {
        margin: 0;
        position: absolute;
        display: inline-block;
        width: 575px;
        height: 155px;
    }
    .dd-section {
        margin: 0em 0 0em 0em;
        position: absolute;
        display: inline-flex;
        width: 515px;
        height: 75px;
        background: var(--grmj-profile-background_8);
        border: var(--grmj-border-2);
        border-radius: 0.75em;
        filter: var(--grmj-filter-dropShadow-4);
        justify-content: center;
        align-items: center;
        z-index: 50;
    }
    
    .dropdown {
        margin: 0em auto 0em 0.8em;
        position: sticky;
        top: 0em;
        width: 200px;
        height: 30px;
        display: inline-block;
        background: var(--grmj-profile-background_9);
        border: 1px solid #aaa;
        box-shadow: 2px 1px 4px hsla(0, 0%, 0%, 0.59);        
        border-radius: 5px;
        color: var(--grmj-font-color-1);
        line-height: 30px;
        user-select: none;
        cursor: pointer;
        font-size: 0.8em;
        font-family: Arial, Helvetica, sans-serif;
        justify-content: space-between;
        letter-spacing: var(--grmj-letter-spacing-1);
    }
    .dropdown_value {
        display: inline-block;
        padding-left: 5px;
    }
    .dropdown_arrow {
        position: absolute;
        right: 5px;
        top: 0px;
        color: black;
        font-size: 25px;
        transition: all 0.3s ease;
    }
    .dropdown_panel {
        position: absolute;
        background: transparent;
        width: calc(100% + 11px);
        z-index: 999;
        height: 203px;
        left: -1px;
        top: 28px;
        overflow: hidden;
        pointer-events: none;
    }
    .dropdown ::-webkit-scrollbar {
        width: 0.4em;
        background-color: hsla(0, 1%, 66%, 0.9);
        overflow: auto;
        z-index: 999;

    }
    .dropdown ::-webkit-scrollbar:hover {
        width: 0.85em;
        background-color: hsla(0, 1%, 34%, 0.9);
        z-index: 999;

    }
    .dropdown ::-webkit-scrollbar-thumb {
        width: 0.5em;
        background-color: hsl(224, 42%, 40%);
        border-radius: 0.5em;
        overflow: auto;
        z-index: 999;

    }
    .dropdown ::-webkit-scrollbar-thumb:hover {
        background-color: hsla(224, 25%, 73%, 0.993);
        width: 1.85em;
        scrollbar-width: 1.85em;
        z-index: 999;
    }
    .dropdown ::-webkit-scrollbar-thumb:active {
        background-color: hsla(224, 25%, 73%, 0.993);
        width: 1.85em;
        overflow: auto;
        z-index: 999;
    }

    .dropdown_items {
        position: absolute;
        pointer-events: all;
        top: 0px;
        width: calc(100% - 11px);
        max-height: 170px;
        background: var(--grmj-profile-background_10);
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        box-shadow: 2px 1px 4px hsla(0, 0%, 0%, 0.99);
        color: var(--grmj-font-color-5);
        overflow-y: auto;
        overflow-x: none;
        border: 1px solid #aaa;
        transform: translate(0px, -200px);
        transition: 0.3s all ease-out;
    }
    .dropdown_item {
        padding: 5px;
    }
    .dropdown_item:hover {
        background: var(--grmj-profile-background_9);
        color: var(--grmj-font-color-1);
    }
`;

dropDown_sharedStyles.goals = /*css*/ `
     /* dropDown_sharedStyles.goals  */
     .drop-down-shell {
        margin: 1.45em 0 2em 2em;
        position: absolute;
        top: 0em;
        left: 60%;
        width: 600px;
        height: 135px;
    }
    .drop-down {
        margin: 0;
        position: absolute;
        display: inline-block;
        width: 575px;
        height: 155px;
    }
    .dd-section {
        margin: 0em 0 0em 0em;
        position: absolute;
        display: inline-flex;
        width: 515px;
        height: 75px;
        background: var(--grmj-profile-background_8);
        border: var(--grmj-border-2);
        border-radius: 0.75em;
        filter: var(--grmj-filter-dropShadow-4);
        justify-content: center;
        align-items: center;
        z-index: 50;
    }
    
    .dropdown {
        margin: 0em auto 0em 0.8em;
        position: sticky;
        top: 0em;
        width: 200px;
        height: 30px;
        display: inline-block;
        background: var(--grmj-profile-background_9);
        border: 1px solid #aaa;
        box-shadow: 2px 1px 4px hsla(0, 0%, 0%, 0.59);        
        border-radius: 5px;
        color: var(--grmj-font-color-1);
        line-height: 30px;
        user-select: none;
        cursor: pointer;
        font-size: 0.8em;
        font-family: Arial, Helvetica, sans-serif;
        justify-content: space-between;
        letter-spacing: var(--grmj-letter-spacing-1);
    }
    .dropdown_value {
        display: inline-block;
        padding-left: 5px;
    }
    .dropdown_arrow {
        position: absolute;
        right: 5px;
        top: 0px;
        color: black;
        font-size: 25px;
        transition: all 0.3s ease;
    }
    .dropdown_panel {
        position: absolute;
        background: transparent;
        width: calc(100% + 11px);
        z-index: 999;
        height: 203px;
        left: -1px;
        top: 28px;
        overflow: hidden;
        pointer-events: none;
    }
    .dropdown ::-webkit-scrollbar {
        width: 0.4em;
        background-color: hsla(0, 1%, 66%, 0.9);
        overflow: auto;
        z-index: 999;

    }
    .dropdown ::-webkit-scrollbar:hover {
        width: 0.85em;
        background-color: hsla(0, 1%, 34%, 0.9);
        z-index: 999;

    }
    .dropdown ::-webkit-scrollbar-thumb {
        width: 0.5em;
        background-color: hsl(224, 42%, 40%);
        border-radius: 0.5em;
        overflow: auto;
        z-index: 999;

    }
    .dropdown ::-webkit-scrollbar-thumb:hover {
        background-color: hsla(224, 25%, 73%, 0.993);
        width: 1.85em;
        scrollbar-width: 1.85em;
        z-index: 999;
    }
    .dropdown ::-webkit-scrollbar-thumb:active {
        background-color: hsla(224, 25%, 73%, 0.993);
        width: 1.85em;
        overflow: auto;
        z-index: 999;
    }

    .dropdown_items {
        position: absolute;
        pointer-events: all;
        top: 0px;
        width: calc(100% - 11px);
        max-height: 170px;
        background: var(--grmj-profile-background_10);
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        box-shadow: 2px 1px 4px hsla(0, 0%, 0%, 0.99);
        color: var(--grmj-font-color-5);
        overflow-y: auto;
        overflow-x: none;
        border: 1px solid #aaa;
        transform: translate(0px, -200px);
        transition: 0.3s all ease-out;
    }
    .dropdown_item {
        padding: 5px;
    }
    .dropdown_item:hover {
        background: var(--grmj-profile-background_9);
        color: var(--grmj-font-color-1);
    }
`;

dropDown_sharedStyles.contact = /*css*/ `
     /* dropDown_sharedStyles.contact  */
     .drop-down-shell {
        margin: 1.45em 0 2em 2em;
        position: absolute;
        top: 0em;
        left: 60%;
        width: 600px;
        height: 135px;
    }
    .drop-down {
        margin: 0;
        position: absolute;
        display: inline-block;
        width: 575px;
        height: 155px;
    }
    .dd-section {
        margin: 0em 0 0em 0em;
        position: absolute;
        display: inline-flex;
        width: 515px;
        height: 75px;
        background: var(--grmj-profile-background_8);
        border: var(--grmj-border-2);
        border-radius: 0.75em;
        filter: var(--grmj-filter-dropShadow-4);
        justify-content: center;
        align-items: center;
        z-index: 50;
    }
    
    .dropdown {
        margin: 0em auto 0em 0.8em;
        position: sticky;
        top: 0em;
        width: 200px;
        height: 30px;
        display: inline-block;
        background: var(--grmj-profile-background_9);
        border: 1px solid #aaa;
        box-shadow: 2px 1px 4px hsla(0, 0%, 0%, 0.59);        
        border-radius: 5px;
        color: var(--grmj-font-color-1);
        line-height: 30px;
        user-select: none;
        cursor: pointer;
        font-size: 0.8em;
        font-family: Arial, Helvetica, sans-serif;
        justify-content: space-between;
        letter-spacing: var(--grmj-letter-spacing-1);
    }
    .dropdown_value {
        display: inline-block;
        padding-left: 5px;
    }
    .dropdown_arrow {
        position: absolute;
        right: 5px;
        top: 0px;
        color: black;
        font-size: 25px;
        transition: all 0.3s ease;
    }
    .dropdown_panel {
        position: absolute;
        background: transparent;
        width: calc(100% + 11px);
        z-index: 999;
        height: 203px;
        left: -1px;
        top: 28px;
        overflow: hidden;
        pointer-events: none;
    }
    .dropdown ::-webkit-scrollbar {
        width: 0.4em;
        background-color: hsla(0, 1%, 66%, 0.9);
        overflow: auto;
        z-index: 999;

    }
    .dropdown ::-webkit-scrollbar:hover {
        width: 0.85em;
        background-color: hsla(0, 1%, 34%, 0.9);
        z-index: 999;

    }
    .dropdown ::-webkit-scrollbar-thumb {
        width: 0.5em;
        background-color: hsl(224, 42%, 40%);
        border-radius: 0.5em;
        overflow: auto;
        z-index: 999;

    }
    .dropdown ::-webkit-scrollbar-thumb:hover {
        background-color: hsla(224, 25%, 73%, 0.993);
        width: 1.85em;
        scrollbar-width: 1.85em;
        z-index: 999;
    }
    .dropdown ::-webkit-scrollbar-thumb:active {
        background-color: hsla(224, 25%, 73%, 0.993);
        width: 1.85em;
        overflow: auto;
        z-index: 999;
    }

    .dropdown_items {
        position: absolute;
        pointer-events: all;
        top: 0px;
        width: calc(100% - 11px);
        max-height: 170px;
        background: var(--grmj-profile-background_10);
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        box-shadow: 2px 1px 4px hsla(0, 0%, 0%, 0.99);
        color: var(--grmj-font-color-5);
        overflow-y: auto;
        overflow-x: none;
        border: 1px solid #aaa;
        transform: translate(0px, -200px);
        transition: 0.3s all ease-out;
    }
    .dropdown_item {
        padding: 5px;
    }
    .dropdown_item:hover {
        background: var(--grmj-profile-background_9);
        color: var(--grmj-font-color-1);
    }
`;
dropDown_sharedStyles.library = /*css*/ `
     /* dropDown_sharedStyles.library  */
     .drop-down-shell {
        margin: 1.45em 0 2em 2em;
        position: absolute;
        top: 0em;
        left: 60%;
        width: 600px;
        height: 135px;
    }
    .drop-down {
        margin: 0;
        position: absolute;
        display: inline-block;
        width: 575px;
        height: 155px;
    }
    .dd-section {
        margin: 0em 0 0em 0em;
        position: absolute;
        display: inline-flex;
        width: 515px;
        height: 75px;
        background: var(--grmj-profile-background_8);
        border: var(--grmj-border-2);
        border-radius: 0.75em;
        filter: var(--grmj-filter-dropShadow-4);
        justify-content: center;
        align-items: center;
        z-index: 50;
    }
    
    .dropdown {
        margin: 0em auto 0em 0.8em;
        position: sticky;
        top: 0em;
        width: 200px;
        height: 30px;
        display: inline-block;
        background: var(--grmj-profile-background_9);
        border: 1px solid #aaa;
        box-shadow: 2px 1px 4px hsla(0, 0%, 0%, 0.59);        
        border-radius: 5px;
        color: var(--grmj-font-color-1);
        line-height: 30px;
        user-select: none;
        cursor: pointer;
        font-size: 0.8em;
        font-family: Arial, Helvetica, sans-serif;
        justify-content: space-between;
        letter-spacing: var(--grmj-letter-spacing-1);
    }
    .dropdown_value {
        display: inline-block;
        padding-left: 5px;
    }
    .dropdown_arrow {
        position: absolute;
        right: 5px;
        top: 0px;
        color: black;
        font-size: 25px;
        transition: all 0.3s ease;
    }
    .dropdown_panel {
        position: absolute;
        background: transparent;
        width: calc(100% + 11px);
        z-index: 999;
        height: 203px;
        left: -1px;
        top: 28px;
        overflow: hidden;
        pointer-events: none;
    }
    .dropdown ::-webkit-scrollbar {
        width: 0.4em;
        background-color: hsla(0, 1%, 66%, 0.9);
        overflow: auto;
        z-index: 999;

    }
    .dropdown ::-webkit-scrollbar:hover {
        width: 0.85em;
        background-color: hsla(0, 1%, 34%, 0.9);
        z-index: 999;

    }
    .dropdown ::-webkit-scrollbar-thumb {
        width: 0.5em;
        background-color: hsl(224, 42%, 40%);
        border-radius: 0.5em;
        overflow: auto;
        z-index: 999;

    }
    .dropdown ::-webkit-scrollbar-thumb:hover {
        background-color: hsla(224, 25%, 73%, 0.993);
        width: 1.85em;
        scrollbar-width: 1.85em;
        z-index: 999;
    }
    .dropdown ::-webkit-scrollbar-thumb:active {
        background-color: hsla(224, 25%, 73%, 0.993);
        width: 1.85em;
        overflow: auto;
        z-index: 999;
    }

    .dropdown_items {
        position: absolute;
        pointer-events: all;
        top: 0px;
        width: calc(100% - 11px);
        max-height: 170px;
        background: var(--grmj-profile-background_10);
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        box-shadow: 2px 1px 4px hsla(0, 0%, 0%, 0.99);
        color: var(--grmj-font-color-5);
        overflow-y: auto;
        overflow-x: none;
        border: 1px solid #aaa;
        transform: translate(0px, -200px);
        transition: 0.3s all ease-out;
    }
    .dropdown_item {
        padding: 5px;
    }
    .dropdown_item:hover {
        background: var(--grmj-profile-background_9);
        color: var(--grmj-font-color-1);
    }
`;

export { dropDown_sharedStyles };

// .drop-down-shell {
//     margin: 0em 0 2em 2em;
//     position: absolute;
//     display: inline-block;
//     top: 0em;
//     right: 2em;
//     width: 600px;
//     height: 185px;

// }
