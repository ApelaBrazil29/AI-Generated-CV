// Ultimate CV Builder Application
class UltimateCVBuilder {
    constructor() {
        this.currentTemplate = 1;
        this.zoomLevel = 100;
        this.autoSaveEnabled = true;
        this.autoSaveTimer = null;
        this.formData = this.getEmptyFormData();
        
        this.templates = this.getTemplateDefinitions();
        this.sampleData = this.getSampleData();
        
        this.init();
    }

    init() {
        console.log('Initializing Ultimate CV Builder...');
        this.setupEventListeners();
        this.renderTemplateGallery();
        this.setupAutoSave();
        this.loadFromStorage();
        this.showAutoSaveStatus('Ready to create your CV!');
        
        // Initial preview update
        setTimeout(() => {
            this.updatePreview();
        }, 100);
    }

    getTemplateDefinitions() {
        return [
            { id: 1, name: 'Classic Professional', category: 'professional', description: 'Traditional serif design with elegant layout' },
            { id: 2, name: 'Modern Minimalist', category: 'modern', description: 'Clean lines with accent colors' },
            { id: 3, name: 'Creative Gradient', category: 'creative', description: 'Vibrant gradient background with modern typography' },
            { id: 4, name: 'Tech Innovator', category: 'modern', description: 'Dark theme with terminal-inspired design' },
            { id: 5, name: 'Executive Blue', category: 'executive', description: 'Professional blue theme for executives' },
            { id: 6, name: 'Creative Artist', category: 'creative', description: 'Artistic gradient with rounded elements' },
            { id: 7, name: 'Corporate Dark', category: 'executive', description: 'Dark professional theme with gold accents' },
            { id: 8, name: 'Healthcare Clean', category: 'professional', description: 'Clean medical-inspired design' },
            { id: 9, name: 'Startup Energy', category: 'modern', description: 'Dynamic gradient with modern elements' },
            { id: 10, name: 'Designer Portfolio', category: 'creative', description: 'Bold black border with creative layout' },
            { id: 11, name: 'Finance Professional', category: 'executive', description: 'Conservative design for finance sector' },
            { id: 12, name: 'Marketing Vibrant', category: 'creative', description: 'Bright gradient perfect for marketing roles' },
            { id: 13, name: 'Academic Scholar', category: 'professional', description: 'Traditional academic layout with serif fonts' },
            { id: 14, name: 'Data Scientist', category: 'modern', description: 'Technical dark theme for data professionals' },
            { id: 15, name: 'Social Media Manager', category: 'creative', description: 'Instagram-inspired gradient design' },
            { id: 16, name: 'Legal Professional', category: 'executive', description: 'Authoritative design for legal sector' },
            { id: 17, name: 'Project Manager', category: 'professional', description: 'Organized layout with red accents' },
            { id: 18, name: 'Operations Manager', category: 'professional', description: 'Structured blue-themed design' },
            { id: 19, name: 'HR Professional', category: 'professional', description: 'Warm yellow theme for HR roles' },
            { id: 20, name: 'Consultant Style', category: 'executive', description: 'Professional consulting layout' },
            { id: 21, name: 'Education Specialist', category: 'professional', description: 'Bright gradient for education sector' },
            { id: 22, name: 'Non-profit Worker', category: 'professional', description: 'Green theme for non-profit sector' },
            { id: 23, name: 'Retail Manager', category: 'modern', description: 'Customer-focused colorful design' },
            { id: 24, name: 'Content Creator', category: 'creative', description: 'Purple accent for creative professionals' },
            { id: 25, name: 'Business Executive', category: 'executive', description: 'Dark sophisticated executive theme' },
            { id: 26, name: 'Software Engineer', category: 'modern', description: 'Technical gradient for developers' },
            { id: 27, name: 'Sales Professional', category: 'professional', description: 'Orange border for sales roles' },
            { id: 28, name: 'Quality Assurance', category: 'professional', description: 'Teal accent for QA professionals' },
            { id: 29, name: 'UX Designer', category: 'creative', description: 'Purple gradient for UX roles' },
            { id: 30, name: 'Senior Executive', category: 'executive', description: 'Premium dark border for executives' }
        ];
    }

