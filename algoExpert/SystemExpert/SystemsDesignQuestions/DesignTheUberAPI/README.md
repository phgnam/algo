# Design The Uber API

https://www.algoexpert.io/systems/workspace/design-the-uber-api

*Many systems design questions are intentionally left very vaugue and are literally given in the form of `Design Foobar`. It's your job to ask clarifying questions to better unerstand the system that you have to build.*

*We've laid out some of these questions below; their answers should give you some guidance on the problem. Before looking at them, we encourage you to take few minutes to think about what questions you'd ask in a real interview.*

## Clarifying Questions To Ask


### Question 1

**Q: Uber has a lot of different services: there’s the core ride-hailing Uber service, there’s UberEats, there’s UberPool--are we designing the API for all of these services, or just for one of them?**

A: Let’s just design the core rides API -- not UberEats or UberPool.



### Question 2

**Q: At first thought, it seems like we're going to need both a passenger-facing API and a driver-facing API--does that make sense, and if yes, should we design both?**

A: Yes, that totally makes sense. And yes, let’s design both, starting with the passenger-facing API.



### Question 3

**Q: To make sure we’re on the same page, this is the functionality that I'm envisioning this API will support: A user (a passenger) goes on their phone and hails a ride; they get matched with a driver; then they can track their ride as it’s in progress, until they reach their destination, at which point the ride is complete. Throughout this process, there are a few more features to support, like being able to track where the passenger's driver is before the passenger gets picked up, maybe being able to cancel rides, etc.. Does this capture most of what you had in mind?**

A: Yes, this is precisely what I had in mind. And you can work out the details as you start designing the API.



### Question 4

**Q: Do we need to handle things like creating an Uber account, setting up payment preferences, contacting Uber, etc..? What about things like rating a driver, tipping a driver, etc.?**

A: For now, let’s skip those and really focus on the core taxiing service.



### Question 5

**Q: Just to confirm, you want me to write out function signatures for various API endpoints, including parameters, their types, return values, etc., right?**

A: Yup, exactly.