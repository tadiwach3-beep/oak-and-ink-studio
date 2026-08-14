# oak-and-ink-studio

Edit this for me
"<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Business Portfolio Engine - 2025 Trends</title>
    <link href="https://fonts.googleapis.com/css2?family=Young+Serif&display=swap" rel="stylesheet">
    <style>
        :root {
            --metallic-gradient: linear-gradient(45deg, #c0c0c0, #ffd700, #c0c0c0);
            --neon-glow: #00ffcc;
            --dark-bg: #121212;
            --light-text: #ffffff;
            --grain-texture: url('https://img.freepik.com/premium-vector/black-halftone-dot-grain-texture-pixel-popart-abstract-pattern-background_470367-8417.jpg');
        }

        body {
            font-family: 'Young Serif', serif;
            background: var(--grain-texture);
            background-size: cover;
            color: var(--light-text);
            margin: 0;
            padding: 0;
            min-height: 100vh;
            transition: background 0.3s ease;
        }

        @media (prefers-color-scheme: light) {
            body {
                background-color: #ffffff;
                color: #000000;
            }
        }

        .dark-mode-toggle {
            position: fixed;
            top: 10px;
            right: 10px;
            cursor: pointer;
            z-index: 1000;
        }

        h1, h2 {
            font-size: 3rem;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin: 0;
        }

        @keyframes neon-glow {
            0% { text-shadow: 0 0 5px var(--neon-glow), 0 0 10px var(--neon-glow); }
            50% { text-shadow: 0 0 20px var(--neon-glow), 0 0 30px var(--neon-glow); }
            100% { text-shadow: 0 0 5px var(--neon-glow), 0 0 10px var(--neon-glow); }
        }

        .neon {
            animation: neon-glow 1.5s ease-in-out infinite alternate;
        }

        .hero {
            background: var(--metallic-gradient);
            padding: 100px 20px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .hero img {
            width: 80%;
            max-width: 800px;
            border-radius: 50%;
            filter: drop-shadow(0 0 20px var(--neon-glow)) pixelate(2px);
            animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0); }
        }

        .bento-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            padding: 40px 20px;
        }

        .card {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 20px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .card:hover {
            transform: scale(1.05);
            box-shadow: 0 0 20px var(--neon-glow);
        }

        .card img {
            width: 100%;
            border-radius: 10px;
            filter: contrast(1.2) brightness(1.1);
        }

        /* Updated Contact Section: Responsive, Trend-Aligned */
        #contact {
            padding: 40px 20px;
            background: var(--metallic-gradient);
            text-align: center;
        }

        #contact h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
        }

        .contact-form {
            display: flex;
            flex-direction: column;
            gap: 15px;
            max-width: 500px;
            margin: 0 auto;
            padding: 20px;
            background: rgba(18, 18, 18, 0.8); /* Dark mode with grain overlay */
            border-radius: 15px; /* Fluid forms */
            box-shadow: 0 0 15px var(--neon-glow); /* Neon nostalgia */
        }

        .contact-form input,
        .contact-form textarea {
            padding: 12px;
            border: 2px solid transparent;
            border-radius: 10px;
            font-family: 'Young Serif', serif;
            background: rgba(255, 255, 255, 0.1);
            color: var(--light-text);
            transition: border 0.3s ease, transform 0.3s ease;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
            border: 2px solid var(--neon-glow);
            transform: scale(1.02); /* Fluid animation */
            outline: none;
        }

        .contact-form textarea {
            min-height: 120px;
            resize: vertical;
        }

        .contact-form button {
            padding: 12px;
            border: none;
            border-radius: 10px;
            background: var(--metallic-gradient);
            color: var(--light-text);
            font-size: 1.2rem;
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .contact-form button:hover {
            transform: scale(1.05);
            box-shadow: 0 0 15px var(--neon-glow);
        }

        .form-message {
            display: none;
            color: var(--neon-glow);
            font-size: 1rem;
            margin-top: 10px;
        }

        /* Responsive Design */
        @media (max-width: 600px) {
            #contact {
                padding: 20px;
            }

            .contact-form {
                max-width: 100%;
                padding: 15px;
            }

            h1, h2 {
                font-size: 2rem;
            }

            .contact-form input,
            .contact-form textarea,
            .contact-form button {
                font-size: 1rem;
                padding: 10px;
            }
        }

        .pixel-glitch {
            image-rendering: pixelated;
        }
    </style>
