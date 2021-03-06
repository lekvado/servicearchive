/*
=====================================
  © Lekvado Media, 2019-2021
  Licensed under the GPLv3 license.
=====================================
*/

import { currentDocumentId } from './main';
import * as formatting from './formatting';
import * as updating from './updating';
import * as data from '../../core/data';

let textarea: HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById(`editor-textarea`);

export const init = () => {
	formatting.init();
	
	textarea.onclick = () => onTextareaUpdate();
	textarea.onkeydown = () => onTextareaUpdate();
	textarea.oninput = () => onTextareaUpdate();
	
	textarea.innerHTML = ``;

	let formats: string[] = formatting.getCurrentFormat();
	if (formats == undefined) formats = [];
	updating.updateToolstripButtons(formats); 
}

const onTextareaUpdate = () => {
	updating.updateToolstripButtons(formatting.getCurrentFormat());
	updating.updateCountInfo(textarea.innerText);
	updating.updateSidebarContent(currentDocumentId, textarea.innerText);

	data.setDocumentContent(currentDocumentId, textarea.innerHTML);
}