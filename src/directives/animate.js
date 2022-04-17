const animatedScrollObserver = new IntersectionObserver(
    (entries, animatedScrollObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('enter')
                }, 100)

                animatedScrollObserver.unobserve(entry.target)
            }
        })
    }
)

export default {
    mounted(el, animateClass) {
        el.classList.add('animate', animateClass.value || '')
        animatedScrollObserver.observe(el)
    }
}
