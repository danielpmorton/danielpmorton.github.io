document.addEventListener('DOMContentLoaded', function () {
    // Light/dark toggle. With no saved choice, the page follows the OS setting.
    var root = document.documentElement;
    var toggle = document.getElementById('theme-toggle');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    function isDark() {
        var theme = root.getAttribute('data-theme');
        return theme ? theme === 'dark' : prefersDark.matches;
    }

    toggle.addEventListener('click', function () {
        var next = isDark() ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        try { localStorage.setItem('theme', next); } catch (e) {}
    });

    // Play the `image_mouseover` video while hovering a thumbnail.
    document.querySelectorAll('.mousecell').forEach(function (cell) {
        var video = cell.querySelector('video');
        cell.addEventListener('mouseenter', function () {
            cell.classList.add('playing');
            video.play().catch(function () {});
        });
        cell.addEventListener('mouseleave', function () {
            cell.classList.remove('playing');
            video.pause();
        });
    });
});
