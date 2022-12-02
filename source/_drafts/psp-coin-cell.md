---
title: Replacing PSP Super Capacitor With Cell Battery
tags: psp
---

So recently I built a consolized PSP (I’ll go into that in another post) however one problem with my implementation is the date and time keeps resetting. Time to see if there's anything I can do to fit that.

{% fancybox /images/consolizer.jpg /images/consolizer-thumb.jpg "PSP Consolizer" %}

<!-- more -->

# The problem

So the PSP's clock is maintained by its battery, seems obvious. However there is also a super capacitor which keeps time too. Whilst this looks suspiciously like a cell battery its not. According to members of the PSP Homebrew Discord (cracking place by the way) [this is the capacitor]().

{% fancybox /images/before.jpg /images/before-thumb.jpg "PSP Super Capacitor" %}

The problem i have is rather unique though. My Consolized PSP runs without its battery. This means everytime i disconnect mains power (don't like leaving it on wasting power when not in use) the date and time are lost.

I'm not sure how long the capacitor is intended to hold its charge. On mine it resets after a few minuets. You could buy external chargers where you removed the PSP's battery and charged in them. Did Sony expect the capacitor to hold for hours whilst you charged the battery in an external charger?

# The Solution

I figured if the purpose of the capacitor is to hold the time in between changing the PSP's battery could i not hook up a coin cell to it instead. _SPOILER ALERT_ the answer is yes.
