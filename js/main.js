/**
 * main.js — общая логика интерактива
 * Пока только заглушка под табы, которые появятся в блоках 2 и 5.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Универсальный обработчик табов: data-tabs / data-tab / data-panel
  initTabs();
  initBurger();
});

function initTabs() {
  document.querySelectorAll('[data-tabs]').forEach(group => {
    const buttons = group.querySelectorAll('[data-tab]');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;
        buttons.forEach(b => b.classList.toggle('is-active', b === btn));
        group.querySelectorAll('[data-panel]').forEach(panel => {
          panel.classList.toggle('is-active', panel.dataset.panel === target);
        });
      });
    });
  });
}

function initBurger() {
  const burger = document.querySelector('.header__burger');
  if (!burger) return;
  burger.addEventListener('click', () => {
    const expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!expanded));
    // TODO: показывать мобильное меню
  });
}
