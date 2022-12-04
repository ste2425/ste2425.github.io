---
title: Replacing PSP Super Capacitor With Cell Battery
tags: psp
---

So recently I built a consolized PSP (I’ll go into that in another post) however one problem with my implementation is the date and time keeps resetting. Time to see if there's anything I can do to fit that.

{% fancybox /images/consolizer.jpg /images/consolizer-thumb.jpg "PSP Consolizer" %}

<!-- more -->

# The problem

So the PSP's clock is maintained by its battery however there is also a supercapacitor that keeps time too. Whilst this looks suspiciously like a cell battery it's not. According to members of the PSP Homebrew Discord (cracking place by the way), [this is the capacitor](https://uk.farnell.com/panasonic/eecen0f204ak/cap-0-2f-3-3v-double-layer-smd/dp/1305070).

{% fancybox /images/before.jpg /images/before-thumb.jpg "PSP Super Capacitor" %}

The problem I have is rather unique though. My Consolized PSP runs without its battery. This means every time I disconnected the mains power (don't like leaving it on wasting power when not in use) the date and time are lost.

I'm not sure how long the capacitor is intended to hold its charge. On mine, it resets after a few minutes. You could buy external chargers where you removed the PSP's battery and charged in them. Did Sony expect the capacitor to hold for hours whilst you charged the battery in an external charger?

# The Solution

I figured if the purpose of the capacitor is to hold the time in between changing the PSP's battery could I not hook up a coin cell to it instead: _SPOILER ALERT_ the answer is yes.

Looking at the datasheet above the capacitor is rated at 3v. Trouble is that is the upper limit, the PSP could run at 3v, 1.9v or 3.3v. I was wandering around Aldi and spotted some 3v cell batteries on the last chance saloon aisle next to the tills. Figured that would be good enough and picked them up.

{% fancybox /images/supercapacitor.png "Super Capacitor" %}

Next i would need to stop the PSP attempting to charge the battery, luckily i had some spare diodes from an old electroncis starter kit.

So the plan;

- solder some jumper leads to the battery
- solder a diode to stop the PSP charging the battery
- Desolder the super capacitor
- Solder the battery jumper leads in place

Easy right?

{% alert warning %}

### Soldering to batteries is stupid, don't do it.

You can buy cell batteries with tabs (like for GameBoy games) or little holders. Use one of them.

{% endalert %}

Firstly I soldered up the battery. Using lots of flux and little contact time with the battery. Once done I wrapped it in some heat shrink.

{% fancybox /images/cell.jpg "Soldered battery" %}

Next was soldering the diode.

Diodes only allow current to flow in one direction, allowing the battery to discharge whilst preventing the PSP charging it. Diodes incur a voltage drop accross them. Measuring the battery without a load I got 3.25v, measuring with the diode I got 2.8v.

Different diodes may be marked differently. Mine had a white band to indicate the cathode.

Lastly, I needed to remove the old capacitor and solder in my battery.

Using the correct soldering iron tip will help allot here. Luckily i could swap mine out for a larger tip to heat a larger area. The common small pointed tips will struggle to heat up the area well enough to remove the capacitor without damaging the PSP.

Once removed soldering in the battery was quite easy.

{% fancybox /images/after.jpg "Soldered battery" %}

And like that job done.

I'm sure someone with more patients than me could do a mucher neater job but it works. I can turn off the PSP at the mains and the next day it rembers the time. I'm sure its worth all this effort, maybe...
