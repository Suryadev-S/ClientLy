window.addEventListener('load', () => {
    const galleryItems = document.querySelectorAll('.sx-gallery_item');

    galleryItems.forEach((item, i) => {
        const childItem = item.firstElementChild;

        const difference =
            item.getBoundingClientRect().bottom -
            childItem.getBoundingClientRect().bottom;
        if (difference > 0) {
            const nextItemIndex = i + 4;
            const nextItem = galleryItems[nextItemIndex];

            if (nextItem) {
                const nextItemChild = nextItem.firstElementChild;
                if (nextItemChild) {
                    nextItemChild.style.marginTop = `-${difference}px`;
                }
            }
        }
    });
});
