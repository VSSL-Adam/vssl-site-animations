# Live Demo

Hosted on Surge here: <a href="https://vssl-components.surge.sh/" target="_blank">vssl-components.surge.sh</a>

# Remaining Animation Work

## Mouse Cursor

I started explorations on the mouse cursor styling here in <span style="color:#9a784e;font-weight:bold">Mouse.js</span> and <span style="color:#9a784e;font-weight:bold">mouse.scss</span>. If using this approach there is some additional logic that would need to be done to trigger the enlarging of the mouse cursor when hovering over interactive elements (adding the ".hoverable" class to any element causes the mouse cursor to change; however it needs further development to work).

## Framer Motion

For the <span style="color:#9a784e;font-weight:bold">Title.js</span> component animation I'm using <a href="https://www.framer.com/motion/" target="_blank">Framer Motion</a>. This library is the one I'd recommend using for additional sitewide animations as it is not as overtly engineered as Spring.js or Three.js etc. but still has alot of powerful features in it.

## Salt Text

This was my initial thought on how to animate this similarly to the example on the <a href="https://www.uno.app/" target="_blnak">Uno</a> site. Note; that this also will require some sort of animate on scroll to trigger the initial animation playing. I would recommend <a href="https://www.react-reveal.com/" target="_blank">React Reveal</a> not only for this but sitewide too if we want to have scroll to reveal stuff.

## Primary Buttons

These were tricky as I couldn't quite figure out the best way to handle the negative space around the text (when animating on hover any way I attempted to do it the animation would look wonky).

# Additional Components

For Tailwind practice I did some of the card components from the site mockup here. I added my own hover states for some of them as I didn't see any in regards to that in the site mockups; these are totally random and just my own initial explorations on Tailwind practices.

If you use any of the logic here make sure to include key props as needed (I left inline comments if an individual component needs them).

I dropped in custom keyframes into the <span style="color:#9a784e;font-weight:bold">tailwind.config.js</span> file.

## Crew Images

See Crew.js and CrewPortrait.js for components needed for the Crew section. (Please note; I've used dummy hardcoded images here for demonstration; you'll want to remove that and use your own data.)