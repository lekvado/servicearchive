export interface Service {
    id: number,
    title: string,
    content: string,
    created: number,
    modified: number
}

export interface ServiceListResult {
    id: number,
    title: string,
    contentPreview: string
}

export interface ServiceSearchResult {
    id: number,
    title: string,
    content: string,
    highlightStart: number,
    highlightEnd: number
}
export interface ServiceSearchResults {
    title: Array<ServiceSearchResult>,
    content: Array<ServiceSearchResult>
}

export interface Modal {
    title: string,
    tabs: Array<ModalTab>
}
export interface ModalTab {
    title: string,
    content: Array<HTMLElement>
}