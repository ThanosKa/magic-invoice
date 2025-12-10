# Security Policy

## Supported Versions

We actively support security updates for the following versions:

| Version  | Supported          |
| -------- | ------------------ |
| Latest   | :white_check_mark: |
| < Latest | :x:                |

## Reporting a Vulnerability

We take the security of Magic Invoice seriously. If you discover a security vulnerability, please follow these steps:

### How to Report

1. **Email us directly** at `kazakis.th@gmail.com` with the subject line `[SECURITY] [Brief Description]`
2. **Do NOT** open a public GitHub issue for security vulnerabilities
3. Include as much detail as possible:
   - Description of the vulnerability
   - Steps to reproduce (if applicable)
   - Potential impact
   - Suggested fix (if you have one)

### What to Expect

- **Acknowledgment**: We will acknowledge receipt of your report within 48 hours
- **Assessment**: We will assess the vulnerability and determine its severity
- **Timeline**: We aim to provide an initial response within 7 days
- **Updates**: We will keep you informed of our progress
- **Resolution**: Once fixed, we will notify you and credit you in our security advisories (if desired)

### Scope

#### In-Scope

- Web application security vulnerabilities
- API endpoint security issues
- Authentication and authorization flaws
- Data handling and privacy concerns
- Cross-site scripting (XSS)
- Cross-site request forgery (CSRF)
- SQL injection (if applicable)
- Server-side request forgery (SSRF)
- Insecure deserialization
- Security misconfigurations

#### Out-of-Scope

- Third-party service vulnerabilities
- Social engineering attacks
- Denial of Service (DoS) attacks
- Physical attacks
- Issues requiring physical access to a user's device
- Issues in outdated browsers or unsupported versions

### Security Best Practices for Contributors

When contributing to this project:

1. **Never commit secrets**: API keys, passwords, tokens, or any sensitive data
2. **Validate input**: Always validate and sanitize user input
3. **Use HTTPS**: Ensure all external requests use HTTPS
4. **Keep dependencies updated**: Regularly update dependencies to patch security vulnerabilities
5. **Follow secure coding practices**: Use parameterized queries, avoid eval(), sanitize output
6. **Review code**: Have security in mind when reviewing pull requests

### Disclosure Policy

- We follow responsible disclosure practices
- Vulnerabilities will be disclosed publicly after a fix is available
- We will credit security researchers who responsibly disclose vulnerabilities (with permission)

Thank you for helping keep Magic Invoice secure!
