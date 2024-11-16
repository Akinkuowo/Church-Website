// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Modal functions
    window.openPopup = () => {
        document.getElementById('popupModal')?.classList.remove('hidden');
    }

    window.closePopup = () => {
        document.getElementById('popupModal')?.classList.add('hidden');
    }

    window.openPopupTag = () => {
        document.getElementById('popupModalTags')?.classList.remove('hidden');
    }

    window.closePopupTag = () => {
        document.getElementById('popupModalTags')?.classList.add('hidden');
    }

    window.openPopupTagSetting = () => {
        document.getElementById('popupModalTagSetting')?.classList.remove('hidden');
    }

    window.closePopupTagSetting = () => {
        document.getElementById('popupModalTagSetting')?.classList.add('hidden');
    }

    window.openPopupInvite = () => {
        document.getElementById('popupModalInvite')?.classList.remove('hidden');
    }

    window.closePopupInvite = () => {
        document.getElementById('popupModalInvite')?.classList.add('hidden');
    }

    window.openPopupModalAddItem = () => {
        document.getElementById('popupModalAddItem')?.classList.remove('hidden');
    }

    window.closePopupModalAddItem = () => {
        document.getElementById('popupModalAddItem')?.classList.add('hidden');
    }

    // Payment toggle functions
    window.openMonthly = () => {
        document.getElementById('annual')?.classList.add('hidden');
        document.getElementById('monthly')?.classList.remove('hidden');
        document.getElementById('annualButton')?.classList.remove('active-payment');
        document.getElementById('annualButton')?.classList.add('payment');
        document.getElementById('monthlyButton')?.classList.add('active-payment');
        document.getElementById('monthlyButton')?.classList.remove('payment');
    }

    window.openAnnual = () => {
        document.getElementById('annual')?.classList.remove('hidden');
        document.getElementById('monthly')?.classList.add('hidden');
        document.getElementById('annualButton')?.classList.add('active-payment');
        document.getElementById('annualButton')?.classList.remove('payment');
        document.getElementById('monthlyButton')?.classList.remove('active-payment');
        document.getElementById('monthlyButton')?.classList.add('payment');
    }

    // Toggle switch functionality
    const initializeToggleSwitch = (switchId, sliderId, circleId, bgClass) => {
        const toggleSwitch = document.getElementById(switchId);
        const slider = document.getElementById(sliderId);
        const toggleCircle = document.getElementById(circleId);
        const toggleBg = document.querySelector(`.${bgClass}`);

        if (toggleSwitch && slider && toggleCircle && toggleBg) {
            toggleSwitch.addEventListener('click', () => {
                slider.checked = !slider.checked;
                if (slider.checked) {
                    toggleBg.classList.add('enabled');
                    toggleCircle.style.transform = 'translateX(100%)';
                } else {
                    toggleBg.classList.remove('enabled');
                    toggleCircle.style.transform = 'translateX(0)';
                }
            });
        }
    };

    // Initialize all toggle switches
    initializeToggleSwitch('toggleSwitch', 'slider', 'toggleCircle', 'toggle-bg');
    initializeToggleSwitch('toggleSwitchE', 'sliderE', 'toggleCircleE', 'toggle-bgE');
    initializeToggleSwitch('toggleSwitchF', 'sliderF', 'toggleCircleF', 'toggle-bgF');
    initializeToggleSwitch('toggleSwitchA', 'sliderA', 'toggleCircleA', 'toggle-bgA');

    // Dropdown functionality
    const dropdownBtn = document.getElementById('dropdownBtn');
    const dropdownMenu = document.getElementById('dropdownMenu');

    if (dropdownBtn && dropdownMenu) {
        dropdownBtn.addEventListener('click', () => {
            dropdownMenu.classList.toggle('hidden');
        });

        window.addEventListener('click', (e) => {
            if (!dropdownBtn.contains(e.target)) {
                dropdownMenu.classList.add('hidden');
            }
        });
    }
});