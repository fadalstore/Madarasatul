# GitHub Pages-ga sida loo deploy gareeyo (Deployment Guide)

## Tillaabooyinka (Steps):

### 1. Code-ka GitHub-ga soo geli (Push to GitHub):
```bash
git add .
git commit -m "Add GitHub Pages deployment"
git push origin main
```

### 2. GitHub Pages Settings-ka ku dhaq:
- GitHub repository-gaaga tag
- Settings-ka tag
- Pages-ka hoose ka raadi
- Source: "GitHub Actions" dooro
- Workflow file-ka waa la sameeyay (.github/workflows/deploy.yml)

### 3. Deployment-ku dhacaya markii:
- Code cusub GitHub-ga loo diro
- Automatically build oo deploy gareyaa
- Bog-aagu wuxuu noqonayaa: `https://username.github.io/repository-name`

## Files la sameeyay:
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `dist/public/` - Static build files
- `dist/public/.nojekyll` - Jekyll ka hor istaagtid

## Note:
- Masharuucaagu hadda waa static website oo ku shaqayn kara GitHub Pages
- Wax server-side functionality ah ma leh
- WhatsApp integration iyo contact forms-ka way shaqaynayaan

Your website will be available at: `https://yourusername.github.io/your-repo-name`