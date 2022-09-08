# Monotonic Array

An array is monotonic if it is either monotone increasing or monotone decreasing.

An array `nums` is monotone increasing if for all `i <= j`, `nums[i] <= nums[j]`. An array `nums` is monotone decreasing if for all `i <= j`, `nums[i] >= nums[j]`.

Given an integer array `nums`, return `true` if the given array is monotonic, or `false` otherwise.

Sample input: 
```
nums = [1,2,2,3]
```
Sample output:
```
true
```

Sample input: 
```
nums = [6,5,4,4]
```
Sample output:
```
true
```

Sample input: 
```
nums = [1,3,2]
```
Sample output:
```
false
```