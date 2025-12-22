# How to Add a New Project - Step by Step Guide

This guide will help you add a new project to the website without any technical knowledge. Just follow these simple steps!

---

## 📁 Step 1: Find an Existing Project File to Copy

1. Open the folder: `app/helpers/data/projects/`
2. You'll see files named: `project1.tsx`, `project2.tsx`, `project3.tsx`, etc.
3. **Choose any one** (we recommend `project1.tsx` as it's the simplest)
4. **Right-click** on the file and select **"Copy"**

---

## 📝 Step 2: Create Your New Project File

1. Still in the `app/helpers/data/projects/` folder
2. **Right-click** in an empty space and select **"Paste"**
3. You'll see a new file like `project1 - Copy.tsx`
4. **Right-click** on this copied file and select **"Rename"**
5. Name it `project12.tsx` (or the next number if you already have project12)
   - **Important:** Keep the format: `project` + number + `.tsx`
   - Examples: `project12.tsx`, `project13.tsx`, `project14.tsx`

---

## ✏️ Step 3: Replace the Text in Your New File

1. **Double-click** on your new file (e.g., `project12.tsx`) to open it
2. You'll see a lot of text. Don't worry! You only need to change specific parts.

### What to Replace:

#### A. At the Top of the File (Line 3)
Find this line:
```
export const project1: IFullProject = {
```
Change `project1` to your new project number:
```
export const project12: IFullProject = {
```

#### B. Project Title (Line 4)
Find this line:
```
  title: "1U CubeSat Thermal-Mechanical (Coupled) Stress Analysis",
```
Replace the text inside the quotes with your project title:
```
  title: "Your Project Title Here",
```

#### C. SEO Title (Line 5)
Find this line:
```
  seoTitle: "1U CubeSat Thermal-Mechanical (Coupled) Stress Analysis",
```
Replace with the same title (or a longer version for search engines):
```
  seoTitle: "Your Project Title Here",
```

#### D. Description (Lines 6-7)
Find this:
```
  description:
    "A detailed coupled thermal and mechanical stress analysis...",
```
Replace the text inside the quotes with your project description:
```
  description:
    "Your project description here. This appears on the project listing page.",
```

#### E. Image Paths (Lines 8-9)
Find these lines:
```
  image: "/images/projects/item1/main-image.webp",
  thumbnail: "/images/projects/item1/thumbnail.png",
```
Change `item1` to your item number (e.g., `item12`):
```
  image: "/images/projects/item12/main-image.webp",
  thumbnail: "/images/projects/item12/thumbnail.png",
```

#### F. Link (Line 10)
Find this line:
```
  link: "/projects/1u-cubesat-thermal-mechanical-coupled-stress-analysis",
```
Replace with a URL-friendly version of your title:
- Make it all lowercase
- Replace spaces with hyphens (-)
- Remove special characters
- Example: "CFD Analysis of Wind Turbine" becomes "cfd-analysis-of-wind-turbine"
```
  link: "/projects/your-project-title-in-url-format",
```

#### G. Project Summary Section (Lines 11-50)
Find the section that starts with:
```
  summary: [
    {
      title: "Project Summary",
      description: (
```
Inside this section, you'll see paragraphs. Replace all the text inside the `<p>` tags with your project summary.

**Important:** 
- Keep the structure exactly the same
- Only change the text inside the quotes
- Don't delete any `className`, `div`, `p`, or other code words

#### H. Sections (Lines 52-181)
You'll see multiple sections like:
- "Objectives and Approach"
- "Simulation Conditions and Assumptions"
- "Results and Findings"

For each section:
1. Find the `title:` line and replace the title text
2. Find the paragraphs and replace the text inside the quotes
3. Keep all the code structure intact

**Tip:** You can add or remove sections by copying the entire section block (from `{` to `},`)

---

## 🖼️ Step 4: Add Your Images

1. Go to the folder: `public/images/projects/`
2. Create a new folder named `item12` (or your item number)
3. Add your images to this folder:
   - **main-image.webp** - The main project image (required)
   - **thumbnail.png** - Small image for the project list (required)
   - **content-image1.webp** - Optional, for use in content sections
   - **content-image2.webp** - Optional, for use in content sections
   - etc.

**Image Tips:**
- Use `.webp` format for main images (better quality, smaller size)
- Use `.png` format for thumbnails
- Name them exactly as shown above
- If you use content images, update the image paths in your project file

### How to Update Image Paths in Content Sections:

If you added content images, find lines like:
```
src="/images/projects/item1/main-image.webp"
```
Change `item1` to your item number:
```
src="/images/projects/item12/main-image.webp"
```

---

## 📋 Step 5: Register Your New Project

1. Open the file: `app/helpers/projects.data.tsx`
2. At the top (around line 2-12), you'll see import statements like:
```
import { project1 } from "./data/projects/project1";
import { project2 } from "./data/projects/project2";
```
3. Add a new line at the end:
```
import { project12 } from "./data/projects/project12";
```
   (Replace `project12` with your actual project number)

4. Scroll down to find the list (around line 30-42):
```
export const allFullProjects: IFullProject[] = [
  project1,
  project2,
  project3,
  ...
];
```

5. Add your project to the list:
```
export const allFullProjects: IFullProject[] = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10,
  project11,
  project12,  // <-- Add this line
];
```

**Important:** 
- Add it in the order you want it to appear on the website
- Make sure there's a comma after each project except the last one

---

## ✅ Step 6: Check Your Work

1. Make sure you've:
   - ✅ Created the new project file (e.g., `project12.tsx`)
   - ✅ Updated all the text fields
   - ✅ Changed all `item1` to your item number (e.g., `item12`)
   - ✅ Changed `project1` to your project number (e.g., `project12`)
   - ✅ Added images to the `public/images/projects/item12/` folder
   - ✅ Added the import statement in `projects.data.tsx`
   - ✅ Added your project to the `allFullProjects` list

2. Save all files (Ctrl+S or File > Save)

---

## 🎯 Quick Reference: What Each Field Does

| Field | Where It Appears | Example |
|-------|-----------------|---------|
| `title` | Project detail page header | "CFD Analysis of Wind Turbine" |
| `seoTitle` | Browser tab, search engines | Same as title or longer |
| `description` | Project listing page | Short 1-2 sentence summary |
| `image` | Main image on project page | `/images/projects/item12/main-image.webp` |
| `thumbnail` | Small image on project list | `/images/projects/item12/thumbnail.png` |
| `link` | Website URL | `/projects/cfd-analysis-of-wind-turbine` |
| `summary` | First section on project page | Project overview |
| `sections` | Main content sections | Objectives, Results, etc. |

---

## ⚠️ Important Notes

1. **Don't delete any code words** like `className`, `div`, `p`, `span`, `img`, `src`, etc.
2. **Keep the structure** - Only replace text inside quotes
3. **File names must match** - If your file is `project12.tsx`, use `project12` everywhere
4. **Image folder names must match** - If you use `item12`, create folder `item12`
5. **Link format** - Use lowercase, hyphens instead of spaces, no special characters
6. **Always save files** after making changes

---

## 🆘 Troubleshooting

**Problem:** Project doesn't appear on the website
- ✅ Check that you added it to `allFullProjects` list
- ✅ Check that the import statement is correct
- ✅ Make sure file name matches (e.g., `project12.tsx`)

**Problem:** Images don't show
- ✅ Check image file names match exactly (case-sensitive)
- ✅ Check folder name matches (e.g., `item12`)
- ✅ Check image paths in the file match your folder name

**Problem:** Website shows an error
- ✅ Check for typos in file names
- ✅ Make sure all quotes are closed properly
- ✅ Check that commas are in the right places

---

## 📞 Need Help?

If you get stuck:
1. Compare your file with an existing working project file
2. Make sure everything matches the format
3. Check that you haven't accidentally deleted any code

---

**That's it!** Your new project should now appear on the website. 🎉

