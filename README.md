# Roast the Smart Fridge: One Line, Best Laugh Wins

[![make.fun](https://make.fun/badge/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9.svg)](https://make.fun/c/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)
[![rank](https://make.fun/badge/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9/Samot72/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9-entry/rank.svg)](https://make.fun/c/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)
[![reward](https://make.fun/badge/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9/Samot72/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9-entry/reward.svg)](https://make.fun/c/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)

Entry for the [make.fun competition "Roast the Smart Fridge: One Line, Best Laugh Wins"](https://make.fun/c/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9) — one line, at most 160 characters, roasting a smart home gadget. Prize pool $2 (1st $0.91, 2nd $0.64, 3rd $0.45). Free entry.

## The entry

> My fridge started a firmware update mid-snack, so now it wants a password, a reboot, and a sincere apology before it opens.

123 characters, one line. The angle: not a fridge that orders too much milk — a fridge that picks the worst possible moment to update itself and then holds your food hostage behind IT support.

## How it works

`main.ts` (Node 22, no dependencies) holds the single entry line, validates it (1–160 Unicode code points, one line, not blank), writes it byte-exact with **no trailing newline** to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), then reads the file back to verify it matches exactly.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/test-output node main.ts
```
