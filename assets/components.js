class AppHeader extends HTMLElement {
    connectedCallback() {
        const basePath = this.getAttribute('base-path') || '';
        this.innerHTML = `
        <nav class="fixed w-full z-50 glass-nav transition-all duration-300" id="navbar">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-20 md:h-24 transition-all duration-300">
                    <a href="${basePath}index.html" class="flex-shrink-0 flex items-center gap-2 md:gap-4 cursor-pointer">
                        <img class="h-10 md:h-16 w-auto" src="${basePath}assets/usm_logo.png" alt="Logo USM">
                        <div class="flex flex-col">
                            <span class="font-display font-extrabold text-xl md:text-2xl leading-none text-usmLight tracking-widest">USM</span>
                            <span class="text-[9px] md:text-xs font-semibold text-gray-600 tracking-[0.2em] mt-1 hidden sm:block">UNIVERSITAS SEMARANG</span>
                        </div>
                    </a>
                    
                    <div class="flex items-center gap-4 md:gap-8">
                        <div class="hidden lg:flex space-x-8">
                            <a href="${basePath}profil.html" class="text-gray-800 hover:text-usmDark font-semibold text-sm tracking-wide transition-colors duration-200">PROFIL</a>
                            <a href="${basePath}akademik.html" class="text-gray-800 hover:text-usmDark font-semibold text-sm tracking-wide transition-colors duration-200">AKADEMIK</a>
                            <a href="${basePath}fasilitas.html" class="text-gray-800 hover:text-usmDark font-semibold text-sm tracking-wide transition-colors duration-200">FASILITAS</a>
                            <a href="${basePath}kemahasiswaan.html" class="text-gray-800 hover:text-usmDark font-semibold text-sm tracking-wide transition-colors duration-200">KEMAHASISWAAN</a>
                            <a href="${basePath}pendaftaran.html" class="text-gray-800 hover:text-usmDark font-semibold text-sm tracking-wide transition-colors duration-200">PENDAFTARAN</a>
                            <a href="${basePath}biaya.html" class="text-gray-800 hover:text-usmDark font-semibold text-sm tracking-wide transition-colors duration-200">BIAYA</a>
                        </div>
                        
                        <div class="flex items-center gap-3 md:gap-4">
                            <a href="${basePath}pendaftaran.html" class="hidden md:flex bg-usmLight hover:bg-yellow-500 text-usmDark px-5 py-2 md:px-6 md:py-2.5 rounded-full font-bold text-sm tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">DAFTAR</a>
                            <button id="mobile-menu-btn" class="lg:hidden text-usmDark hover:text-usmLight transition-colors p-2 focus:outline-none">
                                <i class="fas fa-bars text-2xl"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="mobile-menu" class="lg:hidden bg-white/95 backdrop-blur-md shadow-xl overflow-hidden transition-all duration-300 max-h-0">
                <div class="px-4 pt-2 pb-6 space-y-1 text-center border-t border-gray-100 mt-2">
                    <a href="${basePath}profil.html" class="block px-3 py-3 text-base font-semibold text-gray-800 hover:text-usmLight hover:bg-gray-50 border-b border-gray-50 uppercase tracking-wide">Profil</a>
                    <a href="${basePath}akademik.html" class="block px-3 py-3 text-base font-semibold text-gray-800 hover:text-usmLight hover:bg-gray-50 border-b border-gray-50 uppercase tracking-wide">Akademik</a>
                    <a href="${basePath}fasilitas.html" class="block px-3 py-3 text-base font-semibold text-gray-800 hover:text-usmLight hover:bg-gray-50 border-b border-gray-50 uppercase tracking-wide">Fasilitas</a>
                    <a href="${basePath}kemahasiswaan.html" class="block px-3 py-3 text-base font-semibold text-gray-800 hover:text-usmLight hover:bg-gray-50 border-b border-gray-50 uppercase tracking-wide">Kemahasiswaan</a>
                    <a href="${basePath}pendaftaran.html" class="block px-3 py-3 text-base font-semibold text-gray-800 hover:text-usmLight hover:bg-gray-50 border-b border-gray-50 uppercase tracking-wide">Pendaftaran</a>
                    <a href="${basePath}biaya.html" class="block px-3 py-3 text-base font-semibold text-gray-800 hover:text-usmLight hover:bg-gray-50 uppercase tracking-wide">Biaya</a>
                </div>
            </div>
        </nav>
        `;

        // Wait a tick for DOM insertion
        setTimeout(() => {
            const btn = this.querySelector('#mobile-menu-btn');
            const menu = this.querySelector('#mobile-menu');
            if (btn && menu) {
                btn.addEventListener('click', () => {
                    const icon = btn.querySelector('i');
                    if (menu.style.maxHeight && menu.style.maxHeight !== '0px') {
                        menu.style.maxHeight = '0px';
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    } else {
                        menu.style.maxHeight = menu.scrollHeight + 'px';
                        icon.classList.remove('fa-bars');
                        icon.classList.add('fa-times');
                    }
                });
            }

            var navbar = this.querySelector('#navbar');
            if (window.scrollY > 50 && navbar) {
                navbar.classList.add('shadow-md');
                navbar.classList.replace('h-24', 'h-20');
            }
            
            window.addEventListener('scroll', function () {
                if(navbar) {
                    if (window.scrollY > 50) {
                        navbar.classList.add('shadow-md');
                        navbar.classList.replace('h-24', 'h-20');
                    } else {
                        navbar.classList.remove('shadow-md');
                        navbar.classList.replace('h-20', 'h-24');
                    }
                }
            });
        }, 0);
    }
}

