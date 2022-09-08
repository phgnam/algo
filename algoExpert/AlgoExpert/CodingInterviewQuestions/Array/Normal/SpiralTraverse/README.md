# Spiral Traverse

Source: https://leetcode.com/problems/spiral-matrix/

Given an `m x n` `matrix`, return all elements of the `matrix` in spiral order.


Example 1
```
1 > 2 > 3
        v
4 > 5   6
^       v
7 < 8 < 9
```
Sample input: 
```
matrix = [[1,2,3],[4,5,6],[7,8,9]]
```
Sample output:
```
[1,2,3,6,9,8,7,4,5]
```


Example 2
```
1 > 2  > 3  > 4
              v
5 > 6  > 7    8
^             v
9 < 10 < 11 < 12
```
Sample input: 
```
matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
```
Sample output:
```
[1,2,3,4,8,12,11,10,9,5,6,7]
```