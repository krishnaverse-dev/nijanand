function showHome() {
    window.location.href = 'index.html';
}

function toggleMenu() {
    const overlay = document.getElementById('navOverlay');
    overlay.classList.toggle('active'); // overlay को show/hide
}

function shareSite() {
        if (navigator.share) {
            navigator.share({
                title: 'Krishna Pranami',
                text: 'Nijanand Sampraday',
                url: window.location.href
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText(window.location.href)
                .then(() => alert("Link copied to clipboard!"))
                .catch(() => alert("Failed to copy link."));
        }
    }

function sendEmail() {
    const subject = encodeURIComponent("विषय: लिखें");
    const body = encodeURIComponent("प्रणाम, सुंदरसाथ जी");
    const email = "bramhaatma@gmail.com";
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}
        /* ================= POST DATA ================= */
        const postData = [
            {
                img: 'https://picsum.photos/id/101/800/600',
                title: 'Pahado ki Yaadein',
                embed: 'https://sketchfab.com/models/7w7pAfr5g/embed?autostart=0&ui_controls=1&ui_infos=0',
                has3D: true
            },
            {
                img: 'https://picsum.photos/id/102/800/600',
                title: 'Night City',
                embed: null,
                has3D: false
            },
            {
                img: 'https://picsum.photos/id/103/800/600',
                title: 'Forest Walk',
                embed: 'https://sketchfab.com/models/3f5c8b6d8c1f4a5b9e3d/embed?autostart=0&ui_controls=1&ui_infos=0',
                has3D: true
            },
            {
                img: 'https://picsum.photos/id/104/800/600',
                title: 'Tech Vibes',
                embed: null,
                has3D: false
            }
        ];

        /* ================= THREE.JS SETUP ================= */
        let scene, camera, renderer, group, items = [];
        let scrollY = 0, current = 0, startY = 0;
        let currentCenterCard = null;
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        function initThreeJS() {
            // Scene
            scene = new THREE.Scene();
            
            // Camera
            camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = window.innerWidth < 768 ? 18 : 22;
            
            // Renderer
            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            document.body.appendChild(renderer.domElement);
            
            // Lighting
            scene.add(new THREE.AmbientLight(0xffffff, 0.9));
            const light = new THREE.DirectionalLight(0xffffff, 0.5);
            light.position.set(0, 10, 10);
            scene.add(light);
            
            // Group for cards
            group = new THREE.Group();
            scene.add(group);
            
            // Create cards
            createCards();
            
            // Event listeners
            setupEventListeners();
            
            // Start animation
            animate();
        }

        /* ================= CREATE CARDS ================= */
        function createCards() {
            const loader = new THREE.TextureLoader();
            const total = 20;
            
            function createCard(data) {
                const g = new THREE.Group();
                const w = window.innerWidth < 768 ? 6 : 8;
                const h = window.innerWidth < 768 ? 4.5 : 5.5;
                
                const geo = new THREE.PlaneGeometry(w, h);
                const mat = new THREE.MeshLambertMaterial({
                    map: loader.load(data.img),
                    transparent: true,
                    side: THREE.DoubleSide
                });
                
                const mesh = new THREE.Mesh(geo, mat);
                g.add(mesh);
                g.userData = data;
                
                // Add border to card
                const edges = new THREE.EdgesGeometry(geo);
                const line = new THREE.LineSegments(
                    edges,
                    new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.3 })
                );
                g.add(line);
                
                return g;
            }
            
            for (let i = 0; i < total; i++) {
                const dataIndex = i % postData.length;
                const data = { ...postData[dataIndex] };
                const card = createCard(data);
                group.add(card);
                items.push({ mesh: card, index: i, data: data });
            }
        }

        /* ================= EVENT LISTENERS ================= */
        function setupEventListeners() {
            // Touch events for mobile
            window.addEventListener("touchstart", e => {
                startY = e.touches[0].clientY;
            });
            
            window.addEventListener("touchmove", e => {
                scrollY += (startY - e.touches[0].clientY) * 0.02;
                startY = e.touches[0].clientY;
                e.preventDefault();
            }, { passive: false });
            
            // Mouse wheel
            window.addEventListener("wheel", e => {
                scrollY += e.deltaY * 0.005;
            });
            
            // Canvas click for 3D models
            renderer.domElement.addEventListener("click", handleCanvasClick);
            
            // View 3D Button
            document.getElementById("view3dBtn").addEventListener("click", handleView3DButton);
            
            // Close button
            document.getElementById("closeBtn").addEventListener("click", closeEmbed);
            
            // Window resize
            window.addEventListener("resize", onWindowResize);
        }

        /* ================= HANDLE VIEW 3D BUTTON ================= */
        function handleView3DButton() {
            if (currentCenterCard && currentCenterCard.data.embed) {
                openEmbed(currentCenterCard.data.embed);
            }
        }

        /* ================= CANVAS CLICK HANDLER ================= */
        function handleCanvasClick(e) {
            // Convert to normalized device coordinates
            mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
            
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(group.children, true);
            
            if (intersects.length > 0) {
                const obj = intersects[0].object.parent;
                const data = obj.userData;
                
                if (data.embed) {
                    openEmbed(data.embed);
                }
            }
        }

        /* ================= EMBED FUNCTIONS ================= */
        function openEmbed(url) {
            const embedBox = document.getElementById("embedBox");
            const closeBtn = document.getElementById("closeBtn");
            const overlay = document.getElementById("overlay");
            const view3dBtn = document.getElementById("view3dBtn");
            const buttonOverlay = document.getElementById("buttonOverlay");
            
            embedBox.innerHTML = `
                <iframe
                    src="${url}"
                    allow="fullscreen; xr-spatial-tracking"
                    allowfullscreen
                    style="width:100%;height:100%;border:0;">
                </iframe>
            `;
            embedBox.style.display = "block";
            closeBtn.style.display = "block";
            overlay.style.display = "none";
            view3dBtn.classList.remove("visible");
            buttonOverlay.classList.remove("visible");
        }

        function closeEmbed() {
            const embedBox = document.getElementById("embedBox");
            const closeBtn = document.getElementById("closeBtn");
            const overlay = document.getElementById("overlay");
            
            embedBox.style.display = "none";
            embedBox.innerHTML = "";
            closeBtn.style.display = "none";
            overlay.style.display = "block";
        }

        /* ================= UPDATE SPIRAL AND CHECK CENTER CARD ================= */
        function updateSpiral() {
            current += (scrollY - current) * 0.08;
            
            const xAmp = window.innerWidth < 768 ? 6 : 9;
            const gap = window.innerWidth < 768 ? 6 : 7.5;
            
            let closestCard = null;
            let closestDistance = Infinity;
            
            items.forEach(it => {
                const r = it.index - current;
                
                const x = Math.sin(r) * xAmp;
                const y = -r * gap;
                const z = -Math.abs(r) * 6;
                
                it.mesh.position.set(x, y, z);
                it.mesh.lookAt(0, y, 25);
                
                const d = Math.abs(r);
                const s = Math.max(0.2, 1.6 - d * 0.4);
                it.mesh.scale.set(s, s, s);
                
                // Calculate distance from center (0,0,0)
                const distance = Math.sqrt(x*x + y*y + z*z);
                
                // Find the card closest to the center
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestCard = it;
                }
            });
            
            // Check if center card has changed
            if (closestCard !== currentCenterCard) {
                currentCenterCard = closestCard;
                update3DButton();
            }
        }

        /* ================= UPDATE 3D BUTTON VISIBILITY ================= */
        function update3DButton() {
            const view3dBtn = document.getElementById("view3dBtn");
            const buttonOverlay = document.getElementById("buttonOverlay");
            
            if (currentCenterCard && currentCenterCard.data.embed) {
                // Card has 3D model, show button
                view3dBtn.classList.add("visible");
                buttonOverlay.classList.add("visible");
                
                // Update button text with card title
                view3dBtn.innerHTML = `<span>👁️</span> View ${currentCenterCard.data.title} in 3D`;
            } else {
                // No 3D model, hide button
                view3dBtn.classList.remove("visible");
                buttonOverlay.classList.remove("visible");
            }
        }

        /* ================= RESIZE HANDLER ================= */
        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            
            // Recalculate card sizes
            const w = window.innerWidth < 768 ? 6 : 8;
            const h = window.innerWidth < 768 ? 4.5 : 5.5;
            
            items.forEach(item => {
                item.mesh.children[0].geometry = new THREE.PlaneGeometry(w, h);
            });
        }

        /* ================= ANIMATION LOOP ================= */
        function animate() {
            requestAnimationFrame(animate);
            updateSpiral();
            renderer.render(scene, camera);
        }

        /* ================= INITIALIZE EVERYTHING ================= */
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize Three.js
            initThreeJS();
            
            // Hide close button initially
            document.getElementById("closeBtn").style.display = "none";
            document.getElementById("embedBox").style.display = "none";
            
            // Set initial overlay display
            document.getElementById("overlay").style.display = "block";
            
            // Initially hide 3D button
            document.getElementById("view3dBtn").classList.remove("visible");
            document.getElementById("buttonOverlay").classList.remove("visible");
        });
