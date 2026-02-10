# 📋 File Structure & Descriptions

Here's what each file in your project does:

## 📄 Root Files

### `index.html`
The **main page** your boyfriend will see first. Contains:
- The blurred background
- The animated envelope with popping letter
- The Polaroid photo frame with upload button
- All the "Open When..." links

**What to edit:**
- Main message text
- Signature line
- Polaroid caption
- Add/remove/change link emojis

---

### `styles.css`
**All styling for the main page** - Controls how everything looks:
- Background effects (blur, gradient)
- Envelope and letter animations
- Polaroid frame design
- Pink accent colors
- Responsive sizing for mobile

**What to edit:**
- Colors (#ff1493 for pink)
- Image URL for background
- Size of elements
- Animation speeds

---

### `script.js`
**Functionality for the main page** - Makes things interactive:
- Photo upload to Polaroid
- Animation effects
- Click interactions

**What to edit:**
- Photo handling behavior
- Add new interactive features

---

### `styles-letter.css`
**Styling for the letter pages** - How each letter looks:
- Letter paper styling
- Back button
- Text formatting
- Letter page animations

**What to edit:**
- Letter page colors
- Font sizes
- Letter layout

---

## 📁 `letters/` Folder

Contains all the love letters. Each is a complete HTML page.

### `sad.html` 💙
**"Open When You're Sad"**
- Offers comfort and reassurance
- Reminds him you're there for him

### `tired.html` 😴
**"Open When You're Tired"**
- Tells him it's okay to rest
- Reaffirms his worth beyond productivity

### `arguing.html` 💔
**"Open When We're Arguing"**
- Emphasizes unity and teamwork
- Focuses on communication and love

### `missingme.html` 💭
**"Open When You Miss Me"**
- Celebrates long-distance or missing each other
- Turns distance into something beautiful

### `doubting.html` 🤔
**"Open When You're Doubting Yourself"**
- Reinforces your belief in him
- Builds confidence

### `loveletter.html` 💌
**"Open When You Need Reminding How Much I Love You"**
- Ultimate love letter
- Expresses deep affection

### `TEMPLATE.html`
**Blank template** for creating additional letters:
- Copy this file
- Rename it
- Replace template text with your message

---

## 📚 Documentation Files

### `README.md`
**Overview of the entire project:**
- Feature list
- How to use it
- Deployment instructions
- Browser compatibility
- Quick troubleshooting

### `CUSTOMIZATION.md`
**Detailed customization guide:**
- Step-by-step instructions for every change
- Color changing
- Image uploading
- Font customization
- Code examples
- Troubleshooting

### `FILE_LIST.md` (this file)
**Description of what each file does:**
- Which files to edit for what changes
- What each file contains
- File relationships

---

## How They Work Together

```
User opens index.html in browser
    ↓
Loads styles.css (makes it look beautiful)
Loads script.js (enables photo upload)
Loads background image (from styles.css URL)
    ↓
User sees:
  - Blurred background image
  - Animated envelope
  - Polaroid photo frame
  - "Open When..." links
    ↓
User uploads photo → script.js handles it
    ↓
User clicks a link → Opens letters/[name].html
    ↓
That letter loads styles-letter.css
User reads the letter
    ↓
User clicks Back button → Returns to index.html
```

---

## What to Edit for Common Tasks

| Task | File(s) |
|------|---------|
| Change letter content | `letters/sad.html`, `letters/tired.html`, etc. |
| Change colors | `styles.css` |
| Change background image | `styles.css` |
| Change main page message | `index.html` |
| Change fonts | `styles.css` or `styles-letter.css` |
| Change letter page layout | `styles-letter.css` |
| Add photo functionality | (Already done in `script.js`) |
| Change animations | `styles.css` or `styles-letter.css` |
| Add more letters | Create new HTML in `letters/` folder + edit `index.html` |

---

## Important: File Relationships

⚠️ **Keep these connections working:**

1. **Links must match file names:**
   - In `index.html`: `href="letters/sad.html"`
   - Must have file: `letters/sad.html` ✓

2. **CSS links must be correct:**
   - In `index.html`: `<link rel="stylesheet" href="styles.css">`
   - Must have file: `styles.css` ✓
   - In `letters/*.html`: `<link rel="stylesheet" href="../styles-letter.css">`
   - Must have file: `styles-letter.css` in parent folder ✓

3. **JavaScript must be linked:**
   - In `index.html`: `<script src="script.js"></script>`
   - Must have file: `script.js` ✓

If you rename or move files, **update all the links** or things will break!

---

## File Naming Important! ⚠️

**Good file names:**
- `sad.html` ✓
- `styles.css` ✓
- `index.html` ✓

**Don't do this:**
- `SAD.HTML` - Different from `sad.html` on some systems
- `styles-main.css` - Won't link properly unless you update HTML
- `My Letter.html` - Spaces can cause problems

---

## Size & Organization

Current total files: **16**
- 1 main page (`index.html`)
- 6 letter pages
- 1 template
- 2 CSS files
- 1 JavaScript file
- 3 documentation files
- 2 Git files (`.gitignore`, etc.)

This is a lightweight website that loads very fast!

---

## Quick Reference

**Before you start editing:**
1. Read [README.md](README.md) for overview
2. Check [CUSTOMIZATION.md](CUSTOMIZATION.md) for how-to guides
3. Reference this file if confused about file purposes

**Most common edits:**
1. Open `letters/sad.html` → Replace with your message
2. Open `letters/tired.html` → Replace with your message
3. (Repeat for all 6 letters)
4. Open `styles.css` → Change image URL
5. Open `styles.css` → Change colors if desired
6. Open `index.html` → Change signature text if desired
7. Test in browser
8. Deploy to GitHub Pages or hosting

---

## Pro Tips

- **Backup before major changes:** Copy the original files
- **Test locally first:** Open `index.html` in browser before deploying
- **Clear cache often:** Ctrl+F5 or Cmd+Shift+R when testing
- **One change at a time:** Edit one thing, test it, then edit next thing
- **Check browser console:** F12 → Console tab to see errors

---

That's everything! Start with editing the letters, and you're already most of the way there. 💕

Questions? Go to [CUSTOMIZATION.md](CUSTOMIZATION.md) for detailed guides!
