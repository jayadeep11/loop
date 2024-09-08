export const problems = [
  {
    "id": 1,
    "title": "Reverse Integer",
    "difficulty": "easy",
    "description": "Given a 32-bit signed integer, reverse digits of an integer.",
    "intuition": "Use arithmetic operations to reverse the digits of the integer."
  },
  {
    "id": 2,
    "title": "Palindrome Number",
    "difficulty": "easy",
    "description": "Determine whether an integer is a palindrome. An integer is a palindrome if it reads the same backward as forward.",
    "intuition": "Reverse the integer and compare it to the original integer."
  },
  {
    "id": 3,
    "title": "Merge Two Sorted Lists",
    "difficulty": "easy",
    "description": "Merge two sorted linked lists and return it as a new sorted list.",
    "intuition": "Use a two-pointer technique to merge the two lists in sorted order."
  },
  {
    "id": 4,
    "title": "Climbing Stairs",
    "difficulty": "easy",
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 step or 2 steps. In how many distinct ways can you climb to the top?",
    "intuition": "Use dynamic programming to count the number of ways to reach the top."
  },
  {
    "id": 5,
    "title": "Single Number",
    "difficulty": "easy",
    "description": "Given a non-empty array of integers, every element appears twice except for one. Find that single one.",
    "intuition": "Use a hash set or XOR operation to find the single number."
  },
  {
    "id": 6,
    "title": "Valid Anagram",
    "difficulty": "easy",
    "description": "Given two strings s and t, return true if t is an anagram of s and false otherwise.",
    "intuition": "Sort both strings and compare them, or use a frequency count."
  },
  {
    "id": 7,
    "title": "Intersection of Two Arrays",
    "difficulty": "easy",
    "description": "Given two arrays, write a function to compute their intersection.",
    "intuition": "Use hash sets to find the common elements between the two arrays."
  },
  {
    "id": 8,
    "title": "Remove Duplicates from Sorted Array",
    "difficulty": "easy",
    "description": "Given a sorted array, remove the duplicates in-place such that each element appears only once and return the new length.",
    "intuition": "Use two pointers to remove duplicates in-place."
  },
  {
    "id": 9,
    "title": "Binary Search",
    "difficulty": "easy",
    "description": "Implement binary search algorithm to find the index of a target value in a sorted array.",
    "intuition": "Use a divide-and-conquer approach to search for the target value."
  },
  {
    "id": 10,
    "title": "Plus One",
    "difficulty": "easy",
    "description": "Given a non-empty array of digits representing a non-negative integer, increment the integer by one and return the new array.",
    "intuition": "Simulate the addition operation on the array."
  },
  {
    "id": 11,
    "title": "3Sum",
    "difficulty": "medium",
    "description": "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
    "intuition": "Use sorting and a two-pointer technique to find all unique triplets."
  },
  {
    "id": 12,
    "title": "Group Anagrams",
    "difficulty": "medium",
    "description": "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
    "intuition": "Use a hash map to group anagrams by their sorted string representation."
  },
  {
    "id": 13,
    "title": "Longest Substring Without Repeating Characters",
    "difficulty": "medium",
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "intuition": "Use a sliding window technique to keep track of unique characters."
  },
  {
    "id": 14,
    "title": "Product of Array Except Self",
    "difficulty": "medium",
    "description": "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
    "intuition": "Use prefix and suffix products to compute the result."
  },
  {
    "id": 15,
    "title": "Encode and Decode Strings",
    "difficulty": "medium",
    "description": "Design an algorithm to encode a list of strings to a single string. Design an algorithm to decode a single string to a list of strings.",
    "intuition": "Use a delimiter to separate the encoded strings and manage encoding/decoding."
  },
  {
    "id": 16,
    "title": "Add Two Numbers",
    "difficulty": "medium",
    "description": "Add two numbers represented by linked lists, where each node contains a single digit, and the digits are stored in reverse order.",
    "intuition": "Simulate the addition operation digit by digit, taking care of carry over."
  },
  {
    "id": 17,
    "title": "Longest Palindromic Substring",
    "difficulty": "medium",
    "description": "Given a string s, return the longest palindromic substring in s.",
    "intuition": "Use dynamic programming or expand around center approach to find the longest palindrome."
  },
  {
    "id": 18,
    "title": "Combination Sum",
    "difficulty": "medium",
    "description": "Given an array of distinct integers candidates and a target integer target, return all unique combinations of candidates where the candidate numbers sum to target.",
    "intuition": "Use backtracking to explore all combinations that sum up to the target."
  },
  {
    "id": 19,
    "title": "Decode Ways",
    "difficulty": "medium",
    "description": "A message containing letters from A-Z can be encoded into numbers using the mapping A = 1, B = 2, ..., Z = 26. Given a string s consisting of digits, return the number of ways to decode it.",
    "intuition": "Use dynamic programming to count the number of decoding ways."
  },
  {
    "id": 20,
    "title": "House Robber",
    "difficulty": "medium",
    "description": "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. You cannot rob two adjacent houses. Return the maximum amount of money you can rob tonight without alerting the police.",
    "intuition": "Use dynamic programming to track the maximum amount of money that can be robbed up to each house."
  },
  {
    "id": 21,
    "title": "N-Queens",
    "difficulty": "hard",
    "description": "Solve the N-Queens puzzle by placing n queens on an n x n chessboard such that no two queens threaten each other.",
    "intuition": "Use backtracking to find all valid arrangements of queens."
  },
  {
    "id": 22,
    "title": "Word Ladder II",
    "difficulty": "hard",
    "description": "Given two words (beginWord and endWord), and a dictionary's word list, find all the shortest transformation sequences from beginWord to endWord.",
    "intuition": "Use BFS to find all shortest paths and backtrack to construct the sequences."
  },
  {
    "id": 23,
    "title": "Trapping Rain Water",
    "difficulty": "hard",
    "description": "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    "intuition": "Use two pointers or dynamic programming to calculate trapped water."
  },
  {
    "id": 24,
    "title": "Longest Increasing Subsequence",
    "difficulty": "hard",
    "description": "Given an integer array, find the length of the longest increasing subsequence.",
    "intuition": "Use dynamic programming or binary search to find the subsequence."
  },
  {
    "id": 25,
    "title": "Serialize and Deserialize Binary Tree",
    "difficulty": "hard",
    "description": "Design an algorithm to serialize and deserialize a binary tree.",
    "intuition": "Use preorder traversal for serialization and reconstruction for deserialization."
  },
  {
    "id": 26,
    "title": "Edit Distance",
    "difficulty": "hard",
    "description": "Given two strings word1 and word2, find the minimum number of operations required to convert word1 to word2. Operations are insertions, deletions, or substitutions.",
    "intuition": "Use dynamic programming to find the edit distance."
  },
  {
    "id": 27,
    "title": "Regular Expression Matching",
    "difficulty": "hard",
    "description": "Given a string s and a string p, implement regular expression matching with support for '.' and '*'.",
    "intuition": "Use dynamic programming to match the string with the pattern."
  },
  {
    "id": 28,
    "title": "Longest Valid Parentheses",
    "difficulty": "hard",
    "description": "Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.",
    "intuition": "Use a stack or dynamic programming to track valid parentheses."
  },
  {
    "id": 29,
    "title": "Maximum Rectangle",
    "difficulty": "hard",
    "description": "Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.",
    "intuition": "Use histogram heights to compute the largest rectangle in each row."
  },
  {
    "id": 30,
    "title": "Median of Two Sorted Arrays",
    "difficulty": "hard",
    "description": "Given two sorted arrays nums1 and nums2 of size m and n respectively, find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).",
    "intuition": "Use binary search to find the median."
  }
]
