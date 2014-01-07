no.leitom.loading
=================

A modal overlay loading widget for android

This widget lets you show a overlay loading widget on android no matter what layout properties the parent window has.

USAGE:

Include the widget in you view like the following:

<Widget id="aload" platform="android" src="no.leitom.loading" />

You can allso specify the following parameters:

title="your title" and message="your message"

Or you can use localization by replacing title param with titleid and the same for message.

When you want to show the loading widget just refer to the id that you have given the widget like this:

$.aload.show(); and $.aload.hide()

If you want to show the loading widget when opening a window pass true to the show method, then an eventlistener will be added to the open event of the parent window so that the widget will wait to the parent window are ready.