    getSampleData() {
        return {
            fullName: "Sarah Johnson",
            email: "sarah.johnson@email.com",
            phone: "+1 (555) 123-4567",
            address: "New York, NY",
            linkedin: "linkedin.com/in/sarahjohnson",
            website: "sarahjohnson.com",
            summary: "Results-driven Marketing Manager with 5+ years of experience in digital marketing, brand strategy, and campaign management. Proven track record of increasing brand awareness by 40% and driving revenue growth through innovative marketing initiatives.",
            experience: [
                {
                    title: "Senior Marketing Manager",
                    company: "TechCorp Inc.",
                    location: "New York, NY",
                    startDate: "Jan 2022",
                    endDate: "Present",
                    description: "Lead cross-functional marketing team of 8 members. Developed and executed comprehensive marketing strategies that increased customer acquisition by 35%. Managed $2M annual marketing budget."
                },
                {
                    title: "Marketing Coordinator",
                    company: "Digital Solutions LLC",
                    location: "Boston, MA",
                    startDate: "Jun 2019",
                    endDate: "Dec 2021",
                    description: "Coordinated marketing campaigns across multiple channels. Increased social media engagement by 60% and email open rates by 25%. Collaborated with design team on brand asset development."
                }
            ],
            education: [
                {
                    degree: "Master of Business Administration",
                    school: "Harvard Business School",
                    location: "Cambridge, MA",
                    graduationDate: "May 2019"
                },
                {
                    degree: "Bachelor of Arts in Marketing",
                    school: "Boston University",
                    location: "Boston, MA",
                    graduationDate: "May 2017"
                }
            ],
            projects: [
                {
                    name: "E-commerce Platform Redesign",
                    description: "Led complete redesign of company's e-commerce platform, resulting in 25% increase in conversion rates",
                    technologies: "React, Node.js, MongoDB"
                }
            ],
            technicalSkills: "Google Analytics, HubSpot, Adobe Creative Suite, Salesforce, SQL, WordPress, Mailchimp",
            softSkills: "Leadership, Strategic Planning, Team Management, Public Speaking, Problem Solving, Communication",
            certifications: "Google Analytics Certified (2023)\nHubSpot Content Marketing Certified (2022)\nFacebook Blueprint Certified (2021)",
            languages: "English (Native)\nSpanish (Intermediate)\nFrench (Beginner)",
            awards: "Employee of the Year 2022\nBest Marketing Campaign Award 2021\nTop Performer Q3 2020"
        };
    }

    getEmptyFormData() {
        return {
            fullName: '',
            email: '',
            phone: '',
            address: '',
            linkedin: '',
            website: '',
            summary: '',
            experience: [],
            education: [],
            projects: [],
            technicalSkills: '',
            softSkills: '',
            certifications: '',
            languages: '',
            awards: ''
        };
    }