</head>
<body>
    <div class="dark-mode-toggle">
        <button onclick="document.body.classList.toggle('light-mode')">Toggle Dark Mode</button>
    </div>

    <header class="hero neon">
        <h1>Forge Your Future</h1>
        <p>Bold minimalism meets neon nostalgia in our 2025 portfolio.</p>
        <img src="https://digitalsynopsis.com/wp-content/uploads/2025/02/top-graphic-design-trends-2025-textured-grains.jpg" alt="Hyper-realistic 3D Hero" class="pixel-glitch">
    </header>

    <section id="services" class="bento-grid">
        <div class="card">
            <img src="https://images.squarespace-cdn.com/content/v1/565f2ba1e4b07318860401cc/cbde4120-43be-466f-afb1-15c9512f0d70/15+Trends+in+Graphic+Design+for+2025-Philip+VanDusen.02-fluid+forms.jpeg" alt="Service Illustration 1" class="pixel-glitch">
            <h2>Tech Consulting</h2>
            <p>Streamline your operations with AI-driven solutions.</p>
        </div>
        <div class="card">
            <img src="https://www.thelogocreative.co.uk/wp-content/uploads/Graphic-Design-Trend-2025-Maximalism-is-Reshaping-Graphic-Design-650x406.jpg" alt="Service Illustration 2">
            <h2>Digital Strategy</h2>
            <p>Maximalist approaches for bold market impact.</p>
        </div>
        <div class="card">
            <img src="https://www.sivadesigner.in/blog/assets/uploads/graphic-design-trends-2025-retro-futurism-maximalist.webp" alt="Service Illustration 3">
            <h2>Innovation Labs</h2>
            <p>Fluid forms of creativity for future-proofing.</p>
        </div>
    </section>

    <section id="case-studies" class="bento-grid">
        <div class="card">
            <img src="https://magichour.ai/payload/api/media/file/AI-art-styles-hero.jpg" alt="Case Study 1" class="pixel-glitch">
            <h2>Project Alpha</h2>
            <p>Problem: Outdated systems. Solution: AI integration. Impact: 50% efficiency boost.</p>
        </div>
        <div class="card">
            <img src="https://cyberraiden.wordpress.com/wp-content/uploads/2025/08/sapphire-crystal-elegance_simple_compose_01k2z86z6y.jpg" alt="Case Study 2">
            <h2>Project Beta</h2>
            <p>Neon nostalgia revamp increased engagement by 200%.</p>
        </div>
        <div class="card">
            <img src="https://i.ytimg.com/vi/aR3S-WKe0xM/maxresdefault.jpg" alt="Case Study 3">
            <h2>Project Gamma</h2>
            <p>Metallic designs drove viral growth.</p>
        </div>
    </section>

    <section id="about" style="padding: 40px; text-align: center;">
        <h2>About Us</h2>
        <p>We blend 2025 trends like AI-powered creativity and bold minimalism to showcase your business.</p>
    </section>

    <!-- Responsive Contact Section -->
    <section id="contact">
        <h2 class="neon">Contact Us</h2>
        <form class="contact-form" id="contactForm">
            <input type="text" id="name" placeholder="Name" required>
            <input type="email" id="email" placeholder="Email" required>
            <textarea id="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
            <p class="form-message" id="formMessage"></p>
        </form>
    </section>

    <script>
        // Dark mode toggle
        document.querySelector('.dark-mode-toggle button').addEventListener('click', () => {
            document.body.style.backgroundColor = document.body.style.backgroundColor === 'white' ? '#121212' : 'white';
            document.body.style.color = document.body.style.color === 'black' ? 'white' : 'black';
        });

        // Contact form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const formMessage = document.getElementById('formMessage');

            // Log form data (scalable to backend)
            console.log({ name, email, message });

            // Display success message
            formMessage.style.display = 'block';
            formMessage.textContent = 'Message sent! We’ll get back to you soon.';
            formMessage.style.color = 'var(--neon-glow)';
            
            // Reset form
            this.reset();

            // Hide message after 3 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 3000);
        });
    </script>
</body>
</html>"

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://oak-and-ink-studio.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3a615fd4-33c4-4aac-bedd-e49c6d4507eb).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
