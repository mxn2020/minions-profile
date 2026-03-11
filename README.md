![CI](https://github.com/mxn2020/minions-profile-workspace/actions/workflows/ci.yml/badge.svg) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# minions-profile

**Your source of truth — verified bio claims, portfolio items, and rate cards**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-profile/sdk minions-sdk

# Python
pip install minions-profile

# CLI (global)
npm install -g @minions-profile/cli
```

---

## CLI

```bash
# Show help
profile --help
```

---

## Python SDK

```python
from minions_profile import create_client

client = create_client()
```

---

## Project Structure

```
minions-profile/
  packages/
    core/           # TypeScript core library (@minions-profile/sdk on npm)
    python/         # Python SDK (minions-profile on PyPI)
    cli/            # CLI tool (@minions-profile/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [profile.minions.help](https://profile.minions.help)
- Blog: [profile.minions.blog](https://profile.minions.blog)
- App: [profile.minions.wtf](https://profile.minions.wtf)

---

## License

[MIT](LICENSE)