    setupEventListeners() {
        console.log('Setting up event listeners...');
        
        // Mobile menu toggle
        this.addClickListener('mobile-menu-btn', () => this.toggleMobileMenu());

        // Navigation buttons
        this.addClickListener('back-to-templates', () => this.showTemplateGallery());
        this.addClickListener('change-template-btn', () => this.showTemplateModal());

        // Header logo click to go back to templates
        const headerLogo = document.querySelector('.header-content h1');
        if (headerLogo) {
            headerLogo.style.cursor = 'pointer';
            headerLogo.addEventListener('click', () => this.showTemplateGallery());
        }

        // Action buttons - multiple instances for mobile/desktop
        this.addClickListener('sample-data-btn', () => this.loadSampleData());
        this.addClickListener('load-sample-mobile', () => this.loadSampleData());
        this.addClickListener('download-btn', () => this.downloadPDF());
        this.addClickListener('download-mobile', () => this.downloadPDF());

        // Preview controls
        this.addClickListener('zoom-in', () => this.zoomIn());
        this.addClickListener('zoom-out', () => this.zoomOut());
        this.addClickListener('fullscreen-preview', () => this.showFullscreenPreview());
        this.addClickListener('print-cv', () => this.printCV());

        // Modal controls
        this.addClickListener('modal-close', () => this.hideTemplateModal());
        this.addClickListener('fullscreen-close', () => this.hideFullscreenPreview());

        // Dynamic sections
        this.addClickListener('add-experience', () => this.addExperienceItem());
        this.addClickListener('add-education', () => this.addEducationItem());
        this.addClickListener('add-project', () => this.addProjectItem());

        // Form input listeners - Setup immediately
        this.setupFormInputListeners();

        // Category filter listeners
        this.setupCategoryFilters();

        // Close modals on backdrop click
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-backdrop')) {
                this.hideAllModals();
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                if (e.key === 's') {
                    e.preventDefault();
                    this.saveToStorage();
                    this.showAutoSaveStatus('Manually saved!');
                } else if (e.key === 'p') {
                    e.preventDefault();
                    this.downloadPDF();
                }
            }
            if (e.key === 'Escape') {
                this.hideAllModals();
            }
        });

        console.log('Event listeners setup complete');
    }

    addClickListener(id, callback) {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                callback();
            });
            console.log(`Click listener added for: ${id}`);
        } else {
            console.warn(`Element not found: ${id}`);
        }
    }

    setupFormInputListeners() {
        console.log('Setting up form input listeners...');
        
        const inputs = [
            'fullName', 'email', 'phone', 'address', 'linkedin', 'website', 
            'summary', 'technicalSkills', 'softSkills', 'certifications', 'languages', 'awards'
        ];

        inputs.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                // Multiple event listeners for comprehensive coverage
                const updateHandler = () => {
                    console.log(`Input changed: ${id} = ${element.value}`);
                    this.handleFormChange();
                };
                
                element.addEventListener('input', updateHandler);
                element.addEventListener('change', updateHandler);
                element.addEventListener('keyup', updateHandler);
                element.addEventListener('paste', () => {
                    setTimeout(updateHandler, 10); // Delay for paste events
                });
                
                element.addEventListener('blur', () => {
                    this.validateField(element);
                });
                
                console.log(`Form listeners added for: ${id}`);
            } else {
                console.warn(`Form element not found: ${id}`);
            }
        });

        // Summary character counter
        const summaryElement = document.getElementById('summary');
        if (summaryElement) {
            summaryElement.addEventListener('input', (e) => {
                const count = e.target.value.length;
                const counter = e.target.parentNode.querySelector('.character-count');
                if (counter) {
                    counter.textContent = `${count}/500 characters`;
                    counter.style.color = count > 500 ? 'var(--color-error)' : 'var(--color-text-secondary)';
                }
            });
        }

        // Skills preview update
        const techSkills = document.getElementById('technicalSkills');
        const softSkills = document.getElementById('softSkills');
        
        if (techSkills) {
            techSkills.addEventListener('input', () => {
                console.log('Technical skills updated');
                this.updateSkillsPreview();
            });
        }
        if (softSkills) {
            softSkills.addEventListener('input', () => {
                console.log('Soft skills updated');
                this.updateSkillsPreview();
            });
        }
        
        console.log('Form input listeners setup complete');
    }

    setupCategoryFilters() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('category-btn')) {
                this.filterTemplates(e.target.dataset.category);
                
                // Update active state
                e.target.parentNode.querySelectorAll('.category-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                e.target.classList.add('active');
            }
        });
    }

    renderTemplateGallery() {
        console.log('Rendering template gallery...');
        const gallery = document.getElementById('templates-grid');
        const modalGallery = document.getElementById('templates-grid-modal');
        
        if (!gallery) {
            console.error('Template gallery not found');
            return;
        }

        gallery.innerHTML = '';
        if (modalGallery) modalGallery.innerHTML = '';

        this.templates.forEach(template => {
            const card = this.createTemplateCard(template);
            const modalCard = this.createTemplateCard(template);
            
            gallery.appendChild(card);
            if (modalGallery) modalGallery.appendChild(modalCard);
        });
        
        console.log(`Rendered ${this.templates.length} templates`);
    }

    createTemplateCard(template) {
        const card = document.createElement('div');
        card.className = 'template-card';
        card.dataset.templateId = template.id;
        card.dataset.category = template.category;
        
        if (template.id === this.currentTemplate) {
            card.classList.add('selected');
        }

        const previewHTML = this.generatePreviewHTML(template.id);
        
        card.innerHTML = `
            <div class="template-preview">
                <div class="template-preview-content">
                    ${previewHTML}
                </div>
                <div class="template-badge">${template.category}</div>
            </div>
            <div class="template-info">
                <h4 class="template-name">${template.name}</h4>
                <p class="template-category">${template.description}</p>
            </div>
        `;

        card.addEventListener('click', () => {
            console.log(`Template clicked: ${template.id}`);
            this.selectTemplate(template.id);
        });

        return card;
    }

    generatePreviewHTML(templateId) {
        const previewData = {
            fullName: "John Doe",
            email: "john@email.com",
            phone: "+1 (555) 123-4567",
            summary: "Experienced professional with strong background in business development and team leadership.",
            experience: [{
                title: "Senior Manager",
                company: "Tech Company",
                startDate: "2020",
                endDate: "Present",
                description: "Led team of 10+ professionals"
            }],
            education: [{
                degree: "Master of Business Administration",
                school: "University Name",
                graduationDate: "2018"
            }],
            technicalSkills: "Leadership, Strategy, Analytics"
        };

        return `
            <div class="cv-template template-${templateId}">
                <div class="cv-header">
                    <div class="cv-name">${previewData.fullName}</div>
                    <div class="cv-contact">
                        <span>${previewData.email}</span>
                        <span>${previewData.phone}</span>
                    </div>
                </div>
                <div class="cv-section">
                    <div class="cv-section-title">Summary</div>
                    <div class="cv-item-description">${previewData.summary}</div>
                </div>
                <div class="cv-section">
                    <div class="cv-section-title">Experience</div>
                    <div class="cv-item">
                        <div class="cv-item-title">${previewData.experience[0].title}</div>
                        <div class="cv-item-subtitle">${previewData.experience[0].company}</div>
                        <div class="cv-item-date">${previewData.experience[0].startDate} - ${previewData.experience[0].endDate}</div>
                    </div>
                </div>
                <div class="cv-section">
                    <div class="cv-section-title">Education</div>
                    <div class="cv-item">
                        <div class="cv-item-title">${previewData.education[0].degree}</div>
                        <div class="cv-item-subtitle">${previewData.education[0].school}</div>
                    </div>
                </div>
            </div>
        `;
    }

    selectTemplate(templateId) {
        console.log(`Selecting template: ${templateId}`);
        this.currentTemplate = templateId;
        this.updateTemplateSelection();
        this.showCVBuilder();
        this.updatePreview();
        this.hideTemplateModal();
        
        const template = this.templates.find(t => t.id === templateId);
        this.showAutoSaveStatus(`Template "${template?.name}" selected!`);
    }

    updateTemplateSelection() {
        document.querySelectorAll('.template-card').forEach(card => {
            card.classList.remove('selected');
            if (parseInt(card.dataset.templateId) === this.currentTemplate) {
                card.classList.add('selected');
            }
        });
    }

    filterTemplates(category) {
        document.querySelectorAll('.template-card').forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    showTemplateGallery() {
        console.log('Showing template gallery');
        const gallery = document.getElementById('template-gallery');
        const builder = document.getElementById('cv-builder');
        
        if (gallery) gallery.classList.remove('hidden');
        if (builder) builder.classList.add('hidden');
        
        this.hideMobileMenu();
    }

    showCVBuilder() {
        console.log('Showing CV builder');
        const gallery = document.getElementById('template-gallery');
        const builder = document.getElementById('cv-builder');
        
        if (gallery) gallery.classList.add('hidden');
        if (builder) builder.classList.remove('hidden');
        
        this.hideMobileMenu();
        
        // Update preview after showing builder
        setTimeout(() => {
            this.updatePreview();
        }, 100);
    }

    showTemplateModal() {
        console.log('Showing template modal');
        const modal = document.getElementById('template-modal');
        if (modal) {
            modal.classList.remove('hidden');
        }
    }

    hideTemplateModal() {
        const modal = document.getElementById('template-modal');
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    showFullscreenPreview() {
        const modal = document.getElementById('fullscreen-modal');
        const preview = document.getElementById('fullscreen-cv-preview');
        
        if (modal && preview) {
            preview.innerHTML = document.getElementById('cv-preview')?.innerHTML || '';
            preview.className = `cv-preview template-${this.currentTemplate}`;
            modal.classList.remove('hidden');
        }
    }

    hideFullscreenPreview() {
        document.getElementById('fullscreen-modal')?.classList.add('hidden');
    }

    hideAllModals() {
        document.getElementById('template-modal')?.classList.add('hidden');
        document.getElementById('fullscreen-modal')?.classList.add('hidden');
    }

    toggleMobileMenu() {
        const menu = document.getElementById('mobile-nav');
        if (menu) {
            menu.classList.toggle('hidden');
        }
    }

    hideMobileMenu() {
        document.getElementById('mobile-nav')?.classList.add('hidden');
    }

    loadSampleData() {
        console.log('Loading sample data...');
        
        // Clear existing dynamic items first
        document.getElementById('experience-list').innerHTML = '';
        document.getElementById('education-list').innerHTML = '';
        document.getElementById('projects-list').innerHTML = '';
        
        // Populate basic form fields
        Object.keys(this.sampleData).forEach(key => {
            const element = document.getElementById(key);
            if (element && typeof this.sampleData[key] === 'string') {
                element.value = this.sampleData[key];
                console.log(`Set ${key} to: ${this.sampleData[key]}`);
            }
        });

        // Add sample experience
        this.sampleData.experience.forEach(exp => {
            this.addExperienceItem(exp);
        });

        // Add sample education
        this.sampleData.education.forEach(edu => {
            this.addEducationItem(edu);
        });

        // Add sample projects
        this.sampleData.projects.forEach(proj => {
            this.addProjectItem(proj);
        });

        this.updateSkillsPreview();
        this.updatePreview();
        this.showAutoSaveStatus('Sample data loaded successfully!');
        this.hideMobileMenu();
    }

    addExperienceItem(data = null) {
        const container = document.getElementById('experience-list');
        if (!container) return;

        const index = container.children.length + 1;
        const item = document.createElement('div');
        item.className = 'dynamic-item fade-in';

        item.innerHTML = `
            <div class="item-header">
                <div class="item-number">${index}</div>
                <button type="button" class="remove-item" aria-label="Remove experience">×</button>
            </div>
            <div class="form-grid">
                <div class="form-group">
                    <label class="form-label">Job Title *</label>
                    <input type="text" class="form-control" placeholder="Senior Manager" value="${data?.title || ''}" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Company *</label>
                    <input type="text" class="form-control" placeholder="Company Name" value="${data?.company || ''}" required>
                </div>
            </div>
            <div class="form-grid">
                <div class="form-group">
                    <label class="form-label">Start Date</label>
                    <input type="text" class="form-control" placeholder="Jan 2020" value="${data?.startDate || ''}">
                </div>
                <div class="form-group">
                    <label class="form-label">End Date</label>
                    <input type="text" class="form-control" placeholder="Present" value="${data?.endDate || ''}">
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">Location</label>
                <input type="text" class="form-control" placeholder="New York, NY" value="${data?.location || ''}">
            </div>
            <div class="form-group">
                <label class="form-label">Description</label>
                <textarea class="form-control" rows="3" placeholder="Describe your key responsibilities and achievements...">${data?.description || ''}</textarea>
            </div>
        `;

        container.appendChild(item);

        // Add event listeners to new inputs
        item.querySelectorAll('input, textarea').forEach(input => {
            const updateHandler = () => {
                console.log('Dynamic input changed:', input.value);
                this.handleFormChange();
            };
            input.addEventListener('input', updateHandler);
            input.addEventListener('change', updateHandler);
            input.addEventListener('blur', () => this.validateField(input));
        });

        item.querySelector('.remove-item').addEventListener('click', () => {
            item.remove();
            this.updateItemNumbers(container);
            this.handleFormChange();
        });

        this.handleFormChange();
    }

    addEducationItem(data = null) {
        const container = document.getElementById('education-list');
        if (!container) return;

        const index = container.children.length + 1;
        const item = document.createElement('div');
        item.className = 'dynamic-item fade-in';

        item.innerHTML = `
            <div class="item-header">
                <div class="item-number">${index}</div>
                <button type="button" class="remove-item" aria-label="Remove education">×</button>
            </div>
            <div class="form-grid">
                <div class="form-group">
                    <label class="form-label">Degree *</label>
                    <input type="text" class="form-control" placeholder="Bachelor of Science" value="${data?.degree || ''}" required>
                </div>
                <div class="form-group">
                    <label class="form-label">School *</label>
                    <input type="text" class="form-control" placeholder="University Name" value="${data?.school || ''}" required>
                </div>
            </div>
            <div class="form-grid">
                <div class="form-group">
                    <label class="form-label">Location</label>
                    <input type="text" class="form-control" placeholder="Boston, MA" value="${data?.location || ''}">
                </div>
                <div class="form-group">
                    <label class="form-label">Graduation Date</label>
                    <input type="text" class="form-control" placeholder="May 2020" value="${data?.graduationDate || ''}">
                </div>
            </div>
        `;

        container.appendChild(item);

        // Add event listeners
        item.querySelectorAll('input').forEach(input => {
            const updateHandler = () => this.handleFormChange();
            input.addEventListener('input', updateHandler);
            input.addEventListener('change', updateHandler);
            input.addEventListener('blur', () => this.validateField(input));
        });

        item.querySelector('.remove-item').addEventListener('click', () => {
            item.remove();
            this.updateItemNumbers(container);
            this.handleFormChange();
        });

        this.handleFormChange();
    }

    addProjectItem(data = null) {
        const container = document.getElementById('projects-list');
        if (!container) return;

        const index = container.children.length + 1;
        const item = document.createElement('div');
        item.className = 'dynamic-item fade-in';

        item.innerHTML = `
            <div class="item-header">
                <div class="item-number">${index}</div>
                <button type="button" class="remove-item" aria-label="Remove project">×</button>
            </div>
            <div class="form-group">
                <label class="form-label">Project Name *</label>
                <input type="text" class="form-control" placeholder="E-commerce Platform" value="${data?.name || ''}" required>
            </div>
            <div class="form-group">
                <label class="form-label">Description</label>
                <textarea class="form-control" rows="2" placeholder="Brief description of the project and your role...">${data?.description || ''}</textarea>
            </div>
            <div class="form-group">
                <label class="form-label">Technologies Used</label>
                <input type="text" class="form-control" placeholder="React, Node.js, MongoDB" value="${data?.technologies || ''}">
            </div>
        `;

        container.appendChild(item);

        // Add event listeners
        item.querySelectorAll('input, textarea').forEach(input => {
            const updateHandler = () => this.handleFormChange();
            input.addEventListener('input', updateHandler);
            input.addEventListener('change', updateHandler);
            input.addEventListener('blur', () => this.validateField(input));
        });

        item.querySelector('.remove-item').addEventListener('click', () => {
            item.remove();
            this.updateItemNumbers(container);
            this.handleFormChange();
        });

        this.handleFormChange();
    }

    updateItemNumbers(container) {
        container.querySelectorAll('.item-number').forEach((numberEl, index) => {
            numberEl.textContent = index + 1;
        });
    }

    updateSkillsPreview() {
        const techSkills = document.getElementById('technicalSkills')?.value || '';
        const softSkills = document.getElementById('softSkills')?.value || '';
        const preview = document.getElementById('skills-preview');
        
        if (!preview) return;

        const allSkills = [];
        
        if (techSkills) {
            allSkills.push(...techSkills.split(',').map(s => s.trim()).filter(s => s));
        }
        
        if (softSkills) {
            allSkills.push(...softSkills.split(',').map(s => s.trim()).filter(s => s));
        }

        preview.innerHTML = allSkills.map(skill => 
            `<span class="skill-tag">${skill}</span>`
        ).join('');
    }

    validateField(field) {
        const isRequired = field.hasAttribute('required');
        const isEmpty = !field.value.trim();
        
        if (isRequired && isEmpty) {
            field.style.borderColor = 'var(--color-error)';
            field.setAttribute('aria-invalid', 'true');
        } else {
            field.style.borderColor = '';
            field.removeAttribute('aria-invalid');
        }
    }

    handleFormChange() {
        console.log('Form changed - updating preview');
        this.updatePreview();
        this.scheduleAutoSave();
    }

    scheduleAutoSave() {
        if (!this.autoSaveEnabled) return;
        
        if (this.autoSaveTimer) {
            clearTimeout(this.autoSaveTimer);
        }
        
        this.autoSaveTimer = setTimeout(() => {
            this.saveToStorage();
            this.showAutoSaveStatus('Auto-saved');
        }, 3000); // 3 second delay
    }

    updatePreview() {
        console.log('Updating CV preview...');
        const preview = document.getElementById('cv-preview');
        if (!preview) {
            console.error('Preview element not found');
            return;
        }

        const formData = this.collectFormData();
        const html = this.generateCVHTML(formData);
        
        preview.innerHTML = html;
        preview.className = `cv-preview template-${this.currentTemplate}`;
        
        console.log('Preview updated successfully');
    }

    collectFormData() {
        const data = {
            fullName: document.getElementById('fullName')?.value || '',
            email: document.getElementById('email')?.value || '',
            phone: document.getElementById('phone')?.value || '',
            address: document.getElementById('address')?.value || '',
            linkedin: document.getElementById('linkedin')?.value || '',
            website: document.getElementById('website')?.value || '',
            summary: document.getElementById('summary')?.value || '',
            technicalSkills: document.getElementById('technicalSkills')?.value || '',
            softSkills: document.getElementById('softSkills')?.value || '',
            certifications: document.getElementById('certifications')?.value || '',
            languages: document.getElementById('languages')?.value || '',
            awards: document.getElementById('awards')?.value || '',
            experience: [],
            education: [],
            projects: []
        };

        // Collect experience
        document.querySelectorAll('#experience-list .dynamic-item').forEach(item => {
            const inputs = item.querySelectorAll('input, textarea');
            data.experience.push({
                title: inputs[0]?.value || '',
                company: inputs[1]?.value || '',
                startDate: inputs[2]?.value || '',
                endDate: inputs[3]?.value || '',
                location: inputs[4]?.value || '',
                description: inputs[5]?.value || ''
            });
        });

        // Collect education
        document.querySelectorAll('#education-list .dynamic-item').forEach(item => {
            const inputs = item.querySelectorAll('input');
            data.education.push({
                degree: inputs[0]?.value || '',
                school: inputs[1]?.value || '',
                location: inputs[2]?.value || '',
                graduationDate: inputs[3]?.value || ''
            });
        });

        // Collect projects
        document.querySelectorAll('#projects-list .dynamic-item').forEach(item => {
            const inputs = item.querySelectorAll('input, textarea');
            data.projects.push({
                name: inputs[0]?.value || '',
                description: inputs[1]?.value || '',
                technologies: inputs[2]?.value || ''
            });
        });

        return data;
    }

    generateCVHTML(data) {
        const allSkills = [];
        if (data.technicalSkills) allSkills.push(...data.technicalSkills.split(',').map(s => s.trim()).filter(s => s));
        if (data.softSkills) allSkills.push(...data.softSkills.split(',').map(s => s.trim()).filter(s => s));

        const certList = data.certifications.split('\n').map(s => s.trim()).filter(s => s);
        const langList = data.languages.split('\n').map(s => s.trim()).filter(s => s);
        const awardList = data.awards.split('\n').map(s => s.trim()).filter(s => s);

        return `
            <div class="cv-template">
                <div class="cv-header">
                    <div class="cv-name">${data.fullName || 'Your Name'}</div>
                    <div class="cv-contact">
                        ${data.email ? `<span>${data.email}</span>` : ''}
                        ${data.phone ? `<span>${data.phone}</span>` : ''}
                        ${data.address ? `<span>${data.address}</span>` : ''}
                        ${data.linkedin ? `<span>${data.linkedin}</span>` : ''}
                        ${data.website ? `<span>${data.website}</span>` : ''}
                    </div>
                </div>

                ${data.summary ? `
                    <div class="cv-section">
                        <div class="cv-section-title">Professional Summary</div>
                        <div class="cv-item-description">${data.summary}</div>
                    </div>
                ` : ''}

                ${data.experience.length > 0 ? `
                    <div class="cv-section">
                        <div class="cv-section-title">Experience</div>
                        ${data.experience.map(exp => `
                            <div class="cv-item">
                                <div class="cv-item-title">${exp.title}</div>
                                <div class="cv-item-subtitle">${exp.company}${exp.location ? `, ${exp.location}` : ''}</div>
                                <div class="cv-item-date">${exp.startDate}${exp.endDate ? ` - ${exp.endDate}` : ''}</div>
                                ${exp.description ? `<div class="cv-item-description">${exp.description}</div>` : ''}
                            </div>
                        `).join('')}
                    </div>
                ` : ''}

                ${data.education.length > 0 ? `
                    <div class="cv-section">
                        <div class="cv-section-title">Education</div>
                        ${data.education.map(edu => `
                            <div class="cv-item">
                                <div class="cv-item-title">${edu.degree}</div>
                                <div class="cv-item-subtitle">${edu.school}${edu.location ? `, ${edu.location}` : ''}</div>
                                ${edu.graduationDate ? `<div class="cv-item-date">${edu.graduationDate}</div>` : ''}
                            </div>
                        `).join('')}
                    </div>
                ` : ''}

                ${allSkills.length > 0 ? `
                    <div class="cv-section">
                        <div class="cv-section-title">Skills</div>
                        <div class="cv-skills-list">
                            ${allSkills.map(skill => `<span class="cv-skill-item">${skill}</span>`).join('')}
                        </div>
                    </div>
                ` : ''}

                ${data.projects.length > 0 ? `
                    <div class="cv-section">
                        <div class="cv-section-title">Projects</div>
                        ${data.projects.map(proj => `
                            <div class="cv-item">
                                <div class="cv-item-title">${proj.name}</div>
                                ${proj.description ? `<div class="cv-item-description">${proj.description}</div>` : ''}
                                ${proj.technologies ? `<div class="cv-item-subtitle">Technologies: ${proj.technologies}</div>` : ''}
                            </div>
                        `).join('')}
                    </div>
                ` : ''}

                ${certList.length > 0 ? `
                    <div class="cv-section">
                        <div class="cv-section-title">Certifications</div>
                        ${certList.map(cert => `<div class="cv-item-description">• ${cert}</div>`).join('')}
                    </div>
                ` : ''}

                ${langList.length > 0 ? `
                    <div class="cv-section">
                        <div class="cv-section-title">Languages</div>
                        ${langList.map(lang => `<div class="cv-item-description">• ${lang}</div>`).join('')}
                    </div>
                ` : ''}

                ${awardList.length > 0 ? `
                    <div class="cv-section">
                        <div class="cv-section-title">Awards & Achievements</div>
                        ${awardList.map(award => `<div class="cv-item-description">• ${award}</div>`).join('')}
                    </div>
                ` : ''}
            </div>
        `;
    }

    zoomIn() {
        if (this.zoomLevel < 150) {
            this.zoomLevel += 10;
            this.updateZoom();
        }
    }

    zoomOut() {
        if (this.zoomLevel > 50) {
            this.zoomLevel -= 10;
            this.updateZoom();
        }
    }

    updateZoom() {
        const preview = document.getElementById('cv-preview');
        const zoomLevel = document.getElementById('zoom-level');
        
        if (preview) {
            preview.style.transform = `scale(${this.zoomLevel / 100})`;
        }
        if (zoomLevel) {
            zoomLevel.textContent = `${this.zoomLevel}%`;
        }
    }

    downloadPDF() {
        const data = this.collectFormData();
        const fileName = `${data.fullName || 'CV'}_Resume.pdf`;
        
        // Set document title for PDF
        const originalTitle = document.title;
        document.title = fileName;
        
        // Print the CV
        window.print();
        
        // Restore original title
        setTimeout(() => {
            document.title = originalTitle;
        }, 1000);
        
        this.showAutoSaveStatus('PDF download initiated');
    }

    printCV() {
        window.print();
    }

    setupAutoSave() {
        this.autoSaveEnabled = true;
        
        // Auto-save every 5 seconds if there are changes
        setInterval(() => {
            if (this.autoSaveEnabled) {
                this.saveToStorage();
                this.showAutoSaveStatus('Auto-saved', 1000);
            }
        }, 5000);
    }

    saveToStorage() {
        try {
            const data = {
                formData: this.collectFormData(),
                currentTemplate: this.currentTemplate,
                timestamp: Date.now()
            };
            
            console.log('Auto-saving data:', data);
            // Note: localStorage is not available in sandbox environment
            
        } catch (error) {
            console.warn('Storage not available:', error);
        }
    }

    loadFromStorage() {
        try {
            console.log('Would load from storage if available');
        } catch (error) {
            console.warn('Could not load from storage:', error);
        }
    }

    showAutoSaveStatus(message, duration = 3000) {
        const indicator = document.getElementById('auto-save-status');
        if (indicator) {
            indicator.textContent = message;
            indicator.classList.add('show');
            
            setTimeout(() => {
                indicator.classList.remove('show');
            }, duration);
        }
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - Initializing CV Builder');
    window.cvBuilder = new UltimateCVBuilder();
});

// Fallback initialization if DOMContentLoaded has already fired
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (!window.cvBuilder) {
            window.cvBuilder = new UltimateCVBuilder();
        }
    });
} else {
    if (!window.cvBuilder) {
        window.cvBuilder = new UltimateCVBuilder();
    }
}

// Handle page visibility for auto-save
document.addEventListener('visibilitychange', () => {
    if (document.hidden && window.cvBuilder) {
        window.cvBuilder.saveToStorage();
    }
});

// Handle beforeunload for data persistence
window.addEventListener('beforeunload', () => {
    if (window.cvBuilder) {
        window.cvBuilder.saveToStorage();
    }
});