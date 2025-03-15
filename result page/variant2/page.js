window.addEventListener("load", () => {
    const galleryGroup = document.querySelector(".sx-gallery--group");
    if (!galleryGroup) return;

    // Compute the number of columns dynamically
    const computedStyle = window.getComputedStyle(galleryGroup);
    const columns = parseInt(computedStyle.getPropertyValue("grid-template-columns").split(" ").length, 10);

    const galleryItems = document.querySelectorAll(".sx-gallery_item");

    galleryItems.forEach((item, i) => {
        const childItem = item.firstElementChild;
        if (!childItem) return;

        const difference =
            item.getBoundingClientRect().bottom - childItem.getBoundingClientRect().bottom;

        if (difference > 0) {
            const nextItemIndex = i + columns; // Use computed column count
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
