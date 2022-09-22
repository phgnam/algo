# Design A Code-Deployment System

https://www.algoexpert.io/systems/workspace/design-a-code-deployment-system

Design a global and fast code-deployment system

*Many systems design questions are intentionally left very vaugue and are literally given in the form of `Design Foobar`. It's your job to ask clarifying questions to better unerstand the system that you have to build.*

*We've laid out some of these questions below; their answers should give you some guidance on the problem. Before looking at them, we encourage you to take few minutes to think about what questions you'd ask in a real interview.*

## Clarifying Questions To Ask

<details>
<summary>Question 1</summary>
<b>Q: What exactly do we mean by a code-deployment system? Are we talking about building, testing, and shipping code?</b>


A: We want to design a system that takes code, builds it into a binary (an opaque blob of data - the complied code), and deploys the result globally in an efficient and scalable way. We dont't need to worry about testing code; let's assume that's already covered.
</details>

<details>
<summary>Question 2</summary>
**Q: What part of the software-development liftcycle, so to speak, are we designing this for? Is this process of buiding and deploying code happening when code is being submitted for code review, when code is being merged into a codebase, or when code is being shipped?**

A: Once code is merged into the trunk or master branch of a central code repository, engineers should be able t o trigger a build and deploy that build(through a UI, which we're not designing). At that point, the code has already been reviewd and is ready to ship. So to clarify, we're not designing the system that handles code being submitted for review or being merged into a master branch - just the system that takes merged code, builds it, and deploys it.
</details>

<details>
<summary>Question 3</summary>
**Q: Are we essentially trying to shop code to production by sending it to, presumably, all of oyr application servers around the world?**

A: Yes, exactly.
</details>

<details>
<summary>Question 4</summary>
**Q: How many machaines are we deploying to? Are they located all over the world?**

A: We want this system to scale massively to hundreds of thousands of machies spread across 5-10 regions throughout the world.
</details>

<details>
<summary>Question 5</summary>
**Q: This sounds like an internal system. Is there any sense of urgency in deploying this code? Can we afford failures in the deploument process? How fast do we want a single deployment to take?**

A: This is an internal system, but we'll want to have decent availability. because many outages are resolved by rolling forward or rolling back buggy code, so this part of the infrestructure may be necessary to avoid certain terrible situations. In terms of failure tolerance, any build should eventually reach a SUCCESS or FAILURE state. Once a binary has been successfully built, it should be shippable to all machines globally within 30 minutes.
</details>

<details>
<summary>Question 6</summary>
**Q: So it sounds like we want our system to be available, but not necessarily highly available, we want a clear end-state for builds, and we want the entire process of building and deploying code to take roughly 30 minutes. Is that correct?**

A: Yes, that's correct.
</details>


<details>
<summary>Question 7</summary>
**Q: How often will we be building and deploying code, how long does it take to build code, and how big can the binaries that we'll be deploying get?**

A: Engineering teams deploy hundreds of services or web applications, thousands of times per day; building code can take up to 15 minutes; and the final binaries can reach sizes of up to 10GB. The fact that we might be dealing with hundreds of different applications shouldn't matter though; you're just designing the build pipeline and deployment system, which are agnostic to the types of applications that are getting deployed.
</details>


<details>
<summary>Question 8</summary>
**Q: When building code, how do we have access to the actual code? Is there some sort of reference that we can use to grab code to build?**

A: Yes; you can assume that you'll be building code from commits that have been merged into a master branch. These commits have SHA identifiers (effectively arbitrary strings) that you can use to download the code that needs to be built.
</details>
