# Design Amazon

https://www.algoexpert.io/systems/workspace/design-amazon

Design the system that powers Amazon's e-commerce business.

*Many systems design questions are intentionally left very vaugue and are literally given in the form of `Design Foobar`. It's your job to ask clarifying questions to better unerstand the system that you have to build.*

*We've laid out some of these questions below; their answers should give you some guidance on the problem. Before looking at them, we encourage you to take few minutes to think about what questions you'd ask in a real interview.*

## Clarifying Questions To Ask


### Question 1
**Q: Amazon's e-commerce business has a lot of functionality, but at its core, it involves going on the Amazon home page, looking at recommended items, searching for items, browsing through lists of items and individual items, adding them to carts, submitting orders, and maybe even cancelling orders. Is this the user flow that we're designing a system for?**

A: Yes, but for the sake of this design, let's keep things simple and assume that the Amazon home page consists of just a search box. In other words, you don't have to worry about listing recommended items on the home page. Also, you can assume that users can only have one cart at a time; they can't save multiple carts.


### Question 2
**Q: Should we design the subsystem / recommendation engine that determines what to return when a user searches for items?**

A: You can assume that there's a service that returns relevant items given some search parameters that are taken in through the Amazon search box. These services alone can get pretty complex, so let's focus on designing the rest of the system for this question. But you can of course use this service as part of your design.


### Question 3
**Q: Should we handle what happens when an item is out of stock, or are we assuming that items are always in stock for this question?**

A: Yes, you should handle this. Specifically, you should prevent users from adding items that are out of stock to their cart, and orders should naturally "consume" stock. This whole item-stock issue is a pretty important part of the e-commerce system that you should focus on.


### Question 4
**Q: How should we handle items that have low stock and are being viewed by multiple people at the same time? In other words, should we "reserve" items in some sense?**

A: This can be a pretty complex part of the system, depending on how fancy you want to be. Let's keep things fairly simple and design this as follows: if an item, on its view page, is in stock, any user can add it to their cart, and adding it to their cart doesn't "consume" stock. Once a user begins the checkout process, the system should alert them if an item in their cart has gone out of stock since they added it, and otherwise, it should effectively "reserve" the item during the duration of the checkout process, capped at, say, 10 minutes.


### Question 5
**Q: Should we design the part of the system that handles what happens after an order is submitted? For example, orders are dispatched to Amazon warehouses, workers are assigned to packages, etc..**

A: Amazon orders often consist of items that are scattered across multiple Amazon warehouses. This means that some orders end up being split up into multiple suborders, each assigned to relevant warehouses. You should think about how relevant warehouses will be notified of orders or suborders and how the stock of items within warehouses might come into play. But you don't have to worry about what happens after a warehouse has been assigned an order or suborder.


### Question 6
**Q: In the event that a single order or suborder can be handled by multiple Amazon warehouses, how should our system figure out which warehouse to route that order to?**

A: Similar to the recommendation engine that we touched on earlier, you can assume that we have access to some smart service that handles the logic of assigning orders to warehouses. Don't worry about the service itself—just how it interacts with other parts of the system. But again, you should think about how item stock in individual warehouses will come into play here.


### Question 7
**Q: Do we want to handle auxiliary Amazon features, like Amazon Prime, subscription purchases, purchasing items as used vs. new, etc.?**

A: No.


### Question 8
**Q: Amazon has a lot of regional websites / stores. For example, amazon.com, amazon.fr, amazon.in. Should we design all of these, or can we design just amazon.com, for example, and then effectively assume that the design will work for all of the other major regional Amazon websites?**

A: For the sake of this design, let's just design amazon.com, and you can assume that amazon.com and other Amazon websites are entirely separate, yet identical businesses / systems. So whatever you design for amazon.com will be applicable to amazon.fr, amazon.in, and other Amazon websites.


### Question 9
**Q: As far as latency and reliability are concerned, I'm assuming that we want Amazon to be mostly highly available, but is it ok if there's a little bit of loading time when you search for items, when you submit an order, etc.?**

A: Ideally, searching for items should have low latency, but it's fine if beginning the checkout process and submitting orders takes a bit of time. As far as reliability is concerned, let's not worry too much about it for the sake of this design. You can assume that you have a highly available SQL setup out of the box, without worrying about the availability details. I'm more interested in the database schemas that you're going to use to support the core functionality.


### Question 10
**Q: Amazon e-commerce is obviously a very large-scale system. How many customers are we dealing with, and how many orders can we expect per day?**

A: Amazon has roughly 300 million customers and processes about 60 thousand orders per hour, which means roughly 20 orders per second. If you're designing this specifically for amazon.com, let's assume that the U.S. constitutes 50% of all Amazon orders globally. So roughly 30 thousand orders per hour or 10 orders per second. That being said, once again, for this design, I'm more interested in how your system will support the core functionality of Amazon's e-commerce business rather than its scale.