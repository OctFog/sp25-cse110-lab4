# Part 1 of Lab 4
- CSE 110
- Spring 2025
- Xiaogeng Xu
## 1
```
values added:  20
```

## 2
```
final result:  20
```

## 3
We should **not** use the **var** because even the `result` is defined in the `if` block, it still can be access outside of the `if` block.

## 4
```
values added:  20
```

## 5
An **error**. We use **let** which provide its variable with the block scope, so `result` is not define outside the `if` block.

## 6
An **error** and the crash happens. The **const** prevents the `result` from being reassigned.

## 7
The **crash happens earlier**. If the code is still running there will be an **error**. The **const** variable is accessible in the block, so `result` is no defined outside the `if` block.
