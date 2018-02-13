const progress = (data) => {
  const bars = document.querySelectorAll('.bar');

  data.forEach((e, i) => {
    const line = bars[i].querySelector('.line');
    const percent = bars[i].querySelector('.percent');
    const fill = bars[i].querySelector('.fill');
    // ======= УСТАНОВКА АТРИБУТА =======
    bars[i].setAttribute('data-progress', e + '%');
    const data_progress = bars[i].getAttribute('data-progress');
    // ======== ПЕОЕВОД % в px ========
    const fill_width_in_px = line.offsetWidth * +(data_progress.slice(0, -1) / 100);

    fill.style.width = data_progress;
    percent.innerHTML = data_progress;
    percent.style.marginLeft = fill_width_in_px + 'px';
  });
};

export default progress;
