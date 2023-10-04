# Q: Production Outage


*Describe a time when you had to deal with an outage at work. How did you handle the situation? What steps did you take after the issue was resolved?*


Hey everybody, welcome to AlgoExpert.
In this video, we're gonna answer the following behavioral interview question: Describe a time when you had to deal with an outage at work.
How did you handle the situation?
What steps did you take after the issue was resolved?
So, throughout my entire software engineering career, I would say that I've experienced about a handful of real production outages.
Now the one that's most memorable, the one that I wanna talk about here, is actually the very first real production outage that I ever experienced.
It happened back in 2017.
I had been at Google as a software engineer for a little over six months.
And one afternoon, it was kind of late in the afternoon, I was the last person on my team, or at least the last engineer on my team, at the office, and I happened to go on the UI, the user interface, of my team's product.
I worked on Google Cloud Platform on the front end of a particular Google Cloud Platform product.
And so I go on the website on the UI, and one of our primary pages was just blank.
It wasn't loading, nothing on the screen, just completely blank
So obviously, for a split second, I kind of panicked.
What's going on?
Then I composed myself, and here's how I handled this, what turned out to be a pretty bad production outage.
The first thing that I did is, I wanted to confirm that this was actually a real bug in production and not just something with my computer, or my account, or something like that.
So, I asked a couple people who were around me.
These were not my teammates, 'cause like I said, I was the last person from my team at the office, but a couple of other people who were in proximity to me, to go on the link of the page and just to see if they were also experiencing the same thing on their computers, on their accounts.
And yes, they were.
So clearly, this was a real production issue.
So, the second thing that I decided to do was before alerting anybody else, and I suppose here, maybe I should take a step back and say, at the time, my team didn't have an on-call rotation set up because if we had had an on-call rotation, the first thing to do here would have been, once I confirmed that this was a real bug, the first thing to do would have been to flag the bug or the issue to the primary on-call.
Just, at least, have them be aware of what was going on
We didn't have an on-call rotation at that point in time
We created our on-call rotation a little bit later on.
And this was, by the way, a relatively new Google Cloud Platform product at the time, which is why we didn't have our on-call rotation.
So given that, the first thing that I said I was gonna do, or the second thing rather, was, I was gonna spend five to 10 minutes just trying to see if I could debug the issue.
I wanted to see, can I fix this without having to alert my teammates who are no longer in the office, without having to alert my manager who was, I don't know where he was, probably at home?
And so, I spent five to 10 minutes trying to debug the issue.
Turns out I wasn't able to figure out what the cause of the issue was.
It was a very weird bug, blank page, nothing in the Chrome console.
There had been nothing out of the ordinary that day or in the previous day, so it was really confusing, and I just wasn't able to figure it out.
So, at that point, I did alert the rest of my team after, I would say, about 10 minutes.
I think this is one of my philosophies for these types of issues, you don't wanna play the hero.
If you can, try to figure out the issue within five minutes, but after a certain point, there's no point in hiding this from other people.
The key thing is to fix the issue, not for you to be the hero or for people not to be bothered, if that makes sense.
So, after five to 10 minutes, alerted my team, and fortunately, one of my teammates was actually still in the office, just upstairs getting dinner or something.
And so he came down and we started pair programming to try to figure out this bug.
Now one of the key things also here that we did, which is something that I'm a very big proponent of, is even though the situation was pretty stressful 'cause literally, one of the primary pages of our product was down, not working which meant that the entire product was basically not usable or only half usable, despite the stressful situation, you have to stay calm and you have to also not point fingers at anybody, not put any blame on anybody 'cause obviously, when you're debugging in the moment and everything, it's like, "Oh, well this file was poorly written.
"Why did someone do that? "Maybe the bug's here."
It's very easy to potentially point fingers and blame people.
I didn't wanna do that.
That's just unhealthy in a team in general.
But so, we pair programmed, we documented everything that we were doing, keeping our team in the loop.
At that point, my manager was also in the loop.
We followed the process that we knew to follow.
Unfortunately, we didn't have some sort of playbook to follow line by line for an outage, and this was a lesson that we learned from this.
I'll get into that in a little bit.
But we just documented everything, and after a while, I would say probably after 30 minutes, we decided, with my manager who was chatting with us at this point, to create an official, what's called an OMG at Google, which is basically like an incident report that actually gets flagged at the engineering company levelAnd so, we did that.
We kept the incident report sort of up-to-date.
This kind of flags people who are on call in all of Google Cloud Platform and the rest of the company, and just followed the procedure there.
Eventually, we figured out where the bug was.
Turned out it was something really, really convoluted with Angular, the front end framework.
But that was it.
And then we fixed the bug, we had this OMG, this incident report kind of in progress, we eventually closed it, and everything was done after that.
By the next morning, in the new sort of production release or deployment, the bug was fixed.
Now, as for what we did afterwards, we did something that's very common at Google, which I've continued to do even since I've left Google, and we do it a lot at my current job on AlgoExpert, which is to write a postmortem, which is kind of like a document explaining what happened, detailing the issue, detailing all the steps that were taken to resolve the issue, and most importantly, we answered two questions that I think are crucial to answer after a production outage.
Number one, how did we get lucky?
And this is a good question to answer because it allows you to determine where there are holes or flaws in your general processes and systems.
For us, we got lucky in the sense that I happened to be at the office late and happened to go on the UI and fall on that page.
Nothing in our systems, at that point in time, would have flagged that the page was down, and that was clearly an issue.
We had gotten lucky there that we caught the outage quickly and randomly.
And the lesson from that, the thing that we took away from that, was that we needed end-to-end integration tests.
Like I said, we were a fairly new product at the time.
We didn't have integration tests, but we obviously made it a point to create them after this outage.
That was one of our lessons from the postmortem.
The second question that I really like to answer in postmortems, which we did, was what could we have done better?
The thing that we could have done better there was, and this was more of a preventative measure, was we could have had a written out playbook for how to deal with these kinds of production outages, whom to contact, how to create an incident report 'cause that was the first time we had all done it, or at least me and the engineer pair programming with me.
And so, again, another lesson that we took from that was we need a playbook, and in the couple weeks following the issue, we actually wrote a what do you do if you're at work and there's a production outage, or what do you do when there's a production outage in general and you have to fix it?
So, that's how we handled that incident.
That's how I've kind of handled most of the incidents that I've faced since then.
And yeah, that's it.