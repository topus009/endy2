import pizza from './pizza';
import progress from './progress';

document.addEventListener('DOMContentLoaded', function () {
  const progress_data = [25, 75];
  pizza();
  progress(progress_data);
});
