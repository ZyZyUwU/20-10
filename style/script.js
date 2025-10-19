window.addEventListener('load', () => {
const messages = [
    "Chúc mừng Ngày Phụ nữ Việt Nam 20/10! 🌸 Chúc tất cả phụ nữ luôn xinh đẹp, hạnh phúc và thành công 💖",
    "Mong mọi người phụ nữ luôn được yêu thương, tôn trọng và mỉm cười mỗi ngày 🌷",
    "Chúc một nửa thế giới luôn rạng rỡ, tự tin và tràn đầy năng lượng tích cực 🌺",
    "20/10 là ngày đặc biệt để tôn vinh vẻ đẹp, sự hy sinh và tình yêu thương vô bờ của phụ nữ 💐",
    "Chúc cho mọi phụ nữ đều có một ngày thật ý nghĩa, ấm áp và tràn ngập niềm vui 🌼",
    "Không chỉ hôm nay mà mỗi ngày đều là ngày của phái đẹp 💫",
    "Chúc các bà, các mẹ, các chị, các em luôn hạnh phúc và bình an 🌻",
    "Mong rằng nụ cười của phụ nữ Việt Nam sẽ luôn tỏa sáng như ánh mặt trời rực rỡ ☀️",
    "Chúc phái đẹp luôn trẻ trung, yêu đời và gặt hái nhiều thành công trong cuộc sống 🌹",
    "Mong rằng hạnh phúc và niềm vui sẽ luôn đồng hành cùng mọi người phụ nữ 💕",
    "Chúc chị em luôn giữ được trái tim ấm áp và tâm hồn tươi trẻ 🌸",
    "Cảm ơn phụ nữ Việt Nam vì đã mang đến thế giới này thật nhiều yêu thương và hy vọng 💖",
    "Chúc cho những người phụ nữ tuyệt vời luôn được sống trong yêu thương và an yên 🌷",
    "Mỗi người phụ nữ là một bông hoa — hãy luôn nở rộ và tỏa hương giữa cuộc đời 🌺",
    "20/10 – ngày của yêu thương, chúc mọi phụ nữ luôn ngập tràn trong hạnh phúc 💐",
    "Chúc phái đẹp luôn tự tin theo đuổi ước mơ và sống trọn vẹn với chính mình 🌼",
    "Chúc các chị em luôn được yêu thương đúng nghĩa và hạnh phúc đúng lòng 💞",
    "Mong rằng cuộc sống của mỗi người phụ nữ đều đầy ắp tiếng cười và bình yên 🌻",
    "Phụ nữ là món quà quý giá nhất mà cuộc sống ban tặng – chúc mọi người luôn rạng ngời và được trân trọng 💫",
    "Chúc mọi phụ nữ Việt Nam có một ngày 20/10 thật đáng nhớ, ngập tràn hoa, quà và yêu thương 💐"
];


    const msgEl = document.getElementById('message');
    let i = 0;
    msgEl.style.opacity = 1;
    setInterval(() => {
        msgEl.style.opacity = 0;
        setTimeout(() => {
            i = (i + 1) % messages.length;
            msgEl.textContent = messages[i];
            msgEl.style.opacity = 1;
        }, 800);
    }, 4800);

    const falling = [];
    for (let k = 1; k <= 12; k++) falling.push(`style/img/Anh (${k}).png`);

    const activePositions = [];
    function createFallingImage() {
        let left;
        const safe = 8;
        const minDistance = 10;
        let tries = 0;
        do {
            left = safe + Math.random() * (100 - 2 * safe);
            tries++;
        } while (activePositions.some(x => Math.abs(x - left) < minDistance) && tries < 20);

        const el = document.createElement('img');
        el.className = 'falling-img';
        el.src = falling[Math.floor(Math.random() * falling.length)];
        el.style.left = left + 'vw';

        let min = 80, max = 120;
        if (window.innerWidth <= 480) { min = 40; max = 70; }
        else if (window.innerWidth <= 768) { min = 60; max = 90; }
        el.style.width = (min + Math.random() * (max - min)) + 'px';
        el.style.animationDuration = (8 + Math.random() * 4) + 's';
        el.style.transform = `rotate(${Math.random() * 360}deg)`;

        document.body.appendChild(el);
        activePositions.push(left);

        setTimeout(() => {
            el.remove();
            const idx = activePositions.indexOf(left);
            if (idx !== -1) activePositions.splice(idx, 1);
        }, 14000);
    }

    setInterval(createFallingImage, 1100);

    const bgm = document.getElementById('bgm');
    const toggle = document.getElementById('soundToggle');
    let playing = false;

    toggle.addEventListener('click', async () => {
        try {
            if (!playing) {
                bgm.currentTime = 68;
                await bgm.play();
                toggle.textContent = "🔈";
                playing = true;
            } else {
                bgm.pause();
                toggle.textContent = "🔇";
                playing = false;
            }
        } catch (err) {
            console.log("Không thể phát", err);
        }
    });
});
