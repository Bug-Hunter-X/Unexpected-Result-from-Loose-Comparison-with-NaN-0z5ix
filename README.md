# Unexpected Result from Loose Comparison with NaN
This example demonstrates a common pitfall in JavaScript: unexpected behavior when using loose comparison (==) with NaN (Not a Number).

## Problem
The `foo` function attempts to handle different input types (null, negative numbers, and positive numbers). However, it fails to correctly handle NaN.  The loose comparison operators (== and !=) do not work as expected with NaN;  NaN does not equal itself, nor is it less than, greater than, or equal to any other number.

## Solution
The solution uses strict equality (===) and explicitly checks for NaN using isNaN(). This approach provides a more robust and predictable way of handling NaN.

## How to reproduce
1. Clone this repository
2. Open `bug.js` in your browser's JavaScript console or run it using Node.js.
3. Observe the unexpected output.