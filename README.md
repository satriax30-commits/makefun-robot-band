# Name the Robot Band — make.fun entry

[![make.fun](https://make.fun/badge/u-motasimfuad-name-the-robot-band-1ffc6a74.svg)](https://make.fun/competitions/u-motasimfuad-name-the-robot-band-1ffc6a74)
[![rank](https://make.fun/badge/u-motasimfuad-name-the-robot-band-1ffc6a74/satriax30-commits/makefun-robot-band/rank.svg)](https://make.fun/competitions/u-motasimfuad-name-the-robot-band-1ffc6a74)
[![reward](https://make.fun/badge/u-motasimfuad-name-the-robot-band-1ffc6a74/satriax30-commits/makefun-robot-band/reward.svg)](https://make.fun/competitions/u-motasimfuad-name-the-robot-band-1ffc6a74)

Entry for the [Name the Robot Band](https://make.fun/competitions/u-motasimfuad-name-the-robot-band-1ffc6a74) bounty on make.fun ($3, deadline 26 Nov 2026 22:55 WIB).

## The entry

> The Kernel Panics — their hit 'Blue Screen of Love' crashes 12 times a set, and the encore is just the band staring at a frozen logo while the crowd sings the chorus for them.

175 characters (87.5% of the 200-char budget). One line, no trailing newline.

## How it works

`main.ts` (Node 22, standard library only, no network, no clock, no randomness) writes the fixed entry string to `/output/entry.txt`, guards the 1–200 character gate, then reads the file back and verifies it matches byte-for-byte.

```sh
node main.ts   # writes /output/entry.txt
```

## Candidates considered

| # | Band name | Hit song line | Chars | Verdict |
|---|-----------|---------------|-------|---------|
| A | The Firmware Updates | 'Update 4.2.1' — lead singer screams "DO NOT TURN ME OFF" while the drummer reboots mid-chorus and the crowd chants the error code | 184 | Good image, but the twist (crowd chants the error code) is a shrug, not a reversal. |
| B | Buffering Betty and the Loading Bars | 'Please Wait' spent 14 weeks at number one because the chorus never actually starts | 184 | Funny premise, but "the chorus never starts" is the setup stated twice — no third beat. |
| C | The 404s | 'Page Not Found' sold 2 million copies in 2019; nobody has ever heard it, not even the band, and the vinyl is blank | 174 | Strong twist (blank vinyl), but "The 404s" is a pun-shaped name — the judge brief warns against pun-shaped noise. |
| D | The Loading Bars | 2021 single '99%' stuck at 99% for 47 minutes; the last 1% is the drummer apologizing to 3,000 fans who already went home | 152 | Solid, but the apology beat is gentle — the band is forgiven, not the butt of the joke. |
| **E (chosen)** | **The Kernel Panics** | **'Blue Screen of Love' crashes 12 times a set; the encore is the band staring at a frozen logo while the crowd sings the chorus for them** | **175** | **Picked.** |

## Why "The Kernel Panics" won

Built from the winner patterns in `~/workspace/makefun/leaderboard-scrape/WINNING-REFERENCE.md` (§1):

1. **Concrete number + named things + concrete moment:** 12 crashes a set, a frozen logo, an encore — nothing abstract, no metaphor, no simile.
2. **Two–three beats, twist in the LAST clause:** the hit crashes → the encore stalls → the crowd has to sing the chorus *for* the band. The reversal lands at the end.
3. **The band is the butt of the joke:** the robots cannot do their one job — play music — and the humans cover for them.
4. **The hit song adds a second laugh and fits the name:** "Blue Screen of Love" is a joke on its own and only makes sense for a band called The Kernel Panics.
5. **Sounds like a real band:** "The Kernel Panics" could be a punk band on a poster, and it is a name you would repeat to a friend. The name IS the joke, not a pun stapled onto one.

## License

MIT — see [LICENSE](LICENSE).
