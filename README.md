# Obsidian Audio Player

This is a fork of [noonesimg/obsidian-audio-player](https://github.com/noonesimg/obsidian-audio-player).

## Features

- One audio instance for the whole Obsidian vault
- Easy to initialize as a callout block
- Wave visualizer 
- Keeps playing even if you've closed the tab
- Add timestamp bookmarks with formatted comments to your audio files

## Demo

_TODO demo gif_

## How to use

In your note, create a [callout](https://help.obsidian.md/Editing+and+formatting/Callouts) of type `audio-player`:

```
> [!audio-player]
> [[my_audio_file.mp3]]
```

The audio file must be supplied as an internal link. The link must be on the first line of the callout text.

The (optional) callout title will be displayed at the top of the player widget:

```
> [!audio-player] Song Title
> [[my_audio_file.mp3]]
```

### Commands

The following commands are accessible through the command palette menu (Ctrl-P):

1. **Pause Audio** to pause whatever audio is playing
2. **Resume Audio** to resume
3. **Toggle Audio** to switch between pause and resume
4. **Copy current timestamp to clipboard** same as clicking on the current timestamp on the player

### Add bookmarks wih timestamps

Bookmark times can be specified either as single timestamps or as time windows with start and end time. The timestamp format is `mm:ss.SSS` (milliseconds are optional).

Note that bookmark entries must be separated by 2 newlines.

```
> [!audio-player]
> [[my_audio_file.mp3]]
>
> 01:50.123 --- bookmark comment with _Markdown_ **formatting**
>
> 02:01.456-12:38 --- bookmark comment on a time window
>
> 02:40 --- bookmark comment with an [[MyNote|internal link]]
```

_TODO demo gif_

## How to install

### Using Git

1. Close obsidian
2. Go to your vault .obsidian/plugins folder in the terminal
3. git clone https://github.com/catetrai/obsidian-audio-player.git
4. Open obsidian
5. Go to settings -> community plugins
6. Scroll down, find "Audio Player" plugin and enable it


## Credits

This is a fork of https://github.com/noonesimg/obsidian-audio-player