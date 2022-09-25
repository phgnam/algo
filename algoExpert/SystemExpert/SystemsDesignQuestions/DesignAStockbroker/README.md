# Design A Stockbroker

https://www.algoexpert.io/systems/workspace/design-a-stockbroker

Design a stockbroker: a platform that acts as the intermediary between end-customers and some central stock exchange.

*Many systems design questions are intentionally left very vaugue and are literally given in the form of `Design Foobar`. It's your job to ask clarifying questions to better unerstand the system that you have to build.*

*We've laid out some of these questions below; their answers should give you some guidance on the problem. Before looking at them, we encourage you to take few minutes to think about what questions you'd ask in a real interview.*

## Clarifying Questions To Ask


### Question 1
**Q: What do we mean exactly by a stock broker? Is this something like Robinhood or Etrade?**

A: Yes, exactly.


### Question 2
**Q: What is the platform supposed to support exactly? Are we just supporting the ability for customers to buy and sell stocks, or are we supporting more? For instance, are we allowing other types of securities like options and futures to be traded on our platform? Are we supporting special types of orders like limit orders and stop losses?**

A: We're only supporting market orders on stocks in this design. A market order means that, given a placed order to buy or sell a stock, we should try to execute the order as soon as possible regardless of the stock price. We also aren't designing any “margin” system, so the available balance is the source of truth for what can be bought.


### Question 3
**Q: Are we designing any of the auxiliary aspects of the stock brokerage, like depositing and withdrawing funds, downloading tax documents, etc.?**

A: No -- we're just designing the core trading aspect of the platform.


### Question 4
**Q: Are we just designing the system to place trades? Do we want to support other trade-related operations like getting trade statuses? In other words, how comprehensive should the API that's going to support this platform be?**

A: In essence, you're only designing a system around a PlaceTrade API call from the user, but you should define that API call (inputs, response, etc.).


### Question 5
**Q: Where does a customer's balance live? Is the platform pulling a customer's money directly from their bank account, or are we expecting that customers will have already deposited funds into the platform somehow? In other words, are we ever directly interacting with banks?**

A: No, you won't be interacting with banks. You can assume that customers have already deposited funds into the platform, and you can further assume that you have a SQL table with the balance for each customer who wants to make a trade.


### Question 6
**Q: How many customers are we building this for? And is our customer-base a global one?**

A: Millions of customers, millions of trades a day. Let's assume that our customers are only located in 1 region -- the U.S., for instance.


### Question 7
**Q: What kind of availability are we looking for?**

A: As high as possible, with this kind of service people can lose a lot of money if the system is down even for a few minutes.


### Question 8
**Q: Are we also designing the UI for this platform? What kinds of clients can we assume we have to support?**

A: You don't have to design the UI, but you should design the PlaceTrade API call that a UI would be making to your backend. Clients would be either a mobile app or a webapp.


### Question 9
**Q: So we want to design the API for the actual brokerage, that itself interacts with some central stock exchange on behalf of customers. Does this exchange have an API? If yes, do we know what it looks like, and do we have any guarantees about it?**

A: Yes, the exchange has an API, and your platform's API (the PlaceTrade call) will have to interact with the exchange's API. As far as that's concerned, you can assume that the call to the exchange to make an actual trade will take in a callback (in addition to the info about the trade) that will get executed when that trade completes at the exchange level (meaning, when the trade either gets FILLED or REJECTED, this callback will be executed). You can also assume that the exchange's system is highly available--your callback will always get executed at least once.