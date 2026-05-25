// ==UserScript==
// @name         Gemini to Claude UI Theme
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Transform Google Gemini interface to Claude-like appearance
// @author       You
// @match        https://gemini.google.com/*
// @match        https://gemini.google.com/app/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Claude-inspired CSS theme
    const claudeTheme = `
        /* Main color palette - Claude-inspired */
        :root {
            --claude-primary: #f3f3f1;
            --claude-secondary: #ffffff;
            --claude-text: #0d0d0d;
            --claude-text-light: #565869;
            --claude-border: #d0d0ce;
            --claude-hover: #f5f5f3;
            --claude-accent: #0084ff;
            --claude-bg-alt: #ececeb;
        }

        /* Body and main container */
        body {
            background: linear-gradient(135deg, #f8f8f6 0%, #f3f3f1 100%) !important;
            color: var(--claude-text) !important;
        }

        /* Main chat container */
        [role="main"],
        .main-container,
        [class*="chat"],
        [class*="container"] {
            background: var(--claude-secondary) !important;
        }

        /* Sidebar styling */
        aside,
        nav,
        [class*="sidebar"],
        [class*="menu"] {
            background: var(--claude-primary) !important;
            border-right: 1px solid var(--claude-border) !important;
        }

        /* Messages/Chat bubbles */
        [role="article"],
        [class*="message"],
        [class*="bubble"],
        [class*="chat-message"] {
            border-radius: 12px !important;
            padding: 12px 16px !important;
            margin-bottom: 8px !important;
        }

        /* User message - light styling */
        [class*="user"],
        [class*="sent"],
        [data-sender="user"] {
            background: var(--claude-bg-alt) !important;
            color: var(--claude-text) !important;
            border-left: 3px solid var(--claude-accent) !important;
        }

        /* Assistant message - white styling */
        [class*="assistant"],
        [class*="received"],
        [data-sender="bot"],
        [data-sender="assistant"] {
            background: var(--claude-secondary) !important;
            color: var(--claude-text) !important;
            border: 1px solid var(--claude-border) !important;
        }

        /* Input field - Claude style */
        textarea,
        input[type="text"],
        [class*="input"],
        [contenteditable="true"] {
            background: var(--claude-secondary) !important;
            color: var(--claude-text) !important;
            border: 1px solid var(--claude-border) !important;
            border-radius: 8px !important;
            padding: 12px !important;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif !important;
            font-size: 15px !important;
        }

        textarea::placeholder,
        input::placeholder {
            color: var(--claude-text-light) !important;
        }

        /* Buttons - Claude style */
        button,
        [role="button"],
        input[type="button"],
        input[type="submit"] {
            background: var(--claude-primary) !important;
            color: var(--claude-text) !important;
            border: 1px solid var(--claude-border) !important;
            border-radius: 8px !important;
            padding: 8px 12px !important;
            cursor: pointer !important;
            transition: all 0.2s ease !important;
            font-weight: 500 !important;
        }

        button:hover,
        [role="button"]:hover {
            background: var(--claude-hover) !important;
            border-color: var(--claude-text-light) !important;
        }

        /* Primary action buttons */
        button[type="submit"],
        [class*="primary"],
        [class*="send"],
        [aria-label*="Send"] {
            background: var(--claude-accent) !important;
            color: white !important;
            border: none !important;
        }

        button[type="submit"]:hover,
        [class*="primary"]:hover {
            background: #0066cc !important;
            opacity: 0.9 !important;
        }

        /* Headers and titles */
        h1, h2, h3, h4, h5, h6 {
            color: var(--claude-text) !important;
            font-weight: 600 !important;
        }

        /* Code blocks - Claude inspired */
        pre,
        code {
            background: #f5f5f3 !important;
            color: #0d0d0d !important;
            border-radius: 6px !important;
            border: 1px solid var(--claude-border) !important;
        }

        pre {
            padding: 12px !important;
            overflow-x: auto !important;
        }

        code {
            padding: 2px 6px !important;
            font-family: 'Menlo', 'Monaco', 'Courier New', monospace !important;
        }

        /* Scrollbar - subtle */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }

        ::-webkit-scrollbar-track {
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background: #d0d0ce;
            border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #a9a9a5;
        }

        /* Modal and dialogs */
        dialog,
        [role="dialog"],
        [class*="modal"],
        [class*="popup"] {
            background: var(--claude-secondary) !important;
            border: 1px solid var(--claude-border) !important;
            border-radius: 12px !important;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1) !important;
        }

        /* Links */
        a {
            color: var(--claude-accent) !important;
            text-decoration: none !important;
        }

        a:hover {
            text-decoration: underline !important;
        }

        /* Remove dark mode if present */
        [data-theme="dark"],
        .dark-mode {
            filter: invert(0) !important;
        }

        /* Smooth transitions */
        * {
            transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease !important;
        }

        /* Typography refinement */
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif !important;
            font-size: 15px !important;
            line-height: 1.5 !important;
        }

        /* Focus states - accessibility */
        button:focus,
        input:focus,
        textarea:focus,
        [role="button"]:focus {
            outline: 2px solid var(--claude-accent) !important;
            outline-offset: 2px !important;
        }

        /* Subtle background variations */
        [class*="list"],
        [class*="item"] {
            background: var(--claude-primary) !important;
            border: 1px solid var(--claude-border) !important;
            border-radius: 8px !important;
            padding: 10px !important;
            margin-bottom: 6px !important;
        }

        [class*="list"]:hover,
        [class*="item"]:hover {
            background: var(--claude-hover) !important;
        }
    `;

    // Apply CSS
    if (typeof GM_addStyle !== 'undefined') {
        GM_addStyle(claudeTheme);
    } else {
        const style = document.createElement('style');
        style.innerHTML = claudeTheme;
        document.head.appendChild(style);
    }

    // DOM manipulation to enhance Claude-like feel
    function enhanceUI() {
        // Smooth scrolling
        document.documentElement.style.scrollBehavior = 'smooth';

        // Enhance input field appearance
        const inputs = document.querySelectorAll('textarea, input[type="text"]');
        inputs.forEach(input => {
            input.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.08)';
            input.style.transition = 'all 0.2s ease';
            
            input.addEventListener('focus', function() {
                this.style.boxShadow = '0 4px 12px rgba(0, 132, 255, 0.15)';
                this.style.borderColor = 'var(--claude-accent)';
            });
            
            input.addEventListener('blur', function() {
                this.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.08)';
                this.style.borderColor = 'var(--claude-border)';
            });
        });

        // Enhance buttons
        const buttons = document.querySelectorAll('button, [role="button"]');
        buttons.forEach(button => {
            button.style.transition = 'all 0.2s ease';
            button.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
        });
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', enhanceUI);
    } else {
        enhanceUI();
    }

    // Re-apply enhancements when content changes (for dynamic loading)
    const observer = new MutationObserver(enhanceUI);
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: false
    });

})();