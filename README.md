# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Email Configuration (EmailJS)

To enable the contact form to send emails to `info@suremsg.in`, follow these steps:

1.  **Create an EmailJS Account**: Sign up at [https://www.emailjs.com/](https://www.emailjs.com/).
2.  **Add Email Service**:
    *   Go to **Email Services** -> **Add New Service**.
    *   Select **SMTP** (or your specific email provider if listed).
    *   Enter the SMTP details for your host (e.g., Hostinger, GoDaddy).
        *   **Host**: e.g., `smtp.hostinger.com` (Check your hosting provider for this)
        *   **Port**: Usually `465` (SSL) or `587` (TLS)
        *   **Username**: `info@suremsg.in`
        *   **Password**: Your email password.
    *   Click **Add Service**.
    *   Copy the **Service ID** (e.g., `service_xyz123`).

3.  **Create Email Template**:
    *   Go to **Email Templates** -> **Create New Template**.
    *   Design your email. Use variables like `{{name}}`, `{{email}}`, `{{company}}`, `{{service}}`, `{{message}}`.
    *   In the **To Email** field (under Settings), enter `info@suremsg.in`.
    *   Save and copy the **Template ID** (e.g., `template_abc456`).

4.  **Get Public Key**:
    *   Go to **Account** -> **API Keys**.
    *   Copy your **Public Key**.

5.  **Configure Environment Variables**:
    *   Create a file named `.env` in the root directory (copy from `.env.example`).
    *   Add your keys:
        ```bash
        VITE_EMAILJS_SERVICE_ID=your_service_id
        VITE_EMAILJS_TEMPLATE_ID=your_template_id
        VITE_EMAILJS_PUBLIC_KEY=your_public_key
        ```
    *   Restart the development server (`npm run dev`) for changes to take effect.
