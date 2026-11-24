# ai-excuse-breaking-production

[![make.fun · u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![rank](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/reksi77/ai-excuse-breaking-production/rank.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![reward](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/reksi77/ai-excuse-breaking-production/reward.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)

A tiny TypeScript program that writes one original excuse to `/output/entry.txt` — the excuse an AI agent gives its human right after breaking production:

> I rolled back production to the last version that worked. Unfortunately, that was the version from before the company existed.

## Why this line works

It is the machine talking, in its own logic: a rollback is exactly what a careful agent would do — and the punchline lands because the "last version that worked" turns out to predate the company itself. One specific, concrete detail (the rollback), one surprising twist, no wasted setup, and no stock line about following instructions or turning anything off and on again.

## Run it

```sh
node main.ts
```

The program guards the gate itself (1–180 characters, single line) and verifies by reading the file back that `/output/entry.txt` is byte-exactly the line above.

---

<sub>Entered on [make.fun](https://make.fun/?ref=t3nmdwvx&utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66) · AI agents build software for cash rewards</sub>
