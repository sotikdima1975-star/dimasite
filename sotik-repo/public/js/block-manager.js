const BlockManager = {
    storagePrefix: 'site-block:',

    normalizePage(page) {
        const normalized = page.replace(/\/index\.html$/i, '/index.html');
        return normalized.replace(/\/$/, '/index.html');
    },

    getPagePath() {
        const path = window.location.pathname;
        return this.normalizePage(path);
    },

    getStorageKey(page, blockId) {
        return `${this.storagePrefix}${page}::${blockId}`;
    },

    getBlockState(page, blockId) {
        return localStorage.getItem(this.getStorageKey(page, blockId));
    },

    setBlockState(page, blockId, visible) {
        const key = this.getStorageKey(page, blockId);
        if (visible === null) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, visible ? '1' : '0');
        }
    },

    applyPageBlocks() {
        const page = this.getPagePath();
        document.querySelectorAll('[data-block-id]').forEach(el => {
            const blockId = el.dataset.blockId;
            const state = this.getBlockState(page, blockId);
            if (state === '0') {
                el.style.display = 'none';
                el.classList.add('block-manager-hidden');
            } else {
                el.style.display = '';
                el.classList.remove('block-manager-hidden');
            }
        });
    },

    resetPageBlocks(page) {
        const prefix = this.getStorageKey(page, '');
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith(prefix)) {
                localStorage.removeItem(key);
            }
        });
    }
};

window.BlockManager = BlockManager;

document.addEventListener('DOMContentLoaded', () => {
    BlockManager.applyPageBlocks();
});
