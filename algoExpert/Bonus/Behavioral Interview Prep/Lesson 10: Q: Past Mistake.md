# Q: Past Mistake


*Describe a time when you made a mistake. How did you deal with the repercussions of the mistake? What lessons did you learn from the mistake?*


Hey, everybody.
Welcome to AlgoExpert.
In this video, we're gonna answer the following behavioral interview question.
Describe a time when you made a mistake, how did you deal with the repercussions of the mistake? What lessons did you learn from the mistake?
So, one mistake that stands out to me is a mistake that I made, I would say about a year ago when I was working on my company, AlgoExpert.
We were only two people at the time, so me and my co-founder.
And just to give you a little bit of context, we've split up our company and our website or product into a bunch of microservices and we can deploy these microservices to production whenever we want.
So we can deploy our user interface separately from every other service.
We can deploy our authentication backend service separately from other services.
And we typically try to deploy all of these services pretty frequently, especially the ones that have frequent changes like our user interface.
But at that time, the day that I made that mistake, that I'm about to tell you, we hadn't deployed the user interface in quite a few days, I would say about a week.
So we had accumulated a lot of changes in our main repository that we had not deployed to production for our user interface.
And one night, it was pretty late at night, I would say like 2:00 AM.
I'm kind of a night owl so I was up pretty late.
My co-founder was asleep and I decided for no real reason other than impatience to deploy our user interface to production.
Now, like I said, we had a lot of changes accumulated and it turned out that we had one change that was kind of masked behind a lot of code changes.
So it wasn't a trivial one-liner.
But we had one change that wasn't compatible with the current state of the backend that was currently in production. And so basically as soon as the deployment went through, I realized that I had broken production. I had broken production at about 2:00 AM and I was in a pretty bad situation.
Because first of all, at the time we were using a custom in-house built deployment system which we're still using, but it was in its infancy back then.
And we didn't have an easy way to revert a deployment, at least for me 'cause I wasn't the one who had written the deployment service.
My co-founder had.
I didn't have like a clear button on the user interface that we were to revert a deployment.
So I couldn't just revert the deployment.
I couldn't just rule forward a user interface fix like in the front end code, because like I hinted at before, we had done a lot of code changes in the past week and there were too many code changes to try to revert and rule forward this fix.
And then I couldn't rule forward a backend fix because I wasn't well versed in our backend code.
I didn't have the backend context, the backend skills to do that.
So basically it was 2:00 AM, I had deployed a bug to production and I couldn't fix it alone.
So I had to wake up my co-founder and he ended up waking up at like 2:00 AM.
We were able to fix the issue.
He was able to roll forward the backend fix and everything ended up fine.
Now this was clearly a mistake.
It wasn't a super costly mistake, but it was a mistake.
Because clearly we didn't want to have this bug in production overnight.
It was the kind of bug that would be bad to have in production overnight.
And I had to wake up my co-founder at 2:00 AM which is obviously not a pleasant experience.
Now as with any mistake that I make in my life, I always treat them as learning opportunities.
So I treated that mistake as a learning opportunity.
And it was actually a very good one because it not only taught me and us, my co-founder as well, a few things not to do but it also exposed a few sort of problems or issues that we had in our general systems and processes.
So the first lesson that I drew from it was just do not deploy something to production, unless it is absolutely necessary or critical at two in the morning or not necessarily at two in the morning but when not many people are awake.
Especially not if you are unable to fix a potential issue that's gonna arise.
But just in the interest of safety, in the spirit of being safer, rather than sorry, don't deploy something at 2:00 AM in the morning when no one's awake.
That was the first lesson.
But the second lesson was, or the second lesson and then I'll move on to some of the issues that we realized we had.
But the second lesson was, don't have code in your main repository that's been pushed to your main branch that cannot be deployed to production without being broken.
If at all possible, do not do that.
And here that was the case, right?
We had UI code that was in our main branch that clearly couldn't be deployed to production without breaking and being incompatible with the backend.
If you can, at all costs, avoid that situation.
Only merge working code that is shippable code in your main branch.
So those were the two main lessons that we drew from that.
And then we also realized, clearly there's a problem in our system.
In a normal situation, I should have been able to revert that deployment easily and that would have prevented basically my needing to wake up my co-founder.
So the next day or the next couple of days, we immediately implemented just a simple button on our custom in house built deployment system on the user interface that we used to deploy our services a button to revert any deployment just at the click of a button.
And that made things a lot easier.
Because in the future, whenever we did find ourselves in a similar-ish situation, although we did avoid deploying things at 2:00 AM, but we were able to revert a deployment super easily just with the click of a button.
So that's a mistake that I made in the past that I've certainly learned from.
It was a really nice mistake in the sense that it was bad enough to where you remember it and you really learn a lot of valuable lessons from it but it wasn't catastrophic to where it just costs you so much.
That's the best kind of mistake and I learned a lot from it.