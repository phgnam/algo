# Design AlgoExpert

https://www.algoexpert.io/systems/workspace/design-algoexpert

*Many systems design questions are intentionally left very vaugue and are literally given in the form of `Design Foobar`. It's your job to ask clarifying questions to better unerstand the system that you have to build.*

*We've laid out some of these questions below; their answers should give you some guidance on the problem. Before looking at them, we encourage you to take few minutes to think about what questions you'd ask in a real interview.*

## Clarifying Questions To Ask

<details>
<summary>Question 1</summary>
**Q: Are we designing the entire AlgoExpert platform or just a specific part of it, like the coding workspace?**

A:  Since we only have about 45 minutes, you should just design the core user flow of the AlgoExpert platform. The core user flow includes users landing on the home page of the website, going to the questions list, marking questions as complete or in progress, and then writing and running code in various languages for each language. Don't worry about payments or authentication; you can just assume that you have these services working already (by the way, we mainly rely on third-party services here, like Stripe, PayPal, and OAuth2).
</details>


<details>
<summary>Question 2</summary>
**Q: AlgoExpert doesn't seem like a system of utmost criticality (like a hospital system or airplane software); are we okay with 2 to 3 nines of availability for the system?**

A: Yes, this seems fine--no need to focus too much on making the system highly available.
</details>


<details>
<summary>Question 3</summary>
**Q: How many customers should we be building this for? Is AlgoExpert's audience global or limited to one country?**

A: AlgoExpert’s website receives hundreds of thousands of users every month, and tens of thousands of users may be on the website at any point in time. We want the website to feel very responsive to people everywhere in the world, and the U.S. and India are the platform's top 2 markets that we especially want to cater to.
</details>


<details>
<summary>Question 4</summary>
**Q: Does AlgoExpert make changes to its content (questions list and question solutions) often?**

A: Yes--every couple of days on average. And we like to have our changes reflected in production globally within the hour.
</details>


<details>
<summary>Question5</summary>
**Q: How much of the code-execution engine behind the coding workspace should we be designing? Do we have to worry about the security aspect of running random user code on our servers?**

A: You can disregard the security aspects of the code-execution engine and just focus on its core functionality--the ability to run code in various languages at any given time with acceptable latency.
</details>


<details>
<summary>Question 6</summary>
**Q: While we'll care about latency across the entire system, the code-execution engine seems like the place where we'll care about it most, since it's very interactive, and it also seems like the toughest part of our system to support low latencies; are we okay with anywhere between 1 and 3 seconds for the average run-code latency?**

A: Yes--this seems reasonable and acceptable from a product point of view.
</details>