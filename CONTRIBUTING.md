# Contributing to Laravel Dashboard Builder

Thank you for considering contributing to `manggala/laravel-dashboard-builder`! We welcome contributions from developers of all skill levels.

---

## 🛠️ How to Contribute

### 1. Reporting Bugs
Before creating a bug report, please check existing issues to avoid duplicates. When filing a bug report, please include:
- A clear, descriptive title.
- Steps to reproduce the issue.
- Your Laravel version, PHP version, and Browser/OS details.
- Error logs or stack trace snippets if applicable.

### 2. Suggesting Features
Feature requests are welcome! Please explain:
- Why the feature would be useful to the broader community.
- How you envision the feature working.

### 3. Pull Requests Process
1. Fork the repository and create your feature branch:
   ```bash
   git checkout -b feat/my-awesome-feature
   ```
2. Install dependencies:
   ```bash
   composer install
   npm install
   ```
3. Ensure all tests pass:
   ```bash
   vendor/bin/pest
   ```
4. Format code using Laravel Pint:
   ```bash
   vendor/bin/pint
   ```
5. Ensure frontend builds cleanly:
   ```bash
   npm run build
   ```
6. Commit your changes using descriptive commit messages following Conventional Commits format (`feat: ...`, `fix: ...`, `docs: ...`).
7. Push to your branch and submit a Pull Request to `main`.

---

## 📜 Code Style & Quality Standards

- Follow **PSR-12** coding standards.
- Run `vendor/bin/pint` before committing PHP files.
- Ensure all new public API methods include docblocks.
- Add Pest tests for new features or bug fixes.

---

## ⚖️ Code of Conduct

Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.
