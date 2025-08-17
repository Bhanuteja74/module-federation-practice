# Module Federation Practice - TODO

This file tracks my learning and practice steps for Module Federation using Vite and Webpack.  
I will update it as I progress.

---

## 1. Setup
- [x] Create root repo `module-federation-practice`
- [x] Add `.gitignore` (ignore `node_modules`, `dist`, etc.)
- [ ] Create `vite-remote/`, `vite-host/`, `webpack-host/` folders

---

## 2. Vite Remote (Expose Components)
- [x] Initialize Vite project (`vite-remote`)
- [ ] Install dependencies for Module Federation
- [ ] Configure remote to expose a simple component (e.g., `Button`)
- [ ] Run and verify remote builds and exposes component

---

## 3. Vite Host (Consume Remote)
- [ ] Initialize Vite project (`vite-host`)
- [ ] Install dependencies for Module Federation
- [ ] Configure host to consume `vite-remote` component
- [ ] Use exposed component inside host app
- [ ] Verify everything works locally

---

## 4. Webpack Host (Consume Remote)
- [ ] Initialize Webpack project (`webpack-host`)
- [ ] Install dependencies for Module Federation
- [ ] Configure host to consume `vite-remote` component
- [ ] Use exposed component inside webpack app
- [ ] Verify everything works locally

---

## 5. Deployment Practice
- [ ] Deploy `vite-remote` to S3 (or any static hosting)
- [ ] Update host apps to consume from deployed URL
- [ ] Verify remote component loads in host apps

---

## 6. Extras (Optional Ideas)
- [ ] Expose multiple components
- [ ] Try sharing libraries (e.g., React)
- [ ] Add another remote and consume in host
- [ ] Document findings in `README.md`

---
