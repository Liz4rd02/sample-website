# Sample Doctor Website

Static sample website for a doctor or private clinic. It is designed to work on GitHub Pages without a backend.

## Files

- `index.html`: main website
- `privacy.html`: privacy policy placeholder
- `styles.css`: responsive styling
- `script.js`: mobile menu and footer year
- `assets/logo-placeholder.svg`: replace with the real logo
- `assets/doctor-placeholder.svg`: replace with the real doctor photo

## Customize before launch

Replace all placeholder values:

- `Dr. Name Surname`
- `[specialty]`
- `[Clinic Name]`
- `[Street Address]`, `[City]`, `[Country]`
- phone number, email, WhatsApp link
- MioDottore profile URL
- services, biography, qualifications, registration number, accepted payments, opening hours

## MioDottore

The site gives patients the clinic contact information directly. For online visits, it links to the doctor's official MioDottore profile.

Avoid building a custom appointment form that attempts to send reservations into MioDottore. Medical appointment data is sensitive, and a static GitHub Pages site should not collect or store it directly.

## GitHub Pages

This site can be published from a GitHub repository using GitHub Pages. Put these files in the repository root, then enable Pages from the repository settings.

For a custom domain, configure it in GitHub Pages settings and update the domain DNS records with the domain provider.
