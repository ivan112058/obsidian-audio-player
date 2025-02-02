import { MarkdownPostProcessorContext } from "obsidian";

export type AudioComment = {
	content: string;
	timeStart: number;
	timeEnd: number;
	timeString: string;
	index: number;
};

export type AudioPlayerRendererOptions = {
	ctx: MarkdownPostProcessorContext;
	player: HTMLAudioElement;
	filepath: string;
	title: string;
	content: HTMLElement;
};
