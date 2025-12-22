# How to Add a New Blog - Step by Step Guide

This guide will help you add a new blog post to the website. Just follow these simple steps!

---

## 📁 Step 1: Open the Blog File

1. Open the file: `app/helpers/blogs.data.tsx`
2. You'll see a list of blogs starting around line 26
3. Each blog is wrapped in curly braces `{ }` and separated by commas

---

## 📝 Step 2: Find an Existing Blog to Copy

1. Scroll down to find any existing blog (they start with `id: "1"`, `id: "2"`, etc.)
2. Find a blog that has a similar structure to what you want
3. **Select and copy** the entire blog entry (from the opening `{` to the closing `},`)

**Tip:** Blog 1 is usually the simplest to copy from.

---

## ✏️ Step 3: Add Your New Blog

1. Scroll to the end of the `allBlogs` list (around line 980)
2. You'll see the last blog ends with `},` followed by `];`
3. **Paste** your copied blog right before the closing `];`
4. Make sure there's a comma after the previous blog and after your new blog

**Example:**

```
  },
  {  // <-- Your new blog goes here
    id: "7",
    ...
  },  // <-- Make sure there's a comma here
];  // <-- This should be at the end
```

---

## 🔄 Step 4: Replace the Content

Now replace the text in your new blog entry. Here's what to change:

### A. Blog ID (First Line)

Find:

```
id: "1",
```

Change to the next number:

```
id: "7",  // Use the next available number
```

### B. Title (Lines 2-3)

Find:

```
title: "Choosing the Best CFD Software for Engineering...",
```

Replace with your blog title:

```
title: "Your Blog Title Here",
```

### C. SEO Title (Lines 4-5)

Find:

```
seoTitle: "Choosing the Best CFD Software for Engineering...",
```

Replace with the same title (or a longer version):

```
seoTitle: "Your Blog Title Here",
```

### D. Description (Lines 6-7)

Find:

```
description: "Discover how FEA and CFD transform...",
```

Replace with a short description (1-2 sentences):

```
description: "Your blog description here. This appears on the blog listing page.",
```

### E. Image Path (Line 8)

Find:

```
image: "/images/blogs/item1/main-image.webp",
```

Change `item1` to your item number:

```
image: "/images/blogs/item7/main-image.webp",
```

### F. Author Name (Line 10)

Find:

```
name: "Mohsin Ali",
```

Replace with the author's name:

```
name: "Author Name Here",
```

### G. Author Avatar (Line 11)

Find:

```
avatar: "/images/blogs/author-avatar.webp",
```

You can either:

- Use the default: `"/images/blogs/default-avatar.webp"`
- Or use a specific image: `"/images/blogs/item7/user-image.webp"`

### H. Date (Line 13)

Find:

```
date: "July 12, 2025",
```

Replace with your blog's publication date:

```
date: "January 15, 2025",
```

### I. Link (Line 14)

Find:

```
link: "/blogs/choosing-the-best-cfd-software-for-engineering...",
```

Replace with a URL-friendly version of your title:

- Make it all lowercase
- Replace spaces with hyphens (-)
- Remove special characters
- Example: "CFD Analysis Guide" becomes "cfd-analysis-guide"

```
link: "/blogs/your-blog-title-in-url-format",
```

### J. Categories (Line 15)

Find:

```
categories: ["1"], // Aerospace & Defense
```

Replace with category numbers. You can use one or multiple:

- `["1"]` = Aerospace & Defense
- `["2"]` = Automotive & Transportation
- `["3"]` = Energy
- `["4"]` = Consumer Products
- `["5"]` = Machinery & Robotics
- `["6"]` = Manufacturing
- `["7"]` = Marine
- `["8"]` = Medical

For multiple categories: `["1", "6"]` (Aerospace & Defense, Manufacturing)

### K. Introduction Section (Lines 16-30)

Find the section that starts with:

```
introduction: (
  <>
    <p>
      In modern engineering...
    </p>
    <p>
      From improving...
    </p>
  </>
),
```

Replace the text inside the `<p>` tags with your introduction paragraphs.

**Important:**

- Keep the structure exactly the same
- Only change the text inside the `<p>` tags
- You can add or remove `<p>` sections as needed
- Don't delete the `<>`, `</>`, `<p>`, or `</p>` tags

### L. Sections (Lines 31-172)

Each blog has multiple sections. For each section:

1. **Section Title** - Find `title: "Section Title Here",` and replace the text
2. **Section Content** - Find the paragraphs and replace the text inside `<p>` tags

**You can:**

- Change existing sections
- Add new sections by copying a section block
- Remove sections by deleting the entire section (from `{` to `},`)

**Common section types:**

- "What Is..." (Explanations)
- "Why..." (Benefits)
- "How to..." (Instructions)
- "Conclusion" (Summary)

