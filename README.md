# Interact API Access

This is a **hypothetical / exploratory approach** and should be treated as such until validated as a viable long-term strategy.

## Purpose & scope

- Read-only access to Interact content.
- Intended solely to allow _non-organization / outside agency users_ to view selected intranet content.
- Access will be [restricted by IP address](https://docs.netlify.com/manage/security/secure-access-to-sites/traffic-rules/#overview), aligned with existing intranet IP range.

## Application & hosting

- Nuxt 4 application.
- Source code hosted in GitHub.
- Application hosted on Netlify.

## Interact API access

- Integration uses the [Interact API](https://developer.interactsoftware.com/reference) (Authentication, Search, Pages, People, Assets, MandatoryReads as an initial scope).
- Authentication is via a **single, locked-down Interact user ([personId](https://developer.interactsoftware.com/reference/tokenpersonid))** using a token.
- Permissions for this user will be explicitly limited and assigned separately.
- Single Interact tenant assumed.

## Security & authentication model

- No end-user login or identity schema.
- All visitors effectively access content as the same limited Interact user.
- API token stored as **Netlify environment variables**.
- All Interact API calls occur **server-side only** (no direct browser access).

## IP restriction

- Access to the site restricted using **Netlify Firewall traffic rules**, applying the same IP ranges currently used for the intranet.
- This IP-based restriction is assumed to be the primary access control mechanism and is expected to be long-term.
- Out-of-range access behavior will follow Netlify’s default firewall handling unless otherwise configured.

## Data handling & caching

- No persistent storage of Interact data.
- Temporary caching via Netlify (initially ~60 seconds, adjustable as needed).
- No personalization or user-specific content; content is suitable for a broad outside-agency audience.
