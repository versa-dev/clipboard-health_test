# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

### **I made the following changes to the original code:**

1. Declared candidate with a default value of `TRIVIAL_PARTITION_KEY` to remove the redundant if-else statements for checking if candidate has a value.

2. Combined the two if statements that check for the existence of event and its partitionKey property into a single if-else statement to make the code more concise and easier to follow.

3. Moved the check for the type of candidate to before the check for its length to make the code flow more naturally.

4. Added test cases to cover all branches of the code, including the
