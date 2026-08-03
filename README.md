# espielia

Portfolio personal de Elia Espinosa — Diseñadora UX/UI y Gráfica.

Sitio en producción: https://espielia.com

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS + shadcn/ui
- React Router (rutas: `/`, `/project/:id`)
- next-themes (dark/light)
- Framer Motion

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Genera `dist/` (HTML/JS/CSS estáticos).

## Deploy

```bash
rsync -avz --delete \
  --exclude='.htaccess' \
  --exclude='google040e314c829f5e76.html' \
  --exclude='.well-known' \
  --exclude='webmail' \
  dist/ root@93.93.112.18:/var/www/vhosts/espielia.com/httpdocs/
ssh root@93.93.112.18 "chown -R espielia.com_hg2bm44fetr:psacln /var/www/vhosts/espielia.com/httpdocs/"
```
