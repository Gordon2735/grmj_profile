'use strict';

import { chatBox_sharedHTML } from '../../interfaces/interfaces.js';

const chatBox_sharedHTML = {
    shell: ``,
    chatBox: ``,
    footer: ``
};

chatBox_sharedHTML.shell = /*html*/ `

    <chat-box id="chatBox" class="chat-box" article="brief" data-article-layer="zero"></chat-box>
`;

chatBox_sharedHTML.chatBox = /*html*/ `

    <header id="header" class="header" alt="Header">
        <img id="headerChatGPTImg" class="header-chat-gpt-img" alt="Header ChatGPT Image" src="/src/components/chatBox/resources/images/chatgpt-logo-red.png" />
        <h1 id="chatBoxH1" class="chat-box-h1" alt="Chat Box H1 Title">
            ChatBox
        </h1>
        <br />
        <h2 id="chatBoxH2" class="chat-box-h2" alt="Chat Box H2 Title">
            ChatGPT-3.5 turbo
        </h2> 
        <br />
        <hr class="header-thematic-break" alt="Header Thematic Break" />
        <img id="headerTWImg" class="header-tw-img" alt="Header Team Webelistics Image" src="/src/components/chatBox/resources/images/tw_logo.png" />
        <h3 id="twH3" class="tw-h3" alt="Team Webelistics H3 Title">
            Team Webelistics<sup>®️</sup>
        </h3>
    </header>

    <section id="sectionOpenAI" class="section-openai" alt="OpenAI Image Container">
        <figure id="openAIFigure" class="openai-figure" alt="OpenAI Image Figure">
            <img id="openAIImg" class="openai-img" alt="OpenAI Image" src="/src/components/chatBox/resources/images/OpenAI.png" />
            <figcaption id="openAIFigcaption" class="openai-figcaption" alt="OpenAI Image Figcaption">
                <small id="openAISmall" class="openai-small" alt="OpenAI Image Small Tag">
                    OpenAI LLM(Large Language Model)
                </small>
            </figcaption>        
        </figure>
    </section>

    <section id="sectionRobot" class="section-robot" alt="Robot Image Container">
        <figure id="robotFigure" class="robot-figure" alt="Robot Image Figure">
            <img id="robotImg" class="robot-img" alt="Robot Image" src="/src/components/chatBox/resources/images/robot-chat-bot.png" />
            <figcaption id="robotFigcaption" class="robot-figcaption" alt="Robot Image Figcaption">
                <small id="robotSmall" class="robot-small" alt="Robot Image Small Tag">
                    OpenAI Robot Chat Bot
                </small>
            </figcaption>
        </figure>    
    </section>

    <section id="openaiChatbotSection" class="openai-chatbot-section">
        <aside id="openaiTimeAside" class="openai-time-aside" alt="An Aside container for time">
            <time id="openaiTime" class="openai-time" alt="OpenAI Time">
                Wednesday, August 25, 2023 11:00:00 PM
            </time>
        </aside>
        <iFrame id="openaiFrame" class="openai-frame" src="http://localhost:9080/openai" title="OpenAI's" name="openai_chatbot">
        </iFrame>
        <span id="openaiSpan" class="openai-span" alt="OpenAI Span">
            <hr class="openai-span-break" alt="OpenAI Span Thematic Break" />
            <button id="openaiChatButton" class="openai-chat-button" alt="Activate Chatbot OpenAI Button">
                Chat
            </button>
            <hr class="openai-span-break" alt="OpenAI Span Thematic Break" />
            <button id="openaiResetButton" class="openai-reset-button" alt="Reset OpenAI Button">
                Reset
            </button>
            <hr class="openai-span-break" alt="OpenAI Span Thematic Break" />
            <button id="openaiClearButton" class="openai-clear-button" alt="Clear OpenAI Button">
                Clear
            </button>
            <hr class="openai-span-break" alt="OpenAI Span Thematic Break" />
            <button id="openaiCloseButton" class="openai-close-button" alt="Close OpenAI Button">
                Close
            </button>
            <hr class="openai-span-break" alt="OpenAI Span Thematic Break" />
            <button id="openaiHelpButton" class="openai-help-button" alt="Help OpenAI Button">
                Help
            </button>
            <hr class="openai-span-break" alt="OpenAI Span Thematic Break" />
            <button id="openaiLandingButton" class="openai-landing-button" alt="Landing Link OpenAI Button">
            Landing
            </button>
            <hr class="openai-span-break" alt="OpenAI Span Thematic Break" />
        </span>
    </section>
   
`;

chatBox_sharedHTML.footer = /*html*/ `

    <footer id="footer" class="footer" alt="Footer">
    <h3 id="footerH3" class="footer-h3" alt="Footer H3 Title">
    <small id="footerSmall" class="footer-small" alt="Footer Copyright make small tag">
        Copyright &copy; 2023 Team Webelistics® All Rights Reserved
    </small>
    <br />
    <br />
    </h3>
    </footer>

`;

export { chatBox_sharedHTML };
