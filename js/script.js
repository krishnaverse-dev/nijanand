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
                img: 'thumbnail/Quarks.gif',
                title: 'Quarks',
                embed: 'https://sketchfab.com/3d-models/quarks-social-life-cf1fc1c87b9c462cae0437d56f26a445/embed?autostart=0&ui_controls=1&ui_infos=0',
                has3D: true
            },
            {
                img: 'thumbnail/Photon.gif',
                title: 'Photon',
                embed: 'https://sketchfab.com/3d-models/photon-497fa804431044b5aa9cc8e0b69b05f5/embed?autostart=0&ui_controls=1&ui_infos=0',
                has3D: true
            },
            {
                img: 'thumbnail/Graviton.gif',
                title: 'Graviton',
                embed: 'https://sketchfab.com/3d-models/graviton-q-2cb2ecb50ede4b2fbafc5ab8f31845d1/embed?autostart=0&ui_controls=1&ui_infos=0',
                has3D: true
            },
            {
                img: 'thumbnail/Atom.gif',
                title: 'Atom',
                embed: 'https://sketchfab.com/3d-models/atom-6459713775904be79643635ce0bc1713/embed?autostart=0&ui_controls=1&ui_infos=0',
                has3D: true
            },
            {
                img: 'thumbnail/Molecule.gif',
                title: 'Molecule',
                embed: 'https://sketchfab.com/3d-models/diamond-molecule-structure-f4e8761bf64f488095ee57f2cb5698c4/embed?autostart=0&ui_controls=1&ui_infos=0',
                has3D: true
            },
             {
                img: 'thumbnail/Asteroid.gif',
                title: 'Asteroid',
                embed: 'https://sketchfab.com/3d-models/asteroid-80a70567fb2a42df836e6d70204e0b68/embed?autostart=0&ui_controls=1&ui_infos=0',
                has3D: true
            },
             {
                img: 'thumbnail/Comet.gif',
                title: 'Comet',
                embed: 'https://sketchfab.com/3d-models/parts-of-a-comet-fc0f8e88db8b46b286c223c1f5b578a0/embed?autostart=0&ui_controls=1&ui_infos=0',
                has3D: true
            },
             {
                img: 'thumbnail/Planet.jpg',
                title: 'Planet',
                embed: 'https://sketchfab.com/3d-models/earth-41fc80d85dfd480281f21b74b2de2faa/embed?autostart=0&ui_controls=1&ui_infos=0',
                has3D: true
            },
             {
                img: 'thumbnail/Star.gif',
                title: 'Star',
                embed: 'https://sketchfab.com/3d-models/sun-9ef1c68fbb944147bcfcc891d3912645/embed?autostart=0&ui_controls=1&ui_infos=0',
                has3D: true
            },
             {
                img: 'thumbnail/White Dwarf.jpg',
                title: 'White Dwarf',
                embed: 'https://sketchfab.com/3d-models/white-dwarf-star-a-stars-child-402e7e341ad8428b9213ad6fee8c9719/embed?autostart=0&ui_controls=1&ui_infos=0',
                has3D: true
            },
             {
                img: 'thumbnail/Neutron Star.webp',
                title: 'Neutron Star',
                embed: 'https://sketchfab.com/3d-models/animated-pulsar-neutron-star-8313ca51896e444a93ed8a7dd7487237/embed?autostart=0&ui_controls=1&ui_infos=0',
                has3D: true
            },
             {
                img: 'thumbnail/Black Hole.gif',
                title: 'Black Hole',
                embed: 'https://sketchfab.com/3d-models/blackhole-32f978d0e7354af293fa498f2998b14c/embed?autostart=0&ui_controls=1&ui_infos=0',
                has3D: true
            },
             {
                img: 'thumbnail/Solar System.gif',
                title: 'Solar System',
                embed: 'https://sketchfab.com/3d-models/solar-system-b6b69a95a6f0426bb8bbc2e8cb7ff46a/embed?autostart=0&ui_controls=1&ui_infos=0',
                has3D: true
            },
             {
                img: 'thumbnail/Star Cluster.gif',
                title: 'Star Cluster',
                embed: 'https://sketchfab.com/3d-models/star-cluster-15k-stars-model-51148b78a37a4a72b22d8e06f4293e07/embed?autostart=0&ui_controls=1&ui_infos=0',
                has3D: true
            },
             {
                img: 'thumbnail/Galaxy.gif',
                title: 'Galaxy',
                embed: 'https://sketchfab.com/3d-models/milky-way-eb0087b800414744b4cee3440888088c/embed?autostart=0&ui_controls=1&ui_infos=0',
                has3D: true
            },
             {
                img: 'thumbnail/Galaxy Cluster.jpg',
                title: 'Galaxy Cluster',
                embed: 'https://sketchfab.com/3d-models/bright-stars-of-an-open-cluster-bc068b682f4243b2b702202a65df804d/embed?autostart=0&ui_controls=1&ui_infos=0',
                has3D: true
            },
             {
                img: 'thumbnail/Super Cluster.png',
                title: 'Super Cluster',
                embed: 'https://sketchfab.com/3d-models/action-dynamics-of-the-local-supercluster-0981969137fc4a2aaef2b4645fc64d10/embed?autostart=0&ui_controls=1&ui_infos=0',
                has3D: true
            },
             {
                img: 'thumbnail/Observable Universe.jpg',
                title: 'Observable Universe',
                embed: 'https://sketchfab.com/3d-models/the-structure-of-the-observable-universe-12af810acf984bca85d6f889f0ef7a97/embed?autostart=0&ui_controls=1&ui_infos=0',
                has3D: true
            },
            {
                img: 'thumbnail/Multiverse.jpg',
                title: 'Multiverse',
                embed: 'https://sketchfab.com/3d-models/need-some-space-d6521362b37b48e3a82bce4911409303/embed?autostart=0&ui_controls=1&ui_infos=0',
                has3D: true
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
                view3dBtn.innerHTML = `<span>👁️</span>${currentCenterCard.data.title}3D`;
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

