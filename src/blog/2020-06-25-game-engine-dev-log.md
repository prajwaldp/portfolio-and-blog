---
slug: "/game-engine-dev-log"
createdOn: "2020-06-25"
updatedOn: "2020-07-01"
title: "Ambient Dev Log - A Dev Log about my experience developing the Ambient
Game Engine"
---

### 1 July 2020

It's a new month, and it's been a while since I've done some work on Ambient.
There are many features I have in mind, plus a lot of technical debt that
I've accumulated. This month, I want to get to a decent place in terms of the
Entitiy Component System, and a more robust colliison detection using that
can leverage the Entity Component System. I also, want to try my hand on a
Physics engine, that would give entities posiitons and velocities.

Technical debt wise, I want to fix the few hiccups that occur on occasion while
starting up (which I think is due to previous memory not being freed). I also
want to be able to benchmark games, and at the very least, display a FPS number.
I don't want to use ImGUI just for this, but will have to if I don't find
another place to display it while a game window is open.
