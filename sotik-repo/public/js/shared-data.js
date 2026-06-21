const SiteData = {
    brandName: 'СайтСотика',
    authorName: 'Дмитрий Передний',
    firstName: 'Дмитрий',
    lastName: 'Передний',
    nickname: 'Sotik',
    timing: 'Пн, Ср, Пт 20:00',
    currentYear: new Date().getFullYear(),
};

function applySharedSiteData() {
    const mappings = [
        ['data-shared-brand', SiteData.brandName],
        ['data-shared-author', SiteData.authorName],
        ['data-shared-first-name', SiteData.firstName],
        ['data-shared-last-name', SiteData.lastName],
        ['data-shared-nickname', SiteData.nickname],
        ['data-shared-timing', SiteData.timing],
        ['data-shared-year', SiteData.currentYear],
    ];

    mappings.forEach(([attr, value]) => {
        document.querySelectorAll(`[${attr}]`).forEach(el => {
            el.textContent = value;
        });
    });
}

document.addEventListener('DOMContentLoaded', applySharedSiteData);
