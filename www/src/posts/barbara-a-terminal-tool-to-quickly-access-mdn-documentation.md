# Barbara

As developers, we spend countless hours searching for the right documentation — whether it’s the quirks of `Array.prototype.reduce`, the difference between `localStorage` and `sessionStorage`, or that one CSS property that’s just on the tip of your tongue.
We open tabs, scroll through web pages, and lose minutes navigating documentation sites.

I built Barbara to help speed things up.

## Why I Built Barbara

Like many, I’m on a continuous journey to level up my web development skills. I found myself frequently jumping between my terminal, MDN Web Docs, and code editors. This constant context switching slowed me down more than I’d like to admit.

So I asked myself:

What if finding MDN docs was as fast and seamless as writing a command?

_Barbara_ was born — named after Barbara Gordon, aka Oracle, the ultimate information broker of the DC universe. Barbara brings that same power to your terminal, helping you search and surface the most relevant MDN documentation instantly, without leaving your workflow.

## What Barbara Does

🔍 Fuzzy Search MDN
Search MDN Web Docs by keyword or partial phrase, faster than your browser’s search bar.

⚡ Fast & Lightweight
Skip the browser. No heavy pages, no menus to click through. Just lightning-fast results in your terminal.

🧠 Built for Developers
Designed to integrate seamlessly with CLI tools and your daily workflow. Because every developer deserves their own Oracle.

## Powered by FZF, Supercharged by Rust

Under the hood, Barbara uses FZF (fuzzy finder) for blazing-fast search capabilities, wrapped in a Rust-powered CLI that’s as fast as it is easy to install.

```bash
cargo install barbara
```

> ⚠️ You’ll need FZF installed to use Barbara. If you don’t have it yet, check out FZF’s installation guide.

## Built to Help Me Learn, Shared to Help You Too

[ Barbara ](https://github.com/Ces-D/barbara) started as a personal tool to help me learn faster — to close the gap between I need to look this up and here’s the answer. But it turned out to be too useful not to share.

If you spend time in the terminal and find yourself constantly flipping to MDN, give Barbara a try. I hope it helps you learn faster and code smarter, just like it’s helping me.
