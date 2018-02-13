const pizza = () => {
  const data = [1, 1, 1];
  const items = document.querySelectorAll('.item');

  items.forEach((item, i) => {
    const value = item.querySelector('.value');
    const decrease = item.querySelector('.decrease');
    const increase = item.querySelector('.increase');
    const delete_count = item.querySelector('.delete');
    const restore_count = item.querySelector('.restore');
    const items_to_hide = item.querySelectorAll('.image, .text, .descripion, .counter');
    let prevData = null;

    value.innerHTML = data[i];
    decrease.classList.add('no_click', 'opacity_50');
    // ============== УМЕНЬШЕНИЕ ==============
    decrease.addEventListener('click', () => {
      data[i] -= 1;
      decrease.classList.remove('no_click');
      if (data[i] <= 1) {
        data[i] = 1;
        decrease.classList.add('no_click', 'opacity_50');
      } else decrease.classList.remove('no_click');
      value.innerHTML = data[i];
    });
    // ============== УВЕЛИЧЕНИЕ ==============
    increase.addEventListener('click', () => {
      data[i] += 1;
      increase.classList.remove('no_click');
      if (data[i] >= 99) {
        data[i] = 99;
        increase.classList.add('no_click');
      } else {
        increase.classList.remove('no_click');
        decrease.classList.remove('no_click', 'opacity_50');
      }
      value.innerHTML = data[i];
    });
    // ============== УДАЛЕНИЕ ==============
    delete_count.addEventListener('click', () => {
      prevData = data[i];
      data[i] = 1;
      value.innerHTML = data[i];
      if ('hidden'.indexOf(delete_count.className) === -1) {
        delete_count.classList.add('hidden');
        restore_count.classList.remove('hidden');
        items_to_hide.forEach((h) => {
          h.classList.add('opacity_50', 'no_click');
        });
      }
    });
    // ============== ВОССТАНОВЛЕНИЕ ==============
    restore_count.addEventListener('click', () => {
      data[i] = prevData;
      value.innerHTML = data[i];
      if ('hidden'.indexOf(restore_count.className) === -1) {
        restore_count.classList.add('hidden');
        delete_count.classList.remove('hidden');
        items_to_hide.forEach((h) => {
          h.classList.remove('opacity_50', 'no_click');
        });
      }
    });
  });
};

export default pizza;
