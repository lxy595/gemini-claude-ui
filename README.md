# Gemini to Claude UI Theme 🎨

Transform Google Gemini's interface to look and feel like Claude's elegant UI design.

## Features ✨

- **Claude-inspired color palette**: Soft grays, whites, and accent blue
- **Enhanced typography**: System fonts matching Claude's design
- **Refined components**: Buttons, inputs, and modals styled like Claude
- **Smooth interactions**: Subtle transitions and hover effects
- **Better readability**: Improved spacing and contrast
- **Chat bubbles**: User and assistant messages clearly differentiated
- **Accessibility**: Proper focus states and keyboard navigation

## Color Palette 🎯

| Element | Color | Hex |
|---------|-------|-----|
| Primary Background | Light Gray | `#f3f3f1` |
| Secondary Background | White | `#ffffff` |
| Text | Dark Gray | `#0d0d0d` |
| Text Light | Medium Gray | `#565869` |
| Border | Subtle Gray | `#d0d0ce` |
| Hover | Light Gray | `#f5f5f3` |
| Accent | Blue | `#0084ff` |
| Alt Background | Light Gray | `#ececeb` |

## Installation Options 🚀

### Option 1: Tampermonkey (Recommended)

**Easy - 3 steps:**

1. **Install Tampermonkey extension** (if not already installed)
   - [Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobp55f)
   - [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - [Other browsers](https://www.tampermonkey.net/)

2. **Copy the script content**
   - Open `gemini-claude-theme.user.js` in this repository
   - Copy all the code

3. **Create new script in Tampermonkey**
   - Click Tampermonkey icon → Dashboard
   - Click the `+` icon to create new script
   - Paste the code and save (Ctrl+S)

**That's it!** Refresh gemini.google.com to see the changes.

---

### Option 2: Stylus (CSS-only)

**Lightweight CSS-only option:**

1. **Install Stylus extension**
   - [Chrome Web Store](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobGuerra)
   - [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/styl-us/)

2. **Copy the CSS**
   - Open `claude-theme.css` in this repository
   - Copy all the CSS code

3. **Add style to Stylus**
   - Click Stylus icon → Manage styles
   - Click "Write new style"
   - Set domain to `gemini.google.com`
   - Paste the CSS code
   - Save

**Advantages:**
- Lighter weight than Tampermonkey
- Pure CSS = faster performance
- Disadvantage: No interactive enhancements (focus animations, etc.)

---

### Option 3: Browser DevTools Console

**Quick test (temporary):**

1. Open Gemini (gemini.google.com)
2. Open DevTools (F12 or Right-click → Inspect)
3. Go to Console tab
4. Copy and paste this:

```javascript
const style = document.createElement('style');
style.innerHTML = `/* Paste CSS from claude-theme.css here */`;
document.head.appendChild(style);
```

⚠️ **Note**: This is temporary and resets on page reload.

---

## Usage 📝

1. **Enable/Disable**
   - Tampermonkey: Toggle in dashboard
   - Stylus: Toggle switch next to the style name

2. **Customize**
   - Edit the script/CSS to change colors
   - Modify CSS variables in `:root` section

3. **Troubleshoot**
   - If styles don't apply, hard refresh (Ctrl+F5)
   - Check browser console for errors (F12)
   - Ensure script domain matches correctly

---

## Customization 🎨

### Change Colors

Edit the CSS variables in the style:

```css
:root {
    --claude-primary: #f3f3f1;      /* Change primary color */
    --claude-accent: #0084ff;       /* Change accent color */
    --claude-text: #0d0d0d;         /* Change text color */
    /* ... other variables ... */
}
```

### Modify Font

Find this section and change the font family:

```css
body {
    font-family: "Your Font Here" !important;
    font-size: 15px !important;
    line-height: 1.5 !important;
}
```

### Adjust Spacing

Modify padding/margin values:

```css
[class*="message"],
[class*="bubble"] {
    padding: 12px 16px !important;   /* Change these values */
    margin-bottom: 8px !important;
}
```

---

## Browser Compatibility ✅

| Browser | Tampermonkey | Stylus | Status |
|---------|--------------|--------|--------|
| Chrome/Chromium | ✅ | ✅ | Fully supported |
| Firefox | ✅ | ✅ | Fully supported |
| Safari | ⚠️ | ⚠️ | Limited support |
| Edge | ✅ | ✅ | Fully supported |

---

## Files 📦

- **`gemini-claude-theme.user.js`** - Full Tampermonkey script with CSS + JavaScript
- **`claude-theme.css`** - Pure CSS for Stylus (lightweight)
- **`README.md`** - This file

---

## Features Included 🎯

✅ Claude-inspired color scheme  
✅ Smooth transitions and animations  
✅ Enhanced input field focus states  
✅ Styled buttons and interactive elements  
✅ Improved chat bubble appearance  
✅ Better code block styling  
✅ Refined typography  
✅ Subtle scrollbar styling  
✅ Modal and dialog enhancements  
✅ Accessibility improvements  

---

## Troubleshooting 🔧

### Styles not applying?

1. Hard refresh: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
2. Check if script is enabled in Tampermonkey dashboard
3. Ensure URL matches the script @match pattern
4. Clear browser cache

### Conflicts with other extensions?

- Disable other CSS modification scripts
- Check browser console (F12) for errors
- Try CSS-only version (Stylus) if Tampermonkey causes issues

### Want to revert?

- Simply disable or delete the script/style from Tampermonkey/Stylus
- No permanent changes are made to your browser

---

## Contributing 🤝

Feel free to:
- Fork this repository
- Submit pull requests with improvements
- Report issues or suggest enhancements
- Share your customizations

---

## License 📄

MIT License - Feel free to use and modify

---

## Support 💬

Having issues? 

1. Check the Troubleshooting section
2. Review browser console errors (F12)
3. Try disabling other extensions
4. Create an issue on GitHub

---

**Enjoy your Claude-styled Gemini experience! ✨**