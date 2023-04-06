# 11 - Hashing

## Prerequisites

### Hashing Function

A function that takes in a specific data type (such as a string or an identifier) and outputs a number. Different inputs *may* have the same output, but a good hashing function attempts to minimize those **hasing collisions** (which is equivalent to maximizing **uniformity**).

### Load Balancer

A type of **reverse proxy** that distributes traffic arcoss servers. Load balancers can be found in many parts of a system, from the DNS layer all the way to the database layer.

## Key Terms

### Consistent Hashing

A type of hasing that miniminzes the number of keys that need to be remapped when a hash table gets resized. It's often used by loead balancers to distribute traffic to servers; it minimizes the number of requests that get forwarded to different servers when new servers are added or when existing servers are brought down.

### Rendezvous Hashing

A type of hasing also coined **highet random weight** hasing. Allows for minimal re-distribution of mappings when a server goes down.

### SHA
Short for "Secure Hash Algorithms", the SHA is a collection of cryptographic hash functions used in the industry. These days, SHA-3 is a popular choice to use in a system.