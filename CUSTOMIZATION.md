# 💝 Customization Guide

## Quick Start

1. **Replace the Letters** - Open each file in `letters/` folder and replace placeholder text with your own message
2. **Add Your Photo** - Open the website and use the "Upload Photo" button
3. **Share the Link** - Deploy to GitHub Pages or any hosting and send him the link!

---

## Detailed Customization

### 📝 Editing Letters

Each letter follows this structure:
- **Title**: Change the `<h1>` with emoji and text
- **Body**: Write your message using `<p>` tags for paragraphs
- **Lists**: Use `<ul>` and `<li>` for bullet points

To edit a letter:
1. Open the file (e.g., `letters/sad.html`)
2. Find the text you want to change
3. Replace it with your own message
4. Save the file

Example of what to replace:
```html
<p>Hi love,</p>

<p>If you're reading this, it means your heart isn't as light as I wish it could always be...</p>
```

Change to:
```html
<p>Hi my love,</p>

<p>I know you're going through a tough time right now...</p>
```

### 🎨 Changing Colors

The website uses two main pink colors:
- `#ff1493` - Hot Pink (borders, buttons, accents)
- `#d63384` - Deep Pink (text headings)

**To change the color scheme:**

1. Open `styles.css`
2. Use Find & Replace (Ctrl+H or Cmd+H):
   - Find: `#ff1493` → Replace with: `#0099ff` (example light blue)
   - Find: `#d63384` → Replace with: `#006699` (example dark blue)
3. Save the file and refresh the browser

**Color Ideas:**
- Romantic Red: `#ff1744` & `#c41c3b`
- Ocean Blue: `#0099ff` & `#006699`
- Purple Romance: `#e91e63` & `#880e4f`
- Garden Green: `#00bfa5` & `#00695c`

### 🖼️ Changing Background Image

**Option 1: Use Online Image**
1. Open `styles.css`
2. Find: `background: linear-gradient(...), url('https://images.unsplash.com/...')`
3. Replace the URL with your image URL

**Option 2: Use Local Image**
1. Create an `images` folder in your project
2. Add your image file (e.g., `background.jpg`)
3. In `styles.css`, change to: `url('./images/background.jpg')`

**Good Image Sources:**
- Unsplash.com - Free high-quality photos
- Pexels.com - Free stock photos
- Your own photos - Most special!

**Image Setting Tips:**
- Best size: ~1600x900 pixels
- Format: JPG or PNG
- Keep file size under 500KB (for faster loading)

### ✏️ Changing Main Page Text

Open `index.html`:

**Change the main message:**
```html
<h1>💗 For You 💗</h1>
<p>Letters for all the moments when you need me most...</p>
```

**Change the signature:**
```html
<p class="signature">With lots of love,<br>Jas</p>
```

**Change Polaroid caption:**
```html
<div class="polaroid-caption">🤍</div>
```

### 🔤 Font and Size Changes

**Change font for all text:**
```css
body {
    font-family: 'Arial', sans-serif;  /* Change to another font */
}
```

**Good Font Options:**
- `'Georgia', serif` - Elegant
- `'Trebuchet MS', sans-serif` - Modern
- `'Comic Sans MS', cursive` - Playful (not recommended)

**Change heading sizes:**

In `styles.css`, find:
```css
.letter-content h1 {
    font-size: 28px;
}
```

Change `28px` to larger or smaller value (try `32px` for bigger).

### 🎭 Emoji Customization

Replace emojis anywhere in the HTML:
- Hearts: 💕 💗 ❤️ 💘 💝
- Stars: ⭐ ✨ 🌟 💫
- Other: 💌 🎀 🌹 🦋 🌈

Example:
```html
<span class="doodle">💕</span>
<!-- Change to: -->
<span class="doodle">✨</span>
```

---

## Adding Extra Letters

Want to add more letters for different occasions?

1. Copy `letters/TEMPLATE.html`
2. Rename it (e.g., `letters/youoverenergy.html`)
3. Edit the title and content
4. Add a link in `index.html`:

```html
<a href="letters/youoverenergy.html" class="letter-link">
    <span class="emoji">🔥</span>
    <span>You Need That Energy</span>
</a>
```

---

## Layout Adjustments

### Change Envelope Size
In `styles.css`:
```css
.letter {
    width: 320px;  /* Make larger: 350px, smaller: 280px */
    padding: 40px 30px;
}
```

### Change Polaroid Size
```css
.polaroid {
    width: 300px;  /* Make bigger: 350px, smaller: 250px */
}
```

### Adjust Letter Page Width
```css
.letter-paper {
    max-width: 600px;  /* Change to 700px for wider */
}
```

---

## Animation Customization

### Speed Up/Slow Down Animations

Find animation timing in `styles.css`:
```css
animation: letterPop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
         /* Change 0.8s: to 0.5s to speed up, 1.2s to slow down */
```

### Remove Background Blur
```css
.background {
    filter: blur(5px);  /* Change to: filter: blur(0px); */
}
```

### Make Blur Stronger
```css
filter: blur(10px);  /* Higher number = more blur */
```

---

## Mobile Customization

The site is already mobile-responsive. To adjust mobile sizes:

Find this in `styles.css`:
```css
@media (max-width: 768px) {
    /* Mobile styles here */
}
```

Adjust the sizes inside for mobile devices.

---

## Advanced Customization

### Change Button Style
```css
.upload-btn {
    background: linear-gradient(135deg, #ff1493, #ff69b4);
    /* Change colors here */
}
```

### Change Letter Paper Color
```css
.letter-paper {
    background: #fffef7;  /* Change to #fff9f0 for warmer tone */
}
```

### Add Border to Letters
```css
.letter-paper {
    border: 3px solid #ff1493;  /* Adds colored border */
}
```

---

## Testing Your Changes

After editing:
1. Save the file
2. Refresh your browser (Ctrl+F5 or Cmd+Shift+R)
3. Check if changes look good
4. Test on mobile devices

---

## Common Issues & Solutions

**Changes not showing?**
- Clear browser cache: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
- Close and reopen the browser
- Make sure you saved the file

**Image not displaying?**
- Check the file path is correct
- Verify image file exists in the folder
- Use PNG or JPG format
- Check file name spelling (case-sensitive on some systems)

**Colors look wrong?**
- Verify hex color codes are correct (start with #)
- Use tools like colorpicker.com to get exact codes
- Test in multiple browsers

**Text looks weird?**
- Check for unclosed HTML tags
- Don't delete parts of the code structure
- Keep the format consistent

---

## Before Sharing

Checklist before sending to your boyfriend:

- [ ] All letters are filled with your own messages
- [ ] Background image is changed to something meaningful
- [ ] Colors match your aesthetic
- [ ] Uploaded a photo to the Polaroid
- [ ] All links work (click each "Open When..." link)
- [ ] No typos or obvious errors
- [ ] Tested on mobile phone
- [ ] Back button works on each letter page

---

## Tips for Best Results

✅ **Do's**
- Make letters personal and authentic
- Use high-quality images
- Test before sharing
- Save backups of your work

❌ **Don'ts**
- Don't use extremely large image files (>1MB)
- Don't make text too small to read
- Don't remove HTML structure
- Don't write novels (keep letters 2-4 paragraphs)

---

## Need Help?

- Check the [FILE_LIST.md](FILE_LIST.md) to understand what each file does
- Read the code comments (text after `<!--` and before `-->`)
- Start with one small change and test it
- Use browser's Developer Tools (F12) to debug issues

---

Good luck making your special website! 💕
