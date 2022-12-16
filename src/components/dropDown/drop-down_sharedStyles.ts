'use strict';

import { dropDown_sharedStyles } from '../../interfaces/interfaces.js';

const dropDown_sharedStyles = {
	shell: ``,
	dropdown: ``,
	dynadrop: ``,
	home: ``
};

dropDown_sharedStyles.shell = /*css*/ ` 


`;

dropDown_sharedStyles.dropdown = /*css*/ `

    .drop-down-shell {
        margin: 0em 0 2em 2em;
        position: absolute;
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


    .drop-down-shell {
        margin: 3.5em 0 2em 2em;
        position: absolute;
        top: 0em;
        left: 65%;
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

export { dropDown_sharedStyles };
