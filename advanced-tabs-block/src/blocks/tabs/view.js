window.addEventListener('DOMContentLoaded', () => {
    const allTabTitlteWrappers = document.querySelectorAll('.wp-block-atbs-tabs > .tabs-container > .tabs-nav > .tabs-titles');

    if (allTabTitlteWrappers.length === 0) return false;

    for (const tabTitleWrapper of allTabTitlteWrappers) {
        const tabTitleList = tabTitleWrapper.children;

        for (const tabTitleItem of tabTitleList) {
            // Add accessibility roles and attributes
            tabTitleItem.setAttribute('role', 'tab');
            tabTitleItem.setAttribute('tabindex', tabTitleItem.classList.contains('active') ? '0' : '-1');
            const tabId = tabTitleItem.dataset.titleTabId;
            const tabParentEl = tabTitleItem.closest('.wp-block-atbs-tabs');
            const tabPanel = tabParentEl.querySelector(`.single-tab[data-tab-id="${tabId}"]`);
            if (tabPanel) {
                tabPanel.setAttribute('role', 'tabpanel');
                tabPanel.setAttribute('aria-hidden', tabPanel.classList.contains('active') ? 'false' : 'true');
            }

            // Handle click
            tabTitleItem.addEventListener('click', e => {
                e.preventDefault();
                activateTab(tabTitleItem, tabTitleWrapper);
            });

            // Handle keyboard navigation
            tabTitleItem.addEventListener('keydown', e => {
                const currentIndex = Array.prototype.indexOf.call(tabTitleList, tabTitleItem);
                let newIndex = null;

                if (e.key === 'ArrowRight') {
                    newIndex = (currentIndex + 1) % tabTitleList.length;
                } else if (e.key === 'ArrowLeft') {
                    newIndex = (currentIndex - 1 + tabTitleList.length) % tabTitleList.length;
                } else if (e.key === 'Home') {
                    newIndex = 0;
                } else if (e.key === 'End') {
                    newIndex = tabTitleList.length - 1;
                }

                if (newIndex !== null) {
                    e.preventDefault();
                    const newTab = tabTitleList[newIndex];
                    newTab.focus();
                    activateTab(newTab, tabTitleWrapper);
                }
            });

            // Keep the first tab open by default
            if (tabTitleItem.dataset.titleTabId === '1') {
                activateTab(tabTitleItem, tabTitleWrapper);
            }
        }
    }

    function activateTab(selectedTab, tabTitleWrapper) {
        const allTabTitleItems = tabTitleWrapper.querySelectorAll('.tab-title');
        for (const tabItem of allTabTitleItems) {
            tabItem.classList.remove('active');
            tabItem.setAttribute('tabindex', '-1');
            tabItem.setAttribute('aria-selected', 'false');
        }

        selectedTab.classList.add('active');
        selectedTab.setAttribute('tabindex', '0');
        selectedTab.setAttribute('aria-selected', 'true');

        const tabTitleId = selectedTab.dataset.titleTabId;
        const tabParentEl = selectedTab.closest('.wp-block-atbs-tabs');
        const allTabChildWraps = tabParentEl.querySelectorAll(`.single-tab`);

        if (allTabChildWraps.length === 0) return false;

        for (const tabWrapDiv of allTabChildWraps) {
            const tabId = tabWrapDiv.dataset.tabId;
            const wrapper = tabWrapDiv.closest('.wp-block-atbs-tab'); // parent wrapper

            // Reset all
            tabWrapDiv.classList.remove('active');
            tabWrapDiv.style.display = 'none';
            tabWrapDiv.setAttribute('aria-hidden', 'true');
            if (wrapper) wrapper.classList.remove('active');

            // Activate only matching one
            if (tabId === tabTitleId) {
                tabWrapDiv.classList.add('active');
                tabWrapDiv.style.display = 'block';
                tabWrapDiv.style.animation = 'fadeIn 0.3s';
                tabWrapDiv.setAttribute('aria-hidden', 'false');

                if (wrapper) wrapper.classList.add('active');
            }
        }
    }
});
