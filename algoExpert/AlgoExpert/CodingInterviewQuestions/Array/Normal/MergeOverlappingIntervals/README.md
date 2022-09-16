# Merge Overlapping Intervals

Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return *an array of the non-overlapping intervals that cover all the intervals in the input.*

 

**Example 1:**
```
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
```


**Example 2:**
```
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
```


**Constraints:**
- `1 <= intervals.length <= 104`
- `intervals[i].length == 2`
- `0 <= starti <= endi <= 104`

<details>
<summary>Hint 1</summary>
The problem asks you to merge overlapping intervals. How can you determine if two intervals are overlapping?
</details>

<details>
<summary>Hint 2</summary>
Sort the intervals with respect to their starting values. This will allow you to merge all overlapping intervals in a single traversal through the sorted intervals.
</details>

<details>
<summary>Hint 3</summary>
After sorting the intervals with respect to their starting values, traverse them, and at each iteration, compare the start of the next interval to the current interval to look for an overlap. If you find an overlap, mutate the current interval so as to merge the next interval into it.
</details>

<details>
<summary>Optimal Space & Time Complexity</summary>
O(nlog(n)) time | O(n) space - where n is the length of the input array
</details>