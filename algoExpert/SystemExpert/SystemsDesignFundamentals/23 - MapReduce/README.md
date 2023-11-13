# 23 - MapReduce
"MapReduce is a programming model for processing and generating big data sets with a parallel, distributed algorithm on a cluster."

Does Wikipedia's nebulous definition confuse you? Of course it does. In this video, we'll map out this complex topic and reduce it to clear, easily-understood concepts. See what we did there?  ( ͡~ ͜ʖ ͡°)

## Prerequisites

### File System

An abstraction over storage medium that defines how to manage data. While there exist many different types of file systems, most follow a hiearchical structure that consists of diractories and files, like the **Unix file system**'s structure.

### Idempotent Operation

An operation that has the same ultimate outcome regardless of how many times it's performed. If an operation can be performed multiple times without changing its overall effect, it's idempotent. Operations performed through a **Pub/Sub** messaging system typicallu have to be idempotent, since Pub/Sub systems tend to allow the same messages to be consumed multiple times.

For example, increasing an integer value in a database is *not* an idempotent operation, since repeating this operation will not have the same effect as if it had been performed only once. Conversely, setting a value to "COMPLETE" *is* an idempotent operation, since repeating this operation will always yield the same result: the value will be "COMPLETE".

## Key Terms

### MapReduce

A popular framword for processing very large datasets in a trstributed setting efficiently, quickly, and in a afault-tolerant manner. A MapReduce job is comprised of 3 main steps:
- the Map step, which runs a map function on the arious chunks of the dataset and transforms these chunks into intermediate key-value pairs.
- the Shuffle step, which reorganizes the intermediate key-value pairs such that pairs of the same key are routed to the same machine in the final step.
- the Reduce step, which runs a reduce function on the newly shuffled key-value pairs and transforms them into more meaningful data.

The canonical example of a  MapReduce use case is counting the number of orrcurrences of words in a large text file.

When dealing with a MapReduce labrary, engineers and/or systems administrators only need to worry about the map and reduce functions, as well as their inputs and outputs. All other concerns, includeing the parallelization of tasks and the fault-tolerance of the MapReduce job, are abstracted away and taken care of by the MapReduce implementation.

### Distributed File System

A Distributed File System is an abstraction over a (usually large) cluster of machines that allows them to act like on large file system. The two most popular implementations of a DFS are Google File System (GFS) and the Hadoop Distributed File System (HDFS).

Typically, DFSs take care of the classic availablility and replication guarantees that can be tricky to obtain in a distributed-system setting. The overarching idea is that files are split into chunks of a certain size (4MDB or 64MB, for instance), those chunks are sharded across a large cluster of machines. A central control plane is in charge of deciding where each chunk resides, routing reads to the right nodes, and handling communitation between machines.

Different DFS implementations have slightly different APIs and semantics, but they achieve the same common goal: extremely large-scale persistent storage.

### Hadoop (This is a technology or product that you can use in your systems) 

A popular, open-source framework that supports MapReduce jobs and many other kinds of data-processing pipelines. ITs central components is HDFS (Hadoop Distributed File System), on top of which other technologies have been developed.

Learn more: [https://hadoop.apache.org](https://hadoop.apache.org)