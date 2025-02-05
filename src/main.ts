import {
	getLinkpath,
	MarkdownPostProcessorContext,
	Notice,
	Plugin,
} from "obsidian";

import { AudioPlayerRenderer } from "./audioPlayerRenderer";

export default class AudioPlayer extends Plugin {
	async onload() {
		const player = document.createElement("audio");
		player.volume = 0.5;
		const body = document.getElementsByTagName("body")[0];
		body.appendChild(player);

		this.addCommand({
			id: "pause-audio",
			name: "Pause Audio",
			callback: () => {
				new Notice("Audio paused");
				const ev = new Event("allpause");
				document.dispatchEvent(ev);
				player.pause();
			},
		});

		this.addCommand({
			id: "resume-audio",
			name: "Resume Audio",
			callback: () => {
				new Notice("Audio resumed");
				const ev = new Event("allresume");
				document.dispatchEvent(ev);
				if (player.src) player.play();
			},
		});

		this.addCommand({
			id: "toggle-audio",
			name: "Toggle Audio",
			callback: () => {
				if (player.src && player.paused) {
					const ev = new Event("allresume");
					document.dispatchEvent(ev);
					player.play();	
				} else {
					const ev = new Event("allpause");
					document.dispatchEvent(ev);
					player.pause();
				}
			},
		});

		this.addCommand({
			id: "add-audio-comment",
			name: "Add bookmark",
			callback: () => {
				const ev = new Event("addcomment");
				document.dispatchEvent(ev);
			}
		});
		
		this.addCommand({
			id: "copy-timestamp",
			name: "Copy current timestamp to clipboard",
			callback: () => {
				const ev = new Event("copytimestamp");
				document.dispatchEvent(ev);
				new Notice("Copied current timestamp to clipboard");
			}
		});

		this.addCommand({
			id: "audio-forward-5s",
			name: "+5 sec",
			callback: () => {
				if (player.src) player.currentTime += 5;
			}
		});

		this.addCommand({
			id: "audio-back-5s",
			name: "-5 sec",
			callback: () => {
				if (player.src) player.currentTime -= 5;
			}
		});

		this.registerMarkdownPostProcessor(
			(
				el: HTMLElement,
				ctx: MarkdownPostProcessorContext
			) => {
			const callouts = el.findAll('.callout[data-callout="audio-player"]');
	  
			for (let callout of callouts) {
				// parse comments
				const calloutContent = callout.find('.callout-content');
				const commentsList = calloutContent.find('ul');

				// parse file name
				const filename = calloutContent.find('p > a').getAttribute('href');
				if (!filename) return;

				const allowedExtensions = [
					"mp3",
					"wav",
					"ogg",
					"flac",
					"mp4",
					"m4a"
				];
				const link = this.app.metadataCache.getFirstLinkpathDest(
					getLinkpath(filename),
					filename
				);
				if (!link || !allowedExtensions.includes(link.extension))
					return;
				
				// parse title (if none, use file name)
				let calloutTitle = callout.find('.callout-title').innerText;
				if (!calloutTitle || calloutTitle == 'Music player')
					calloutTitle = filename;

				// create root $el
				const container = el.createDiv();
				container.classList.add("base-container");

				//create vue app
				ctx.addChild(
					new AudioPlayerRenderer(el, {
						filepath: link.path,
						title: calloutTitle,
						content: commentsList,
						ctx,
						player,
					})
				);
			}
		});
	}
}
