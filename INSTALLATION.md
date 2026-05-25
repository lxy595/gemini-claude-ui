# Detailed Installation Guide 🚀

## Quick Start

Choose your preferred method below:

---

## Method 1: Tampermonkey (Full-Featured) ⭐ Recommended

### Step 1: Install Tampermonkey

**Chrome/Chromium/Edge:**
- Go to [Chrome Web Store - Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobp55f)
- Click "Add to Chrome"
- Confirm permissions

**Firefox:**
- Go to [Firefox Add-ons - Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
- Click "Add to Firefox"
- Confirm permissions

**Other Browsers:**
- Visit [Tampermonkey Official Site](https://www.tampermonkey.net/)
- Choose your browser
- Follow installation instructions

### Step 2: Get the Script

Option A - Direct Installation:
```
1. Right-click this link: gemini-claude-theme.user.js
2. Select "Open Link in New Tab"
3. Tampermonkey will detect it and show installation prompt
4. Click "Install"
```

Option B - Manual Copy:
```
1. Go to: https://github.com/lxy595/gemini-claude-ui/blob/main/gemini-claude-theme.user.js
2. Click "Raw" button
3. Select all (Ctrl+A)
4. Copy (Ctrl+C)
5. Open Tampermonkey Dashboard (icon in toolbar)
6. Click "+" to create new script
7. Delete default content
8. Paste the code
9. Save (Ctrl+S)
```

### Step 3: Verify Installation

1. Go to [gemini.google.com](https://gemini.google.com)
2. You should see the new Claude-like theme
3. If not, try hard refresh: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)

### Manage Your Script

**Enable/Disable:**
- Click Tampermonkey icon → Click script name → Toggle

**Edit:**
- Click Tampermonkey icon → Dashboard
- Click the script name → Edit
- Make changes and Save

**Delete:**
- Click Tampermonkey icon → Dashboard
- Click script name → Delete

---

## Method 2: Stylus (CSS-Only) ⚡ Lightweight

### Step 1: Install Stylus

**Chrome/Chromium/Edge:**
- Go to [Chrome Web Store - Stylus](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobGuerra)
- Click "Add to Chrome"
- Confirm

**Firefox:**
- Go to [Firefox Add-ons - Stylus](https://addons.mozilla.org/en-US/firefox/addon/styl-us/)
- Click "Add to Firefox"
- Confirm

### Step 2: Get the CSS

1. Go to: https://github.com/lxy595/gemini-claude-ui/blob/main/claude-theme.css
2. Click "Raw" button
3. Select all and copy the CSS

### Step 3: Create New Style

1. Click Stylus icon in toolbar
2. Select "Manage styles"
3. Click "Write new style" button
4. In the "Applies to" section:
   - Select "URLs on the domain" from dropdown
   - Enter: `gemini.google.com`
5. Paste the CSS code in the editor
6. Click "Save"

### Step 4: Verify

1. Go to [gemini.google.com](https://gemini.google.com)
2. Theme should be applied
3. Hard refresh if needed

### Manage Your Style

**Enable/Disable:**
- Click Stylus icon → See your style name with toggle switch

**Edit:**
- Click Stylus icon → Manage styles
- Click your style name → Edit
- Make changes and Save

**Delete:**
- Click Stylus icon → Manage styles
- Click your style name → Delete

---

## Method 3: Browser DevTools (Temporary Testing)

⚠️ **Note:** Changes are temporary (lost on page reload)

### Quick Test:

1. Go to [gemini.google.com](https://gemini.google.com)
2. Open DevTools: `F12` or Right-click → "Inspect"
3. Go to "Console" tab
4. Paste this code:

```javascript
fetch('https://raw.githubusercontent.com/lxy595/gemini-claude-ui/main/claude-theme.css')
  .then(r => r.text())
  .then(css => {
    const style = document.createElement('style');
    style.innerHTML = css;
    document.head.appendChild(style);
    console.log('Claude theme applied!');
  });
```

5. Press Enter
6. Theme should apply immediately

---

## Installation Comparison

| Feature | Tampermonkey | Stylus | DevTools |
|---------|--------------|--------|----------|
| **Ease of Use** | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| **Performance** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Permanent** | ✅ | ✅ | ❌ |
| **Customizable** | ✅ | ✅ | ✅ |
| **Interactive Effects** | ✅ | ❌ | ❌ |
| **Lightweight** | ❌ | ✅ | N/A |

**Recommendation:** Use **Tampermonkey** for best experience with all features, or **Stylus** for lightweight CSS-only styling.

---

## Troubleshooting 🔧

### Theme not showing?

**Try these steps in order:**

1. **Hard Refresh**
   - Windows: `Ctrl+F5`
   - Mac: `Cmd+Shift+R`
   - Browser might have cached old version

2. **Check if script is enabled**
   - Tampermonkey: Icon → Dashboard → Script enabled?
   - Stylus: Icon → Style has toggle switch ON?

3. **Verify URL match**
   - Make sure you're on `gemini.google.com`
   - Not `gemini.google.com/app` subsection? Should work too
   - Try exact URL: https://gemini.google.com

4. **Check browser console**
   - Press `F12` → Console tab
   - Any red errors? Screenshot and report

5. **Clear browser cache**
   - Chrome: Settings → Privacy → Clear browsing data
   - Firefox: History → Clear Recent History

6. **Disable conflicting extensions**
   - Try disabling other CSS modification extensions
   - Restart browser

7. **Try alternate method**
   - If Tampermonkey doesn't work, try Stylus
   - If Stylus doesn't work, try Tampermonkey

### Script shows errors in console?

1. Copy the error message
2. Check if it's a known issue: [GitHub Issues](https://github.com/lxy595/gemini-claude-ui/issues)
3. Create new issue with:
   - Error message
   - Browser name and version
   - Installation method used

### Partial styling (some elements not styled)?

1. **Gemini UI updates** - The site structure might have changed
2. **Try both methods** - See if CSS-only works better
3. **Report issue** - Let us know what's not styled

### Want to customize colors?

**For Tampermonkey:**
1. Dashboard → Script → Edit
2. Find the `:root` section
3. Change color values like:
   ```css
   --claude-accent: #0084ff;  /* Change this to your color */
   ```
4. Save

**For Stylus:**
1. Manage styles → Click your style
2. Find `:root` section
3. Change color values
4. Save

---

## Performance Tips ⚡

- **Use Stylus** if you only want CSS changes (lighter)
- **Disable animations** if you want maximum performance:
  - Find `transition:` in CSS
  - Change to `transition: none;`
  - Save

- **Reduce selector scope** if script causes slowdowns:
  - Edit the script
  - Remove unnecessary selectors
  - Save and test

---

## Still Having Issues?

1. **Check FAQ** - See if your issue is listed
2. **Search GitHub Issues** - Someone might have same problem
3. **Create New Issue** - Include:
   - Browser name/version
   - Installation method
   - Steps to reproduce
   - Screenshots (if helpful)
   - Console errors (F12)

---

## Enjoy! 🎉

You're all set! Refresh Gemini and enjoy the Claude-like interface.

Have suggestions? Found bugs? Submit feedback on [GitHub](https://github.com/lxy595/gemini-claude-ui)!