class AppFooter extends HTMLElement {
    connectedCallback() {
        const basePath = this.getAttribute('base-path') || '';
        this.innerHTML = `
        <footer class="bg-[#111] text-gray-300 pt-20 pb-10 border-t border-gray-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
                    <div class="lg:col-span-5">
                        <div class="flex items-center gap-3 mb-6">
                            <img src="${basePath}assets/usm_logo.png" alt="Logo USM Footer" class="h-12 w-auto brightness-200 contrast-100 grayscale-0">
                            <span class="font-display font-bold text-2xl text-white">USM</span>
                        </div>
                        <p class="text-gray-400 text-sm leading-relaxed mb-6">
                            Menjemput Masa Depan Unggul.<br>
                            Kampus terpadu di jantung kota Semarang dengan fokus pada pengembangan SDM berstandar Internasional.
                        </p>
                    </div>
                    <div class="lg:col-span-2">
                        <h4 class="font-display font-bold text-white text-lg mb-6 flex items-center"><span class="w-2 h-2 rounded-full bg-usmLight mr-2"></span> Tautan Cepat</h4>
                        <ul class="space-y-3">
                            <li><a href="${basePath}profil.html" class="text-gray-400 hover:text-usmLight transition-colors flex items-center"><i class="fas fa-chevron-right text-xs mr-2 text-gray-600"></i> Profil Universitas</a></li>
                            <li><a href="${basePath}akademik.html" class="text-gray-400 hover:text-usmLight transition-colors flex items-center"><i class="fas fa-chevron-right text-xs mr-2 text-gray-600"></i> Akademik & Fakultas</a></li>
                            <li><a href="${basePath}fasilitas.html" class="text-gray-400 hover:text-usmLight transition-colors flex items-center"><i class="fas fa-chevron-right text-xs mr-2 text-gray-600"></i> Fasilitas</a></li>
                            <li><a href="${basePath}kemahasiswaan.html" class="text-gray-400 hover:text-usmLight transition-colors flex items-center"><i class="fas fa-chevron-right text-xs mr-2 text-gray-600"></i> Kemahasiswaan</a></li>
                        </ul>
                    </div>
                    <div class="lg:col-span-2">
                        <h4 class="font-display font-bold text-white text-lg mb-6 flex items-center"><span class="w-2 h-2 rounded-full bg-usmLight mr-2"></span> Bantuan</h4>
                        <ul class="space-y-3">
                            <li><a href="${basePath}pendaftaran.html" class="text-gray-400 hover:text-usmLight transition-colors flex items-center"><i class="fas fa-chevron-right text-xs mr-2 text-gray-600"></i> FAQ Pendaftaran</a></li>
                            <li><a href="https://maps.app.goo.gl/sXTgM3TXe3vYrseNA" target="_blank" class="text-gray-400 hover:text-usmLight transition-colors flex items-center"><i class="fas fa-chevron-right text-xs mr-2 text-gray-600"></i> Peta Kampus</a></li>
                            <li><a href="https://elearning.usm.ac.id/" target="_blank" class="text-gray-400 hover:text-usmLight transition-colors flex items-center"><i class="fas fa-chevron-right text-xs mr-2 text-gray-600"></i> E-Learning</a></li>
                            <li><a href="https://sima.usm.ac.id/" target="_blank" class="text-gray-400 hover:text-usmLight transition-colors flex items-center"><i class="fas fa-chevron-right text-xs mr-2 text-gray-600"></i> Sistem Informasi Akademik</a></li>
                        </ul>
                    </div>
                    <div class="lg:col-span-3">
                        <h4 class="font-display font-bold text-white text-lg mb-6 flex items-center"><span class="w-2 h-2 rounded-full bg-usmLight mr-2"></span> Kontak</h4>
                        <ul class="space-y-4">
                            <li class="flex items-start gap-3 text-gray-400"><i class="fas fa-map-marker-alt mt-1 text-usmLight"></i><span class="text-sm">Jl. Soekarno Hatta, Tlogosari, Semarang, Jawa Tengah 50196</span></li>
                            <li class="flex items-center gap-3 text-gray-400 group"><i class="fas fa-phone-alt text-usmLight"></i><span class="text-sm">(024) 6702757</span></li>
                            <li class="flex items-center gap-3 text-gray-400 group"><i class="fas fa-envelope text-usmLight"></i><span class="text-sm">info@usm.ac.id</span></li>
                            <li class="flex items-center gap-3 text-gray-400 group"><i class="fas fa-globe text-usmLight"></i><a href="https://usm.ac.id" target="_blank" class="text-sm hover:text-white transition">www.usm.ac.id</a></li>
                        </ul>
                    </div>
                </div>

                <!-- Footer Social Media Horizontal -->
                <div class="py-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
                    <span class="font-display font-bold text-white uppercase tracking-wider text-sm">Media Sosial Resmi:</span>
                    <div class="flex flex-wrap items-center justify-center gap-6 md:gap-8">
                        <a href="https://www.instagram.com/usm_jaya/" target="_blank" class="flex items-center gap-2 group">
                            <i class="fab fa-instagram text-xl text-gray-400 group-hover:text-usmLight transition-colors"></i> 
                            <span class="text-xs text-gray-500 group-hover:text-white transition-colors uppercase tracking-wider">@usm_jaya</span>
                        </a>
                        <a href="https://www.instagram.com/kuliah_usm/" target="_blank" class="flex items-center gap-2 group">
                            <i class="fab fa-instagram text-xl text-gray-400 group-hover:text-usmLight transition-colors"></i> 
                            <span class="text-xs text-gray-500 group-hover:text-white transition-colors uppercase tracking-wider">@kuliah_usm</span>
                        </a>
                        <a href="https://www.youtube.com/@usmtvindonesia" target="_blank" class="flex items-center gap-2 group">
                            <i class="fab fa-youtube text-xl text-gray-400 group-hover:text-usmLight transition-colors"></i> 
                            <span class="text-xs text-gray-500 group-hover:text-white transition-colors uppercase tracking-wider">USMTV</span>
                        </a>
                        <a href="https://www.youtube.com/@humasusm" target="_blank" class="flex items-center gap-2 group">
                            <i class="fab fa-youtube text-xl text-gray-400 group-hover:text-usmLight transition-colors"></i> 
                            <span class="text-xs text-gray-500 group-hover:text-white transition-colors uppercase tracking-wider">HUMAS USM</span>
                        </a>
                        <a href="https://twitter.com/usm_jaya" target="_blank" class="flex items-center gap-2 group">
                            <i class="fab fa-x-twitter text-xl text-gray-400 group-hover:text-usmLight transition-colors"></i> 
                            <span class="text-xs text-gray-500 group-hover:text-white transition-colors uppercase tracking-wider">@usm_jaya</span>
                        </a>
                    </div>
                </div>

                <div class="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p class="text-xs text-gray-500">&copy; 2024 Universitas Semarang. All rights reserved.</p>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('app-header', AppHeader);
customElements.define('app-footer', AppFooter);
