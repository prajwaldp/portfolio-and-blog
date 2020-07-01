---
slug: "/longest-increasing-subsequence"
createdOn: "2020-06-26"
updatedOn: "2020-06-26"
title: "Longest Increasing Subsequence"
---

The longest increasing subsequence problem is a popular problem to get
acquanited with dynamic programming. Given a list, the task is to find the
length of the longest increasing subsequence in it (finding the subsequence
itself is a variation, and a harder problem to solve).

Let's solve a problem. We have the following list `A = [1, 9, 2, 8, 3, 7, 4, 6, 6]`.
Dynamic Programming solves a smaller subproblem. What is the longest
subsequence considering only the slice `A[0:1]`. It's 1. The longest subsequence
considering only the slice `A[0:2]`. It's 1. We can just really make two
increasing subsequences, `[1]` and `[9]`, both of length 1.
