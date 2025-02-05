# Obsidian Music Player

This is a fork of the wonderful [noonesimg/obsidian-audio-player](https://github.com/noonesimg/obsidian-audio-player). It's tweaked to better fit the use case of annotating specifically music files (rather than long audios like podcast).

## Features

- Audio player with wave visualization
- Easy to insert in your note as a custom callout block
- Add timestamp bookmarks with formatted comments to your audio files
- One audio instance for the whole Obsidian vault
- Keeps playing even if you've closed the tab

## Demo

_TODO demo gif_

## How to use

In your note, create a [callout](https://help.obsidian.md/Editing+and+formatting/Callouts) of type `music-player`:

```
> [!music-player]
> [[my_audio_file.mp3]]
```

The audio file must be supplied as an internal link. The link must be on the first line of the callout text.

By default, the file name will be displayed as title of the player widget. You can override this by optionally specifying a callout title:

```
> [!music-player] Song Title
> [[my_audio_file.mp3]]
```

### Commands

The following commands are accessible through the command palette menu (`Ctrl+P` or `Cmd+P`):

- **Pause Audio**: pause whatever audio is playing
- **Resume Audio**: resume currently playing audio
- **Toggle Audio**: switch between pause and resume
- **-5 sec** / **+5 sec**: skip to 5 seconds back or forward in the audio
- **Copy current timestamp to clipboard**: same as clicking on the current timestamp on the player

It's highly recommended to configure hotkeys for these commands. This will significantly speed up your workflow when writing comments while listening to the song, which involves a lot of play-pause, going backwards, and copy-pasting the current timestamp.

### Add comments with timestamps

In edit mode, you can add comment entries with timestamps in a list inside the callout block.

Times can be specified either as single timestamps or as time windows with start and end time. The timestamp format is `mm:ss.SSS` (milliseconds are optional).

```
> [!music-player] Song Title
> [[my_audio_file.mp3]]
>
> - 01:50.123 --- comment with _Markdown_ **formatting**
> - 02:01.456-12:38 --- comment on a time window
> - 02:40 --- comment with an [[My Note|internal link]]
```

To grab the current timestamp to be pasted in the block, just click on the current time on the player, or run the command **Copy current timestamp to clipboard** (easiest via hotkey).

Note that unlike in the original [noonesimg/obsidian-audio-player](https://github.com/noonesimg/obsidian-audio-player), it is not possible to add comments via button click in the widget UI.

## How to install

### Using the built distribution

1. Quit Obsidian
2. Go to the latest release under "Releases"
3. Download the assets
4. In your vault, under `.obsidian` create a subfolder `music-player`
5. Unzip the assets into `music-player`
6. Open Obsidian
7. Go to Settings -> Community Plugins
8. Scroll down, find "Music Player" plugin and enable it
9. Quit and reopen Obsidian

### Using Git

If you want to play around with the source code, install the plugin from the repository:

1. Quit Obsidian
2. Clone this repository into your vault's `.obsidian/plugins` directory
3. Run `npm install` and `npm run dev`
4. Open Obsidian
5. Go to Settings -> Community Plugins
6. Scroll down, find "Music Player" plugin and enable it
7. Quit and reopen Obsidian

## Known issues

- It is not (yet?) possible to link to individual timestamps/comments on an audio player. This is due to a limitation in Obsidian, whereby internal links may reference a block or a list item, but not a list item inside a block. See discussion on the Obsidian forum: [Internal link to a bullet point in callout](https://forum.obsidian.md/t/internal-link-to-a-bullet-point-in-callout/47698)