import './index.css';

import { applyTheme } from './renderer/themes';
import './renderer/sidebar';
import './renderer/tabs';
import './renderer/editor';
import './renderer/sync';
import * as tabs from './renderer/tabs';
import * as data from './renderer/data';

import { ServiceAPI } from './renderer/api';
// window.ServiceAPI = new ServiceAPI();

let theme = {
    "name": "Default Light",
    "description": "Default light theme for servicearchive.",
    "version": "1.0.0",
    "colors": {
        "sidebar-bg": "#1a1a1f",
        "sidebar-fg": "#ffffff",
        "sidebar-corner-radius": "0 1rem 1rem 0",
        "sidebar-width": "50%",

        "sidebar-scrollbar-width": ".5rem",
        "sidebar-scrollbar-corner-radius": ".25rem",
        "sidebar-scrollbar-bg": "#26262f",
        "sidebar-scrollbar-fg": "#4a4a58",

        "sidebar-input-fg": "#ffffff",
        "sidebar-input-bg": "#32323b",
        "sidebar-input-corner-radius": "1rem",

        "sidebar-gradient-col1": "#1a1a1fff",
        "sidebar-gradient-col2": "#1a1a1f00",

        "sidebar-article-fg": "#ffffff",
        "sidebar-article-bg": "none",

        "sidebar-btn-fg": "#ffffff",
        "sidebar-btn-bg": "none",

        "tabbar-bg": "#d8d8d8",
        "tab-bg": "#eaeaea",
        "tab-fg": "#000000",
        "tab-corner-radius": ".5rem",
        "tab-active-bg": "#ffffff",
        "tab-active-fg": "#000000",
        "floating-tab-shadow": "#000000",

        "editor-bg": "#ffffff",
        "editor-fg": "#000000",
        "editor-selection-bg": "#d8d8d8",
        "editor-selection-fg": "#000000",

        "editor-toolstrip-bg": "#ffffff",
        "editor-toolstrip-btn-bg": "none",
        "editor-toolstrip-btn-fg": "#000000",
        "editor-toolstrip-btn-active-bg": "#d8d8d8",
        "editor-toolstrip-btn-active-fg": "#000000",

        "modal-bg": "#ffffff",
        "modal-fg": "#000000",
        "modal-btn-bg": "#dddddd",
        "modal-btn-fg": "#000000"
    }
};
applyTheme(theme);