---

## 🖼️ Step 5: Add Your Images

1. Go to the folder: `public/images/blogs/`
2. Create a new folder named `item7` (or your item number)
3. Add your images:
   - **main-image.webp** - The main blog image (required)
   - **user-image.webp** - Author photo (optional, can use default-avatar.webp)
   - **content-image.webp** - Optional, for use in content sections

**Image Tips:**

- Use `.webp` format for best quality
- Name them exactly as shown above
- If you use content images in your sections, update those paths too

### How to Update Image Paths in Content Sections:

If you added content images, find lines like:

```
src="/images/blogs/item1/main-image.webp"
```

Change `item1` to your item number:

```
src="/images/blogs/item7/main-image.webp"
```

---

## ✅ Step 6: Check Your Work

Make sure you've:

- ✅ Changed the `id` to a new number
- ✅ Updated the `title` and `seoTitle`
- ✅ Updated the `description`
- ✅ Changed image paths from `item1` to your item number (e.g., `item7`)
- ✅ Updated the `author` name
- ✅ Updated the `date`
- ✅ Created a URL-friendly `link`
- ✅ Selected the right `categories`
- ✅ Replaced all text in `introduction` and `sections`
- ✅ Added images to the `public/images/blogs/item7/` folder
- ✅ Made sure there's a comma after your blog entry

---

## 🎯 Quick Reference: What Each Field Does

| Field           | Where It Appears             | Example                               |
| --------------- | ---------------------------- | ------------------------------------- |
| `id`            | Internal reference           | `"7"`                                 |
| `title`         | Blog listing and detail page | "CFD Analysis Guide"                  |
| `seoTitle`      | Browser tab, search engines  | Same as title or longer               |
| `description`   | Blog listing page            | Short 1-2 sentence summary            |
| `image`         | Main image on blog listing   | `/images/blogs/item7/main-image.webp` |
| `author.name`   | Author name on blog page     | "John Smith"                          |
| `author.avatar` | Author photo                 | `/images/blogs/item7/user-image.webp` |
| `date`          | Publication date             | "January 15, 2025"                    |
| `link`          | Website URL                  | `/blogs/cfd-analysis-guide`           |
| `categories`    | Blog categories              | `["1", "6"]`                          |
| `introduction`  | First section on blog page   | Opening paragraphs                    |
| `sections`      | Main content sections        | Body of the blog                      |

---

## 📋 Blog Categories Reference

Use these numbers for categories:

- `"1"` = Aerospace & Defense
- `"2"` = Automotive & Transportation
- `"3"` = Energy
- `"4"` = Consumer Products
- `"5"` = Machinery & Robotics
- `"6"` = Manufacturing
- `"7"` = Marine
- `"8"` = Medical

**For multiple categories:** Use: `["1", "6"]` (no spaces needed)

---

## ⚠️ Important Notes

1. **Don't delete code words** - Keep all the structure like `{`, `}`, `<>`, `</>`, `<p>`, `</p>`, etc.
2. **Keep commas** - Make sure there's a comma after each blog entry
3. **Image folder names** - Must match your item number (e.g., `item7`)
4. **Link format** - Use lowercase, hyphens instead of spaces, no special characters
5. **Save the file** - Always save after making changes (Ctrl+S)

---

## 🆘 Troubleshooting

**Problem:** Blog doesn't appear on the website

- ✅ Check that you added a comma after your blog entry
- ✅ Check that the `id` is unique (not used by another blog)
- ✅ Make sure the file saved properly

**Problem:** Images don't show

- ✅ Check image file names match exactly (case-sensitive)
- ✅ Check folder name matches (e.g., `item7`)
- ✅ Check image paths in the file match your folder name

**Problem:** Website shows an error

- ✅ Check for missing commas between blog entries
- ✅ Check that all quotes are closed properly
- ✅ Make sure you didn't accidentally delete any code structure

**Problem:** Categories don't show

- ✅ Check that category numbers are in quotes: `["1"]` not `[1]`
- ✅ Check that category IDs exist (1-8)

---

## 💡 Tips for Writing Blog Content

1. **Introduction** - Write 2-3 paragraphs that introduce the topic
2. **Sections** - Break your content into clear sections with titles
3. **Paragraphs** - Use multiple short paragraphs instead of one long one
4. **Lists** - You can use bullet points (they'll be formatted automatically)
5. **Conclusion** - Always end with a conclusion section

---

## 📞 Need Help?

If you get stuck:

1. Compare your blog with an existing working blog
2. Make sure everything matches the format
3. Check that you haven't accidentally deleted any code structure
4. Verify all commas and quotes are in place

---

**That's it!** Your new blog should now appear on the website. 🎉
